import React from "react";
import { useColorMode } from "@docusaurus/theme-common";

import styles from "./Solutions.module.css";
import Card from "./Card/Card";
import useIsBrowser from "@docusaurus/useIsBrowser";

const Solutions = () => {
  const { colorMode } = useColorMode();
  const hasHydrated = useIsBrowser();

  return (
    <section className={styles["solutions-grid"]}>
      <Card
        className={styles["solutions-card-override"]}
        cardTitle='Blackboard LMS'
        message='Expand on Blackboard LMS capabilities by using LTI and the API to create users, pull assessments, grade data, manage calendars, and more.'
        href='/docs/blackboard/welcome'
      />
      <Card
        cardTitle='Blackboard Ally'
        message='Improve the accessibility of institutional content by using the API to upload files, check the status and retrieve reports.'
        href='/docs/ally/getting-started'
      />
      <Card
        cardTitle='Developer Portal'
        message="Easily create and deploy integrations using Blackboard's gateway for integrations"
        href='/docs/developer-portal/start-here'
      />
    </section>
  );
};

export default Solutions;
