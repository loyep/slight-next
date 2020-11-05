import { AppProps, AppContext } from 'next/app'
import Head from 'next/head'
import { generateTitle } from '~/utils'
import SltLayout from '~/components/Layout'
import NProgress from '~/components/NProgress'
import { wrapper } from '~/store'
import { useMemo } from 'react'
import ErrorPage from '~/components/Errors/NotFound'
import '~/styles/less/index.less'
import '~/styles/sass/index.scss'

type NextContext = AppProps & Record<string, any>

const SltApp = (props: NextContext) => {
  const { Component, pageProps } = props
  const { title, description } = pageProps

  const layout = pageProps.layout

  const layoutProps = useMemo(() => {
    if (!layout) {
      return { header: true, footer: true }
    }
    return { header: false, footer: false }
  }, [layout])

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{generateTitle(title)}</title>
        <meta name="description" content={description} />
      </Head>
      <ErrorPage statusCode={props.statusCode}>
        <SltLayout {...layoutProps}>
          <Component {...pageProps}></Component>
        </SltLayout>
      </ErrorPage>
      <NProgress></NProgress>
    </>
  )
}

export default wrapper.withRedux(SltApp)
