import React from "react";
// Import the original mapper
import MDXComponents from "@theme-original/MDXComponents";
import AuthorBox from "../modules/AuthorBox/AuthorBox";
import VersioningTracker from "../modules/VersioningTracker/VersioningTracker";
import PasswordChecker from "../modules/PasswordChecker/PasswordChecker";
// import Card from "../pages/Components/Card/Card";
// import LandingHeader from "../pages/Components/LandingHeader/LandingHeader";
// import WhatsNew from "../pages/Components/WhatsNew/WhatsNew";
// import ReleaseNotes from "../pages/Components/ReleaseNotes/ReleaseNotes";

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Map the "<Highlight>" tag to our Highlight component
  // `Highlight` will receive all props that were passed to `<Highlight>` in MDX
  AuthorBox,
  VersioningTracker,
  PasswordChecker,
  // Card,
  // LandingHeader,
  // WhatsNew,
  // ReleaseNotes,
};
