import { NextPage } from 'next'
import React, { useMemo, useEffect } from 'react'
import { Col, Row, Card } from 'antd'
import './index.less'
import styles from './index.scss'
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
  onViewClick?: () => void
  onCommentClick?: () => void
  onLikeClick?: () => void
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

  const renderHeader = useMemo(() => {
    const meta = (
      <>
        <span onClick={props.onViewClick}>
          <EyeOutlined />
          <span>{content.viewsCount || 0}</span>
        </span>
        <button onClick={props.onCommentClick}>
          <MessageOutlined />
          <span> {content.commentsCount || 0}</span>
        </button>
        <button onClick={props.onLikeClick}>
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
  }, [content, category, title])

  return (
    <div className={styles.main}>
      <div className="slt-container">
        {props.breadcrumbs}
        {renderHeader}
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
      {props.related}
    </div>
  )
}

export default DefaultContent
