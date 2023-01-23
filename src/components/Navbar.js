import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import '../Styles/styles.scss'


export default function Navbar() {
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav")
  }

  return ( 
    <header>
      <h3>logo</h3>
      <nav ref={navRef}>
        <a href="/">home</a>
        <a href="/">Work</a>
        <a href="/">Blog</a>
        <a href="/">About</a>
        <button className="nav-btn nav-close-btn" onClick={showNavBar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn"  onClick={showNavBar}>
        <FaBars />
      </button>
    </header>
  );
}
