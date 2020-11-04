import React, { useMemo, useEffect } from 'react'
import { Col, Row } from 'antd'
import styles from './index.module.scss'
import Link from 'next/link'
import { fromNow } from '~/utils/date'
import SiderBar from '~/components/SiderBar'
import AuthorWidget from '~/components/Widget/Author'
import SinglePostWidget from '~/components/Widget/SinglePost'
import Header from './header'
import { EyeOutlined, LikeOutlined, MessageOutlined } from '@ant-design/icons'
import { ContentProps } from '~/components/Content'
import Container from '../Container'

type ImageContentProps = ContentProps

export default function ImageContent(props: ImageContentProps) {
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
      image: content.image
    }
    return <Header {...headerProps} />
  }, [content, category, title])

  return (
    <div className={styles.main}>
      <div className="slt-container">
        {props.breadcrumbs && <div className="breadcrumb">
          {props.breadcrumbs}
        </div>}
        {renderHeader}
        <Row justify="center">
          <Col md={24} xs={24} sm={24} lg={17} xl={18} xxl={18}>
            <Container>
              {props.htmlContent}
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
            </Container>
          </Col>
          <Col md={0} xs={0} sm={0} lg={7} xl={6} xxl={6}>
            <SiderBar>
              <AuthorWidget {...user} />
              <SinglePostWidget {...user} />
            </SiderBar>
          </Col>
        </Row>
      </div>
      {props.related}
    </div>
  )
}
