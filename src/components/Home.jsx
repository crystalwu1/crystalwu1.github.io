import React from 'react';
import styles from '../styles/Description.module.css';
import gradientcss from '../styles/GradientText.module.css';
import profile from '../images/profile.jpeg';

import photocover from '../images/photocover.svg'
import designcover from '../images/designcover.png'
import connectcover from '../images/connectcover.svg'
import pioneercover from '../images/pioneercover.svg'
import cusailcover from '../images/cusailcover.svg'
import netflixcover from '../images/netflixcover.svg'
import blank from '../images/blank.png'

import ddwgif from '../images/ddw.gif'
import tetrisgif from '../images/tetris.gif'
import cusailgif from '../images/cusail.gif'
import balchgif from '../images/balch.gif'
import ifgif from '../images/if.gif'
import cornellgif from '../images/cornell.gif'
import caponegif from '../images/capone.gif'

function changeCover(c, cover) {
  if (c !== 0) {
    document.getElementById(cover).setAttribute('style', 'visibility: visible; opacity: 1')
  }
  else {
    document.getElementById(cover).setAttribute('style', 'visibility: hidden; opacity: 0');
  }
}

export default () => {
  return (
    <div className={styles.wrapper}>


      <div id="about" >
        <div className={styles.title}>
          <h1 className={styles.heading}>
            <span className={styles.blue}>Crystal</span>
            <span className={styles.red}> Wu</span>
          </h1>

          <div className={styles.flexrow}>
            <img src={profile} alt="profile" />
            <div className={styles.profiletext}>
              <p> Hello! I'm a recent Computer Science grad from Cornell University. I'm originally from Hopewell Jct, NY, proud home to a <a href={'https://www.hopewelldepotmuseum.org/depot-videos/'} target="_blank" rel="noopener noreferrer">very cute train depot.</a> </p>
              <p> Aside from programming, I have a passion for teaching. In the past, I've worked with <a href={'https://www.idtech.com/'} target="_blank" rel="noopener noreferrer">iD Tech</a>, <a href={'https://codeconnects.org/'} target="_blank" rel="noopener noreferrer">The Coding School</a>, and <a href={'https://coders.capitalone.com/'} target="_blank" rel="noopener noreferrer">Capital One Coders</a> to help kids discover a passion for coding. </p>
              <p> I love thrifting, watching movies, and creating Spotify playlists.
                Lately, I've been learning about printmaking techniques and looking at <a href={'https://collection.corita.org/page/6/descending/serigraph/1967'} rel="noopener noreferrer" target="_blank">Sister Mary Corita Kent</a>'s activist screenprints!</p>
              <div className={styles.arrowWrapper}>
                <i onClick={() => window.scrollTo(0, window.innerHeight)} className={styles.arrow}></i>
              </div>
            </div>
          </div>

        </div>
      </div>


      <div className={styles.flexrow}>
        <div className={styles.textbox}>

          <div id="work" className={styles.section}>
            <h1 >Work</h1>
            <div className={styles.job}>
              <a href={'https://www.capitalone.com/'}
                target="_blank"
                className={gradientcss.capitalone}
                onMouseEnter={() => changeCover(1, "capone")}
                onMouseLeave={() => changeCover(0, "capone")}
                rel="noopener noreferrer">
                Capital One
              </a>
              <span className={styles.description}>SWE Intern / SU21</span>
              <p> Worked with 3 other interns in an agile environment to design and develop a front-end for Focus Partner Portal, an internal document storage tool. 
              <div className={styles.morelinks}>
                <a href={'https://drive.google.com/file/d/1nKC7ldfMTAvV2VotNm6TI2DApU2AR_3E/view?usp=sharing'}
                  target="_blank"
                  className={styles.linkmore}
                  rel="noopener noreferrer">
                  Overview
                </a>
                <a href={'https://drive.google.com/file/d/10Y8Hc8L1H6rzcyWkDbfqXRbxXACfl3nS/view?usp=sharing'}
                  target="_blank"
                  // className={}
                  rel="noopener noreferrer">
                  Demo Video
                </a>
              </div>
              </p>
              
              
            </div>
            <div className={styles.job}>
              <a href={'https://www.infinitefoods.com/'} target="_blank" rel="noopener noreferrer" className={gradientcss.infinitefoods} onMouseEnter={() => changeCover(1, "if")} onMouseLeave={() => changeCover(0, "if")}>Infinite Foods</a>
              <span className={styles.description}>Website Intern / SU20 - SP21</span>
              <p> Optimized and configured automated coupon generation, SEO indexing, store locator, and several other features on Wordpress website. Worked with sales team to develop efficient methods to update and maintain store locations database. </p>
            </div>
          </div>

          <div id="school" className={styles.section}>
            <h1 >School</h1>
            <div className={styles.job}>
              <a href={'https://cornell.edu'} rel="noopener noreferrer" target="_blank" className={gradientcss.netflix} onMouseEnter={() => changeCover(1, "cornell")} onMouseLeave={() => changeCover(0, "cornell")}>CS @ Cornell University</a>
              <span className={styles.description}>Class of 2022</span>
              <p> Dean's List Fall 2018, Fall 2020, Spring 2021</p>
              <p> Data-Driven Web Applications, Human-Computer Interaction, Learning Analytics, Computer Graphics, Computer Vision, Systems Programming, and more.</p>
            </div>
            <div className={styles.job}>
              <a href={'https://cusail.engineering.cornell.edu/index.html'} rel="noopener noreferrer" target="_blank" className={gradientcss.cusail} onMouseEnter={() => changeCover(1, "cusail")} onMouseLeave={() => changeCover(0, "cusail")}>CUSail</a>
              <span className={styles.description}>Team Lead</span>
              <p>Leads a team of 30 undergraduates to design and build a fully autonomous robotic sailboat. Previously Business and Operations Lead.</p>
            </div>
            {/* <div className={styles.job}>
              <a href={'https://cornell.campusgroups.com/tonimorrison/home/'} rel="noopener noreferrer" target="_blank" className={gradientcss.balch} onMouseEnter={() => changeCover(1, "balch")} onMouseLeave={() => changeCover(0, "balch")}>Toni Morrison Hall</a>
              <span className={styles.description}>Resident Advisor</span>
            </div> */}
            <div className={styles.job}>
              <a href={'https://www.apogamma.org/'} rel="noopener noreferrer" target="_blank" className={gradientcss.apo} onMouseEnter={() => changeCover(1, "apo")} onMouseLeave={() => changeCover(0, "apo")}>Alpha Phi Omega</a>
              <span className={styles.description}>Webmaster SP21</span>
            </div>
            <div className={styles.job}>
              <a href={'https://jeffrz.com/info3300/'} rel="noopener noreferrer" target="_blank" className={gradientcss.netflix} onMouseEnter={() => changeCover(1, "3300")} onMouseLeave={() => changeCover(0, "3300")}>CS3300</a>
              <span className={styles.description}>Teaching Assistant FA21 / Data-Driven Web Apps </span>
            </div>
            <div className={styles.job}>
              <a href={'https://www.cs.cornell.edu/courses/cs3110/2020sp/'} rel="noopener noreferrer" target="_blank" className={gradientcss.netflix} onMouseEnter={() => changeCover(1, "3110")} onMouseLeave={() => changeCover(0, "3110")}>CS3110</a>
              <span className={styles.description}>Consultant FA20 / Functional Programming </span>
            </div>
            <div className={styles.job}>
              <a href={'https://www.cs.cornell.edu/courses/cs1110/2019fa/'} rel="noopener noreferrer" target="_blank" className={gradientcss.netflix} onMouseEnter={() => changeCover(1, "1110")} onMouseLeave={() => changeCover(0, "1110")}>CS3110</a>
              <span className={styles.description}>Consultant FA19 + SP20 / Intro to Computing in Python</span>
            </div>
          </div>

          <div id="skills" className={styles.section}>
            <h1>Skills</h1>
            <div className={styles.skills}>
              <div>
                <h1 className={styles.lighter}> Development </h1>
                <p> Python </p>
                <p> JavaScript </p>
                <p> TypeScript </p>
                <p> HTML/CSS </p>
                <p> Java </p>
              </div>
              <div>
                <h1 style={{ visibility: "hidden" }}> . </h1>
                <p> Node.js </p>
                <p> Angular </p>
                <p> Git </p>
                <p> D3.js </p>
                <p> Wordpress </p>
              </div>
              <div>
                <h1 className={styles.lighter}> Design </h1>
                <p> Figma </p>
                <p> Adobe Creative Suite </p>
                <p> Sketch </p>
              </div>
            </div>
          </div>

          <div id="projects" className={styles.section}>
            <h1>Projects</h1>
            <div className={styles.projects}>
              <h1 id="code" className={styles.lighter}>Code</h1>
              <div className={styles.job}>
                <a href={'https://github.com/rachelyhan/info3300p2'} rel="noopener noreferrer" target="_blank" className={gradientcss.ddw} onMouseEnter={() => changeCover(1, "ddw")} onMouseLeave={() => changeCover(0, "ddw")}> Comparing Employment Rates in U.S. Counties</a >
                <span className={styles.description}> SP21</span>
                <p>Starting with a U.S. county of your choice, discover how it compares to the rest of the country in terms of employment rate, education, and income.</p>
              </div>
              <div className={styles.job}>
                <a href={'https://github.com/crystalwu1/tetris'} rel="noopener noreferrer" target="_blank" className={gradientcss.tetris} onMouseEnter={() => changeCover(1, "tetris")} onMouseLeave={() => changeCover(0, "tetris")}>Tetris, but OCaml</a >
                <span className={styles.description}> SP20</span>
                <p> A fully function Tetris (and Pentris!) game, written entirely in OCaml.</p>
              </div>

              <h1 id="product" className={styles.lighter}>Product</h1>
              <div className={styles.job}>
                <a href={'/pryde-connect'} className={gradientcss.pryde} rel="noopener noreferrer" onMouseEnter={() => changeCover(1, "connect")} onMouseLeave={() => changeCover(0, "connect")} >PRYDE Connect</a>
                <span className={styles.description}>UX Design / SU19</span>
                <p>PRYDE Connect is the place for researchers and practitioners with a shared interest in youth development to connect to each other.</p>
              </div>
              <div className={styles.job}>
                <a href={'/cusail'} className={gradientcss.cusail} rel="noopener noreferrer" onMouseEnter={() => changeCover(1, "cusailb")} onMouseLeave={() => changeCover(0, "cusailb")}>CUSail Brand</a>
                <span className={styles.description}>Branding, Web Design / FA18  - Present</span>
                <p>Creating CUSail's current brand from the ground (water?) up.</p>
              </div>
              {/* <div className={styles.job}>
                <a href={'https://medium.com/@crystalwu12340/netflix-concept-summaries-691418686198'} rel="noopener noreferrer" target="_blank" className={gradientcss.netflix} onMouseEnter={() => changeCover(1, "netflix")} onMouseLeave={() => changeCover(0, "netflix")}>Neflix: Digest</a>
                <span className={styles.description}>UX Case Study / FA19</span>
                <p>Created a concept to help users to understand the patterns in how they use Netflix. </p>
              </div> */}
              <div className={styles.job}>
                <a href={'/pryde-pioneer'} className={gradientcss.pioneer} rel="noopener noreferrer" onMouseEnter={() => changeCover(1, "pioneer")} onMouseLeave={() => changeCover(0, "pioneer")}>PRYDE Pioneer</a>
                <span className={styles.description}>Mobile UX Design / FA19</span>
                <p>A fresh redesign of a simple survey app.</p>
              </div>

              {/* <h1 id="art" className={styles.lighter}>Art</h1> */}
              {/* <div className={styles.job}>
                <a target="_blank" onMouseEnter={() => changeCover(1, "print")} rel="noopener noreferrer" onMouseLeave={() => changeCover(0, "print")}>Printmaking</a>
                <span className={styles.description}>SP21</span>
                <p>Screenprinting, intaglio etching, and photolithography.</p>
              </div> */}
              {/* <div className={styles.job}>
                <a href={'https://vsco.co/crystalwudesign/gallery'} target="_blank" rel="noopener noreferrer" onMouseEnter={() => changeCover(1, "design")} onMouseLeave={() => changeCover(0, "design")}>Graphics</a>
                <span className={styles.description}>FA17 - Present</span>
              </div>
              <div className={styles.job}>
                <a href={'https://vsco.co/wuwuhoo/gallery'} target="_blank" rel="noopener noreferrer" onMouseEnter={() => changeCover(1, "photo")} onMouseLeave={() => changeCover(0, "photo")}>Photo</a>
                <span className={styles.description}>FA13 - Present</span>
              </div> */}
            </div>
          </div>
        </div >

        <div className={styles.imagehover}>
          <img id='capone' src={caponegif} alt="capital one" />
          <img id='if' src={ifgif} alt="infinite foods" />

          <img id='cornell' src={cornellgif} alt="cornell" />
          <img id='cusail' src={cusailgif} alt="cusail at the lake" />
          <img id='apo' src={blank} alt="alpha phi omega" />
          {/* <img id='balch' src={balchgif} alt="balch hall" /> */}
          <img id='3300' src={blank} alt="cs3300" />
          <img id='3110' src={blank} alt="cs3110" />
          <img id='1110' src={blank} alt="cs1110" />

          <img id='ddw' src={ddwgif} alt="unemployment data visualization" />
          <img id='tetris' src={tetrisgif} alt="tetris game" />

          <img id='connect' src={connectcover} alt="pryde connect" />
          <img id='cusailb' src={cusailcover} alt="cusail design" />
          {/* <img id='netflix' src={netflixcover} alt="netflix case study" /> */}
          <img id='pioneer' src={pioneercover} alt="pryde pioneer" />

          {/* <img id='print' src={blank} alt="printmaking" />
          <img id='design' src={designcover} alt="graphics" />
          <img id='photo' src={photocover} alt="photography" /> */}
        </div>
      </div>

    </div >
  );
};
