import { NextPage } from 'next';
import Link from 'next/link';
import React, { useState, useEffect, useContext } from 'react'
import { Col } from 'antd'
import classnames from 'classnames'
import { fromNow } from '@/utils/date'

const defaultGrid = {
    gutter: 0,
    xs: 2,
    sm: 2,
    md: 3,
    lg: 4,
    xl: 4,
    xxl: 4,
  }

function getGrid(grid: any, t: string) {
  return grid[t] && Math.floor(24 / grid[t])
}

export interface ListGridType {
    gutter?: number;
    column?: number;
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    xxl?: number;
}

interface SltListItemProps {
  item: { [key: string]: string }
  showMeta?: boolean
  border?: boolean
  grid?: ListGridType
}

const Item: NextPage<SltListItemProps> = (props) => {
  const { item, showMeta, grid = defaultGrid, border } = props
  const {
    title,
    image,
    type,
    category,
    publishedAt = Date(),
    viewsCount = 0,
    commentsCount = 0,
    likesCount = 0,
  } = item

  const renderIcon = (type: string) => {
    if (!type || type === 'default') {
      return null
    }
    let icon: JSX.Element | undefined
    if (type === 'image') {
      icon = <i className="text-lg iconfont icon-picture1"></i>
    } else if (type === 'video') {
      icon = <i className="text-lg iconfont icon-play1"></i>
    } else if (type === 'audio') {
      icon = <i className="text-lg iconfont icon-musical-note"></i>
    }

    if (icon) {
      return (
        <div className="slt-media-action">
          <span className="slt-media-action-icon">{icon}</span>
        </div>
      )
    }
    return null
  }


  const renderCategory = (cate: any) => {
    if (!cate) {
      return null
    }
    const cateUrl = `/category/${cate.slug}`
    const meta = cate.meta || {}
    return (
      <div className="slt-list-cate">
        <i
          className="slt-list-cate-dot"
          style={{ backgroundColor: meta.color || '#ffc781' }}
        ></i>
        <a href={cateUrl} className="text-muted" title={cate.name}>
          {cate.name}
        </a>
      </div>
    )
  }

  const linkUrl = () =>{
    const { slug } = item
    return `/post/${slug}`
  }

  return (
    <Col
      className="slt-list-col"
      span={getGrid(grid, 'column')}
      xs={getGrid(grid, 'xs')}
      sm={getGrid(grid, 'sm')}
      md={getGrid(grid, 'md')}
      lg={getGrid(grid, 'lg')}
      xl={getGrid(grid, 'xl')}
      xxl={getGrid(grid, 'xxl')}
    >
      <div className={classnames({'slt-list-item': true, border: border })}>
        <div className="slt-media">
          <Link href={linkUrl()}>
            <a className="slt-media-content" title={title}>
              <img
                src={image}
                alt={title}
              />
              <span className="overlay"></span>
            </a>
          </Link>
          {renderIcon(type)}
        </div>
        <div className="slt-list-item-content">
          <div className="slt-list-item-body">
            {renderCategory(category)}
            <Link href={linkUrl()}>
              <a
                title={title}
                className="slt-list-item-title"
                target="_blank"
                rel="noreferrer"
              >
                {title}
              </a>
            </Link>
          </div>
          {showMeta && (
            <div className="slt-list-item-footer">
              <time>{fromNow(publishedAt)}</time>
              <div className="flex-fill"></div>
              <ul className="slt-list-item-footer-meta">
                <li className="meta-view">
                  <i className="iconfont icon-view"></i>
                  <span>{viewsCount}</span>
                </li>
                <li className="meta-comment">
                  <i className="iconfont icon-Chat"></i>
                  <span>{commentsCount}</span>
                </li>
                <li className="meta-like">
                  <i className="iconfont icon-like-line"></i>
                  <span>{likesCount}</span>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </Col>
  );
}

export default Item;
