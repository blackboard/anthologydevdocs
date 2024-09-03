import React from "react";
import styles from "./AuthorBox.module.css";
import authors from "../../../widgets/authorInfo.json";
import AuthorCard from "./components/AuthorCard";

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

const AuthorBox = (props) => {
  /// Loads the author data based on the metadata of the document
  let userData;

  if (props.frontMatter.author === undefined || props.frontMatter.author === "")
    userData = getAuthorInfo("default");
  else userData = getAuthorInfo(props.frontMatter.author);

  /// Builds and returns the widget
  return (
    <div className={styles["author-container"]}>
      <h3 className={styles["author-header"]}>Contributors on this article:</h3>
      <div className={styles["author-cards"]}>
        {userData.map((user) => {
          return (
            <AuthorCard
              avatar={user.img}
              name={user.name}
              position={user.role}
              area={user.area}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AuthorBox;
