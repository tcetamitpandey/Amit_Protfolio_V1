import React from 'react'
import "./experience.css"

//Skills Icons Import
import {AiFillHtml5} from "react-icons/ai"
import {SiCss3} from "react-icons/si"
import {IoLogoJavascript} from "react-icons/io" 
import {BiLogoReact} from "react-icons/bi"
import {FaBootstrap} from "react-icons/fa"
import {SiTailwindcss} from "react-icons/si"

// Backend & Other Icons
import {FaNodeJs} from "react-icons/fa"
import {BiLogoMongodb} from "react-icons/bi"
import {SiMysql} from "react-icons/si"
import {TbBrandCpp} from "react-icons/tb"



const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills & Abilities</h5>
      <h2>My Experience</h2>
      
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">

            <article className='experience__details'>
              <AiFillHtml5 className='experience__details-icon'/>
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experience</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiCss3 className='experience__details-icon'/>
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <IoLogoJavascript className='experience__details-icon'/>
              <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Experience</small>
              </div>
            </article>
            <article className='experience__details'>
              <BiLogoReact className='experience__details-icon'/>
              <div>
              <h4>React</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaBootstrap className='experience__details-icon'/>
              <div>
              <h4>Bootstrap</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiTailwindcss className='experience__details-icon'/>
              <div>
              <h4>Tailwind</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
          {/* End of FrontEnd */}

        <div className="experience__backend">
          <h3>Backend Development & Other</h3>
          <div className="experience__content">

            <article className='experience__details'>
              <FaNodeJs className='experience__details-icon'/>
              <div>
              <h4>Node JS</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BiLogoMongodb className='experience__details-icon'/>
              <div>
              <h4>MongoDB</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiMysql className='experience__details-icon'/>
              <div>
              <h4>MySQL</h4>
              <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className='experience__details'>
              <TbBrandCpp className='experience__details-icon'/>
              <div>
              <h4>C++</h4>
              <small className='text-light'>Experience</small>
              </div>
            </article>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience 