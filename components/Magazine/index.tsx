import { NextPage } from 'next'
import React, { useState, useEffect } from 'react'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import './index.less'
import Link from 'next/link'

import SwiperCore, {
  Autoplay,
  Navigation,
  Pagination,
  EffectFade,
  // Scrollbar,
  // A11y,
} from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'

SwiperCore.use([Autoplay, Navigation, Pagination, EffectFade])

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
          loop
          autoplay={{ delay: 8000 }}
          // loopedSlides={0}
          slidesPerView="auto"
          effect="fade"
          navigation
          // onSlideChange={onSlideChange}
          // onSwiper={onSwiper}
          pagination={{ clickable: true }}
        >
          {dataSource.length &&
            dataSource.map((item) => (
              <SwiperSlide key={item.id}>
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
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  )
}

export default SltMagazine
