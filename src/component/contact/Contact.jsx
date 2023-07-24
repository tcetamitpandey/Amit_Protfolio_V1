import { React, useRef } from 'react'
import "./contact.css"

// contact Icons
import {MdEmail} from 'react-icons/md'
import {BsInstagram} from 'react-icons/bs'
import {FaWhatsapp} from 'react-icons/fa'

// Import EmailJS
import emailjs from "emailjs-com"

const Contact = () => {
  const form= useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_joeldvd', 'template_dmieuw5', form.current, 'FE5Zb9vLiZv5R6tAh')
    e.target.reset();
  };

  return ( 
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>pandeyjiDevelopers@gmail.com</h5>
            <a href="mailto:pandeyjiDevelopers@gmail.com" target='_blank'>Send a message</a>
          </article>

          <article className='contact__option'>
            <BsInstagram className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>pandey_ji_0fficial</h5>
            {/* <a href="https://www.instagram.com/pandey_ji_0fficial/">Send a message</a> */}
            <a href="https://m.me/pandey_ji_0fficial/" target='_blank'>Send a message</a>
          </article>
          <article className='contact__option'>
            <FaWhatsapp className='contact__option-icon'/> 
            <h4>Whatsaap</h4>
            <h5>+91 9321xxxxx</h5>
            <a href="https://wa.me/9321080860" target='_blank'>Send a message</a>
          </article>
        </div>
        {/* End of Contact options */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>

    </section>
  )
}

export default Contact