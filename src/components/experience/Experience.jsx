import React from 'react'
import './experience.css'
import { HiMiniCheckBadge } from 'react-icons/hi2'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        
          <div className="experience__content">
            <div className="experience__frontend">
          <h3>Frontend Development</h3>
          </div>
            <article className='experience__details'>
              <HiMiniCheckBadge  className='experience__details-icon'/>
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            
             <article className='experience__details'>
              <HiMiniCheckBadge className='experience__details-icon'/>
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <HiMiniCheckBadge className='experience__details-icon'/>
              <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Avarage</small>
              </div>
            </article>

            <article className='experience__details'>
              <HiMiniCheckBadge className='experience__details-icon'/>
              <div>
              <h4>React</h4>
              <small className='text-light'>Avarage</small>
              </div>
            </article> 
          
        </div>
       {/* END OF FRONTEND */}

       
          <div className="experience__content">
             <div className="experience__UI/UX">
        <h3>UI/UX Design</h3>
        </div>
            <article className='experience__details'>
              <HiMiniCheckBadge className='experience__details-icon'/>
              <div>
              <h4>Interaction Design</h4>
              <small className='text-light'>Intermidiate</small>
              </div>
            </article>
            
             <article className='experience__details'>
              <HiMiniCheckBadge className='experience__details-icon'/>
              <div>
              <h4>App Design</h4>
              <small className='text-light'>Intermidiate</small>
              </div>
            </article>

            <article className='experience__details'>
              <HiMiniCheckBadge className='experience__details-icon'/>
              <div>
              <h4>Accessibility</h4>
              <small className='text-light'>Intermidiate</small>
              </div>
            </article>
          </div>
        
      </div>
    </section>
  )
}

export default Experience;
