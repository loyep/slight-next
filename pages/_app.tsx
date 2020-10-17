import { NextPage } from "next";
import { AppProps } from "next/app";
import Router from 'next/router';
import { useEffect } from 'react'
import Head from "next/head";
import { generateTitle } from '@/utils'
import "@/assets/styles/antd.less";
import "@/assets/styles/index.less";
import SltLayout from '@/components/Layout'
import NProgress from 'nprogress'

Router.events.on('routeChangeStart', () => {
  NProgress.start()
})

Router.events.on('routeChangeComplete', () => {
  setTimeout(() => {
    NProgress.done()
    window.scrollTo(0, 0);
  }, 0);
})

Router.events.on('routeChangeError', () => {
  NProgress.done()
})

type NextContext = AppProps & Record<string, any>;

const NextApp: NextPage<NextContext> = (props: NextContext) => {
  const { Component, pageProps } = props;
  const { title } = pageProps

  return (
    <>
      <Head>
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        {/* <meta charSet="utf-8" /> */}
        <title>{generateTitle(title)}</title>
        {/* <link rel="shortcut icon" href="/static/favicon.ico" type="image/ico" /> */}
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

export default NextApp;
