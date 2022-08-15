import React from 'react';
import styles from '../styles/Nav.module.css';
import { useState, useEffect } from 'react';

export default ({ articleState, callback }) => {

  return (

    <div>
      <div className={styles.wrapper}>
        <div className={styles.nav}>
          <a href="/">Back to Home</a>
        </div>
      </div >
    </div >
  );
};