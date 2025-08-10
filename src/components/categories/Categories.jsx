import React from 'react'
import './categories.css'
import TitleSection from '../titlesection/TitleSection'
import { MdOutlineKeyboardDoubleArrowLeft, MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { categories } from '../../Data.jsx'

import 'swiper/css';
import 'swiper/css/navigation';

import '../categories/categories.css';

const Categories = () => {
  return (
    <>
      <section className="categories container section">
        <div className="categories-header">
          <TitleSection title={"Categories"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          } />
          <div className="swiper-btns">
            <button className="swiper-btn ">
              <MdOutlineKeyboardDoubleArrowLeft className='prev-btn'/>
            </button>
            <button className="swiper-btn">
              <MdOutlineKeyboardDoubleArrowRight  className=' next-btn'/>
            </button>
          </div>
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={12}
          grabCursor={true}
          loop={true}
          navigation={{
            prevEl:'.prev-btn',
            nextEl:'.next-btn'
          }} modules={[Navigation]}
          breakpoints={{
            768: {
              slidesPerView: 2,

            },
            1024: {
              slidesPerView: 5,

            },
            1208: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}>
          {categories.map(({ img, title }, index) => {
            return (
              <SwiperSlide className='categories-slide' key={index}>
                <img src={img} alt="categories-img" className="categories-img" />
                <h3 className="categories-title">
                  {title}
                </h3>
              </SwiperSlide>
            )
          })}

        </Swiper>
      </section>
    </>
  )
}

export default Categories
