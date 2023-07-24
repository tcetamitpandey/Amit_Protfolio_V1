// CALL TO ACTION Button
import React from 'react'
import CV from "../../assets/CV1.pdf"

const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary '>Get in Touch 😊</a>
    </div>
  )
}

export default CTA