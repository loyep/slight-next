import React, { useState, useEffect } from 'react'
import styles from './Article.module.scss'

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
      className={styles.content}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}

