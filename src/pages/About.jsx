import React, { Component } from 'react';
import back from '../images/Back.svg';
import { Link, withRouter } from 'react-router-dom';
import styles from '../styles/All.module.css';


export default () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/">
          <img src={back} alt="Back to Home" />
        </Link>
        <div>
          <h1> About </h1>
          <div className={styles.halftextbox}>
            <p>I am a junior at Cornell University majoring in Computer Science, and minoring in Information Science. </p>
            <p>At school, I currently lead <a href="/cusail" target="_blank">CUSail</a>, and have previously led the team's branding, internal, and administrative affairs. I am also an RA in <a href="https://cornell.campusgroups.com/blch/home/" target="_blank">Cornell's only all-female dorm</a>, a TA for <a href="http://www.cs.cornell.edu/courses/cs1110/" target="_blank">an introductory CS class</a>, and I volunteer with <a href="http://www.apogamma.org/" target="_blank">Alpha Phi Omega</a>.</p>
            <p>Talk to me anytime about sneakers, stickers, and films!</p>
          </div>
          <div className={styles.linkwrapper}>
            <div className={styles.linkcontainer}>
              <h1> Connect </h1>
              <a href="http://cs3110.org">Email</a> <br /> <br />
              <a href="http://cs3110.org">LinkedIn</a> <br /><br />
              <a href="../files/resume.pdf" target="_blank">Resume</a> <br /><br />
              <a href="http://cs3110.org">Instagram</a>
            </div>
          </div>
        </div>
      </div>

    </nav>
  );
};