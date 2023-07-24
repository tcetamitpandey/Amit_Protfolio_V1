import React from 'react'

// Icons 
import {BsLinkedin} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"
import {FiInstagram} from "react-icons/fi"

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/amit-pandey-tcet/" target='_blank'> < BsLinkedin /> </a>
        <a href="https://www.https://github.com/tcetamitpandey" target='_blank'>< BsGithub /></a>
        <a href="https://www.instagram.com/pandey_ji_0fficial/" target='_blank'>< FiInstagram /></a>
    </div>
  )
}

export default HeaderSocial