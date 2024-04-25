import React from "react";
import styles from "./AuthorBox.module.css";
import authors from "./authorInfo.json";
import { useColorMode } from "@docusaurus/theme-common";

const getAuthorInfo = (authorString) => {
  const authorArray = [];
  const authorNames = authorString.split(",");
  authorNames.forEach((authorName) => {
    if (authors[`${authorName.trim().toLowerCase()}`] === undefined) {
      authorArray.push(authors["default"]);
    } else {
      authorArray.push(authors[`${authorName.trim().toLowerCase()}`]);
    }
  });

  return authorArray;
};

const AuthorCard = (user, index) => {
  const { colorMode } = useColorMode();

  const userProfilePic =
    user.img === undefined || user.img === ""
      ? "/img/author-card-default-picture.png"
      : user.img;

  const profileStyles =
    user.img === undefined || user.img === ""
      ? `${styles["author-profile-pic"]} ${styles["author-profile-default"]}`
      : `${styles["author-profile-pic"]}`;
  return (
    <div className={styles["author-outer"]} key={index}>
      <img
        className={styles["author-background-pic"]}
        src={`/img/author-card-background-${colorMode}.png`}
        alt='Background image of the author card'
      />
      <img
        className={profileStyles}
        src={userProfilePic}
        alt='Profile picture of the author'
      />
      <div className={styles["author-data"]}>
        <p className={styles["author-name"]}>{user.name}</p>
        <p className={styles["author-title"]}>{user.role}</p>
        <p className={styles["author-area"]}>{user.area}</p>
      </div>
      <div className={styles["social-links"]}>
        <a href={`https://github.com/${user.github}`}>
          <div className={styles["github-logo"]}>
            <img src='/img/gh.png' alt='Logo of GitHub' />
          </div>
        </a>
      </div>
    </div>
  );
};

const AuthorBox = (props) => {
  let userData;

  if (props.frontMatter.author === undefined || props.frontMatter.author === "")
    userData = getAuthorInfo("default");
  else userData = getAuthorInfo(props.frontMatter.author);

  userData.map((authorInfo) => AuthorCard(authorInfo));
  return (
    <div className={styles["author-container"]}>
      <h3 className={styles["author-header"]}>Contributors on this article:</h3>
      <div className={styles["author-cards"]}>
        {userData.map((authorInfo, index) => AuthorCard(authorInfo, index))}
      </div>
    </div>
  );
};

export default AuthorBox;
