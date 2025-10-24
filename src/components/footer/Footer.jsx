import React from 'react'
import './footer.css'
import { BsInstagram } from 'react-icons/bs'
import { BiLogoFacebookSquare } from 'react-icons/bi'
import { FaSquareXTwitter } from 'react-icons/fa6'

const Footer = () => {
  console.log("help me");
  return (
    <footer>
      <a href="#home" className='footer__logo'>JOHN</a>

      <ul className='permalinks'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://instagram.com"><BsInstagram /></a>
        <a href="https://facebook.com"><BiLogoFacebookSquare/></a>
        <a href="https://twitter.com"><FaSquareXTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; JOHN Portfolio. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer;
