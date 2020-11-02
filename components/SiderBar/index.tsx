import { useState, ReactNode } from 'react'
import styles from './index.scss'
export interface SiderBarProps {
  children: ReactNode | ReactNode[]
}
export default function SiderBar(props: SiderBarProps) {
  return <div className={styles.sideBar}>{props.children}</div>
}
