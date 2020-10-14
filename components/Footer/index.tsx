import { NextPage } from 'next';
import Router from 'next/router';
import Link from 'next/link';
import './index.less';

interface SltFooterProps {
  isCollapsed?: boolean
}

const SltFooter: NextPage<SltFooterProps> = (props) => {
  const { isCollapsed } = props;

  return (
    <div className="slt-header">
      {isCollapsed}
    </div>
  );
}

export default SltFooter;
