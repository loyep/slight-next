import { NextPage } from 'next'
import React, { useState, useEffect } from 'react'
import styles from './index.module.css'

interface ContentProps {
  content: string
}

const Content: NextPage<ContentProps> = (props) => {
  const { content } = props
  const [html, setHtml] = useState('')

  useEffect(() => {
    setHtml(encodeURI(content))
    return () => {
      //
    }
  }, [content])

  return (
    <div
      className={styles.content}
      dangerouslySetInnerHTML={{ __html: html }}
    ></div>
  )
}

export default Content
