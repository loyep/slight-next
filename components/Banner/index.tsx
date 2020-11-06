import { NextPage } from 'next'
import React, { useEffect } from 'react'
import Link from 'next/link'
import classnames from 'classnames'
import SwiperCore, { Autoplay, Navigation, Pagination, Lazy } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from './index.module.scss'
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/effect-fade/effect-fade.scss';
import 'swiper/components/pagination/pagination.scss';

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

  return (
    <div className={styles.banner}>
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
                  <a className={classnames(styles.bannerItem, 'slt-media')}>
                    <div
                      className={classnames(
                        styles.bannerContent,
                        'slt-media-content'
                      )}
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
