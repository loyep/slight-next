import { CaretUpOutlined } from '@ant-design/icons'
import { Row, Col } from 'antd'
import styles from './index.scss'

export default function AuthorWidget(props) {
  return (
    <div className={styles.widget}>
      <div className={styles.cover}>
        <div className="slt-media">
          <div className="slt-media-content">
            <img
              src={
                'https://pandapro.demo.nicetheme.xyz/wp-content/themes/PandaPRO-1.1.1/images/default-cover.jpg'
              }
            />
          </div>
        </div>
        <div className={styles.avatar}>
          <img
            alt=""
            src="//gravatar.loli.net/avatar/db0a42e95e32035a8bb677ece1186533?s=80&amp;d=mm&amp;r=g"
            className="avatar avatar-80 photo 80"
            height="80"
            width="80"
          />
        </div>
      </div>
      <div className={styles.meta}>
        <div className="h6 mb-3">
          suxing
          <small className="d-block">
            <span className="badge badge-outline-primary mt-2">站长</span>
          </small>
        </div>
        <div className={styles.desc}></div>
        <Row className={styles.row}>
          <Col flex={1}>
            <a
              href="https://pandapro.demo.nicetheme.xyz/author/suxing"
              target="_blank"
            >
              <span className={styles.rowTitle}>29</span>
              <small className={styles.rowCount}>文章</small>
            </a>
          </Col>

          <Col flex={1}>
            <a
              href="https://pandapro.demo.nicetheme.xyz/author/suxing"
              target="_blank"
            >
              <span className={styles.rowTitle}>29</span>
              <small className={styles.rowCount}>文章</small>
            </a>
          </Col>

          <Col flex={1}>
            <a
              href="https://pandapro.demo.nicetheme.xyz/author/suxing"
              target="_blank"
            >
              <span className={styles.rowTitle}>29</span>
              <small className={styles.rowCount}>文章</small>
            </a>
          </Col>
        </Row>
        <div className="row no-gutters text-center">
          <a
            href="https://pandapro.demo.nicetheme.xyz/author/suxing"
            target="_blank"
            className="col"
          >
            <span className="font-theme font-weight-bold text-md">29</span>
            <small className="d-block text-xs text-muted">文章</small>
          </a>
          <a
            href="https://pandapro.demo.nicetheme.xyz/author/suxing"
            target="_blank"
            className="col"
          >
            <span className="font-theme font-weight-bold text-md">0</span>
            <small className="d-block text-xs text-muted">评论</small>
          </a>
          <a
            href="https://pandapro.demo.nicetheme.xyz/author/suxing"
            target="_blank"
            className="col"
          >
            <span className="font-theme font-weight-bold text-md">58</span>
            <small className="d-block text-xs text-muted">获赞</small>
          </a>
        </div>
      </div>
    </div>
  )
}
