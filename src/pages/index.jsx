import React from "react";
import Layout from "@theme/Layout";
import clsx from "clsx";
import styles from "./index.module.css";

import LandingHeader from "../Components/LandingHeader/LandingHeader";
import Widgets from "../Components/Widgets/Widgets";
import Solutions from "../Components/Solutions/Solutions";
import ExternalLinks from "../Components/ExternalLinks/ExternalLinks";

export default function Home() {
  return (
    <Layout title='Home'>
      <div className={styles["index-page-bg"]}>
        <LandingHeader />
        <main className={clsx(styles["main-landing-page"])}>
          <Solutions />
          <Widgets />
          <ExternalLinks />
        </main>
      </div>
    </Layout>
  );
}
