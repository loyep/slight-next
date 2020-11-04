import { AppProps } from 'next/app'
import Head from 'next/head'
import { generateTitle } from '~/utils'
import SltLayout from '~/components/Layout'
import NProgress from '~/components/NProgress'
import { wrapper } from '~/store'
import ErrorPage from '~/components/Errors/NotFound'
import '../styles/index.scss'

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
      <ErrorPage statusCode={props.statusCode}>
        <SltLayout>
          <Component {...pageProps}></Component>
        </SltLayout>
      </ErrorPage>
      <NProgress></NProgress>
    </>
  )
}

export default wrapper.withRedux(App)
