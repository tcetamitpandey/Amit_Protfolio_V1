import React from 'react'
import "./about.css"

//import My Image
import ME5 from "../../assets/Me5.jpg"


//Icon img
import {FcGraduationCap} from "react-icons/fc"
import {FaUsers} from "react-icons/fa"
import {VscFolderLibrary} from "react-icons/vsc"

const about = () => {
  return ( 
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
            <div className="about__me-image">
              <img src={ME5} className='amit' alt="About_ME"/>
            </div>
        </div>

        <div className="about_content">
            <div className="about__cards">
              <article className='about__card'>
                <FcGraduationCap className='about__icon'/>
                <h5>Education</h5>
                <small>Bachelor of engineering</small>
              </article>

              <article className='about__card'>
                <FaUsers className='about__icon'/>
                <h5>Clients</h5>
                <small>5+ Worldwide</small>
              </article>

              <article className='about__card'>
                <VscFolderLibrary className='about__icon'/>
                <h5>Projects</h5>
                <small>10+ Completed</small>
              </article>
            </div>
            <p>Hello there! I'm Amit Pandey. I have successfully completed my Bachelor of Engineering with an impressive CGPA of 8. Currently, I am focused on practicing and mastering the MERN (MongoDB, Express.js, React, Node.js) stack to become a highly skilled MERN Full Stack Developer. 
              My technical skills also encompass proficiency in C++ and a strong understanding of data structures and algorithms. 
              Apart from my technical pursuits, I find joy in playing chess and immersing myself in the world of books. 
              As a fresher, I am eager to connect with like-minded individuals and explore new opportunities in the realm of MERN development. Feel free to reach out anytime; I'm excited to learn and grow together!</p>
            <a href="#contact" className='btn btn-primary'>Let's Talk 📞</a>
        </div>
      </div>
    </section>
  )
}

export default about