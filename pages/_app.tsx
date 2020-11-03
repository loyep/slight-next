import { AppProps, Container } from 'next/app'
import Head from 'next/head'
import { generateTitle } from '@/utils'
import '@/assets/styles/antd.less'
import '@/assets/styles/index.less'
import SltLayout from '@/components/Layout'
import NProgress from '@/components/NProgress'
import { useEffect } from 'react'
import { wrapper } from '@/store'

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

function App(props: NextContext) {
  const { Component, pageProps } = props
  const { title, description } = pageProps
  useEffect(() => {
    //
  }, [])

  return (
    <Container>
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
    </Container>
  )
}

export default wrapper.withRedux(App)
