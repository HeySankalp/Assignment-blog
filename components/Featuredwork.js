import Image from 'next/image';
import React from 'react'
import styles from '../styles/Featuredwork.module.css';

const Featuredwork = () => {
  return (
    <div className={styles.featuredSection}>
          <h2>Featured Works</h2>
          <div className={styles.featuredPosts}>
            <div>
              <div className={styles.featuredPost} >
                <div className={styles.imgCon} ><Image objectFit='cover' src={'https://1stwebdesigner.com/wp-content/uploads/2019/08/dashboard-design-inspiration-thumb.jpg'} alt="" width={1000} height={1000} /></div>
                <div className={styles.featuredPostMiddle}>
                  <h1>Dashboard design</h1>
                  <div className={styles.featuredContentTags} >
                    <div className={styles.tagTime}>2022</div>
                    <div className={styles.tagName}>Webdev</div>
                  </div>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati quae eaque itaque recusandae blanditiis similique natus unde nemo neque illo? Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, ducimus?</p>
                </div>
              </div>
            <hr />
            </div>
            <div>
              <div className={styles.featuredPost} >
                <div className={styles.imgCon} ><Image objectFit='cover' src={'https://www.shutterbug.com/images/17/1hack111617.png'} alt="" width={1000} height={1000} /></div>
                <div className={styles.featuredPostMiddle}>
                  <h1>Vibrant Portraits</h1>
                  <div className={styles.featuredContentTags} >
                    <div className={styles.tagTime}>2022</div>
                    <div className={styles.tagName}>Designs</div>
                  </div>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati quae eaque itaque recusandae blanditiis similique natus unde nemo neque illo? Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, ducimus?</p>
                </div>
              </div>
            <hr />
            </div>
            <div>
              <div className={styles.featuredPost} >
                <div className={styles.imgCon} ><Image objectFit='cover' src={'https://mayvenstudios.com/wp-content/uploads/mobile-development-tools-header.jpg'} alt="" width={1000} height={1000} /></div>
                <div className={styles.featuredPostMiddle}>
                  <h1>Mobile Apps</h1>
                  <div className={styles.featuredContentTags} >
                    <div className={styles.tagTime}>2022</div>
                    <div className={styles.tagName}>Mobile dev</div>
                  </div>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati quae eaque itaque recusandae blanditiis similique natus unde nemo neque illo? Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, ducimus?</p>
                </div>
              </div>
            <hr />
            </div>
          </div>
        </div>
  )
}

export default Featuredwork