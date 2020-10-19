import { NextPage } from 'next'
import React, { useState, useEffect } from 'react'
import { Carousel } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import './index.less'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'

interface SltMagazineProps {
  dataSource: any[]
}

const SltMagazine: NextPage<SltMagazineProps> = (props) => {
  const { dataSource = [] } = props

  const onSlideChange = () => {
    //
  }

  const onSwiper = (swiper: any) => {
    console.log(swiper)
  }

  return (
    <div className="slt-magazine">
      <div className="slt-container">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          onSlideChange={onSlideChange}
          onSwiper={onSwiper}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
        {/* <Carousel effect="fade" arrows autoplay={true}> */}
        {/* <button slot="prevArrow" className="slt-magazine-arrow left">
            <LeftOutlined />
          </button>
          <button slot="nextArrow" className="slt-magazine-arrow right">
            <RightOutlined />
          </button> */}
        {/* {dataSource.length && dataSource.map((item) => (
            <Link key={item.id} href={`/post/${item.slug}`}>
              <a className="slt-magazine-item slt-media">
                <div
                  className="slt-magazine-content slt-media-content"
                  style={{
                    backgroundImage: `url(${item.image})`,
                  }}
                ></div>
              </a>
            </Link>
          ))} */}
        {/* </Carousel> */}
      </div>
    </div>
  )
}

export default SltMagazine
