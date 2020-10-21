import { NextPage } from 'next'
import React, { useState, useEffect } from 'react'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import { Button, Card } from 'antd'
import './index.less'
import Link from 'next/link'
import { fromNow } from '@/utils/date'

interface StatusContentProps {
  content: any
  title: string,
  description?: string
  related?: React.ReactNode
  social?: React.ReactNode
  breadcrumbs?: React.ReactNode
  navigator?: React.ReactNode
}

const DefaultContent: NextPage<StatusContentProps> = (props: Partial<StatusContentProps>) => {
  const { content } = props
  const { category, title, image, description, user } = content

  useEffect(() => {
    return () => {
      //
    }
  }, [])

  return (
    <div className="pt-4 pt-md-4 pt-lg-5">
      <div className="slt-container">
        <div className="d-none d-md-block breadcrumbs mb-2 mb-md-3">
          <span>
            <Link href="/">
              <a className="home">
                <span className="text-muted">
                  首页
            </span>
              </a>

            </Link>
          </span>
          <span className="sep text-muted">›</span>
          <span itemProp="itemListElement">
            <Link href={`/category/${category.slug}`} >
              <a>
                <span className="text-muted">
                  {category.name}
                </span>
              </a>
            </Link>
          </span>
          <span className="sep text-muted">›</span>
          <span className="current">{content.title}</span>
        </div>
        <div className="row no-gutters">
          <div className="col-12 col-lg-9 pr-lg-5">
            <div className="post">
              <div className="post-poster rounded mb-4">
                <div className="media media-3x1">
                  <div className="media-content">
                    <img src={image} alt={title} />
                  </div>
                </div>
              </div>
              <h1 className="post-title h1">{title}</h1>
              <div className="post-meta d-flex align-items-center flex-row text-muted mt-3 mt-md-3 mb-3 mb-lg-4">
                <div className="d-flex flex-fill align-items-center">
                  <div className="flex-avatar w-36">
                    <img
                      alt=""
                      src={user.avatar}
                      className="avatar avatar-36 photo"
                      height="36"
                      width="36"
                    />
                  </div>
                  <div className="author-name d-flex flex-wrap flex-column mx-2 mx-md-3">
                    <div className="text-md">
                      <a href="javascript:" className="author-popup">
                        {user.displayName}
                      </a>
                    </div>
                    <div className="text-xs text-muted">
                      <time>{fromNow(content.publishedAt)}</time>
                      <i className="iconfont icon-dot1 mx-1"></i>
                      <Link
                        href={`/category/${category.slug}`}
                      >
                        <a
                          rel="category"
                          target="_blank">
                          {category.name}
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="post-data d-none d-md-flex text-nowrap text-md ">
                  <span className="mr-md-3 mr-xl-4">
                    <i className="text-lg iconfont icon-view"></i>
                    <small className="font-theme">
                      {content.viewsCount || 0}
                    </small>
                  </span>
                  <span className="mr-md-3 mr-xl-4">
                    <a href="#comments">
                      <i className="text-lg iconfont icon-Chat"></i>
                      <small className="font-theme">
                        {content.commentsCount || 0}
                      </small>
                    </a>
                  </span>
                  <span>
                    <a className=" btn-action-like" href="javascript:;">
                      <i className="text-lg iconfont icon-like-line"></i>
                      <small className="like-count font-theme ml-1">
                        {content.likesCount || 0}
                      </small>
                    </a>
                  </span>
                </div>
              </div>
              <div className="border-top py-2 py-md-2 py-xl-3"></div>
              {/* <div className="post-content" ref="content"></div> */}
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
                      href="javascript:;"
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
                <Link
                    href={`user/${user.name}`}
                  >
                    <a
                      title={`由${user.diaplayName}发布`}
                      rel="author">
                      {user.displayName}
                    </a>
                  </Link>
                </span>
              原创发布在 COSY 主题演示站。未经许可，禁止转载。
            </div>
              {props.navigator}
            </div>
            <div id="comments" className="comments mt-5">
              <div className="h5 mb-4">
                <i className="text-xl text-primary iconfont icon-Chat mr-1"></i>
                <span className="d-inline-block align-middle">
                  评论
                <small className="font-theme text-sm">
                    ({content.commentsCount || 0})
                </small>
                </span>
              </div>
              <div id="respond" className="comment-respond">
                <form
                  method="post"
                  action="https://cosy.demo.nicetheme.xyz/wp-comments-post.php"
                  id="commentform"
                  className="comment-form"
                >
                  <div className="d-flex w-100">
                    <div className="comment-avatar-author flex-avatar w-48 mr-2">
                      <img
                        src="https://cosy.demo.nicetheme.xyz/wp-content/themes/Cosy3.3.0/images/default-avatar.png"
                        className="avatar w-48"
                      />
                    </div>
                    <div className="flex-fill comment-from-author">
                      <div className="comment-form-info">
                        <div className="row row-sm mb-2 mb-lg-3">
                          <div className="col py-1 py-lg-0">
                            <div className="form-group comment-form-author m-0">
                              <input
                                className="form-control"
                                id="author"
                                placeholder="昵称"
                                name="author"
                                type="text"
                                value=""
                                required
                              />
                            </div>
                          </div>
                          <div className="col-12 col-lg-4 py-1 py-lg-0">
                            <div className="form-group comment-form-email m-0">
                              <input
                                id="email"
                                className="form-control"
                                name="email"
                                placeholder="Email"
                                type="email"
                                value=""
                              />
                            </div>
                          </div>
                          <div className="col-12 col-lg-4 py-1 py-lg-0">
                            <div className="form-group comment-form-url m-0">
                              <input
                                className="form-control"
                                placeholder="网站地址"
                                name="url"
                                type="url"
                                value=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="comment-form-text mb-2">
                        <div className="form-group comment-textarea mb-3">
                          <textarea
                            id="comment"
                            name="comment"
                            className="form-control form-control-sm"
                            rows={3}
                          ></textarea>
                        </div>
                        <div className="form-submit text-right">
                          <Button type="link" size="large" className="mr-2">
                            再想想
                        </Button>
                          <Button type="primary" size="large">
                            发布评论
                        </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <ul className="comment-list"></ul>
            </div>
          </div>
          <div
            className="sidebar col-lg-3 d-none d-lg-block"
          >
            <div
              className="theiaStickySidebar"
            >
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
                      <input
                        type="text"
                        placeholder="说点什么吧…"
                        className="form-control"
                        value=""
                        name="s"
                        id="s"
                        required
                      />
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
                            backgroundImage: "url('https://cosy.demo.nicetheme.xyz/wp-content/uploads/2020/08/2020082618051678.jpg')"
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
                            backgroundImage: "url('https://cosy.demo.nicetheme.xyz/wp-content/uploads/2020/08/2020082618051984.jpg')"
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
                            backgroundImage: "url('https://cosy.demo.nicetheme.xyz/wp-content/uploads/2020/08/2020082618051895.jpg')"
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
                            backgroundImage: "url('https://cosy.demo.nicetheme.xyz/wp-content/uploads/2020/08/2020082618052175.jpg')"
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
                      width="600"
                      height="450"
                      src="https://cosy.demo.nicetheme.xyz/wp-content/uploads/2020/08/2020082618402284.png"
                      className="image wp-image-122  attachment-full size-full"
                      alt=""
                    />
                  </a>
                </div>
              </aside>
              <div
                className="resize-sensor"
              >
                <div
                  className="resize-sensor-expand"
                >
                </div>
                <div
                  className="resize-sensor-shrink"
                >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      { props.related}
    </div>
  )
}

export default DefaultContent
