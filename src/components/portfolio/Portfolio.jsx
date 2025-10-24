import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/IMG1.png'


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <artical className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt='Portfolio item'/>
          </div>
          <h3>This is a portfolio title</h3>
          <a href="https://github.com" className='btn' target='_blank' rel='noopener noreferrer'>Github</a>
        </artical>
      </div>
    </section>
  )
}

export default Portfolio;
