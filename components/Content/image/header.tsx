import styles from './header.scss'
import Link from 'next/link'
import { Tag } from 'antd'

export default function Header() {
  return (
    <div className={styles.header}>
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
          <h1 className={styles.title}>
            LP直言：规模10亿以下的GP就不要来找我们了
          </h1>
          <div className="meta text-xs text-muted">
            <time className="d-inline-block mx-1">2月前</time>
            <span className="mx-1">
              <i className="text-md iconfont icon-eye-line mx-1"></i>
              <small>243</small>
            </span>
            <span className="d-none d-md-inline">
              <a className="mx-1" href="#comments">
                <i className="text-md iconfont icon-chat--line mx-1"></i>
                <small>0</small>
              </a>
              <a
                className="btn-like btn-link-like  mx-1"
                href="javascript:;"
                data-action="like"
                data-id="105"
              >
                <i className="text-md iconfont icon-thumb-up-line mx-1"></i>
                <small className="like-count">3</small>
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
