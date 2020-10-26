import { NextPage } from 'next'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import './index.less'

import SwiperCore, { Autoplay, Navigation, Pagination, Lazy } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'

SwiperCore.use([Autoplay, Navigation, Pagination, Lazy])

interface SltBannerProps {
  dataSource: any[]
}

const SltBanner: NextPage<SltBannerProps> = (props) => {
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
          lazy
          spaceBetween={30}
          autoplay={{ delay: 8000 }}
          slidesPerView="auto"
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

export default SltBanner
