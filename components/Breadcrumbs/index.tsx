import React from 'react'
import { Breadcrumb } from 'antd'
import Link from 'next/link'
import styles from './index.scss'

export interface BreadcrumbItem {
  text: string
  href?: string
  icon?: React.ReactNode
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumbs({
  items = [],
  ...reset
}: BreadcrumbsProps) {
  return (
    <Breadcrumb className={styles.breadcrumbs} separator="›" {...reset}>
      {items.length &&
        items.map((item, index) => (
          <Breadcrumb.Item key={index}>
            {item.href != null ? (
              <Link href={item.href}>{item.text}</Link>
            ) : (
              <span>{item.text}</span>
            )}
          </Breadcrumb.Item>
        ))}
    </Breadcrumb>
  )
}
