import React from 'react'
import "./achievement.css"
// importing achivement
import Ach1 from "../../assets/Axhivement1.jpg"
import Ach2 from "../../assets/Axhivement2.jpg"
import Ach3 from "../../assets/achi5.png"

// Importing SwiperJS
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// array of Achivement
const data=[
  {
    avatar:Ach1,
    name:"Chess",
    review:"District Level Chess champion This experience taught me the value of discipline, perseverance, and the importance of continuous improvement in both sports and life. It has been a significant milestone in my journey, shaping my character and instilling in me a passion for challenges and excellence.."
  },
  {
    avatar:Ach2,
    name:"Published Paper",
    review:"Published a research paper during my Bachelor of Engineering program. Title: Design and Development of automated chess Robot. Contributed to academic knowledge and fueled my passion for continued learning."
  },
  {
    avatar:Ach3,
    name:"Content Creator",
    review:"My friend and I were able to achieve 10k+ followers on Instagram and surpass 200K views on our YouTube channel!."
  }
]

const Achievement = () => {
  return (
    <section id='achievement'>
      <h5>Achievement</h5>
      <h2>and Awards</h2>

      <Swiper className="container achievement__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {
          data.map(({avatar, name,review},index) =>{
            return(
              <SwiperSlide key={index} className='achievement'>
                <div className="pic__avatar">
                  <img src={avatar} alt="Achivement" />
                </div>
                    <h5 className='pic__name'>{name}</h5>
                    <small className='pic__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section >
  )
}

export default Achievement