import React from 'react'
import "./portfolio.css"

// importing Project Images
import Img1 from "../../assets/port1.png"
import Img2 from "../../assets/Toursism img.png"
import Img3 from "../../assets/portfolio3.jpg"
import Img4 from "../../assets/portfolio4.jpg"
import Img5 from "../../assets/portfolio5.png"
import Img6 from "../../assets/portfolio6.jpg"

// an object of projects
const data =[
  {
    id: 1,
    image: Img2,
    title: "incredible india reinvented",
    github: 'https://github.com/tcetamitpandey',
    demo: 'https://tcetamitpandey.github.io/Tourism/'
    
  },
  {
    id: 2,
    image: Img1,
    title: "Meme Generator",
    github: 'https://github.com/tcetamitpandey',
    demo: 'https://tcetamitpandey.github.io/My-Memes/'
  },
  {
    id: 3,
    image: Img3,
    title: "Comming Soon",
    github: 'https://github.com/tcetamitpandey',
    demo: 'https://tcetamitpandey.github.io/My-Memes/'


  },
  {
    id: 4,
    image: Img4,
    title: "Comming Soon",
    github: 'https://github.com/tcetamitpandey',
    demo: 'https://tcetamitpandey.github.io/My-Memes/'

  },
  {
    id: 5,
    image: Img5,
    title: "Comming Soon",
    github: 'https://github.com/tcetamitpandey',
    demo:'https://tcetamitpandey.github.io/My-Memes/'

  },
  {
    id: 6,
    image: Img6,
    title: "Comming Soon",
    github: 'https://github.com/tcetamitpandey',
    demo: 'https://tcetamitpandey.github.io/My-Memes/'

  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id,image,title,github,demo}) =>{
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                  <h3>{title}</h3>
                  {/* Dont Forget to Change These/ Update these*/}
                  <div className='portfolio__item-cta'>
                    <a href={github} className='btn' target='_blank'>Github</a>
                    <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                  </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio 