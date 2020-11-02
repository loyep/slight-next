import { NextPage } from 'next'
import React, { useState, useEffect } from 'react'
import { Col, Row } from 'antd'
import styles from './index.scss'
import Link from 'next/link'
import { fromNow } from '@/utils/date'
import AuthorWidget from '@/components/Widget/Author'
import Header from '../Header'
import { EyeOutlined, LikeOutlined, MessageOutlined } from '@ant-design/icons'
import SiderBar from '@/components/SiderBar'

interface DefaultContentProps {
  content: any
  title: string
  description?: string
  htmlContent?: React.ReactNode | string
  related?: React.ReactNode
  social?: React.ReactNode
  breadcrumbs?: React.ReactNode
  navigator?: React.ReactNode
}

const DefaultContent: NextPage<DefaultContentProps> = (
  props: Partial<DefaultContentProps>
) => {
  const { content } = props
  const { category, title, image, description, user } = content

  const renderHeader = () => {
    const meta = (
      <>
        <span>
          <EyeOutlined />
          <span>{content.viewsCount || 0}</span>
        </span>
        <button>
          <MessageOutlined />
          <span> {content.commentsCount || 0}</span>
        </button>
        <button>
          <LikeOutlined />
          <span>{content.likesCount || 0}</span>
        </button>
      </>
    )

    const headerProps = {
      title,
      meta,
      date: fromNow(content.publishedAt),
      category: {
        href: `/category/${category.slug}`,
        text: category.name,
      },
    }
    return <Header {...headerProps} />
  }

  return (
    <div className={styles.main}>
      <div className="slt-container">
        {props.breadcrumbs}
        <Row justify="center">
          <Col span={24} lg={17} md={24} xs={24} sm={24} xl={18} xxl={18}>
            <div className={styles.content}>
              {renderHeader()}
              <div className="border-top py-2 py-md-2 py-xl-3"></div>
              {props.htmlContent}
              <div id="post-action" className="post-action mt-5 mt-lg-5">
                <div className="d-md-flex flex-md-fill align-items-md-center">
                  <div className="d-none d-md-block">
                    <a className="d-inline-block btn-action-like mr-md-4">
                      <i className="text-xl iconfont icon-like"></i>
                      <span className="like-count font-theme align-middle ml-1">
                        {content.likesCount || 0}
                      </span>
                    </a>
                    <a
                      href="#"
                      className="d-inline-block apollo-collection  mr-md-4"
                    >
                      <i className="text-xl iconfont icon-star-filled"></i>
                      <span className="collection-count font-theme align-middle"></span>
                    </a>
                  </div>
                  <div className="flex-md-fill"></div>
                  {props.social}
                </div>
              </div>
              <div className="post-declare text-sm text-muted text-center text-md-left mt-5 mt-md-5">
                本文系作者
                <span className="mx-2">
                  @
                  <Link href={`user/${user.name}`}>
                    <a title={`由${user.diaplayName}发布`} rel="author">
                      {user.displayName}
                    </a>
                  </Link>
                </span>
                原创发布在 COSY 主题演示站。未经许可，禁止转载。
              </div>
              {props.navigator}
            </div>
          </Col>
          <Col lg={7} md={0} xs={0} sm={0} xl={6} xxl={6}>
            <SiderBar>
              <AuthorWidget {...user} />
              <aside id="secondary" className="widget-area pt-5 pt-lg-0">
                <div id="search-2" className="widget widget_search">
                  <form
                    role="search"
                    method="get"
                    id="searchform"
                    className="searchform"
                    action="https://cosy.demo.nicetheme.xyz/"
                  >
                    <div className="search-input form-group m-0">
                      <label className="screen-reader-text" htmlFor="s">
                        Search for:
                      </label>
                      {/* <input
                        type="text"
                        placeholder="说点什么吧…"
                        className="form-control"
                        value=""
                        name="s"
                        id="s"
                        required
                      /> */}
                      <button className="btn" type="submit" id="searchsubmit">
                        <i className="iconfont icon-search"></i>
                      </button>
                    </div>
                  </form>
                </div>
                <div className="widget">
                  <div className="widget-title">聚合文章</div>
                  <div className="list-grid list-grid-padding my-n2">
                    <div className="list-item py-2">
                      <div className="media media-3x2 col-5 mr-3">
                        <a
                          href="https://cosy.demo.nicetheme.xyz/blog/108"
                          target="_blank"
                          rel="noreferrer"
                          title="Windows 10X延期发布，微软这次做系统能学乖吗？"
                          className="media-content"
                          style={{
                            backgroundImage:
                              "url('https://cosy.demo.nicetheme.xyz/wp-content/uploads/2020/08/2020082618051678.jpg')",
                          }}
                        ></a>
                        <div className="media-action">
                          <span className="btn btn-icon btn-secondary rounded-circle">
                            <span>
                              <i className="iconfont icon-play1"></i>
                            </span>
                          </span>
                        </div>
                      </div>
                      <div className="list-content p-0">
                        <div className="list-body">
                          <a
                            href="https://cosy.demo.nicetheme.xyz/blog/108"
                            title="Windows 10X延期发布，微软这次做系统能学乖吗？"
                            target="_blank"
                            rel="noreferrer"
                            className="list-title text-sm h-2x"
                          >
                            Windows 10X延期发布，微软这次做系统能学乖吗？
                          </a>
                        </div>
                        <div className="list-footer text-muted text-xs m-0">
                          <div>2周前</div>
                        </div>
                      </div>
                    </div>
                    <div className="list-item py-2">
                      <div className="media media-3x2 col-5 mr-3">
                        <a
                          href="https://cosy.demo.nicetheme.xyz/blog/107"
                          target="_blank"
                          rel="noreferrer"
                          title="高端的LiFi可见光通信技术，古人早就用上了？"
                          className="media-content"
                          style={{
                            backgroundImage:
                              "url('https://cosy.demo.nicetheme.xyz/wp-content/uploads/2020/08/2020082618051984.jpg')",
                          }}
                        ></a>
                      </div>
                      <div className="list-content p-0">
                        <div className="list-body">
                          <a
                            href="https://cosy.demo.nicetheme.xyz/blog/107"
                            title="高端的LiFi可见光通信技术，古人早就用上了？"
                            target="_blank"
                            rel="noreferrer"
                            className="list-title text-sm h-2x"
                          >
                            高端的LiFi可见光通信技术，古人早就用上了？
                          </a>
                        </div>
                        <div className="list-footer text-muted text-xs m-0">
                          <div>2周前</div>
                        </div>
                      </div>
                    </div>
                    <div className="list-item py-2">
                      <div className="media media-3x2 col-5 mr-3">
                        <a
                          href="https://cosy.demo.nicetheme.xyz/blog/106"
                          target="_blank"
                          rel="noreferrer"
                          title="今天的我们怎么成了一种纯粹的“观看动物”？"
                          className="media-content"
                          style={{
                            backgroundImage:
                              "url('https://cosy.demo.nicetheme.xyz/wp-content/uploads/2020/08/2020082618051895.jpg')",
                          }}
                        ></a>
                      </div>
                      <div className="list-content p-0">
                        <div className="list-body">
                          <a
                            href="https://cosy.demo.nicetheme.xyz/blog/106"
                            title="今天的我们怎么成了一种纯粹的“观看动物”？"
                            target="_blank"
                            rel="noreferrer"
                            className="list-title text-sm h-2x"
                          >
                            今天的我们怎么成了一种纯粹的“观看动物”？
                          </a>
                        </div>
                        <div className="list-footer text-muted text-xs m-0">
                          <div>2周前</div>
                        </div>
                      </div>
                    </div>
                    <div className="list-item py-2">
                      <div className="media media-3x2 col-5 mr-3">
                        <a
                          href="https://cosy.demo.nicetheme.xyz/blog/105"
                          target="_blank"
                          rel="noreferrer"
                          title="LP直言：规模10亿以下的GP就不要来找我们了"
                          className="media-content"
                          style={{
                            backgroundImage:
                              "url('https://cosy.demo.nicetheme.xyz/wp-content/uploads/2020/08/2020082618052175.jpg')",
                          }}
                        ></a>
                        <div className="media-action">
                          <span className="btn btn-icon btn-secondary rounded-circle">
                            <span>
                              <i className="iconfont icon-picture1"></i>
                            </span>
                          </span>
                        </div>
                      </div>
                      <div className="list-content p-0">
                        <div className="list-body">
                          <a
                            href="https://cosy.demo.nicetheme.xyz/blog/105"
                            title="LP直言：规模10亿以下的GP就不要来找我们了"
                            target="_blank"
                            rel="noreferrer"
                            className="list-title text-sm h-2x"
                          >
                            LP直言：规模10亿以下的GP就不要来找我们了
                          </a>
                        </div>
                        <div className="list-footer text-muted text-xs m-0">
                          <div>2周前</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="media_image-2" className="widget widget_media_image">
                  <a href="https://www.nicetheme.cn/store/cosy">
                    <img
                      src="https://cosy.demo.nicetheme.xyz/wp-content/uploads/2020/08/2020082618402284.png"
                      className="image wp-image-122  attachment-full size-full"
                    />
                  </a>
                </div>
              </aside>
              <div className="resize-sensor">
                <div className="resize-sensor-expand"></div>
                <div className="resize-sensor-shrink"></div>
              </div>
            </SiderBar>
          </Col>
        </Row>
      </div>
      {props.related}
    </div>
  )
}

export default DefaultContent
