import { NextPage, NextPageContext } from 'next'
import { fetchPost } from '@/api'
import { useState, useEffect } from 'react'

import './[slug].less'

interface PostProps {
  title?: string
  description?: string
  data: any
}

const Post: NextPage<PostProps> = (props) => {
  const [content, setContent] = useState('')

  useEffect(() => {
    setContent(decodeURIComponent(props.data.content))
    return () => {
      //
    }
  })
  return (
    <div className="slt-container">
      <main className="main">
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
      </main>

      <footer className="footer">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>
    </div>
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
