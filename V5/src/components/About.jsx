import React from 'react';
import styles from '../styles/Description.module.css';
import block from '../images/block.svg';

export default () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <h1 className={styles.heading}>Crystal Wu</h1>
        <h2 className={styles.titlecaption}>computer science student working in front-end development and interaction design. </h2>
      </div>
      <div className={styles.articlewrapper}>
        <p>I am a junior at Cornell University majoring in Computer Science, and minoring in Information Science. </p>
        <p>At school, I currently lead <a href="/cusail" target="_blank">CUSail</a>, and have previously led the team's branding, internal, and administrative affairs. I am also an RA in <a href="https://cornell.campusgroups.com/blch/home/" target="_blank">Cornell's only all-female dorm</a>, a TA for <a href="http://www.cs.cornell.edu/courses/cs1110/" target="_blank">an introductory CS class</a>, and I volunteer with <a href="http://www.apogamma.org/" target="_blank">Alpha Phi Omega</a>.</p>
        <p>Talk to me anytime about sneakers, stickers, and films!</p>

        {/* <h1> Connect </h1> */}
        <a href="http://cs3110.org">Email</a> <br /> <br />
        <a href="http://cs3110.org">LinkedIn</a> <br /><br />
        <a href="../files/resume.pdf" target="_blank">Resume</a> <br /><br />
        <a href="http://cs3110.org">Instagram</a>
      </div>
    </div >
  );
};
