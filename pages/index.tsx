import { fetchPostList, fetchRecommends } from '@/api'
import Cards from '@/components/Cards'
import { useState } from 'react'
import { Button } from 'antd'
import { NextPage, NextPageContext } from 'next'
import Banner from '@/components/Banner'

interface HomeProps {
  title?: string
  data: any[]
  recommends: any[]
  page: number
}

const Home: NextPage<HomeProps> = (props) => {
  const { recommends = [] } = props
  const [loadMore, setLoadMore] = useState(true)
  const [currentPage, setCurrentPage] = useState(props.page)
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState(props.data || [])

  const addData = (newData: any[]) => {
    setData([...data, ...newData])
  }

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
        const scrollTop = document.documentElement.scrollTop
        // document.documentElement.scrollTop = 0
        addData(list)
        if (data.length === meta.count || list.length < meta.pageSize) {
          setLoadMore(false)
        }
        setLoading(false)
        document.documentElement.scrollTop = scrollTop
      } else {
        setLoadMore(false)
        setLoading(false)
      }
    } catch (error) {
      setLoading(false)
    }
  }

  return (
    <>
      <Banner dataSource={recommends}></Banner>
      <div className="slt-layout-content">
        <div className="slt-container">
          <Cards dataSource={data} />
          {loadMore && (
            <nav className="slt-loadmore">
              <Button
                ghost
                type="primary"
                loading={loading}
                onClick={onLoadMore}
              >
                加载更多
              </Button>
            </nav>
          )}
        </div>
      </div>
    </>
  )
}

Home.getInitialProps = async ({ query }: NextPageContext) => {
  const page = 1
  const res = await fetchPostList({ page })
  const recommendRes = await fetchRecommends()
  const recommends = recommendRes.data || []

  return {
    data: res.list,
    recommends,
    page,
  }
}

export default Home
