import React from 'react'
import Blogs from '../components/Blogs'
import Featuredwork from '../components/Featuredwork'
import styles from '../styles/Blog.module.css'

const Blog = () => {
  return (
    <div className={styles.blogMain}>

        <Blogs/>
    </div>
  )
}

export default Blog