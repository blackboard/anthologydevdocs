import React from 'react';
import authorData from './authorInfo.json';

import styles from './AuthorBox.module.css';

const buildSingleAuthor = (userInfo) => {
  return (
    <div className={styles.author_container}>
      <div className={styles['author-card']}>
        <img
          className={
            userInfo.img.includes('ANTHOLOGY')
              ? styles.author_img_default
              : styles.author_img
          }
          src={userInfo.img ? userInfo.img : '/img/ANTHOLOGY-Logo-RGB.svg'}
          alt='Photo of the author'></img>
        <div className={styles['author-info']}>
          <div className={styles['author-layout']}>
            <div>
              <p className={styles['author-name']}>
                {userInfo.name ? userInfo.name : 'Anthology Inc.'}
              </p>
              <p className={styles['author-extra-info']}>
                {userInfo.role
                  ? userInfo.role
                  : 'Developer Relations and Standards Team'}
              </p>
              {userInfo.area ? (
                <p className={styles['author-extra-info']}>{userInfo.area}</p>
              ) : (
                ''
              )}
            </div>
            <a
              href={`https://github.com/${
                userInfo.username ? userInfo.username : 'blackboard'
              }`}
              target='_blank'>
              <img
                className={styles['social-logo']}
                src='/img/github-logo.svg'
                alt='GitHub logo'
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const buildPill = (userInfo, index) => {
  return (
    <a
      key={index}
      className={styles['pill-link']}
      href={`https://github.com/${
        userInfo.username ? userInfo.username : 'blackboard'
      }
      `}
      target='_blank'>
      <div className={styles['author-pill']}>
        <img
          className={styles.author_img_pill}
          src={userInfo.img ? userInfo.img : '/img/ANTHOLOGY-Logo-RGB.svg'}
          alt='Photo of the author'></img>
        <p className={styles['author-name-pill']}>
          {userInfo.name ? userInfo.name.split(' ')[0] : 'Anthology'}
        </p>
        <img
          className={styles['social-logo-pill']}
          src='/img/github-logo.svg'
          alt='GitHub logo'
        />
      </div>
    </a>
  );
};

const buildMultipleAuthors = (authors) => {
  return (
    <div className={styles['author-pill-container']}>
      {authors.map((name, index) => {
        const userInfo = authorData[name.trim().toLowerCase()];
        if (!userInfo) {
          return buildPill(authorData['default'], index);
        }
        return buildPill(authorData[name.trim().toLowerCase()], index);
      })}
    </div>
  );
};

const AuthorBox = (props) => {
  // If there's no author, set a default card
  if (!props.frontMatter.author) {
    return buildSingleAuthor(authorData['default']);
  }

  const authors = props.frontMatter.author.split(', ');
  //If there are multiple authors
  if (authors.length > 1) {
    return buildMultipleAuthors(authors);
  } else {
    //If there's only one author

    let userInfo = authorData[authors[0].trim().toLowerCase()];

    if (!userInfo) {
      return buildSingleAuthor(authorData['default']);
    } else {
      return buildSingleAuthor(userInfo);
    }
  }
};

export default AuthorBox;
