import React from 'react';
import styles from '../styles/Nav.module.css';
import { useState, useEffect } from 'react';


export default ({ articleState, callback }) => {
  const [scroll, setScroll] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10)
    })
  }, [])
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.nav}>
          <a href={'/#about'} className={scroll ? "red" : "blue"}>About</a>
          <a href={'/#work'}>Work</a>
          <a href={'/#school'}>School</a>
          <a href={'/#code'}>Code</a>
          <a href={'/#design'}>Product</a>
          <a href={'/#art'}>Art</a>
        </div>
      </div >
    </div >
  );
};