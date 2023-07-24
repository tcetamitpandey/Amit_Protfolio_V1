import React from 'react'
import "./footer.css"

// Social Icons
import {BsInstagram} from "react-icons/bs"
import {BsLinkedin} from "react-icons/bs"
import {GoMoveToTop} from "react-icons/go"

// heart icons 
import {BsFillSuitHeartFill} from "react-icons/bs"

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Amit Pandey</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Service</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#achievement">Achivements</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__social">
        <a href="https://www.linkedin.com/in/amit-pandey-tcet/" target='_blank'><BsInstagram/></a>
        <a href="https://www.instagram.com/pandey_ji_0fficial/" target='_blank'><BsLinkedin/></a>
        <a href="#"><GoMoveToTop/></a>
      </div>
      <div className="footer__copyright">
        <small> Made With <BsFillSuitHeartFill className='heart'/> <span>Amit Pandey</span> </small>
      </div>
    </footer>
  )
}

export default Footer