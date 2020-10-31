import { ReactNode, useMemo } from 'react'
import Link from 'next/link'
import { Tag } from 'antd'
import styles from './index.scss'

interface HeaderCategoryProps {
  href: string
  text: string
  color?: string
}

export interface HeaderProps {
  title: string
  category?: HeaderCategoryProps
  date?: string
  meta?: ReactNode
}

export default function Header(props: HeaderProps) {
  const { title, category } = props

  const renderCategory = useMemo(() => {
    if (!category) {
      return null
    }
    return (
      <Tag color={category.color || '#448EF6'}>
        <Link href={category.href}>
          <a target="_blank">#{category.text}#</a>
        </Link>
      </Tag>
    )
  }, [category])

  return (
    <div className={styles.header}>
      <div>{renderCategory}</div>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.meta}>
        <div className={styles.metaLeft}>
          <time>{props.date}</time>
        </div>
        <div className={styles.metaRight}>
          {props.meta}
          {/* <span>
            <EyeOutlined />
            <small>241</small>
          </span>
          <a href="#comments">
            <MessageOutlined />
            <small>0</small>
          </a>
          <a href="javascript:;">
            <LikeOutlined />
            <small className="like-count">4</small>
          </a> */}
        </div>
      </div>
      <div className="border-theme bg-primary"></div>
    </div>
  )
}
