import Link from 'next/link'
import React from 'react'
import { Col } from 'antd'
import classnames from 'classnames'
import { fromNow } from '~/utils/date'
import styles from './item.module.scss'

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

export interface CardsGridType {
  gutter?: number
  column?: number
  xs?: number
  sm?: number
  md?: number
  lg?: number
  xl?: number
  xxl?: number
}

interface SltCardsItemProps {
  item: { [key: string]: string }
  showMeta?: boolean
  border?: boolean
  grid?: CardsGridType
}

export default function Item(props) {
  const { item, showMeta, grid = defaultGrid, border } = props
  const {
    title,
    image,
    type,
    slug,
    category,
    publishedAt = Date(),
    viewsCount = 0,
    commentsCount = 0,
    likesCount = 0,
  } = item

  const renderIcon = (type: string) => {
    if (!type) {
      return null
    }

    let icon: JSX.Element | null = null
    switch (type.toLowerCase()) {
      case 'image':
        icon = <i className="iconfont icon-picture1"></i>
        break
      case 'video':
        icon = <i className="iconfont icon-play1"></i>
        break
      case 'audio':
        icon = <i className="iconfont icon-musical-note"></i>
        break
      default:
        return null
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
    const meta = cate.meta || {}
    return (
      <div className={styles.cate}>
        <i
          className={styles.cateDot}
          style={{ backgroundColor: meta.color || '#ffc781' }}
        />
        <Link href={`/category/${cate.slug}`}>
          <a title={cate.name}>{cate.name}</a>
        </Link>
      </div>
    )
  }

  const linkUrl = `/post/${slug}`

  const renderMeta = () => {
    if (!showMeta) {
      return null
    }

    return (
      <div className={styles.itemFooter}>
        <time>{fromNow(publishedAt)}</time>
        <div className="flex-fill"></div>
        <ul className={styles.itemMeta}>
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
    )
  }

  const colPros = {
    span: getGrid(grid, 'column'),
    xs: getGrid(grid, 'xs'),
    sm: getGrid(grid, 'sm'),
    md: getGrid(grid, 'md'),
    lg: getGrid(grid, 'lg'),
    xl: getGrid(grid, 'xl'),
    xxl: getGrid(grid, 'xxl'),
  }

  const classes = classnames([styles.item, border ? styles.itemBorder : ''])

  return (
    <Col className={styles.itemWrapper} {...colPros}>
      <div className={classes}>
        <div className="slt-media">
          <Link href={linkUrl}>
            <a className="slt-media-content" title={title}>
              <img src={image} alt={title} />
              <span className="overlay"></span>
            </a>
          </Link>
          {renderIcon(type)}
        </div>
        <div className={styles.itemContent}>
          <div className={styles.itemBody}>
            {renderCategory(category)}
            <Link href={linkUrl}>
              <a
                title={title}
                className={styles.itemTitle}
                target="_blank"
                rel="noreferrer"
              >
                {title}
              </a>
            </Link>
          </div>
          {renderMeta()}
        </div>
      </div>
    </Col>
  )
}
