import React from 'react';
import styles from '../styles/Description.module.css';
import profile from '../images/profile.jpeg';

import aboutcover from '../images/aboutcover.png'
import tetriscover from '../images/aboutcover.png'
import websitecover from '../images/websitecover.svg'
import photocover from '../images/photocover.svg'
import designcover from '../images/designcover.png'
import connectcover from '../images/connectcover.svg'
import pioneercover from '../images/pioneercover.svg'
import cusailcover from '../images/cusailcover.svg'
import netflixcover from '../images/netflixcover.svg'
import ieeecover from '../images/ieeecover.svg'
import blank from '../images/blank.png'

const covers = [blank, aboutcover, connectcover, netflixcover, pioneercover, cusailcover, ieeecover, websitecover, designcover, photocover, tetriscover]
function changeCover(c) {
  document.getElementById('cover').setAttribute('style', 'display: block;')
  document.getElementById('coverphoto').src = covers[c];
  if (c == 0) {
    document.getElementById('cover').setAttribute('style', 'display: none;');
  }
}

export default () => {
  return (
    <div className={styles.wrapper}>



      <div id="about" className={styles.title}>
        <h1 className={styles.heading}>
          <span className={styles.blue}>Crystal</span>
          <span className={styles.red}> Wu</span>
        </h1>

        <div className={styles.flexrow}>
          <img className={styles.profile} src={profile} />
          <div className={styles.profiletext}>
            <p>Hello! I'm a senior at Cornell University studying Computer Science. I'm originally from East Fishkill, NY, home to many <a href={'https://www.hopewelldepotmuseum.org/'} target="_blank">old railroad tracks.</a> </p>
            <p>background in design and visual art. combine with coding to create user-centered products</p>
            <p>passion for teaching</p>
            <p>Hobbies, thrifting, movies, most recently discovered printmaking</p>
          </div>
        </div>

      </div>

      <div className={styles.flexrow}>
        <div className={styles.textbox}>
          <h1 id="work">WORK</h1>
          <a href={'https://www.capitalone.com/'} target="_blank" className={styles.red} onMouseEnter={() => changeCover(9)} onMouseLeave={() => changeCover(0)}>capital one</a>
          <p>SWE INTERN / SU21</p>
          <a href={'https://www.infinitefoods.com/'} target="_blank" className={styles.red} onMouseEnter={() => changeCover(9)} onMouseLeave={() => changeCover(0)}>infinite foods</a>
          <p>COLLECTION / FA13 - PRESENT</p>

          <h1 id="school">SCHOOL</h1>
          <a href={'https://cusail.engineering.cornell.edu/index.html'} target="_blank" className={styles.cusail} onMouseEnter={() => changeCover(9)} onMouseLeave={() => changeCover(0)}>cusail</a>
          <p>TEAM LEAD / FA18 - PRESENT</p>
          <a href={'http://www.apogamma.org/'} target="_blank" className={styles.red} onMouseEnter={() => changeCover(9)} onMouseLeave={() => changeCover(0)}>alpha phi omega</a>
          <p>WEBMASTER, AOMA / SP19 - PRESENT</p>
          <a href={'http://www.apogamma.org/'} target="_blank" className={styles.red} onMouseEnter={() => changeCover(9)} onMouseLeave={() => changeCover(0)}>balch hall, toni morrison hall</a>
          <p>RESIDENT ADVISOR / SP20 - PRESENT</p>
          <a href={'http://www.apogamma.org/'} target="_blank" className={styles.red} onMouseEnter={() => changeCover(9)} onMouseLeave={() => changeCover(0)}>cs1110</a>
          <p>CONSULTANT / FA19 - SP20</p>
          <a href={'http://www.apogamma.org/'} target="_blank" className={styles.red} onMouseEnter={() => changeCover(9)} onMouseLeave={() => changeCover(0)}>cs3110</a>
          <p>CONSULTANT / FA20 </p>
          <a href={'http://www.apogamma.org/'} target="_blank" className={styles.red} onMouseEnter={() => changeCover(9)} onMouseLeave={() => changeCover(0)}>cs3300</a>
          <p>TEACHING ASSISTANT / FA21 </p>

          <h1 id="code">CODE</h1>
          <a href={'https://github.com/crystalwu1/tetris'} target="_blank" className={styles.tetris} onMouseEnter={() => changeCover(10)} onMouseLeave={() => changeCover(0)}> ocaml tetris</a >
          <p>CLASS PROJECT / SP20</p>

          <h1 id="design">DESIGN</h1>
          <a href={'/pryde-connect'} className={styles.pryde} onMouseEnter={() => changeCover(2)} onMouseLeave={() => changeCover(0)} >pryde connect</a>
          <p>UX DESIGN / SU19</p>
          <a href={'/cusail'} className={styles.cusail} onMouseEnter={() => changeCover(5)} onMouseLeave={() => changeCover(0)}>cusail</a>
          <p>BRANDING, WEB DESIGN / FA18 - PRESENT</p>
          <a href={'https://medium.com/@crystalwu12340/netflix-concept-summaries-691418686198'} target="_blank" className={styles.netflix} onMouseEnter={() => changeCover(3)} onMouseLeave={() => changeCover(0)}>netflix: digest</a>
          <p>UX CASE STUDY / FA19</p>
          <a href={'/pryde-pioneer'} className={styles.pioneer} onMouseEnter={() => changeCover(4)} onMouseLeave={() => changeCover(0)}>pryde pioneer</a>
          <p>MOBILE UX DESIGN / FA19</p>

          <h1 id="art">ART</h1>
          <a href={''} target="_blank" className={styles.red} onMouseEnter={() => changeCover(9)} onMouseLeave={() => changeCover(0)}>printmaking</a>
          <p>SP21</p>
          <a href={'https://vsco.co/crystalwudesign/gallery'} target="_blank" className={styles.red} onMouseEnter={() => changeCover(8)} onMouseLeave={() => changeCover(0)}>graphic design</a>
          <p>FA17 - PRESENT</p>
          <a href={'https://vsco.co/wuwuhoo/gallery'} target="_blank" className={styles.red} onMouseEnter={() => changeCover(9)} onMouseLeave={() => changeCover(0)}>photo</a>
          <p>FA13 - PRESENT</p>
        </div >

        <div className={styles.hovertext}>
          <div id='cover' className={styles.cover} style={{ display: "none" }}>
            <img id='coverphoto' src={blank} />
            <p>Hello</p>
          </div>
        </div>
      </div>

    </div >
  );
};
