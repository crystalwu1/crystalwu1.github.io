import React from 'react';
import styles from '../styles/Description.module.css';
import block from '../images/block.svg';

export default () => {
  return (
    <div id='article' className={styles.wrapper}>
      <div className={styles.title}>
        <h1 className={styles.heading}>Personal Website</h1>
        <h3 className={styles.tags}>BRAND, WEB / FA18 - PRESENT </h3>
        <h2 className={styles.titlecaption}>I've been iterating on this website since freshman year of college. It has had many looks and layouts over the years.
        Check them out below! </h2>
      </div>
      <div className={styles.articlewrapper}>
        <h2> somewhere in between this website and the one before. </h2>
        <iframe width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F0cCTWiNDn283zyzOOW44XIZo%2FWebsite%3Fnode-id%3D112%253A2" allowfullscreen></iframe>
        <h2> trying way too hard to be cool. </h2>
        <iframe width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F0cCTWiNDn283zyzOOW44XIZo%2FWebsite%3Fnode-id%3D0%253A1" allowfullscreen></iframe>
        <h2> circa 2018 obsession with pastel.</h2>
        <iframe width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F0cCTWiNDn283zyzOOW44XIZo%2FWebsite%3Fnode-id%3D110%253A2" allowfullscreen></iframe>
      </div>
    </div >
  );
};