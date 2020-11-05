import React, { useState, useEffect } from 'react'
import { Tag as AntTag, Popover as AntPopover } from 'antd'
import Link from 'next/link'
import styles from './Tags.module.scss'

interface TagsProps {
  tags: TagProps[]
  popover?: boolean
}

interface TagProps {
  text: string
  href?: string
  id?: number
  color?: string
  popover?: boolean
}

export function Tag(props: TagProps) {
  const defaultCtx = (
    <AntTag color={props.color || '#448EF6'}>
      <Link href={props.href || ''}>
        <a target="_blank">#{props.text}#</a>
      </Link>
    </AntTag>
  )

  if (props.popover) {
    const content = <div>{props.text}</div>

    return (
      <AntPopover trigger="hover" arrowPointAtCenter content={content}>
        {defaultCtx}
      </AntPopover>
    )
  }
  return defaultCtx
}

export default function Tags(props: TagsProps) {
  const { tags = [], popover = true } = props
  return (
    <div className={styles.tags}>
      {tags.map((_tag) => (
        <Tag key={_tag.text} {...{ popover }} {..._tag}></Tag>
      ))}
    </div>
  )
}
