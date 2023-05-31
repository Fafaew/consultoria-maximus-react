import { useRef } from "react";
import { FaBars, FaTimes, FaInstagram, FaLinkedin } from "react-icons/fa";
import styles from './Navbar.module.scss'


export default function Navbar() {
  const navRef = useRef();
  const navOverlay = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle(`${styles.responsiveNav}`)
    navOverlay.current.classList.toggle(`${styles.navOverlay}`)
  }

  return (
    <div className={styles.overlay} ref={navOverlay}>
      <header class={styles.header}>
        <img className={styles.logoHeader} src={require("../Assets/Img/logo.png")} alt="Logo Maximus"/>
        <nav ref={navRef} className={styles.nav}>
          <a href="/">HOME</a>
          <a href="/">QUEM SOMOS</a>
          <a href="/">SERVIÇOS</a>
          <a href="/">CONTATO</a>
          <div className={styles.headerSocialLinks}>
            <FaInstagram />
            <FaLinkedin />
          </div>
          <button className={`${styles.navBtn} ${styles.navCloseBtn}`} onClick={showNavBar}>
            <FaTimes />
          </button>
        </nav>
        <button className={styles.navBtn}  onClick={showNavBar}>
          <FaBars />
        </button>
      </header>
    </div>
  );
}
