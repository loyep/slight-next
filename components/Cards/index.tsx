import { NextPage } from 'next'
import React, { useState, useEffect } from 'react'
import { Row } from 'antd'
import './index.less'
import Item, { CardsGridType } from './Item'

interface SltCardsProps {
  dataSource: any[]
  showMeta?: boolean
  grid?: CardsGridType
  rowKey?: string
}

const defaultProps: SltCardsProps = {
  showMeta: true,
  dataSource: [],
}

const SltCards: NextPage<SltCardsProps> = (props) => {
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

export default SltCards
