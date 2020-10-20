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
  Virtual
  // Scrollbar,
  // A11y,
} from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'

SwiperCore.use([Autoplay, Navigation, Pagination, EffectFade, Virtual])

interface SltMagazineProps {
  dataSource: any[]
}

const SltMagazine: NextPage<SltMagazineProps> = (props) => {
  const { dataSource = [] } = props

  useEffect(() => {
    return () => {
      //
    }
  }, [])
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
          initialSlide={1}
          autoplay={{ delay: 8000 }}
          virtual
          slidesPerView="auto"
          effect="fade"
          navigation
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
