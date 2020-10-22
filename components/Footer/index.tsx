import { NextPage } from 'next'
import { Layout, Button } from 'antd'
import { WeiboOutlined, GithubOutlined, MailOutlined, WechatOutlined, QqOutlined } from '@ant-design/icons'
import SltBackTop from '../BackTop'
import './index.less'

const { Footer } = Layout

interface SltFooterProps {
  title?: string
}

const SltFooter: NextPage<SltFooterProps> = (props) => {
  return (
    <Footer className="slt-footer">
      <div className="slt-container">
        <div className="slt-footer-content">
          <div className="slt-footer-content-left">
            <ul className="slt-footer-menu">
              <li className="menu-item">
                <a href="https://www.mywpku.com/uncategorized">杂记</a>
              </li>
              <li className="menu-item">
                <a href="https://www.mywpku.com/wordpress-premium-themes">
                  WordPress 付费主题推荐
                </a>
              </li>
            </ul>
            <div className="slt-footer-copyright">
              Copyright © 2020
              <a href="https://www.mywpku.com" title="WP酷" rel="home">
                WP酷
              </a>
              . Designed by
              <a
                href="https://www.nicetheme.cn"
                title="nicetheme奈思主题-资深的原创WordPress主题开发团队"
                target="_blank"
                rel="noreferrer"
              >
                nicetheme
              </a>
              .
              <a
                href="http://beian.miit.gov.cn/"
                target="_blank"
                rel="noreferrer"
                className="d-none d-lg-inline-block"
              >
                京ICP备12345678号
              </a>
            </div>
          </div>
          <div className="flex-md-fill"></div>
          <div className="slt-footer-content-right">
            <Button type="primary" className="weibo" icon={<WeiboOutlined />} />
            <Button type="primary" className="mail" icon={<MailOutlined />} />
            <Button type="primary" className="github" icon={<GithubOutlined />} />
            <Button type="primary" className="wechat" icon={<WechatOutlined />} />
            <Button type="primary" className="qq" icon={<QqOutlined />} />
          </div>
        </div>
        <div className="slt-footer-links footer-links border-top border-secondary pt-3 mt-3 text-xs">
          <span className="slt-footer-links-title">合作伙伴：</span>
          <a href="http://www.farisl.com/" target="">
            Faris Lee
          </a>
          <a href="http://www.farisl.com/" target="">
            Faris Lee
          </a>
          <a href="http://www.farisl.com/" target="">
            Faris Lee
          </a>
          <a href="http://www.farisl.com/" target="">
            Faris Lee
          </a>
          <a href="http://www.farisl.com/" target="">
            Faris Lee
          </a>
          <a href="http://www.zhutihome.net" target="_blank" rel="noreferrer">
            wordpress主题之家
          </a>
          <a
            href="http://www.themepark.com.cn/"
            target="_blank"
            rel="noreferrer"
          >
            WEB主题公园
          </a>
          <a href="http://www.iztwp.com/"> wordpress主题 </a>
          <a href="http://blog.wpjam.com" target="_blank" rel="noreferrer">
            我爱水煮鱼
          </a>
          <a href="http://www.zuifengyun.com/"> 醉风云 </a>
          <a href="http://www.yunlu99.com" target="_blank" rel="noreferrer">
            云路php解密
          </a>
          <a href="http://www.suxing.me" target="_blank" rel="noreferrer">
            苏醒博客
          </a>
          <a href="http://ztmao.com/" target="_blank" rel="noreferrer">
            wordpress主题
          </a>
          <a href="https://www.nicetheme.cn/" target="">
            wordpress主题
          </a>
          <a href="http://www.xintheme.com/" target="">
            WordPress企业主题
          </a>
          <a href="http://www.shejiwo.net/" target="_blank" rel="noreferrer">
            WordPress企业网站建设
          </a>
          <a href="https://www.codecasts.com" target="_blank" rel="noreferrer">
            CODECASTS
          </a>
          <a href="https://www.jerryzone.cn/" target="_blank" rel="noreferrer">
            JerryZone
          </a>
        </div>
      </div>
      <SltBackTop></SltBackTop>
      {/* <slt-back-top></slt-back-top> */}
    </Footer>
  )
}

export default SltFooter
