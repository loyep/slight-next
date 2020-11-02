import { CaretUpOutlined } from '@ant-design/icons'
import { Row, Col, Tag } from 'antd'
import styles from './index.scss'

export interface AuthorProps {
  avatar?: string
  title?: string
  displayName?: string
  cover?: string
  slug?: string
}

const defaultProps: AuthorProps = {
  cover:
    'https://pandapro.demo.nicetheme.xyz/wp-content/themes/PandaPRO-1.1.1/images/default-cover.jpg',
  avatar:
    '//gravatar.loli.net/avatar/db0a42e95e32035a8bb677ece1186533?s=80&d=mm&r=g',
  displayName: 'Loren',
  title: '站长',
}

export default function AuthorWidget(props: AuthorProps) {
  const { cover, avatar, displayName, title, slug } = {
    ...defaultProps,
    ...props,
  }
  return (
    <div className={styles.widget}>
      <div className={styles.cover}>
        <div className="slt-media">
          <div className="slt-media-content">
            <img src={cover} />
          </div>
        </div>
        <div className={styles.avatar}>
          <img src={avatar} />
        </div>
      </div>
      <div className={styles.meta}>
        <div className={styles.user}>
          <h6>{displayName}</h6>
          <Tag>{title}</Tag>
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
              <small className={styles.rowCount}>评论</small>
            </a>
          </Col>
          <Col flex={1}>
            <a
              href="https://pandapro.demo.nicetheme.xyz/author/suxing"
              target="_blank"
            >
              <span className={styles.rowTitle}>29</span>
              <small className={styles.rowCount}>获赞</small>
            </a>
          </Col>
        </Row>
      </div>
    </div>
  )
}
