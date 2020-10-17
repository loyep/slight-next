import { NextPage } from 'next';
import SltHeader from '../Header';
import SltFooter from '../Footer';
import { Layout, ConfigProvider } from 'antd'

const { Content } = Layout

interface SltLayoutProps {
  header?: boolean;
  footer?: boolean;
}

const SltLayout: NextPage<SltLayoutProps> = (props) => {
  const { header = true, footer = true, children } = props
  return (
    <ConfigProvider autoInsertSpaceInButton={false}>
      <Layout>
        {header && <SltHeader></SltHeader>}
        <Content>
          {children}
        </Content>
        {footer && <SltFooter></SltFooter>}
      </Layout>
    </ConfigProvider>
  );
}

export default SltLayout;
