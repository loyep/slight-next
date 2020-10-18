import { fetchPostList, fetchRecommends } from '@/api'
import SltList from '@/components/List'
import { useState } from 'react'
import { Button } from 'antd'
import { NextPage, NextPageContext } from 'next'
import SltMagazine from '@/components/Magazine'

interface HomeProps {
  title?: string
  data: any[]
  recommends: any[]
  page: number
}

const Home: NextPage<HomeProps> = (props) => {
  const {recommends = []} = props
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
      <SltMagazine dataSource={recommends}></SltMagazine>
      <div className="slt-layout-content">
        <div className="slt-container">
          <SltList dataSource={data}></SltList>
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
  const recommends =  Object.values(recommendRes || [])

  return {
    data: res.list,
    recommends,
    page,
  }
}

export default Home
