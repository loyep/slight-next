import { AppProps } from 'next/app'
import Head from 'next/head'
import { generateTitle } from '@/utils'
import '@/assets/styles/antd.less'
import '@/assets/styles/index.less'
import SltLayout from '@/components/Layout'
// import NProgress from 'nprogress'
import { useEffect } from 'react'
import { withRouter } from 'next/router'

// Router.events.on('routeChangeStart', () => {
//   NProgress.start()
//   console.log('routeChangeStart')
// })

// Router.events.on('routeChangeComplete', () => {
//   console.log('routeChangeComplete')
//   setTimeout(() => {
//     NProgress.done()
//     window.scrollTo(0, 0)
//   }, 0)
// })

// Router.events.on('routeChangeError', () => {
//   console.log('routeChangeError')
//   NProgress.done()
// })

type NextContext = AppProps & Record<string, any>

function NextApp(props: NextContext) {
  const { Component, pageProps } = props
  const { title, description } = pageProps
  useEffect(() => {
    //
  }, [])

  return (
    <SltLayout>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{generateTitle(title)}</title>
        <meta name="description" content={description} />
      </Head>
      <Component {...pageProps}></Component>
    </SltLayout>
  )
}

export default withRouter(NextApp)
