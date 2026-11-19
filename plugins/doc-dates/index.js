/**
 * doc-dates — supply each page's `published` and `edited` dates from git.
 *
 * Reads the commit history once at build time and hands the result to the
 * site as global data, which src/modules/VersioningTracker reads. Nothing is
 * written to disk, so front matter stays as the authors left it and a local
 * dev server shows the same dates as production.
 *
 * For every page under docs/ it records:
 *
 *   published — the date it first appeared, followed through renames
 *   edited    — the date its BODY last changed
 *
 * A commit that only rewrites front matter is not an edit, and neither is a
 * move: each historical version is compared with its front matter stripped.
 * That matters in this repository, where a single 2024 commit rewrote the
 * front matter of 144 pages and two later sweeps replaced strings site-wide.
 *
 * Needs the full history. On CI a shallow clone is a hard error, because the
 * alternative is a site that quietly claims every page is new; set
 * fetch-depth: 0 on actions/checkout. Elsewhere it warns and yields nothing,
 * so a build without git still works.
 */
const { execFileSync } = require("node:child_process");
const { readFileSync, existsSync } = require("node:fs");
const { createHash } = require("node:crypto");
const path = require("node:path");

const DOCS = "docs";
const FRONT_MATTER = /^---\r?\n([\s\S]*?)\r?\n---(\r?\n|$)/;
const SEP = "\u0001";

function collectDates(root) {
  const git = (args, opts = {}) =>
    execFileSync("git", args, { cwd: root, maxBuffer: 512 * 1024 * 1024, ...opts });
  const gitText = (args, opts) => git(args, { encoding: "utf8", ...opts });

  if (gitText(["rev-parse", "--is-shallow-repository"]).trim() === "true") {
    throw new Error(
      "doc-dates: shallow clone — the commit history these dates come from is " +
      "not present. Set fetch-depth: 0 on actions/checkout."
    );
  }

  // Escape hatch for what the content comparison cannot see: a change and its
  // revert, where every version differs from the one before it but the content
  // ends up where it started. Same file format as .git-blame-ignore-revs.
  const ignore = new Set();
  try {
    for (const line of readFileSync(path.join(root, ".docdates-ignore-revs"), "utf8").split("\n")) {
      const sha = line.split("#")[0].trim();
      if (sha) ignore.add(gitText(["rev-parse", sha]).trim());
    }
  } catch { /* no ignore file is fine */ }

  // One pass over the history, oldest first, re-keying each file as it moves
  // so a rename does not start its history over.
  const log = gitText([
    "log", "--reverse", "--no-merges", "-M", "--date=short",
    `--format=${SEP}%cd %H`, "--name-status", "--diff-filter=AMR", "--", DOCS,
  ]);

  const track = new Map(); // current path -> [{sha, date, path}]
  let date = null, sha = null;

  for (const line of log.split("\n")) {
    if (!line) continue;
    if (line.startsWith(SEP)) { [date, sha] = line.slice(1).trim().split(" "); continue; }
    if (!date || ignore.has(sha)) continue;

    const parts = line.split("\t");
    const renamed = parts[0][0] === "R";
    const file = renamed ? parts[2] : parts[1];
    if (!file || !/\.mdx?$/i.test(file)) continue;

    if (renamed && track.has(parts[1])) {
      track.set(file, track.get(parts[1]));
      track.delete(parts[1]);
    }
    if (!track.has(file)) track.set(file, []);
    track.get(file).push({ sha, date, path: file });
  }

  // Every version of every page in one batch, hashed without its front matter.
  const specs = [];
  for (const versions of track.values())
    for (const v of versions) specs.push(`${v.sha}:${v.path}`);

  const bodies = new Map();
  if (specs.length) {
    const out = git(["cat-file", "--batch"], { input: specs.join("\n") + "\n" });
    let i = 0, n = 0;
    while (i < out.length && n < specs.length) {
      const nl = out.indexOf(0x0a, i);
      if (nl === -1) break;
      const size = Number(out.toString("utf8", i, nl).split(" ")[2]);
      i = nl + 1;
      if (!Number.isFinite(size)) { n++; continue; } // "missing" / "ambiguous"
      const text = out.toString("utf8", i, i + size);
      i += size + 1;
      bodies.set(specs[n++], createHash("sha1").update(text.replace(FRONT_MATTER, "")).digest("hex"));
    }
  }

  const dates = {};
  let discounted = 0;
  for (const [file, versions] of track) {
    let edited = versions[0].date;
    let previous = bodies.get(`${versions[0].sha}:${versions[0].path}`);
    for (let k = 1; k < versions.length; k++) {
      const hash = bodies.get(`${versions[k].sha}:${versions[k].path}`);
      if (hash !== undefined && hash === previous) { discounted++; continue; }
      edited = versions[k].date;
      previous = hash;
    }
    // Deleted pages stay in the history but have no page to date, and every
    // entry here is serialized into the client bundle.
    if (!existsSync(path.join(root, file))) continue;
    // Keyed to match the `source` field Docusaurus puts on each doc.
    dates[`@site/${file}`] = { published: versions[0].date, edited };
  }
  return { dates, discounted };
}

module.exports = function docDatesPlugin(context) {
  return {
    name: "doc-dates",

    async loadContent() {
      try {
        const { dates, discounted } = collectDates(context.siteDir);
        console.log(
          `[doc-dates] ${Object.keys(dates).length} pages dated from git ` +
          `(${discounted} commits discounted as front matter or a move only)`
        );
        return dates;
      } catch (error) {
        // Failing the build is right on CI, where a silent fallback would
        // publish a site claiming every page is new. Locally it is not.
        if (process.env.CI) throw error;
        console.warn(`[doc-dates] ${error.message}`);
        console.warn("[doc-dates] continuing without dates; pages will show Not Available");
        return {};
      }
    },

    async contentLoaded({ content, actions }) {
      actions.setGlobalData(content);
    },
  };
};
