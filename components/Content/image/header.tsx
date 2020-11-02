import styles from './header.scss'
import { ReactNode } from 'react'
import Link from 'next/link'
import { Tag } from 'antd'

interface HeaderCategoryProps {
  href: string
  text: string
  color?: string
}

interface HeaderProps {
  title: string
  category?: HeaderCategoryProps
  date?: string
  meta?: ReactNode
}

export default function Header(props: HeaderProps) {
  return (
    <div className={styles.header}>
      <div className="slt-container">
        <div className={styles.media}>
          <div
            className={styles.mediaContent}
            style={{
              backgroundImage: `url('https://pandapro.demo.nicetheme.xyz/wp-content/uploads/2020/08/2020082618052175.jpg')`,
            }}
          >
            <span className={styles.overlay}></span>
          </div>
          <div className={styles.mediaOverlay}>
            <div>
              <Tag color={'#448EF6'}>
                <Link href={'/'}>
                  <a target="_blank">#{'前沿科技'}#</a>
                </Link>
              </Tag>
            </div>
            <h1 className={styles.title}>{props.title}</h1>
            <div className={styles.meta}>
              <time>{props.date}</time>
              {props.meta}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
