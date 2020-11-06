import React, { useState, useEffect } from 'react'
import './Article.scss'

interface ArticleProps {
  content: string
}

export default function Article(props: ArticleProps) {
  const [content, setContent] = useState(props.content || '')

  useEffect(() => {
    setContent(decodeURIComponent(content))
    return () => {
      //
    }
  }, [content])

  return (
    <div
      className="ArticleContent"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}

