import React from "react";
import { useColorMode } from "@docusaurus/theme-common";

import styles from "./Footer.module.css";
import clsx from "clsx";

const Footer = () => {
  return (
    <footer className={styles["custom-footer-bg"]}>
      <div>
        <div className={clsx(styles["custom-footer"])}>
          <img src='/img/Blackboard-Full-Color-White.svg' alt='Blackboard LLC logo' />
          <div className={styles["footer-section"]}>
            <div>
              <p>
                <strong>Contact Us</strong>
              </p>
              <ul>
                <li>
                  <a href='mailto:developers@blackboard.com'>
                    developers@blackboard.com
                  </a>
                </li>
                <li>
                  <a href='https://support.blackboard.com' target='_blank'>
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
                    Blackboard Community
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
          &copy;{new Date(Date.now()).getFullYear()} Blackboard LLC. and its
          affiliates. All rights reserved.&nbsp;
          <a
            href='4'
            target='_blank'>
            Trademarks and Patents
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
