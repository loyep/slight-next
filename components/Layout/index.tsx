import { NextPage } from 'next';
import SltHeader from '../Header';
import SltFooter from '../Footer';
import Router from 'next/router';
import Link from 'next/link';
import './index.less';

interface SltLayoutProps {
  title?: string;
}

const SltLayout: NextPage<SltLayoutProps> = (props) => {

  return (
    <div className="slt-layout">
      <SltHeader></SltHeader>
      <SltFooter></SltFooter>
    </div>
  );
}

export default SltLayout;
