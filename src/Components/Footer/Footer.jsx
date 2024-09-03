import React from "react";
import { useColorMode } from "@docusaurus/theme-common";

import styles from "./Footer.module.css";
import clsx from "clsx";

const Footer = () => {
  return (
    <footer className={styles["custom-footer-bg"]}>
      <div>
        <div className={clsx(styles["custom-footer"])}>
          <img src='/img/anthology-logo-dark.svg' alt='Anthologt Inc logo' />
          <div className={styles["footer-section"]}>
            <div>
              <p>
                <strong>Contact Us</strong>
              </p>
              <ul>
                <li>
                  <a href='mailto:developers@anthology.com'>
                    developers@anthology.com
                  </a>
                </li>
                <li>
                  <a href='https://support.anthology.com' target='_blank'>
                    Global Support Portal
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p>
                <strong>Stay connected</strong>
              </p>
              <ul>
                <li>
                  <a href='/docs/community/community-intro'>
                    Anthology Community
                  </a>
                </li>
                <li>
                  <a
                    href='https://join.slack.com/t/blackboardtechies/shared_invite/zt-nheykjth-wLgONrE58MS53H~oySYk1g'
                    target='_blank'>
                    Blackboard Techies on Slack
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className={styles["footer-copyright"]}>
          &copy;{new Date(Date.now()).getFullYear()} Anthology Inc. and its
          affiliates. All rights reserved.&nbsp;
          <a
            href='https://www.anthology.com/trademarks-and-patents'
            target='_blank'>
            Trademarks and Patents
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
