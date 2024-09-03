import React from "react";
import clsx from "clsx";
import { useColorMode } from "@docusaurus/theme-common";
import styles from "./LandingHeader.module.css";

import heroImage from "../../../static/img/hero.png";

/// Monolithic Layout
const LandingHeader = () => {
  return (
    <header>
      <div className={styles["hero-banner"]}>
        <h1>Anthology Developer Documentation</h1>
        <p>Discover everything you need to build for Anthology Solutions.</p>
      </div>
    </header>
  );
};

export default LandingHeader;
