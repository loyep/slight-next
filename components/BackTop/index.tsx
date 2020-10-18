import { NextPage } from 'next';
import { BackTop, Tooltip } from 'antd'
import { CaretUpOutlined } from '@ant-design/icons'
import './index.less';

const SltBackTop: NextPage = (props) => {
  return (
    <Tooltip placement="left" title="返回顶部">
        <BackTop className="slt-backtop">
            <div className="slt-backtop-stack">
                <CaretUpOutlined/>
                <span className="slt-backtop-text">Top</span>
            </div>
        </BackTop>
    </Tooltip>
  );
}

export default SltBackTop;
