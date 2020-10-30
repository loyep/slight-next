import { NextPage } from 'next';
import SltHeader from '../Header';
import SltFooter from '../Footer';
import { useState } from 'react'
import { Layout, ConfigProvider } from 'antd'
import styles from './index.module.scss'

const { Content } = Layout

interface SltLayoutProps {
  header?: boolean;
  footer?: boolean;
}

const SltLayout: NextPage<SltLayoutProps> = (props) => {
  const { header = true, footer = true, children } = props
  const [fixed] = useState(false)
  return (
    <ConfigProvider autoInsertSpaceInButton={false}>
      <Layout className={styles.layout}>
        {header && <SltHeader></SltHeader>}
        <Content className={styles.content}>
          {children}
        </Content>
        {footer && <SltFooter></SltFooter>}
      </Layout>
    </ConfigProvider>
  );
}

export default SltLayout;
