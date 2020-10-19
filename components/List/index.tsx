import { NextPage } from 'next'
// import Router from 'next/router';
import React, { useState, useEffect } from 'react'
import { Row } from 'antd'
import './index.less'
import Item from './Item'

export interface ListGridType {
  gutter?: number
  column?: number
  xs?: number
  sm?: number
  md?: number
  lg?: number
  xl?: number
  xxl?: number
}

interface SltListProps {
  dataSource: any[]
  showMeta?: boolean
  grid?: ListGridType
  rowKey?: string
}

const defaultProps: SltListProps = {
  showMeta: true,
  dataSource: [],
}

const SltList: NextPage<SltListProps> = (props) => {
  const { dataSource, showMeta = true, grid, rowKey = 'id' } = { ...defaultProps, ...props }

  const renderListItem = (item: any) => {
    const key = item[rowKey]
    return <Item key={key} grid={grid} item={item} showMeta={showMeta}></Item>
  }

  return (
    <div className="slt-list">
      <Row justify="start">
        {dataSource.map((item) => renderListItem(item))}
      </Row>
    </div>
  )
}

export default SltList
