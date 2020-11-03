import { ReactNode } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import SltHeader from '../Header';
import SltFooter from '../Footer';
import { Layout, ConfigProvider } from 'antd'
import styles from './index.scss'
import { RootState } from '@/store'

interface SltLayoutProps {
  // header?: boolean;
  // footer?: boolean;
  children?: ReactNode
}

export default function SltLayout(props: SltLayoutProps) {
  const { children } = props;
  const dispatch = useDispatch()
  const header = useSelector((state: RootState) => {
    console.log(state)
    return state.header
  })
  const footer = useSelector((state: RootState) => state.footer)

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
