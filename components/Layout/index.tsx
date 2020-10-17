import { NextPage } from 'next';
import SltHeader from '../Header';
import SltFooter from '../Footer';
import { useState } from 'react'
import { Layout, ConfigProvider } from 'antd'

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
      <Layout>
        {header && <SltHeader></SltHeader>}
        <Content style={{
          marginTop: fixed ? '0' : '64px',
        }}>
          {children}
        </Content>
        {footer && <SltFooter></SltFooter>}
      </Layout>
    </ConfigProvider>
  );
}

export default SltLayout;
