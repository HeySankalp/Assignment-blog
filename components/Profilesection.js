import Image from 'next/image'
import React from 'react'
import styles from '../styles/Profilesection.module.css'


const Profilesection = () => {
  return (
    <div className={styles.profileInfo}>
          <div className={styles.profileInfoUpper} >
            <div className={styles.upperInfoText} >
              <h1>Hi, I am Sankalp <br />
                Software Developer </h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, dolore. Quidem odit architecto alias earum, tenetur eius veritatis! Nemo facere sint distinctio adipisci in sunt.</p>
            </div>
            <div className={styles.upperInfoImage}>
              <Image className={styles.image} objectFit='cover' src={'https://instagram.fdel32-1.fna.fbcdn.net/v/t51.2885-19/306830231_1448601708996735_6330252970846262015_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fdel32-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=dQSHS4jnLS8AX_pGPN8&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AT8NVhVVQ_iIisQ4f_wheDnDSUYdOLyhxWWwndapc9aakg&oe=632C009D&_nc_sid=8fd12b'} width={1000} height={1000} alt="" />
            </div>
          </div>
          <div className={styles.profileInfoLower} >
            <button className={styles.resumeBtn} >Download Resume</button>
          </div>
        </div>
  )
}

export default Profilesection