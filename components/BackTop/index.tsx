import { NextPage } from 'next'
import { BackTop, Tooltip } from 'antd'
import { CaretUpOutlined } from '@ant-design/icons'
import styles from './index.module.scss'

const SltBackTop: NextPage = (props) => {
  return (
    <BackTop className={styles.backtop}>
      {/* <Tooltip placement="left" title="返回顶部"> */}
      <div className={styles.backtopStack}>
        <CaretUpOutlined />
        <span className={styles.backtopStackText}>Top</span>
      </div>
      {/* </Tooltip> */}
    </BackTop>
  )
}

export default SltBackTop
