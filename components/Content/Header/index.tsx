import { ReactNode, useMemo } from 'react'
import styles from './index.module.scss'
import Tags from '../common/Tags'

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
    return <Tags tags={[category]}></Tags>
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
        </div>
      </div>
      <div className={styles.borderBottom}></div>
    </div>
  )
}
