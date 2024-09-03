import React from "react";
import { useColorMode } from "@docusaurus/theme-common";
import styles from "./Card.module.css";
import clsx from "clsx";
import useIsBrowser from "@docusaurus/useIsBrowser";

const Card = (props) => {
  const { colorMode } = useColorMode();
  const hasHydrated = useIsBrowser();

  return (
    <div
      className={clsx(
        styles["card"],
        styles[`card-${hasHydrated ? colorMode : "dark"}`],
        props.className
      )}>
      {props.imgSrc ? (
        <img
          src={props.imgSrc}
          alt={props.altText}
          className={styles["card-image"]}
        />
      ) : (
        <h1 className={styles["card-title"]}>{props.cardTitle}</h1>
      )}
      <p>{props.message}</p>
      <a href={props.href}>
        Documentation{" "}
        <img
          src={`/img/right-arrow-${hasHydrated ? colorMode : "dark"}.svg`}
          alt='icon of an arrow pointing to the right'
        />
      </a>
    </div>
  );
};

export default Card;
