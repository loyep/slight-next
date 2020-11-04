import { fetchCategoryList } from '~/api'
import { useState } from 'react'
import { NextPage, NextPageContext } from 'next'

interface CategoriesProps {
  title?: string
  description?: string
  data: any[]
  page: number
}

const Categories: NextPage<CategoriesProps> = (props) => {
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
      const res = await fetchCategoryList({ page })

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
    <main className="slt-layout-content">
      <div className="slt-container">
        <div className="row row-sm my-n2"></div>
      </div>
    </main>
  )
}

Categories.getInitialProps = async ({ query, err }: NextPageContext) => {
  const page = 1
  const res = await fetchCategoryList({ page })
  const { list: data = [], meta } = res
  return {
    title: '分类',
    description: '',
    data,
    page,
  }
}

export default Categories
