import React from 'react';
import { useDoc } from '@docusaurus/plugin-content-docs/client';
import { usePluginData } from '@docusaurus/useGlobalData';
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
  // The doc-dates plugin derives both dates from git at build time. Front
  // matter still wins where an author set a date deliberately; an empty
  // string is not a date, which is why this is `||` and not `??`.
  const { metadata } = useDoc();
  const fromGit = usePluginData('doc-dates')?.[metadata.source] ?? {};
  const published = props.frontMatter.published || fromGit.published;
  const edited = props.frontMatter.edited || fromGit.edited;

  return (
    <div className={styles.tracker_container}>
      <p className={styles.date}>
        Published:&nbsp;
        {published ? createPublishedDate(published) : 'Not Available'}
      </p>
      <p className={styles.date}>
        Last Update:{' '}
        {edited ? createEditedDate(edited) : 'Not Available'}
      </p>
      <p>&nbsp;</p>
    </div>
  );
};

export default VersioningTracker;
