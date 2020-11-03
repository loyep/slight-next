import styles from './NotFound.scss'
import { ReactNode } from 'react'

interface NotFoundProps {
  statusCode?: number
  title?: string
  children?: ReactNode
}

export default function NotFoundPage(props: NotFoundProps) {
  return (
    <>
      {props.statusCode === 404 ? (
        <div className={styles.notFound}>
          <div className="slt-container">
            <div className={styles.content}>
              <div className={styles.svg}>
                <div className={styles.svg404}></div>
              </div>
              <h1>404</h1>
              <h4 className={styles.title}>
                {props.title || '哎呀！该页面无法找到'}
              </h4>
              <p className={styles.desc}>看起来这里没有任何东西…</p>
            </div>
          </div>
        </div>
      ) : (
        props.children
      )}
    </>
  )
}
