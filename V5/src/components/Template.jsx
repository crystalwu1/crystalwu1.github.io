import React from 'react';
import styles from '../styles/Description.module.css';
import block from '../images/block.svg';

export default () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <h1 className={styles.heading}>Title</h1>
        <h3 className={styles.tags}>UX DESIGN / SUMMER 2019</h3>
        <h2 className={styles.titlecaption}>blurb blurb blurb blurb blurb blurb blurb blurb blurb blurb blurb </h2>
      </div>
      <div className={styles.title}>
        <img src={block} />
      </div>
      <div className={styles.articlewrapper}>
        <p>blahblahblahblahblahblahblah
        blahblahblahblahblahblahblahblahblahblah
        blahblahblahblahblahblahblahblahblahblahblahbl
        'ahblahblahblahblahblahblahblahblahblahblahblahblahbl
        ahblahblahblahblahblahblahblahblahblahblahblahblahblahblahb
        lahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahbl
        ahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahbla
        hblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahbl
        ahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblah</p>
      </div>
    </div >
  );
};
