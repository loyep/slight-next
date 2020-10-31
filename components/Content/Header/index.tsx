import { Tag } from 'antd'
import { ReactNode } from 'react'
import styles from './index.scss'

export interface HeaderProps {
  title: string
  category?: ReactNode
  date?: string
  meta?: ReactNode
}

export default function Header(props: HeaderProps) {
  const { title } = props
  return (
    <div className={styles.header}>
      <div>
        {props.category}
        <a
          href="https://pandapro.demo.nicetheme.xyz/category/wanwu"
          target="_blank"
          className="d-inline-block"
        >
          <Tag color="#448EF6">#玩物志趣#</Tag>
        </a>
      </div>
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
