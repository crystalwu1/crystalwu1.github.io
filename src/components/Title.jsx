import React from 'react';
import styles from '../styles/Title.module.css';
import logo from '../images/Logo.png';
import name from '../images/CRYSTAL.svg';
import link from '../images/linkedin.svg';
import mail from '../images/mail.svg';
import github from '../images/github.svg';
import resume from '../images/resume.svg'


export default () => {
  return (
    <div>
      <div className={styles.wrapper} style={{ backgroundImage: "url(" + name + ")" }}>
        <a href={'/'}> <img src={logo} /> </a>
        <a href={'mailto:cw683@cornell.edu'} target='_blank'> <img src={mail} /> </a>
        <a href={'https://www.linkedin.com/in/crystal-wu-/'} target='_blank'> <img src={link} /> </a>
        <a href={'https://drive.google.com/file/d/1SW-F8rvNLIQz7adWk4G4M7bjP5jk_yd4/view?usp=sharing'} target='_blank'> <img src={resume} /> </a>
        <a href={'https://github.com/crystalwu1'} target='_blank'> <img src={github} /> </a>
      </div>

    </div >
  );
};