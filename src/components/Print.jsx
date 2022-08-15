export default () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <h1 className={styles.heading}>Print</h1>
        <h3 className={styles.tags}>BRAND, WEB / FA18 - PRESENT </h3>
        <h2 className={styles.titlecaption}>
          CUSail is a Cornell University engineering project team that designs and manufactures an inexpensive, autonomous
          robotic sailboat.
          <a href="http://cusail.engineering.cornell.edu" target="_blank" rel="noopener noreferrer" >website >></a>
        </h2>
      </div>
      <div className={articlecss.articlewrapper}>
        <h1> Background </h1>
        <p> CUSail is a Cornell Engineering project team that designs and builds an autonomous robotic sailboat for competition and oceanic research. I am the lead of the Business and Operations Subteam, or BOps for short, which means I handle all of the team's social media, promotional materials, and finances. </p>
        <img className={articlecss.articleimage} src={bops} alt="Bops 2019" />
        <div className={articlecss.caption}><p>BOps Subteam Fall 2019.</p></div>
        <p> I first joined the team during my first semester at Cornell, when BOps was a brand new team with only four members. Even though I was a freshmen, I was thrown headfirst into the team's initiative to completely rebrand the team, which required a new logo, website, sponsorship packet, and social media look.</p>
        <h1> Logo Design </h1>
        <p> We wanted to update our overall brand to be something more modern and clean. Previously, our logo used heavy nautical motifs, and we were mistaken for an actual sailing team fairly often. I just began by just churning out as many different ideas as I could, messing around with Illustrator. </p>
        <img className={articlecss.articleimage} src={logo1} alt="First logo brainstorm" />
        <h2> Considerations </h2>
        <p> I really wanted to create two logos: one that said CUSail, and one that was just a boat, so it would be easier to fit into small places like social media profile pictures. Additonally, both logos would need the flexibility to work on light and dark backgrounds. </p>
        <img className={articlecss.articleimage} src={logo2} alt="Logos after first round of feedback" />
        <p> After getting some helpful feedback from the team, I settled on these two logos, which we felt best fit the overall mood for the team. Small changes to these logos have been made since Fall 2018, but I am still very proud of what I accomplished back then. </p>
        <img className={articlecss.articleimage} src={logo3} alt="Final Logos" />
        <h1> Graphic Design</h1>
        <p> Beyond the initial rebranding of the team in 2018, I have designed promotional materials, stickers, and apparel for CUSail. Here is a collection of the work I have done over the years, mostly done in Illustrator and Photoshop: </p>
        <Slider centerMode slidesToShow={2}>
          <div>
            <img className={articlecss.articleimage} src={qca} alt="Quartercard 1 for recruitment" />
          </div>
          <div>
            <img className={articlecss.articleimage} src={qcb} alt="Quartercard 2 for recruitment" />
          </div>
          <div>
            <img className={articlecss.articleimage} src={qcc} alt="Quartercard 3 for recruitment" />
          </div>
          <div>
            <img className={articlecss.articleimage} src={qcd} alt="Quartercard 4 for recruitment" />
          </div>
          <div>
            <img className={articlecss.articleimage} src={sp} alt="Sponsorship Packet" />
          </div>
          <div>
            <img className={articlecss.articleimage} src={gd1} alt="Giving Day 2019 Cover" />
          </div>
          <div>
            <img className={articlecss.articleimage} src={rc1} alt="Recruitment 2019 Cover" />
          </div>
          <div>
            <img className={articlecss.articleimage} src={sh} alt="2019-2020 Team Shirt" />
          </div>
        </Slider>
        <h1> Videography and Motion Design </h1>
        <p> I've also dabbled a little in videography for the team. Although I have little experience with making videos, I have really enjoyed the process of creating every video, especially when making the title and lower-third animations using After Effects. </p>
        <div className={articlecss.gallery}>
          <iframe title="2019 Recruitment" className={articlecss.galleryitem} src="https://www.youtube.com/embed/Ue_2gdT3wrE" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <iframe title="2019 Giving Day" className={articlecss.galleryitem} src="https://www.youtube.com/embed/xVBp5KZCyXE" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </div >
  )
};
