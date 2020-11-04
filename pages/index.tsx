import { fetchPostList, fetchRecommends } from '~/api'
import Cards from '~/components/Cards'
import { useState } from 'react'
import { Button } from 'antd'
import { NextPage, GetServerSideProps } from 'next'
import Banner from '~/components/Banner'
import { useDispatch } from 'react-redux'
import { END } from 'redux-saga'
import { wrapper } from '~/store'
import { RootState } from '~/store/types'
import { connect } from 'react-redux'
import { updateLayout } from '~/store/actions'

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

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    const page = 1
    const { list: data = [] } = await fetchPostList({ page })
    const { data: recommends = [] } = await fetchRecommends()
    return {
      props: {
        data,
        recommends,
        page,
      },
    }
  }
)

export default connect((state: RootState) => state)(Home)
