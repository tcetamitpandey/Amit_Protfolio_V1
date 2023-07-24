import React from 'react'
import "./services.css"

// importing Icons
import {BsCheckSquare} from "react-icons/bs"

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'> 
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheckSquare className='service__list-icon'/>
              <p>User Interface Design</p>
            </li>
            <li>
              <BsCheckSquare className='service__list-icon'/>
              <p>Responsive Web Design.</p>
            </li>
            <li>
              <BsCheckSquare className='service__list-icon'/>
              <p>User Interface Animation.</p>
            </li>
          </ul>
        </article>
  {/* End of 1st Section */}

        <article className='service'> 
          <div className="service__head">
            <h3>Web Developmemt</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheckSquare className='service__list-icon'/>
              <p>Full-Stack Web Application Development.</p>
            </li>
            <li>
              <BsCheckSquare className='service__list-icon'/>
              <p>RESTful API Development.</p>
            </li>
            <li>
              <BsCheckSquare className='service__list-icon'/>
              <p>Version Control, Collaboration and Performance Optimization.</p>
            </li>
            <li>
              <BsCheckSquare className='service__list-icon'/>
              <p>E-commerce Development.</p>
            </li>
          </ul>
        </article>
{/* End of 2nd Service */}

<article className='service'> 
          <div className="service__head">
            <h3>Problem Solving</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheckSquare className='service__list-icon'/>
              <p>Custom Web Application Development.</p>
            </li>
            <li>
              <BsCheckSquare className='service__list-icon'/>
              <p>Database Design and Optimization.</p>
            </li>
            <li>
              <BsCheckSquare className='service__list-icon'/>
              <p>Troubleshooting and Bug Fixing.</p>
            </li>
          </ul>
        </article>
{/* End of 3rd Service */}
      </div>
    </section>
  )
}

export default Services