import React from 'react'
import styles from '../styles/Footer.module.css'
import { FaFacebookSquare, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'


const Footer = () => {
    return (
        <div className={styles.footerSection}>
            <div className={styles.footerIcons}>
                <FaFacebookSquare />
                <FaInstagram />
                <FaTwitter />
                <FaLinkedin />
            </div>
            <h3 className={styles.footerCopyright}>Copyright ©2022 All rights reserved</h3>
        </div>
    )
}

export default Footer