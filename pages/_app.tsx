import { NextPage } from 'next'
import { AppProps } from 'next/app'
import Router from 'next/router'
import Head from 'next/head'
import { generateTitle } from '@/utils'
import '@/assets/styles/antd.less'
import '@/assets/styles/index.less'
import SltLayout from '@/components/Layout'
import NProgress from 'nprogress'
import { useEffect } from 'react'
import { withRouter } from 'next/router'

Router.events.on('routeChangeStart', () => {
  NProgress.start()
  console.log('routeChangeStart')
})

Router.events.on('routeChangeComplete', () => {
  console.log('routeChangeComplete')
  setTimeout(() => {
    NProgress.done()
    window.scrollTo(0, 0)
  }, 0)
})

Router.events.on('routeChangeError', () => {
  console.log('routeChangeError')
  NProgress.done()
})

type NextContext = AppProps & Record<string, any>

const NextApp: NextPage<NextContext> = (props) => {
  const { Component, pageProps } = props
  const { title, description } = pageProps

  useEffect(() => {
    //
  }, [])

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>{generateTitle(title)}</title>
        <meta name="description" content={description} />
      </Head>
      <SltLayout>
        <Component {...pageProps}></Component>
      </SltLayout>
    </>
  )
}

// NextApp.getInitialProps = async (context: NextContext) => {
//   const { ctx, Component } = context;
//   const pageProps = Component.getInitialProps
//     ? await Component.getInitialProps(ctx)
//     : {};

//   return { pageProps };
// };

export default withRouter(NextApp)
