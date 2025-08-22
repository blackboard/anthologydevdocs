import React from "react";
import styles from "./BBButton.module.css";

const BBButton = (props) => {
  return (
    <div className={styles.bbButtonContainer}>
      <button className={styles.bbButton}>
        <img src='/img/download.svg' alt='Download icon' />
        <a
          href={props.downloadUrl}
          className={styles.bbButtonLink}
          target='_blank'
          rel='noopener noreferrer'>
          Download server file
        </a>
      </button>
    </div>
  );
};

export default BBButton;
