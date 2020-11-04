import { NextPage, GetServerSideProps } from 'next'
import NotoFoundPage from '~/components/Errors/NotFound'
import { fetchPostList, fetchCategory } from '~/api'
import Cards from '~/components/Cards'
import { useState } from 'react'
import { Button } from 'antd'
import SltCoverHeader from '~/components/Header/CoverHeader'

interface CategoryProps {
  title?: string
  description?: string
  data: any[]
  page: number
  category: any
  error?: any
}

const Category: NextPage<CategoryProps> = (props) => {
  const { category, error } = props
  if (error) {
    return (
      <NotoFoundPage statusCode={404} title={`Sorry. No user was found.`} />
    )
  }

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
      const res = await fetchPostList({ page, category: category.id })

      const { list = [], meta } = res
      if (list.length) {
        setCurrentPage(page)
        const scrollTop = document.documentElement.scrollTop
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
    <div className="slt-category">
      <SltCoverHeader
        title={category.name}
        image={category.image}
        description={category.description}
      />
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
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({
  query,
  res,
}) => {
  try {
    const { slug } = query
    const page = 1
    const categoryRes = await fetchCategory({ slug })
    const { data: category = {} } = categoryRes || {}
    const postsRes = await fetchPostList({ page, category: category.id })
    const { list: data = [] } = postsRes
    return {
      props: {
        title: category.name,
        description: category.description,
        data,
        category,
        page,
      },
    }
  } catch (error) {
    res.statusCode = 404
    return { props: { error: '哎呀！该页面无法找到' } }
  }
}

export default Category
