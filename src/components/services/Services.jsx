import React from 'react'
import './services.css'
import { BiCheck } from'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
           </div>
           <ul lasName="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Ensuring that every design works beautifully on all screen sizes.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Creating wireframes, prototypes, and high-fidelity designs for web and mobile applications.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Conducting user research and usability testing to inform design decisions.</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Front-end Development</h3>
           </div>
           <ul lasName="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Debugging and finding solutions to issues across different browsers and devices.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Working with designers, backend developers, and other stakeholders to create seamless user experiences.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Structuring HTML for search visibility</p>
            </li>
          </ul>
        </article>
        {/* END OF FRONT-END DEVELOPMENT*/}
      </div>
    </section>
  )
}

export default Services;
