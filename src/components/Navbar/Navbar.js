import React, { useState } from 'react'
import './Navbar.css'
import {Link} from 'react-scroll'
const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className='navbar-contanier'>
      <a href="/" className='title'>Varun Jain</a>
      <div className='menu'>
        <img
          className='menuBtn'
          src={
            menuOpen ? "assests/closeIcon.png" : "assests/menuIcon.png"}
          alt="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul 
        className={`menuItems ${menuOpen && 'menuOpen'}`}
        onClick={() => setMenuOpen(false)}>
          <li><Link to='about' smooth={true} offset={0} duration={500}><a href="#about">About</a></Link></li>
          <li><Link to='experience' smooth={true} offset={-130} duration={500}><a href="#experience">Experience</a></Link></li>
          <li><Link to='projects2' smooth={true} offset={-150} duration={500}><a href="#projects">Projects</a></Link></li>
          <li><Link to='contact' smooth={true} offset={-100} duration={500}><a href="#contact">Contact</a></Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
