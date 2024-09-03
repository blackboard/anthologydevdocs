import React from "react";
import styles from "./Community.module.css";

const Community = () => {
  return (
    <div className={styles["community-outer"]}>
      <div className={styles["community-section"]}>
        <img
          className={styles["community-section-image"]}
          src='/img/community.svg'
          alt='image showing three characters interacting via text message'
        />
      </div>
      <div className={styles["community-section"]}>
        <h1>Join our community!</h1>
        <p>
          Connect with other developers, learn from their experiences, and share
          your knowledge.
        </p>
        <a
          className={styles["community-link"]}
          href='/docs/community/community-intro'>
          Visit our community&nbsp;
          <img
            className={styles["community-link-icon"]}
            src='/img/chevron.svg'
            alt='Chevron pointing to the right'
          />
        </a>
      </div>
    </div>
  );
};

export default Community;
