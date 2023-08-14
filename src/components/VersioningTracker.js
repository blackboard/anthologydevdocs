import React from 'react';
import styles from './VersioningTracker.module.css';

const createPublishedDate = (published) => {
  const publishedDate = published.split('-');
  return Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  }).format(new Date(publishedDate[0], publishedDate[1] - 1, publishedDate[2]));
};

const createEditedDate = (edited) => {
  const editedDate = edited.split('-');
  return Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  }).format(new Date(editedDate[0], editedDate[1] - 1, editedDate[2]));
};

const VersioningTracker = (props) => {
  return (
    <div className={styles.tracker_container}>
      <p className={styles.date}>
        Published:&nbsp;
        {props.frontMatter.published
          ? createPublishedDate(props.frontMatter.published)
          : 'Not Available'}
      </p>
      <p className={styles.date}>
        Last Update:{' '}
        {props.frontMatter.edited
          ? createEditedDate(props.frontMatter.edited)
          : 'Not Available'}
      </p>
      <p>&nbsp;</p>
    </div>
  );
};

export default VersioningTracker;
