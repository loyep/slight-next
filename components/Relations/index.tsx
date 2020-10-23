import { NextPage } from 'next'
import React, { useState, useEffect } from 'react'
import Cards from '../Cards'
import './index.less'

interface SltRelationProps {
  dataSource: any[]
}

const SltRelation: NextPage<SltRelationProps> = (props: SltRelationProps) => {
  const { dataSource = [] } = props

  return (
    <div className="slt-relation">
      <div className="slt-container">
        <div className="slt-relation-title">
          <i className="iconfont icon-gengxin mr-1"></i>
          <span>相关文章</span>
        </div>
        <div className="slt-relation-scroll">
          <Cards
            grid={{
              gutter: 0,
              xs: 2,
              sm: 2,
              md: 4,
              lg: 4,
              xl: 4,
              xxl: 4,
            }}
            dataSource={dataSource}
            showMeta={false}
          />
        </div>
      </div>
    </div>
  )
}

export default SltRelation
