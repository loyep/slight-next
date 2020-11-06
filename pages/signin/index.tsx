import { NextPage, GetServerSideProps } from 'next'
import { useEffect } from 'react'
import './index.scss'
import { Form, Input, Button } from 'antd'
import { useDispatch } from 'react-redux'
import { updateLayout } from '~/store/actions'
import { useRouter } from 'next/router'

interface SignInProps extends PageProps {
  socials: any[]
  redirect?: string
}

const SignIn: NextPage<SignInProps> = (props) => {
  const { title } = props
  const router = useRouter()
  const dispatch = useDispatch()

  const onFinish = (values: any) => {
    console.log('Success:', values)
    router.push('/admin')
  }

  useEffect(() => {
    if (router.query.redirect) {
      router.replace('/')
      return
    }
    dispatch(updateLayout({ header: false, footer: false }))
    return () => {
      dispatch(updateLayout({ header: true, footer: true }))
    }
  }, [])

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  return (
    <div className="signMain">
      {title}
      <div className="signForm">
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

export const getServerSideProps: GetServerSideProps<SignInProps> = async ({ res }) => {
  return {
    props: {
      title: '登录|注册',
      socials: [],
      layout: 'login'
    },
  }
}

export default SignIn
