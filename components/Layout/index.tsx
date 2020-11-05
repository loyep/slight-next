import { ReactNode } from 'react';
// import { useSelector } from 'react-redux'
import SltHeader from '../Header';
import SltFooter from '../Footer';
import { Layout, ConfigProvider } from 'antd'
import styles from './index.module.scss'
// import { RootState, LayoutState } from '~/store/types'

interface SltLayoutProps {
  children?: ReactNode
  header?: boolean
  footer?: boolean
}

export default function SltLayout(props: SltLayoutProps) {
  const { children, header = true, footer = true } = props;
  // const { header, footer } = useSelector<RootState, LayoutState>((state: RootState) => state.layout)

  return (
    <ConfigProvider autoInsertSpaceInButton={false}>
      <Layout className={styles.layout}>
        {header && <SltHeader></SltHeader>}
        <Layout.Content className={styles.content}>
          {children}
        </Layout.Content>
        {footer && <SltFooter></SltFooter>}
      </Layout>
    </ConfigProvider>
  );
}
