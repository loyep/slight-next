import { AppProps } from 'next/app'
import Head from 'next/head'
import { generateTitle } from '@/utils'
import '@/assets/styles/antd.less'
import '@/assets/styles/index.less'
import SltLayout from '@/components/Layout'
import NProgress from '@/components/NProgress'
import { wrapper } from '@/store'

type NextContext = AppProps & Record<string, any>

function App(props: NextContext) {
  const { Component, pageProps } = props
  const { title, description } = pageProps

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{generateTitle(title)}</title>
        <meta name="description" content={description} />
      </Head>
      <SltLayout>
        <Component {...pageProps}></Component>
        <NProgress></NProgress>
      </SltLayout>
    </>
  )
}

export default wrapper.withRedux(App)
