import styles from './header.module.scss'
import { ReactNode } from 'react'
import Link from 'next/link'
import { Tag } from 'antd'
import Tags from '../common/Tags'

interface HeaderCategoryProps {
  href: string
  text: string
  color?: string
}

interface HeaderProps {
  title: string
  category?: HeaderCategoryProps
  date?: string
  image?: string
  meta?: ReactNode
}

export default function Header(props: HeaderProps) {
  return (
    <div className={styles.header}>
      <div className={styles.media}>
        <div
          className={styles.mediaContent}
          style={{
            backgroundImage: `url('${props.image}')`,
          }}
        >
          <span className={styles.overlay}></span>
        </div>
        <div className={styles.mediaOverlay}>
          <Tags tags={[{ color: '#448EF6', href: '/category/test001', text: '前沿科技' }]}></Tags>
          <h1 className={styles.title}>{props.title}</h1>
          <div className={styles.meta}>
            <time>{props.date}</time>
            <div className={styles.metaRight}>{props.meta}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
