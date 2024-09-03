import React from "react";
import { useColorMode } from "@docusaurus/theme-common";
import styles from "./AuthorCard.module.css";
import clsx from "clsx";
import useIsBrowser from "@docusaurus/useIsBrowser";

const AuthorCard = ({ avatar, name, position, area }) => {
  const { colorMode } = useColorMode();
  const hasHydrated = useIsBrowser();

  return (
    <div className={styles["author-wrapper"]}>
      <div
        className={clsx(
          styles["author-avatar"],
          styles[`author-avatar-dropshadow-${hasHydrated ? colorMode : "dark"}`]
        )}>
        <img
          src={avatar ? avatar : "/img/author-default-picture.png"}
          alt='Profile picture of the contributor'
        />
      </div>
      <div
        className={clsx(
          styles["author-info"],
          styles["author-info-dropshadow"]
        )}>
        <h3>{name}</h3>
        <span>{position}</span>
        <span>{area}</span>
      </div>
    </div>
  );
};

export default AuthorCard;
