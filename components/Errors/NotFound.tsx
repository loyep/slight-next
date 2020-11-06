import { ReactNode } from 'react'

interface NotFoundProps {
  statusCode?: number
  title?: string
  children?: ReactNode
}

export default function NotFoundPage(props: NotFoundProps) {
  return (
    <>
      {props.statusCode === 404 ? (
        <div className="notFound">
          <div className="slt-container">
            <div className="notFoundContent">
              <div className="notFoundSvg">
                <div className="notFoundSvg404"></div>
              </div>
              <h1>404</h1>
              <h4 className="notFoundTitle">
                {props.title || '哎呀！该页面无法找到'}
              </h4>
              <p className="notFoundDesc">看起来这里没有任何东西…</p>
            </div>
          </div>
        </div>
      ) : (
          props.children
        )}
    </>
  )
}
