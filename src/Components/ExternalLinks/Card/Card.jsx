import React from "react";
import { useColorMode } from "@docusaurus/theme-common";

import styles from "./Card.module.css";
import useIsBrowser from "@docusaurus/useIsBrowser";

const Card = (props) => {
  const { colorMode } = useColorMode();
  const hasHydrated = useIsBrowser();

  return (
    <div className={styles["card"]}>
      <img src={props.imgSrc} alt={props.imgAlt} />
      <h2>{props.title}</h2>
      <p>{props.message}</p>
      <a href={props.href} target={props.target}>
        {props.aMessage}&nbsp;
        <img
          src={`/img/right-arrow-${hasHydrated ? colorMode : "dark"}.svg`}
          alt='An arrow pointing to the right'
        />
      </a>
    </div>
  );
};

export default Card;
