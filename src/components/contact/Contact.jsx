import React from 'react'
import './contact.css'
import { AiOutlineMail } from 'react-icons/ai'
import { BsInstagram } from 'react-icons/bs'
import { BsWhatsapp } from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>johnodhiambo0912@gmail.com</h5>
            <a href="mailto:johnodhiambo0912@gmail.com" target='_blank' rel="noopener noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <BsInstagram className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>its_john_ny</h5>
            <a href="https://www.instagram.com/its_john_ny" target='_blank' rel="noopener noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            < BsWhatsapp className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <h5>+25474306438npm9</h5>
            <a href="https://api.whatsapp.com/send?phone+254743064389" target='_blank' rel="noopener noreferrer">Send a message</a>
          </article>
          
        </div>
       {/* END OF CONTACT OPTIONS */}
        <form actions="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact;

