import styles from './404.scss'

export default function NotFoundPage() {
  return (
    <main className={styles.notFound}>
      <div className="slt-container">
        <div className={styles.content}>
          <div className="d-inline-block w">
            <div className="d-inline-block svg-lg svg-404"></div>
          </div>
          <h1 className="display-1 font-theme">404</h1>
          <h4 className="py-4">哎呀！ 该页面无法找到。</h4>
          <p className="text-muted">看起来这里没有任何东西…</p>
        </div>
      </div>
    </main>
  )
}
