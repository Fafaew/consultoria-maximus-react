import { Link } from "react-router-dom";
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
      <header className={styles.header}>
        <img className={styles.logoHeader} src={require("../Assets/Img/logo.png")} alt="Logo Maximus"/>
        <nav ref={navRef} className={styles.nav}>
          <ul className={styles.navHeaderList}>
            <Link to="/" onClick={showNavBar}>HOME</Link>
            <Link to="/about" onClick={showNavBar}>QUEM SOMOS</Link>
            <Link to="/services" onClick={showNavBar}>SERVIÇOS</Link>
            <Link to="/contact" onClick={showNavBar}>CONTATO</Link>
          </ul>
          <div className={styles.headerSocialContainer}>
            <div className={styles.headerSocialLinks}>
              <button className={styles.socialLinksButton}>
                <a href="http://www.instragram.com"><FaInstagram /></a>
              </button>
              <button className={styles.socialLinksButton}>
              <a href="http://www.linkedin.com"><FaLinkedin /> </a>
              </button>
            </div>
            <img className={styles.logoNavOverlay} src={require("../Assets/Img/logo.png")} alt="Logo Maximus"/>
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
