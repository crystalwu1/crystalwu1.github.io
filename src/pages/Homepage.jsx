import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import styles from '../styles/All.module.css';

import logo from '../images/Logo.png';
import blank from '../images/blank.png';
import pryde from '../images/connect-01.png';
import pioneer from '../images/pioneer.png';
import netflix from '../images/netflix.png';
import cusail from '../images/cusail.png';
import ieee from '../images/ieee.png';
import website from '../images/connect-01.png';
import misc from '../images/design.png';
import photo from '../images/connect-01.png';
import tetris from '../images/connect-01.png';

const backgrounds = [blank, blank, blank, blank, cusail, ieee, blank, misc, blank, blank]
const corners = [blank, pryde, pioneer, netflix, blank, blank, blank, blank, blank, blank]
function changePicture(c) {
  document.getElementById('cornerimage').src = corners[c];
  document.getElementById('bgimage').src = backgrounds[c];
  console.log(backgrounds[c]);
}

export default () => {


  return (
    <div className={styles.navbar} >
      <img id="bgimage" src={blank} className={styles.bgimage} />
      <img id="cornerimage" src={blank} className={styles.cornerimage} />
      <div className={styles.logo}>
        <Link to="/">
          <img src={logo} alt="Crystal Wu logo" />
        </Link>
        <div>
          <h1> Crystal Wu </h1>
          <div className={styles.halftextbox}>
            <h2> computer science student working in front-end development and
              interaction design. <a href="/about">more >></a></h2>
          </div>
          <div className={styles.linkwrapper}>
            <div className={styles.linkcontainer}>
              <h1> Product </h1>

              <a href="/prydeconnect" onMouseEnter={() => changePicture(1)} onMouseLeave={() => changePicture(0)}>PRYDE Connect</a>
              <p > UX Design / Summer 2019 </p>
              {/* <a href="/prydepioneer" onMouseEnter={() => changePicture(2)} onMouseLeave={() => changePicture(0)}>PRYDE Pioneer</a>
              <p> Visual Design / Fall 2019 </p> */}
              <a href="https://medium.com/@crystalwu12340/netflix-concept-summaries-691418686198" onMouseEnter={() => changePicture(3)} onMouseLeave={() => changePicture(0)}>Netflix: Watcher’s Digest</a>
              <p> Concept Case Study / Fall 2019 </p>
            </div>
            <div className={styles.linkcontainer}>

              <h1> Coding </h1>
              <a href="https://github.com/crystalwu1/tetris" target="_blank" onMouseEnter={() => changePicture(9)} onMouseLeave={() => changePicture(0)}>OCaml Tetris</a>
              <p> Class Project / Spring 2020 </p>
            </div>

          </div>
          <div className={styles.linkwrapper}>
            <div className={styles.linkcontainer}>
              <h1> Design </h1>
              <a href="/cusail" onMouseEnter={() => changePicture(4)} onMouseLeave={() => changePicture(0)}>CUSail</a>
              <p> Web and Visual Design / Present </p>
              {/* <a href="http://cs3110.org" onMouseEnter={() => changePicture(5)} onMouseLeave={() => changePicture(0)}>Cornell IEEE</a>
              <p> Brand Design / Fall 2019 </p> */}
              <a href="/website" onMouseEnter={() => changePicture(6)} onMouseLeave={() => changePicture(0)}>Personal Website</a>
              <p> Web Design / Fall 2019 </p>
              <a href="https://vsco.co/crystalwudesign/gallery" target="_blank" onMouseEnter={() => changePicture(7)} onMouseLeave={() => changePicture(0)}>Misc. Design</a>
              <p> Graphic Design, Illustration </p>
              <a href="https://vsco.co/wuwuhoo/gallery" target="_blank" onMouseEnter={() => changePicture(8)} onMouseLeave={() => changePicture(0)} >Photo</a>
              <p> 2012-Present </p>
            </div>
          </div>
        </div>
      </div>
    </div >

  );
};
