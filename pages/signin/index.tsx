import { NextPage, GetServerSideProps } from 'next'

interface SignInProps {
  title?: string
}

const SignIn: NextPage<SignInProps> = (props) => {
  const { title } = props

  return (
    <>
      <div className="slt-layout-content">
        Sing In
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      title: '登录|注册'
    },
  }
}

export default SignIn
