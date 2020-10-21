import { NextPage, NextPageContext } from 'next'
import { fetchPost } from '@/api'
import { useState, useEffect } from 'react'
import DefaultContent from '@/components/Content/default'
import ImageContent from '@/components/Content/image'
import StatusContent from '@/components/Content/status'
import VideoContentProps from '@/components/Content/video'

import './[slug].less'

interface PostProps {
  title?: string
  description?: string
  data: any
}

const Post: NextPage<PostProps> = (props) => {
  const { title, data } = props
  const [content, setContent] = useState('')

  useEffect(() => {
    setContent(decodeURIComponent(props.data.content))
    return () => {
      //
    }
  })

  const relations = () => {
    return <div>test</div>
  }

  return (
    <DefaultContent title={title || ''} content={data} related={relations()}>
    </DefaultContent>
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
