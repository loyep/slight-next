import { NextPage } from 'next';
import Link from 'next/link';
import React, { useState, useEffect } from 'react'
import { Layout, Button, Tooltip, Menu } from 'antd'
import { ClockCircleOutlined, SearchOutlined } from '@ant-design/icons'
import './index.less';
import classnames from 'classnames'

const { Header } = Layout
const { Item: MenuItem } = Menu

interface SltHeaderProps {
  isCollapsed?: boolean
}

const SltHeader: NextPage<SltHeaderProps> = (props: SltHeaderProps) => {
  const [fixed, setFixed] = useState(false)
  const [scroll, setScroll] = useState(false)
  const headerClasses = classnames({
    'slt-header': true,
    scroll,
    fixed
  })

  const onScroll = () => {
    setScroll(document.body.scrollTop + document.documentElement.scrollTop > 30)
  }

  useEffect(() => {
    onScroll()
    document.addEventListener('scroll', onScroll, true)
    return () => {
      document.removeEventListener('scroll', onScroll)
    }
  }, [])

  const onSearch = (e) => {
    e.preventDefault()
    console.log('search')
  }

  return (
    <Header className={headerClasses}>
      <div className="slt-container">
        <div className="slt-header-logo">
          <Link href="/">
            <a rel="home">
              <img
                className="logo"
                src={
                  !scroll && fixed
                    ? 'https://cosy.demo.nicetheme.xyz/wp-content/themes/Cosy3.3.0/images/logo-dark.png'
                    : 'https://cosy.demo.nicetheme.xyz/wp-content/themes/Cosy3.3.0/images/logo.png'
                }
                alt="slight"
              />
            </a>
          </Link>
        </div>
        <div className="slt-header-nav slt-header-nav-right">
          <ul className="slt-header-menu">
            <li className="slt-nav-item">
                <a className="nav-link" onClick={onSearch}>
                  <Tooltip placement="bottom" title="搜索">
                    <SearchOutlined />
                  </Tooltip>
                </a>
            </li>
            <li className="slt-nav-item">
                <Link href="/history">
                  <a className="nav-link" target="_blank">
                    <Tooltip placement="bottom" title="最近浏览记录">
                      <ClockCircleOutlined />
                    </Tooltip>
                  </a>
                </Link>
            </li>
            <li className="slt-nav-item">
              <Button type="default">登录</Button>
            </li>
            <li className="slt-nav-item">
              <Button type="primary">注册</Button>
            </li>
          </ul>
        </div>

        <div className="slt-header-nav slt-header-nav-left">
          <Menu className="slt-header-menu" mode="horizontal">
            <MenuItem>
              <Link href="/category/picture">图片</Link>
            </MenuItem>
            <MenuItem>
              <Link href="/category/music">音乐</Link>
            </MenuItem>
            <MenuItem>
              <Link href="/category/games">游戏</Link>
            </MenuItem>
            <MenuItem>
              <Link href="/category/videos">视频</Link>
            </MenuItem>
            <MenuItem>
              <Link href="/topic">专题推荐</Link>
            </MenuItem>
          </Menu>
        </div>
      </div>
    </Header>
  );
}

export default SltHeader;
