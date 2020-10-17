
import { fetchPostList } from '@/api'
import SltList from '@/components/List'
import { useState} from 'react'
import { Button } from 'antd'

// import { useRouter } from 'next/router'
import { NextPage, NextPageContext } from 'next';

interface HomeProps {
  title?: string
  data: any[]
  page: number
}

const Home: NextPage<HomeProps> = (props) => {
  const [ loadMore, setLoadMore] = useState(true)
  const [ currentPage, setCurrentPage] = useState(props.page)
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(props.data || [])

  const addData = (newData: any[]) => {
    setData([
      ...data,
      ...newData
    ]);
  };

  const onLoadMore = async (e) => {
    e.preventDefault()
    if (loading) {
      return
    }
    try {
      setLoading(true)
      const page = currentPage + 1
      const res = await fetchPostList({ page })

      const { list = [], meta } = res
      if (list.length) {
        setCurrentPage(page)
        // const scrollTop = document.documentElement.scrollTop
        // console.log(document.documentElement.scrollTop)
        // document.documentElement.scrollTop = 0
        // this.data.push(...data)
        addData(list)
        if (data.length === meta.count) {
          setLoadMore(false)
        }
        setLoading(false)
        // document.documentElement.scrollTop = scrollTop
      } else {
        setLoadMore(false)
        setLoading(false)
      }
    } catch (error) {
      setLoading(false)
    }
  }

  return (
    <div className="slt-layout-content">
      <div className="slt-container">
        <SltList dataSource={data}></SltList>
        {loadMore && <nav className="slt-loadmore">
          <Button
            ghost
            type="primary"
            loading={loading}
            onClick={onLoadMore}
          >
            加载更多
          </Button>
        </nav>}
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
  };
}

export default Home;