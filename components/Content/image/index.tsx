import { NextPage } from 'next'
import React, { useState, useEffect } from 'react'
import { Col, Row, Card } from 'antd'
import './index.less'
import Link from 'next/link'
import { fromNow } from '@/utils/date'
import SiderBar from '@/components/SiderBar'
import AuthorWidget from '@/components/Widget/Author'
import Header from './header'
import { EyeOutlined, LikeOutlined, MessageOutlined } from '@ant-design/icons'

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

const DefaultContent: NextPage<ImageContentProps> = (
  props: Partial<ImageContentProps>
) => {
  const { content } = props
  const { category, title, image, description, user } = content

  useEffect(() => {
    return () => {
      //
    }
  }, [])

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
    <div className="slt-article-image">
      {renderHeader()}
      {/* <div className="article-cover">
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
              <Link href={`/category/${category.slug}`}>
                <a rel="category" target="_blank">
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
      </div> */}
      <div className="py-3 py-md-4 py-lg-5">
        <div className="slt-container">
          <Row justify="center" className="post">
            <Col md={24} xs={24} sm={24} lg={17} xl={18} xxl={18}>
              <Card className="post-content">
                {props.htmlContent}
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
              </Card>
            </Col>
            <Col md={0} xs={0} sm={0} lg={7} xl={6} xxl={6}>
              <SiderBar>
                <AuthorWidget {...user} />
                <Card title="文章推荐"></Card>
                <Card title="随机推荐"></Card>
              </SiderBar>
            </Col>
          </Row>
        </div>
      </div>
      {props.related}
    </div>
  )
}

export default DefaultContent
