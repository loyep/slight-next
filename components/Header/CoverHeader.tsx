import { NextPage } from 'next'
import React, { useEffect } from 'react'
import './index.less'

interface SltCoverHeaderProps {
  title?: string
  image?: string
  description?: string
}

const SltCoverHeader: NextPage<SltCoverHeaderProps> = (props) => {
  const { title, image, description } = props

  useEffect(() => {
    return () => {
      //
    }
  }, [])

  return (
    <div className="slt-category-header">
      <div className="slt-category-header-inner">
        <div className="slt-category-header-bg">
          <img src={image} alt={title} />
          <div className="overlay-opacity"></div>
        </div>
        <div className="slt-category-header-title">
          <div className="slt-category-header-text">
            <b className="h-1x">{title}</b>
            <p>some contents...</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SltCoverHeader