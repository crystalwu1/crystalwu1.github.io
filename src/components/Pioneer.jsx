import React from 'react';
import styles from '../styles/Description.module.css';
import articlecss from '../styles/Article.module.css';

export default () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <h1 className={styles.heading}>PRYDE Pioneer</h1>
        <h3 className={styles.tags}>MOBILE UX / FA19</h3>
        <h2 className={styles.titlecaption}>Making youth development surveys youthful.</h2>
      </div>
      <div className={articlecss.articlewrapper}>
        <p>PRYDE Pioneer is an internal app for a youth development survey that helps streamline the feedback process for both participants and researchers. I designed a visual update to the app to more closely align with PRYDE's brand identity, and to add more visual interest. The flow of the app takes the user on a journey through the woods and mountains, ultimately leading them to a beautiful view at the finish line.</p>
        <p>Although devlopment on my update was never finished, this project was still very fun to work on!</p>
        <iframe title="Pioneer figma" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FTEywnDWqLWtmkVoAY6uhxvRW%2FPioneer%3Fnode-id%3D0%253A1&chrome=DOCUMENTATION" allowfullscreen></iframe>
      </div>
    </div >
  );
};
