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
                    <div className="list-content p-3 p-md-5 text-center">
                      <div className="list-body">
                        <a
                          href="https://www.mywpku.com/tigermaterial-material-design.html"
                          target="_blank"
                          className="h4 text-white h-2x m-0"
                        >
                          TigerMaterial – Material Design 与 WordPress
                          的巧妙碰撞
                        </a>
                      </div>
                    </div>
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
