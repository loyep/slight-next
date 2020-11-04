import { fetchPostList, fetchRecommends } from '~/api'
import Cards from '~/components/Cards'
import { useState, useEffect } from 'react'
import { Button } from 'antd'
import { NextPage, GetServerSideProps } from 'next'

interface HistoryProps {
  title?: string
  data: any[]
  page: number
}

const History: NextPage<HistoryProps> = (props) => {
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
        addData(list)
        if (data.length === meta.count || list.length < meta.pageSize) {
          setLoadMore(false)
        }
        setLoading(false)
        document.documentElement.scrollTop = scrollTop + 10
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

export const getServerSideProps: GetServerSideProps = async () => {
  const page = 1
  const { list: data = [] } = await fetchPostList({ page })
  return {
    props: {
      data,
      title: '历史记录',
      page,
    },
  }
}

export default History
