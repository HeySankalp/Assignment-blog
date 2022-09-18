import Link from 'next/link';
import React, { useRef, useState } from 'react';
import styles from '../styles/Navbar.module.css';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {

  const [show, setShow] = useState(false);
 

  const handleBurger = ()=>{
    if(show){
      setShow(false);
    }else{
      setShow(true);
    }
  }


  return (
    <div className={styles.header}>
      <div className={styles.burger}>
        <FaBars onClick={handleBurger}/>
      </div>

      {/*========================= desktop navbar =========================*/}
      <ul className={styles.navbar}>
        <Link href={'/'}><a ><li className={styles.li} >Profile</li></a></Link>
        <Link href={'/Blog'}><a ><li className={styles.li} >Blog</li></a></Link>
        <Link href={'/Work'}><a ><li className={styles.li} >Work</li></a></Link>
      </ul>

      {/*========================= mobile navbar =========================*/}
      <ul style={{display:show?'block':'none'}} className={styles.burgerNavbar}>
        <Link href={'/'}><a ><li className={styles.burgerLi} >Profile</li></a></Link>
        <Link href={'/Blog'}><a ><li className={styles.burgerLi} >Blog</li></a></Link>
        <Link href={'/Work'}><a ><li className={styles.burgerLi} >Work</li></a></Link>
      </ul>
    </div>
  )
}

export default Navbar