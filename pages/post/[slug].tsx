import { NextPage, GetServerSideProps } from 'next'
import { fetchPost } from '@/api'
import { useState, useEffect, useMemo } from 'react'
import DefaultContent from '@/components/Content/default'
import ImageContent from '@/components/Content/image'
import StatusContent from '@/components/Content/status'
import VideoContent from '@/components/Content/video'
import Relations from '@/components/Relations'
import Content from '@/components/Content/Content'
import Breadcrumbs from '@/components/Breadcrumbs'
import './[slug].scss'

interface PostProps {
  title?: string
  description?: string
  data: any
}

const Post: NextPage<PostProps> = (props) => {
  const { title = '', data } = props
  const { related, category, content } = data

  useEffect(() => {
    return () => {
      //
    }
  })

  const renderRelatedPost = useMemo(() => {
    const related = data.related
    if (related && related.length) {
      return <Relations dataSource={data.related}></Relations>
    }
    return null
  }, [related])

  const renderBreadcrumb = useMemo(() => {
    const items = [
      {
        text: '首页',
        href: '/',
      },
      {
        text: category.name,
        href: `/category/${category.slug}`,
      },
      {
        text: title,
      },
    ]
    return <Breadcrumbs items={items}></Breadcrumbs>
  }, [title, category])

  const renderContent = () => {
    const contentProps = {
      title: title,
      htmlContent: <Content content={content}></Content>,
      content: data,
      related: renderRelatedPost,
      breadcrumbs: renderBreadcrumb,
    }
    switch (data.type) {
      case 'image':
        return <ImageContent {...contentProps} />
      case 'status':
        return <StatusContent {...contentProps} />
      case 'video':
        return <VideoContent {...contentProps} />
      case 'default':
      default:
        return <DefaultContent {...contentProps} />
    }
  }

  return <>{renderContent()}</>
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  try {
    const { slug } = query
    const res = await fetchPost({ slug })
    const { data } = res
    return {
      props: {
        slug: String(slug),
        title: data.title,
        description: data.description || '',
        data,
      },
    }
  } catch (error) {
    return {
      unstable_redirect: {
        permanent: true,
        destination: '文章未找到'
      }
    }
  }
}

export default Post
