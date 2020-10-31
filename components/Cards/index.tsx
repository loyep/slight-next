import { NextPage } from 'next'
import React, { useState, useEffect, createContext, useMemo } from 'react'
import { Row } from 'antd'
import './index.less'
import Item, { CardsGridType } from './Item'

export interface CardsProps<RecordType> {
  dataSource: RecordType[]
  showMeta?: boolean
  grid?: CardsGridType
  rowKey?: string
}

export default function Cards<RecordType>(props: CardsProps<RecordType>) {
  const { dataSource, showMeta = true, grid, rowKey = 'id' } = props

  const getRowKey = (record: RecordType, index?: number) =>
    (record as any)[rowKey as string] || index

  const renderItems = useMemo(() => {
    return (
      dataSource &&
      dataSource.map((item: any, index: number) => {
        const recordKey = getRowKey(item, index)
        return (
          <Item
            key={recordKey}
            grid={grid}
            item={item}
            showMeta={showMeta}
          ></Item>
        )
      })
    )
  }, [dataSource, showMeta, rowKey])

  return (
    <div className="slt-list">
      <Row justify="start">{renderItems}</Row>
    </div>
  )
}
