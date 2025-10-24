import React from 'react'
import './testimonials.css'

const  Testimonials   = () => {
  return (
    <section id='portfolio'>
      <h5>Reviews</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        <article className="testimonial">
          <div>
          <h5 className='client__name'>Joseph Otieno</h5>
          <small className='client__review'>
            "Working with John Wagai our UI design project was an excellent experience. They truly understood our vision and transformed it into a clean, modern, and user-friendly interface. Communication was smooth throughout the process, and they were always open to feedback and quick to make adjustments. The final design exceeded our expectations and significantly improved the overall user experience. Highly recommended for anyone looking for a talented and reliable UI designer!"
          </small>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Testimonials;
