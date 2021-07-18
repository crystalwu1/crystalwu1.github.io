import React from 'react';
import styles from '../styles/Title.module.css';
import logo from '../images/Logo.png';
import name from '../images/CRYSTAL.svg';


export default () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.name} src={name} />
      <img className={styles.logo} src={logo} />
    </div>
  );
};