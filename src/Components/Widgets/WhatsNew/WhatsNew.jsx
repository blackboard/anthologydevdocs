import React from "react";
import { useColorMode } from "@docusaurus/theme-common";

import styles from "./WhatsNew.module.css";
2;
import Card from "../Card/Card";
import newDocs from "../../../../widgets/newDocs.json";
import useIsBrowser from "@docusaurus/useIsBrowser";

const WhatsNew = () => {
  const { colorMode } = useColorMode();
  const hasHydrated = useIsBrowser();

  const buildNewEntry = (index, name, url) => {
    return (
      <li key={index} className={styles["whatsnew-item"]}>
        <img
          className={styles["whatsnew-item-icon"]}
          src={`/img/link-${hasHydrated ? colorMode : "dark"}.svg`}
          alt='icon of a chain link'
        />
        <a className={styles["whatsnew-item-link"]} href={url}>
          {name}
        </a>
      </li>
    );
  };

  return (
    <Card title="What's new">
      <ul className={styles["whatsnew-list"]}></ul>
      {Object.keys(newDocs).map((docId) => {
        return buildNewEntry(docId, newDocs[docId].name, newDocs[docId].url);
      })}
    </Card>
  );
};

export default WhatsNew;
