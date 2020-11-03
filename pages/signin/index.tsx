import { NextPage, GetServerSideProps } from 'next'
import { useEffect } from 'react'
import styles from './index.scss'
import { Form, Input, Button, Checkbox } from 'antd';
import { useDispatch } from 'react-redux'
import { wrapper } from '@/store'
import { toggleHeaderVisible, toggleFooterVisible } from '@/store/actions'

interface SignInProps {
  title?: string
}

const SignIn: NextPage<SignInProps> = (props) => {
  const { title } = props
  const dispatch = useDispatch()
  const onFinish = values => {
    console.log('Success:', values);
  };

  useEffect(() => {
    dispatch(toggleHeaderVisible(false))
    dispatch(toggleFooterVisible(false))
    return () => {
      dispatch(toggleHeaderVisible(true))
      dispatch(toggleFooterVisible(true))
    }
  }, [dispatch])

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className={styles.main}>
      Sing In
      <div className={styles.form}>

        <Form
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}>
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

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(async ({ store }) => {
  // store.dispatch(toggleHeaderVisible(false))
  // store.dispatch(toggleFooterVisible(false))
  return {
    props: {
      title: '登录|注册'
    },
  }
})

export default SignIn
