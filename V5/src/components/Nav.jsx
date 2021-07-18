import React from 'react';
import styles from '../styles/Nav.module.css';

export default () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.textbox}>
        <a href={'/'} className={styles.brand}>about me</a>
        <h1>PRODUCT</h1>
        <a href={'/pryde-connect'} className={styles.pryde}>pryde connect</a>
        <p>UX DESIGN / SU19</p>
        <a href={'https://medium.com/@crystalwu12340/netflix-concept-summaries-691418686198'} target="_blank" className={styles.netflix}>netflix: digest</a>
        <p>CASE STUDY / FA19</p>
        <a href={'/pryde-pioneer'} className={styles.pioneer}>pryde pioneer</a>
        <p>MOBILE UX / FA19</p>
        <h1>DESIGN</h1>
        <a href={'/cusail'} className={styles.cusail}>cusail</a>
        <p>ILLUSTRATION, WEB / FA18 - PRESENT</p>
        <a href={'/ieee'} className={styles.ieee}>ieee cornell</a>
        <p>BRAND / FA19 </p>
        <a href={'/website'} className={styles.brand}>personal website</a>
        <p>BRAND, WEB / FA18 - PRESENT</p>
        <a href={'https://vsco.co/crystalwudesign/gallery'} target="_blank" className={styles.red}>misc. design</a>
        <p>GRAPHICS / FA17 - PRESENT</p>
        <a href={'https://vsco.co/wuwuhoo/gallery'} target="_blank" className={styles.red}>photo</a>
        <p>PHOTOGRAPHY / FA13 - PRESENT</p>
        <h1>CODING</h1>
        <a href={'https://github.com/crystalwu1/tetris'} target="_blank" className={styles.tetris} > ocaml tetris</a >
        <p>CLASS PROJECT / SP20</p>
      </div >
    </div >
  );
};