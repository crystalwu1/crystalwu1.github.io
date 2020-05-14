import React, { Component } from 'react';
import back from '../images/Back.svg';
import { Link, withRouter } from 'react-router-dom';
import styles from '../styles/All.module.css';
import personalstyles from '../styles/Article.module.css'

export default () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/">
          <img src={back} alt="Back to Home" />
        </Link>
        <div>
          <h1> Personal Website </h1>
          <div className={styles.halftextbox}>
            <h2> I've been iterating on this website since freshman year of college. It had many looks and layouts over the years.
            Check them out below!
            </h2>
          </div>
          <div className={personalstyles.paragraphs}>
            <h2> somewhere in between this website and the one before. </h2>
            <iframe width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F0cCTWiNDn283zyzOOW44XIZo%2FWebsite%3Fnode-id%3D112%253A2" allowfullscreen></iframe>
            <h2> trying way too hard to be cool. </h2>
            <iframe width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F0cCTWiNDn283zyzOOW44XIZo%2FWebsite%3Fnode-id%3D0%253A1" allowfullscreen></iframe>
            <h2> circa 2018 obsession with pastel.</h2>
            <iframe width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F0cCTWiNDn283zyzOOW44XIZo%2FWebsite%3Fnode-id%3D110%253A2" allowfullscreen></iframe>
          </div>
        </div>
      </div>

    </nav >
  );
};