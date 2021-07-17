import React from 'react';
import styles from '../styles/Description.module.css';
import block from '../images/block.svg';

export default () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <h1 className={styles.heading}>PRYDE Pioneer</h1>
        <h3 className={styles.tags}>MOBILE UX / FA19</h3>
        <h2 className={styles.titlecaption}>Making youth development surveys youthful.</h2>
      </div>
      <div className={styles.articlewrapper}>
        <p>More to come.... but for now, here is the finished product!</p>
        <iframe width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FTEywnDWqLWtmkVoAY6uhxvRW%2FPioneer%3Fnode-id%3D0%253A1&chrome=DOCUMENTATION" allowfullscreen></iframe>
      </div>
    </div >
  );
};
