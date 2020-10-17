
import Head from 'next/head'
import Link from 'next/link'
import { fetchPostList} from '@/api'
import SltList from '@/components/List'

// import { useRouter } from 'next/router'
import { NextPage, NextPageContext } from 'next';

interface HomeProps {
  title?: string
  data: any[]
  page: number
}

const Home: NextPage<HomeProps> = (props) => {
  const { data, page } = props
  return (
    <div className="slt-layout-content">
      <div className="slt-container">
        <SltList dataSource={data}></SltList>
        {/* <nav v-if="loadmore" class="slt-loadmore">
          <a-button
            ghost
            type="primary"
            :loading="loading"
            @click.prevent="onLoadMore"
          >
            加载更多
          </a-button>
        </nav> */}
      </div>
    </div>
  )
}

Home.getInitialProps = async ({ query }: NextPageContext) => {
  const page = 1
  const res = await fetchPostList({ page })
  return {
    data: res.list,
    page,
    // slug: String(slug),
  };
}

export default Home;