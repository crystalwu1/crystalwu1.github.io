import sketch from '../images/brainstorming.png';
import dich from '../images/dich.png';
import duo from '../images/roleicons.png';
import color from '../images/colors.png';
import icons from '../images/actionicons.png';
import interest from '../images/icons.png';
import handshake from '../images/handshake.jpg';

import React from 'react';
import styles from '../styles/Description.module.css';
import articlecss from '../styles/Article.module.css';

export default () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <h1 className={styles.heading}>PRYDE Connect</h1>
        <h3 className={styles.tags}>UX DESIGN / SU19</h3>
        <h2 className={styles.titlecaption}>
          Connecting youth development researchers across New York State.
          <a href="https://prydeconnect.bctr.cornell.edu/" target="_blank" rel="noopener noreferrer"> website >></a>
        </h2>
      </div>
      <div className={articlecss.articlewrapper}>

        <h1> About PRYDE Connect </h1>
        <p> PRYDE Connect is a tool to connect youth development researchers with 4-H practitioners to facilitate collaboration and connection in the field. Users can browse past and ongoing studies by research topic, as well as create profiles and post studies of their own. </p>
        <p> PRYDE Connect was originally created for researchers at Cornell University to connect with 4-H practitioners across New York State, but users from other universities and other states are welcome to browse studies and create profiles.</p>
        <p> Over the course of the summer, I worked on everything from the initial sketches and wireframes to the final, high-fidelity design of the website.</p>
        <img className={articlecss.articleimage} src={handshake} alt="login screen" />
        <div className={articlecss.caption}><p>The login screen for PRYDE Connect.</p></div>

        <h1> The Problem </h1>
        <p> Youth development researchers want to collaborate with other professionals
          in the field, especially 4-H practitioners, but they have a hard time doing
          because: <strong> every county's 4-H program is studying different things and
            current offerings do not go into detail about an individual's primary
            topics or current studies. </strong></p>
        <p>Current alternatives for Cornell faculty and affiliated researchers
          included the
          <a href='https://cce.cornell.edu/'> Cornell Cooperative Extension (CCE) webpage </a> and <a href='http://vivo.med.cornell.edu/'>
            VIVO for Weill Cornell Medical College</a>. The CCE webpage
          lists ongoing projects, and provides recent activity and the
          information for each project, but does not go into much detail
          or provide links to more information. VIVO’s website hosts an extensive
          list of affiliated projects and people, but its search and filtering
          functions make it difficult to browse items on a particular research
          interest. </p>

        <h1> Brainstorming </h1>
        <p> We wanted a solution that would allow anyone to view the research that Cornell faculty and 4-H practitioners were working on, while also promoting connections between the two groups of people. For this purpose, a website made most sense.</p>
        <p> The intended audience members we interviewed were very excited about PRYDE Connect, and had a lot of valuable insight into what features most useful and important for them. Thanks to their input, we made sure to think about the following: </p>
        <h2> Minimum Functionality</h2>
        <p> The minimum viable product for us was to create a platform in which users could create profiles with their contact information, and post studies that would appear in a list of all studies.</p>
        <h2> Incentivizing Signups </h2>
        <p> In order to create a critical mass for the platform, we wanted to ensure that we were creating an environment that suited what users wanted to see. From user interviews, we determined that allowing users to post completed studies was necessary. This would probably lead to a large number of studies, which would make a thorough filtering system super important to the usability of the site. </p>
        <h2> Scalability and Scope </h2>
        <p> One potential issue we examined was a mismatch of interest between researchers and practitioners, with a greater number of practitioners projected to use the site. One option was to open the site up to other schools and research institutions. However, there were also concerns that such a large scale would take away from the tailored puporse to Cornell and NYS 4-H programs.</p>
        <img className={articlecss.articleimage} src={sketch} alt="brainstorming sketch" />
        <div className={articlecss.caption}><p>The login screen for PRYDE Connect.</p></div>

        <h1> The Solution </h1>
        <p> In order to accomplish our goals, we came up with several basic
          interactions for the website: </p>
        <ul>
          <li> Browsing studies </li>
          <li> Browsing people and researchers </li>
          <li> Creating a profile </li>
          <li> Posting a study </li>
        </ul>
        <p> The following two videos demonstrate the high/medium fidelity flow
          the above interations: </p>
        <div className={"gallery"}>
          <iframe title="Post a study" width="560" height="315" src="https://www.youtube.com/embed/zJJ5xIufB5Y" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe title="Create a profile" width="560" height="315" src="https://www.youtube.com/embed/xshAHyfOYSQ" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

        <h1> Visual Design </h1>
        <h2> Colors </h2>
        <p>I wanted to keep the visual design to be similar to <a href='https://pryde.bctr.cornell.edu/'> PRYDE's website</a>. Across the entire website, I kept to just PRYDE's three main colors on top of neutral black, white, and gray.</p>
        <img className={articlecss.articleimage} src={color} alt="website color scheme" />
        <div className={articlecss.caption}><p>The website color scheme.</p></div>
        <p> One distinction I created was "assigning" green to users who chose 4-H practitioners roles and blue to those who indicated they were researchers. This helps a user to quickly identify a user's role while looking at their profile page or user card. Orange, the third primary color, was used more used as an accent for the graphics on the website. </p>
        <img className={articlecss.articleimage} src={dich} alt="two user types" />
        <div className={articlecss.caption}><p>Two examples of how the color/role pairing was presented: User cards in a study page, and user profiles.</p></div>
        <h2> Form and Action Icons</h2>
        <p> To make the different pages and forms more visually appealing, I created icons for research categories, roles, and action icons that appear throughout the website. </p>
        <img className={articlecss.articleimage} src={icons} alt="action icons" />
        <p> These icons appear after a user has created an account or posted a study, with the exception of the "Sign Up" icon on the far right, which appears on the home screen. Neither blue nor green are used in these icons to keep them neutral between the two different user roles.</p>
        <img className={articlecss.articleimage} src={duo} alt="user role icons" />
        <p> These two icons appear when a user is signing up for an account. A user's role as a researcher or practitioner is one of the first fields they fill in during the sign-up process. These icons are meant to reflect each role while introducing the user to the blue-green dichotomy used in the rest of the website.</p>
        <img className={articlecss.smallimage} src={interest} alt="research category icons" />
        <p> Each of these icons represents a youth development research area such as Nutrition, Intergenrational Engagement, and Motivation. Users select from these areas when they initally create a profile. These icons are used to break up the long list of topics are make the sign-up process less tiring and tedious.</p>
      </div>
    </div>
  );
};