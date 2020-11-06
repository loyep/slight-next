import { NextPage, GetServerSideProps } from 'next'
import './index.scss'

interface DashboardProps extends PageProps {
  redirect?: string
}

const Dashboard: NextPage<DashboardProps> = (props) => {
  const { title } = props
  return (
    <div className="adminMain">
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
