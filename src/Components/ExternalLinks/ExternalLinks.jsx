import React from "react";
import { useColorMode } from "@docusaurus/theme-common";

import styles from "./ExternalLinks.module.css";
import Card from "./Card/Card";
import useIsBrowser from "@docusaurus/useIsBrowser";

const ExternalLinks = () => {
  const { colorMode } = useColorMode();

  const hasHydrated = useIsBrowser();

  return (
    <section className={styles["links-section"]}>
      <Card
        imgSrc={`/img/computer-${hasHydrated ? colorMode : "dark"}.svg`}
        imgAlt='An icon of a computer'
        title='Anthology Developer Portal'
        message='The Anthology Developer Portal is for anyone interested in developing integrations with the Anthology product portfolio.'
        aMessage='More Information'
        href='https://developer.anthology.com/'
        target='_blank'
      />

      <Card
        imgSrc={`/img/chat-bubbles-${hasHydrated ? colorMode : "dark"}.svg`}
        imgAlt='An icon with two chat bubbles'
        title='Connect with the community'
        message='Connect with other developer, learn from their experiences, and share your knowledge.'
        aMessage='Get connected'
        href='/docs/community/community-intro'
      />
    </section>
  );
};

export default ExternalLinks;
