import React from "react";
import { useColorMode } from "@docusaurus/theme-common";

import styles from "./ReleaseNotes.module.css";
import Card from "../Card/Card";
import latest from "../../../../widgets/latestMaintenance.json";
import useIsBrowser from "@docusaurus/useIsBrowser";

const ReleaseNotes = () => {
  const { colorMode } = useColorMode();
  const hasHydrated = useIsBrowser();

  return (
    <Card title='Maintenance and Releases'>
      <div className={styles["releases-inner"]}>
        <div className={styles["releases-entry"]}>
          <span>
            <strong>{latest.service}</strong>
          </span>
          <span>{latest.startDate}</span>
          <span>Expected Downtime: {latest.expectedDowntime}</span>
          <span>{latest.description}</span>
        </div>
        <a className={styles["releases-link"]} href='/docs/maintenance-page'>
          More information
          <img
            src={`/img/right-arrow-${hasHydrated ? colorMode : "dark"}.svg`}
            alt='icon of an arrow pointing to the right'
          />
        </a>
      </div>
    </Card>
  );
};

export default ReleaseNotes;
