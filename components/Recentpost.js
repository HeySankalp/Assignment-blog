import Image from 'next/image'
import React from 'react'
import styles from '../styles/Recentpost.module.css'


const Recentpost = () => {
  return (
    <div className={styles.recentPostSection}>
    <div className={styles.recentHeading}>
      <span >Recent posts</span>
      <span style={{ color: '#00A8CC', fontSize: '20px' }}>View all</span>
    </div>
    <div className={styles.recentPosts}>
      <div className={styles.recentPost}>
        <h1>Making design system from scratch</h1>
        <div className={styles.recentPostedOn} >
          <span>17 Sep 2022</span>
          <span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
          <span>Design, Develop</span>
        </div>
        <p className={styles.recentpostDescription}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid sit vero perspiciatis voluptatum quis provident consectetur adipisci ea eos consequuntur aperiam molestias,  consequatur accusamus ?</p>
      </div>
      <div className={styles.recentPost}>
        <h1>Creating pixel perfect icons on figma</h1>
        <div className={styles.recentPostedOn}>
          <span>17 Sep 2022</span>
          <span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</span>
          <span>Design, Develop</span>
        </div>
        <p className={styles.recentpostDescription}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid sit vero perspiciatis voluptatum quis provident consectetur adipisci ea eos consequuntur aperiam molestias,  consequatur accusamus dolorum ?</p>
      </div>
    </div>
  </div>
  )
}

export default Recentpost