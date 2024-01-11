import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { FaBars, FaTimes, FaInstagram, FaLinkedin } from "react-icons/fa";
import styles from './Navbar.module.scss';
import logo from '../../Assets/Img/logo.png';
import { RiArrowDropDownLine } from "react-icons/ri";


export default function Navbar() {
  const navRef = useRef();
  const navOverlay = useRef();

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);

  const showNavBar = () => {
    navRef.current.classList.toggle(`${styles.responsiveNav}`)
    navOverlay.current.classList.toggle(`${styles.navOverlay}`)
  }

  const closeNavBar = () => {
    navRef.current.classList.remove(`${styles.responsiveNav}`);
    navOverlay.current.classList.remove(`${styles.navOverlay}`);
    hideDropdown();
  }

  const hideDropdown = () => setDropdownOpen(false);

  return (
    <div className={styles.overlay} ref={navOverlay}>
      <header className={styles.header}>
        <img className={styles.logoHeader} src={logo} alt="Logo Maximus"/>
        <nav ref={navRef} className={styles.nav}>
          <ul className={styles.navHeaderList}>
            <Link to="/" onClick={closeNavBar}>HOME</Link>
            <li
              className={`${styles.dropdownItem} ${isDropdownOpen ? styles.open : ''}`}
            >
              <Link onClick={toggleDropdown}>QUEM SOMOS <RiArrowDropDownLine className={styles.dropdownArrow} /> </Link>
              <ul className={styles.dropdown}>
                <li><Link to="/about/team" onClick={closeNavBar}>Equipe</Link></li>
                <li><Link to="/about/history" onClick={closeNavBar}>História</Link></li>
              </ul>
            </li>
            <Link to="/services" onClick={closeNavBar}>SERVIÇOS</Link>
            <Link to="/contact" onClick={closeNavBar}>CONTATO</Link>
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
            <img className={styles.logoNavOverlay} src={logo} alt="Logo Maximus"/>
          </div>
          <button className={`${styles.navBtn} ${styles.navCloseBtn}`} onClick={showNavBar}>
            <FaTimes />
          </button>
        </nav>
        <button className={styles.navBtn} onClick={showNavBar}>
          <FaBars />
        </button>
      </header>
    </div>
  );
}
