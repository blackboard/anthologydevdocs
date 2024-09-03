import React from "react";
import { useColorMode } from "@docusaurus/theme-common";

import styles from "./Widgets.module.css";
import WhatsNew from "./WhatsNew/WhatsNew";
import ReleaseNotes from "./ReleaseNotes/ReleaseNotes";
import useIsBrowser from "@docusaurus/useIsBrowser";

const ContentGrid = () => {
  const { colorMode } = useColorMode();
  const hasHydrated = useIsBrowser();

  return (
    <section className={styles["content-grid"]}>
      <img
        src={`/img/content-${hasHydrated ? colorMode : "dark"}.svg`}
        alt='An image of program windows orbiting around a common center'
        className={styles["widget-filler"]}
      />
      <div className={styles["content-inner"]}>
        <WhatsNew />
        <ReleaseNotes />
      </div>
    </section>
  );
};

export default ContentGrid;
