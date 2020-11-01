import styles from './index.scss'

interface NotFoundProps {
  statusCode?: number
  title?: string
}

export default function NotFoundPage(props: NotFoundProps) {
  return (
    <div className={styles.notFound}>
      <div className="slt-container">
        <div className={styles.content}>
          <div className={styles.svg}>
            <div className={styles.svg404}></div>
          </div>
          <h1>404</h1>
          <h4 className={styles.desc}>哎呀！ 该页面无法找到。</h4>
          <p className="text-muted">看起来这里没有任何东西…</p>
        </div>
      </div>
    </div>
  )
}
