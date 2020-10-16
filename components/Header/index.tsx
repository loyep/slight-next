import { NextPage } from 'next';
// import Router from 'next/router';
// import Link from 'next/link';
import './index.less';

interface SltHeaderProps {
  isCollapsed?: boolean
}

const SltHeader: NextPage<SltHeaderProps> = (props) => {
  const { isCollapsed } = props;

  return (
    <div className="slt-header">
      {isCollapsed}
    </div>
  );
}

export default SltHeader;
