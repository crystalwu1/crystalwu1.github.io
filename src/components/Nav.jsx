import React from 'react';
import styles from '../styles/Nav.module.css';
import { useState, useEffect } from 'react';

function elementInView(elem) {
  const windowPos = window.scrollY + window.innerHeight / 2
  let top = document.getElementById(elem).offsetTop
  if (elem === 'about') {
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
}

export default ({ articleState, callback }) => {
  const [init, setInit] = useState(false);
  const [about, setAbout] = useState(false);
  const [work, setWork] = useState(false);
  const [school, setSchool] = useState(false);
  const [skills, setSkills] = useState(false);
  const [projects, setProjects] = useState(false);

  useEffect(() => {
    window.addEventListener('load', () => {
      if (window.scrollY === 0) { setInit(true) };
    })
    window.addEventListener('scroll', () => {
      setInit(false)
      setAbout(elementInView("about"));
      setWork(elementInView("work"));
      setSchool(elementInView("school"));
      setSkills(elementInView("skills"));
      setProjects(elementInView("projects"));
    })
  }, []);
  return (

    <div>
      <div className={styles.wrapper}>
        <div className={styles.nav}>
          <button onClick={() => { scrollToElem("about") }} className={(about || init) ? styles.active : styles.inactive}>About</button>
          <button onClick={() => { scrollToElem("work") }} className={work ? styles.active : styles.inactive}>Work</button>
          <button onClick={() => { scrollToElem("school") }} className={school ? styles.active : styles.inactive}>School</button>
          <button onClick={() => { scrollToElem("skills") }} className={skills ? styles.active : styles.inactive}>Skills</button>
          <button onClick={() => { scrollToElem("projects") }} className={projects ? styles.active : styles.inactive}>Projects</button>
        </div>
      </div >
    </div >
  );
};