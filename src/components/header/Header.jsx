import React from 'react'
import './header.css'
import CTA from './CTA'
import Me from '../../assets/me.jpg'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header id='home'>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>John Wagai</h1>
        <h5 className="text-light">Front-end Developer</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={Me} alt="me"/>
        </div>

      
          </div>
    </header>
  )
}

export default Header;
