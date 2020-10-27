import { NextPage } from 'next'
import React, { useState, useEffect } from 'react'
import { Col, Row, Card } from 'antd'
import './index.less'
import Link from 'next/link'
import { fromNow } from '@/utils/date'

interface ImageContentProps {
  content: any
  title: string
  htmlContent?: React.ReactNode | string
  description?: string
  related?: React.ReactNode
  social?: React.ReactNode
  breadcrumbs?: React.ReactNode
  navigator?: React.ReactNode
}

const DefaultContent: NextPage<ImageContentProps> = (props: Partial<ImageContentProps>) => {
  const { content } = props
  const { category, title, image, description, user } = content

  useEffect(() => {
    return () => {
      //
    }
  }, [])

  return (
    <div className="slt-article-image">
      <div className="article-cover">
        <div
          className="article-cover-color"
          style={{
            background: `linear-gradient(to top, rgb(249, 183, 5) 10%, rgb(4, 179, 207) 200%)`,
          }}
        ></div>
        <div className="article-cover-bg">
          <img src={image} alt={title} />
        </div>
        <div className="slt-container">
          <div className="slt-post-header">
            <h1 className="h1 mt-4 mt-md-5">{title}</h1>
            <div className="slt-post-header-meta text-sm text-muted text-center mt-3">
              <span className="author-name author-popup">
                {user.displayName}
              </span>
              <i className="text-light iconfont icon-dot1 mx-1 mx-md-2"></i>
              <time>{fromNow(content.publishedAt)}</time>
              <i className="text-light iconfont icon-dot1 mx-1 mx-md-2"></i>
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
          <div className="slt-media">
            <div className="slt-media-content">
              <img src={image} alt={title} />
            </div>
          </div>
        </div>
      </div>
      <div className="py-3 py-md-4 py-lg-5">
        <div className="slt-container">
          <Row justify="center" gutter={20} className="post">
            <Col md={24} xs={24} sm={24} lg={16} xl={16} xxl={16}>
              <Card className="post-content">
                { props.htmlContent }
                <div id="post-action" className="post-action mt-5 mt-lg-5">
                  <div className="d-md-flex flex-md-fill align-items-md-center">
                    <div className="d-none d-md-block">
                      <a
                        href="#"
                        className="d-inline-block btn-action-like mr-md-4"
                      >
                        <i className="text-xl iconfont icon-like"></i>
                        <span className="like-count font-theme align-middle ml-1">
                          {content.likesCount || 0}
                        </span>
                      </a>
                    </div>
                    <div className="flex-md-fill"></div>
                    {props.social}
                  </div>
                </div>

                <div
                  className="post-declare text-sm text-muted text-center text-md-left mt-5 mt-md-5"
                >
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
              </Card>
              {/* <div id="comments" className="comments mt-5">
                <div className="h5 mb-4">
                  <i className="text-xl text-primary iconfont icon-Chat mr-1"></i>
                  <span className="d-inline-block align-middle">
                    评论 <small className="font-theme text-sm">(0)</small>
                  </span>
                </div>
                <div id="respond" className="comment-respond">
                  <form
                    id="commentform"
                    method="post"
                    action="https://cosy.demo.nicetheme.xyz/wp-comments-post.php"
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
                                  id="author"
                                  className="form-control"
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
                                  id="url"
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
                            <a
                              id="cancel-comment-reply-link"
                              rel="nofollow"
                              style={{ display: "none" }}
                              className="btn btn-light mr-2"
                              href="#"
                            >
                              再想想
                          </a>
                            <input
                              id="submit"
                              name="submit"
                              type="submit"
                              className="btn btn-primary"
                              value="发布评论"
                            />
                            <input
                              id="comment_post_ID"
                              type="hidden"
                              name="comment_post_ID"
                              value="105"
                            />
                            <input
                              id="comment_parent"
                              type="hidden"
                              name="comment_parent"
                              value="0"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <ul className="comment-list"></ul>
              </div> */}
            </Col>
            <Col md={0} xs={0} sm={0} lg={8} xl={8} xxl={8}>
              <Card title="文章推荐">

              </Card>
            </Col>
          </Row>
        </div>
      </div>
      { props.related}
    </div>
  )
}

export default DefaultContent
