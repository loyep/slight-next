import { NextPage } from 'next'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { Layout, Button, Tooltip, Menu } from 'antd'
import { HistoryOutlined, SearchOutlined } from '@ant-design/icons'
// import './index.less'
import styles from './index.module.scss'
import classnames from 'classnames'

const { Header } = Layout
const { Item: MenuItem } = Menu

interface SltHeaderProps {
  isCollapsed?: boolean
}

const SltHeader: NextPage<SltHeaderProps> = (props: SltHeaderProps) => {
  const [fixed, setFixed] = useState(false)
  const [scroll, setScroll] = useState(false)
  const headerClasses = classnames([
    styles.header,
    {
      scroll,
      fixed,
    }
  ])

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
        <div className={styles.headerLogo}>
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
        <div className={classnames(styles.headerNav, 'right')}>
          <ul className={styles.headerMenu}>
            <li className={styles.navItem}>
              <a className="nav-link" onClick={onSearch}>
                <Tooltip placement="bottom" title="搜索">
                  <SearchOutlined />
                </Tooltip>
              </a>
            </li>
            <li className={styles.navItem}>
              <Link href="/history">
                <a className="nav-link" target="_blank">
                  <Tooltip placement="bottom" title="最近浏览记录">
                    <HistoryOutlined />
                  </Tooltip>
                </a>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/signin">
                <Button type="default">登录</Button>
              </Link>
            </li>
          </ul>
        </div>

        <div className={classnames(styles.headerNav, 'left')}>
          <Menu className={styles.headerMenu} mode="horizontal">
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
  )
}

export default SltHeader
