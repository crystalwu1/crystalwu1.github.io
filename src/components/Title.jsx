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
        <a href={'/'} rel="noopener noreferrer"> <img src={logo} alt="logo" /> </a>
        <a href={'mailto:cw683@cornell.edu'} target='_blank' rel="noopener noreferrer"> <img src={mail} alt="email" /> </a>
        <a href={'https://www.linkedin.com/in/crystal-wu-/'} target='_blank' rel="noopener noreferrer" > <img src={link} alt="linkedin" /> </a>
        <a href={'https://drive.google.com/file/d/1SW-F8rvNLIQz7adWk4G4M7bjP5jk_yd4/view?usp=sharing'} rel="noopener noreferrer" target='_blank'> <img src={resume} alt="resume" /> </a>
        <a href={'https://github.com/crystalwu1'} target='_blank' rel="noreferrer"> <img src={github} alt="github" /> </a>
      </div>

    </div >
  );
};