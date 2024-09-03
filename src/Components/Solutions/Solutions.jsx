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
        imgSrc={`/img/blackboard-learn-${hasHydrated ? colorMode : "dark"}.svg`}
        message="Expand on our LMS' capabilities by using LTI and the API to create users, pull assessments, grade data, manage calendars, and more."
        href='/docs/blackboard/rest-apis/start-here'
      />
      <Card
        imgSrc={`/img/student-${hasHydrated ? colorMode : "dark"}.svg`}
        message='Use Anthology Student APIs to increase institution efficiency through automation and optimization.'
        href='/docs/student/getting-started/first-steps'
      />
      <Card
        cardTitle='Anthology Ally'
        message='Improve the accessibility of institutional content by using the API to upload files, check the status and retrieve reports.'
        href='/docs/ally/getting-started'
      />
    </section>
  );
};

export default Solutions;
