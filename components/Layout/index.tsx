import { NextPage } from 'next';
import SltHeader from '../Header';
import SltFooter from '../Footer';
// import Router from 'next/router';
// import Link from 'next/link';
import './index.less';

interface SltLayoutProps {
  header?: boolean;
  footer?: boolean;
}

const SltLayout: NextPage<SltLayoutProps> = (props) => {
  const { header, footer } = props
  return (
    <div className="slt-layout">
      {header && <SltHeader></SltHeader>}
      {footer && <SltFooter></SltFooter>}
    </div>
  );
}

export default SltLayout;
