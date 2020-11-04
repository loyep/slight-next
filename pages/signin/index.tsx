import { NextPage, GetServerSideProps } from 'next'
import { useEffect } from 'react'
import styles from './index.module.scss'
import { Form, Input, Button } from 'antd'
import { useDispatch } from 'react-redux'
import { END } from 'redux-saga'
import { wrapper } from '~/store'
import { RootState } from '~/store/types'
import { connect } from 'react-redux'
import { updateLayout } from '~/store/actions'

interface SignInProps {
  title?: string
}

const SignIn: NextPage<SignInProps> = (props) => {
  const { title } = props
  const dispatch = useDispatch()
  const onFinish = (values: any) => {
    console.log('Success:', values)
  }

  useEffect(() => {
    return () => {
      dispatch(updateLayout({ header: true, footer: true }))
    }
  }, [dispatch])

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  return (
    <div className={styles.main}>
      {title}
      <div className={styles.form}>
        <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    store.dispatch(updateLayout({ header: false, footer: false }))
    store.dispatch(END)
    return {
      props: {
        title: '登录|注册',
      },
    }
  }
)

export default connect((state: RootState) => state)(SignIn)
