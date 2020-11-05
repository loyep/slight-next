import { NextPage, GetServerSideProps } from 'next'
import { useEffect } from 'react'
import styles from './index.module.scss'
import { Form, Input, Button } from 'antd'
import { useDispatch } from 'react-redux'
import { END } from 'redux-saga'
import { wrapper } from '~/store'
import { updateLayout } from '~/store/actions'
import { useRouter } from 'next/router'

interface DashboardProps extends PageProps {
  redirect?: string
}

const Dashboard: NextPage<DashboardProps> = (props) => {
  const { title } = props
  return (
    <div className={styles.main}>
      {title}
      假装是控制台
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<DashboardProps> = async ({ res }) => {
  return {
    props: {
      title: '控制台',
      layout: 'admin'
    },
  }
}

export default Dashboard
