import React from 'react';
import styles from '../styles/Nav.module.css';
import homecss from '../styles/Description.module.css'
import { useState, useEffect } from 'react';
import logo from '../images/Logo.png';

import link from '../images/linkedin.svg';
import mail from '../images/mail.svg';
import github from '../images/github.svg';
import resume from '../images/resume.svg'

export default ({ articleState, callback }) => {
  const [init, setInit] = useState(false);
  const [about, setAbout] = useState(false);
  const [work, setWork] = useState(false);
  const [school, setSchool] = useState(false);
  const [skills, setSkills] = useState(false);
  const [projects, setProjects] = useState(false);

  const [mobileNav, setmobileNav] = useState(false);

  useEffect(() => {
    window.addEventListener('load', () => {
      if (window.scrollY === 0) { setInit(true) };
      setmobileNav(true)
      toggleMobileNav()
    })
    window.addEventListener('scroll', () => {
      setInit(false)
      setAbout(elementInView("about"));
      setWork(elementInView("work"));
      setSchool(elementInView("school"));
      setSkills(elementInView("skills"));
      setProjects(elementInView("projects"));
      setmobileNav(false);
      toggleMobileNav()
    })
  }, []);

  function elementInView(elem) {
    const windowPos = window.scrollY + window.innerHeight / 2
    let top = document.getElementById(elem).offsetTop
    if (elem == 'about') {
      return windowPos < window.innerHeight
    }
    const bottom = top + document.getElementById(elem).offsetHeight
    return bottom > windowPos && windowPos > top
  }

  function scrollToElem(elem) {
    if (elem === 'about') {
      window.scrollTo(0, 0)
    } else {
      const top = document.getElementById(elem).offsetTop;
      const height = document.getElementById(elem).offsetHeight;
      const windowHeight = window.innerHeight;
      window.scrollTo(0, Math.min(top - 100, top + height / 2 - windowHeight / 2))
    }
    setmobileNav(false);
    toggleMobileNav()
  }

  function toggleMobileNav() {
    document.getElementById("mobileNav").setAttribute("style", mobileNav ? "height: 40vh; visibility:visible" : "height: 0vh; visibility: hidden")
    document.getElementById("mobileNavMenu").setAttribute("style", mobileNav ? "display: flex" : "display: none");
    document.getElementById("socials").setAttribute("style", mobileNav ? "display: flex; " : "display: none;")
    setmobileNav(!mobileNav)
  }
  return (

    <div>

      <div id={"mobileNav"} className={styles.mobilewrapper}>
        <div id={"mobileNavMenu"} className={styles.nav}>
          <button onClick={() => { scrollToElem("about") }} className={(about || init) ? styles.active : styles.inactive}>About</button>
          <button onClick={() => { scrollToElem("work") }} className={work ? styles.active : styles.inactive}>Work</button>
          <button onClick={() => { scrollToElem("school") }} className={school ? styles.active : styles.inactive}>School</button>
          <button onClick={() => { scrollToElem("skills") }} className={skills ? styles.active : styles.inactive}>Skills</button>
          <button onClick={() => { scrollToElem("projects") }} className={projects ? styles.active : styles.inactive}>Projects</button>
        </div>
        <div id={"socials"} className={styles.socials}>
          <a href={'mailto:cw683@cornell.edu'} target='_blank' > <img src={mail} alt="email" /> </a>
          <a href={'https://www.linkedin.com/in/crystal-wu-/'} target='_blank' > <img src={link} alt="linkedin" /> </a>
          <a href={'https://drive.google.com/file/d/1SW-F8rvNLIQz7adWk4G4M7bjP5jk_yd4/view?usp=sharing'} target='_blank'> <img src={resume} alt="resume" /> </a>
          <a href={'https://github.com/crystalwu1'} target='_blank'> <img src={github} alt="github" /> </a>
        </div>
      </div >
      <img src={logo} onClick={() => { toggleMobileNav() }} className={styles.navopen} alt="logo" />

    </div >
  );
};