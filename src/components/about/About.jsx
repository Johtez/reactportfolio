import React from 'react'
import './about.css'
import ME from '../../assets/me.jpg'
import { FaAward } from 'react-icons/fa'
import { FaUsersLine } from 'react-icons/fa6'
import { FaFolder } from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      
      <div className="container about__container">
        <div className="about__me">
         <div className="about__me-image">
           <img src={ME} alt="johny" />
         </div> 
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
            </article>

            <article className='about__card'>
              <FaUsersLine className='about__icon'/>
              <h5>Clients</h5>
              <small>10 </small>
            </article>

            <article className='about__card'>
              <FaFolder className='about__icon'/>
              <h5>Completed Projects</h5>
              <small>5 Projects</small>
            </article>
        </div>

        <p>I’m a passionate and creative individual who enjoys learning new things and taking on challenges. I’m dedicated to producing high-quality work and continuously improving my skills. Whether working independently or as part of a team, I strive to bring fresh ideas, strong problem-solving abilities, and a positive attitude to every project.</p>

        <a href="#contact" className='btn btn-primary'>Let's Connect</a>
      </div>
      </div>  
    </section>
  )
}

export default About

