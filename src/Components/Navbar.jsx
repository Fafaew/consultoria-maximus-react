import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from './Navbar.module.scss'


export default function Navbar() {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle(`${styles.responsiveNav}`)
  }

  return ( 
    <header class={styles.header}>
      <img className={styles.logoHeader} src={require("../Assets/Img/logo.png")} alt="Logo Maximus"/> 
      <nav ref={navRef} className={styles.nav}>
        <a href="/">HOME</a>
        <a href="/">QUEM SOMOS</a>
        <a href="/">SERVIÇOS</a>
        <a href="/">CONTATO</a>
        <div className={styles.headerSocialLinks}>
          

        </div>
        <button className={`${styles.navBtn} ${styles.navCloseBtn}`} onClick={showNavBar}>
          <FaTimes />
        </button>
      </nav>
      <button className={styles.navBtn}  onClick={showNavBar}>
        <FaBars />
      </button>
    </header>
  );
}
