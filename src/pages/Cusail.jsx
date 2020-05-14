import React, { Component } from 'react';
import back from '../images/Back.svg';
import { Link, withRouter } from 'react-router-dom';
import styles from '../styles/All.module.css';
import personalstyles from '../styles/Article.module.css'

import cusail from '../images/cusail.png';
import bops from '../images/bops.jpg';
import logo1 from '../images/logo1.png';
import logo2 from '../images/logo2.png';
import logo3 from '../images/logo3.png';
import qca from '../images/quartercard2019-a.png';
import qcb from '../images/quartercard2019-b.png';
import qcc from '../images/quartercard2019-c.png';
import qcd from '../images/quartercard2019-d.png';
import rc1 from '../images/recruitment2019.png';
import gd1 from '../images/givingday2019.png';
import sp from '../images/sponsorship_packet.jpg';
import sh from '../images/teamtshirt.png';


export default () => {
  return (
    <nav className={styles.navbar}>
      {/* <img id="bgimage" src={cusail} className={styles.bgimage} /> */}
      <div className={styles.logo}>
        <Link to="/">
          <img src={back} alt="Back to Home" />
        </Link>
        <div>
          <h1> CUSail </h1>
          <div className={styles.halftextbox}>
            <h2> CUSail is a Cornell University engineering project team that designs and manufactures an inexpensive, autonomous
              robotic sailboat. <a href="http://cusail.engineering.cornell.edu" target="_blank">website >></a>
            </h2>
          </div>
          <div className={personalstyles.paragraphs}>
            <h1> Background </h1>
            <p> CUSail is a Cornell Engineering project team that designs and builds an autonomous robotic sailboat for competition and oceanic research. I am the lead of the Business and Operations Subteam, or BOps for short, which means I handle all of the team's social media, promotional materials, and finances. </p>
            <img src={bops} alt="Bops 2019" />
            <div className={personalstyles.caption}><p>BOps Subteam Fall 2019.</p></div>
            <p> I first joined the team during my first semester at Cornell, when BOps was a brand new team with only four members. Even though I was a freshmen, I was thrown headfirst into the team's initiative to completely rebrand the team, which required a new logo, website, sponsorship packet, and social media look.</p>
            <h1> Logo Design </h1>
            <p> We wanted to update our overall brand to be something more modern and clean. Previously, our logo used heavy nautical motifs, and we were mistaken for an actual sailing team fairly often. I just began by just churning out as many different ideas as I could, messing around with Illustrator. </p>
            <img src={logo1} alt="Bops 2019" />
            <h2> Considerations </h2>
            <p> I really wanted to create two logos: one that said CUSail, and one that was just a boat, so it would be easier to fit into small places like social media profile pictures. Additonally, both logos would need the flexibility to work on light and dark backgrounds. </p>
            <img src={logo2} alt="Bops 2019" />
            <p> After getting some helpful feedback from the team, I settled on these two logos, which we felt best fit the overall mood for the team. Small changes to these logos have been made since Fall 2018, but I am still very proud of what I accomplished back then. </p>
            <img src={logo3} alt="Bops 2019" />
            {/* <h1> Web Design </h1> */}
            <h1> Graphic Design</h1>
            <p> Beyond the initial rebranding of the team in 2018, I have designed promotional materials, stickers, and apparel for CUSail. Here is a collection of the work I have done over the years, mostly done in Illustrator and Photoshop: </p>
            {/* <div className={personalstyles.carouselcontainer}></div> */}
            <div className={personalstyles.gallery}>
              <div className={personalstyles.galleryitem}>
                <img src={qca} />
              </div>
              <div className={personalstyles.galleryitem}>
                <img src={qcb} />
              </div>
              <div className={personalstyles.galleryitem}>
                <img src={qcc} />
              </div>
              <div className={personalstyles.galleryitem}>
                <img src={qcd} />
              </div>
              <div className={personalstyles.galleryitem}>
                <img src={gd1} />
              </div>
              <div className={personalstyles.galleryitem}>
                <img src={rc1} />
              </div>
              <div className={personalstyles.galleryitem}>
                <img src={sp} />
              </div>
              <div className={personalstyles.galleryitem}>
                <img src={sh} />
              </div>
            </div>
            <h1> Videography and Motion Design </h1>
            <p> I've also dabbled a little in videography for the team. Although I have little experience with making videos, I have really enjoyed the process of creating every video, especially when making the title and lower-third animations using After Effects. </p>
            <div className={personalstyles.gallery}>
              <iframe className={personalstyles.galleryitem} src="https://www.youtube.com/embed/Ue_2gdT3wrE" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <iframe className={personalstyles.galleryitem} src="https://www.youtube.com/embed/xVBp5KZCyXE" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            {/* <h1>Reflection</h1> */}
          </div>
        </div>
      </div>

    </nav >
  );
};