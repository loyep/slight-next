import { NextPage, GetServerSideProps } from 'next'
import { fetchPost } from '@/api'
import { useState, useEffect } from 'react'
import DefaultContent from '@/components/Content/default'
import ImageContent from '@/components/Content/image'
import StatusContent from '@/components/Content/status'
import VideoContent from '@/components/Content/video'
import Relations from '@/components/Relations'

import './[slug].less'

interface PostProps {
  title?: string
  description?: string
  data: any
}

const Post: NextPage<PostProps> = (props) => {
  const { title = '', data } = props
  const [htmlContent, setHtmlContent] = useState('')

  useEffect(() => {
    setHtmlContent(decodeURIComponent(data.content))
    return () => {
      //
    }
  })

  const renderRelatedPost = () => {
    const related = data.related
    if (related && related.length) {
      return <Relations dataSource={data.related}></Relations>
    }
    return null
  }

  const renderContent = () => {
    const contentProps = {
      title: title,
      htmlContent: (<div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>),
      content: data,
      related: renderRelatedPost()
    }
    switch (data.type) {
      case 'image': return <ImageContent {...contentProps} />
      case 'status': return <StatusContent {...contentProps} />
      case 'video': return <VideoContent {...contentProps} />
      case 'default':
      default: return <DefaultContent {...contentProps} />
    }
  }

  return (
    <>
      {renderContent()}
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { slug } = query
  const res = await fetchPost({ slug })
  const { data } = res
  return {
    props: {
      slug: String(slug),
      title: data.title,
      description: data.description,
      data,
    },
  }
}

export default Post
