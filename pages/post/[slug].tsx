import { NextPage, NextPageContext } from 'next'
import { fetchPost } from '@/api'
import { useState, useEffect } from 'react'
import DefaultContent from '@/components/Content/default'
import ImageContent from '@/components/Content/image'
import StatusContent from '@/components/Content/status'
import VideoContent from '@/components/Content/video'

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

  const relations = () => {
    return <div>test</div>
  }

  const htmlBody = (<div dangerouslySetInnerHTML={{__html: htmlContent}}></div>)

  const renderContent = () => {
    switch (data.type) {
      case 'image': return <ImageContent title={title} htmlContent={htmlBody} content={data} related={relations()} />
      case 'status': return <StatusContent title={title} htmlContent={htmlBody} content={data} related={relations()} />
      case 'video': return <VideoContent title={title} htmlContent={htmlBody} content={data} related={relations()} />
      case 'default':
      default:
        return <DefaultContent title={title} htmlContent={htmlBody} content={data} related={relations()} />
    }
  }

  return (
    <>
      {renderContent()}
    </>
  )
}

Post.getInitialProps = async ({ query }: NextPageContext) => {
  const { slug } = query
  const res = await fetchPost({ slug })
  const { data } = res

  return {
    slug: String(slug),
    title: data.title,
    description: data.description,
    data,
  }
}

export default Post
