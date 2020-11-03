import React, { useEffect } from 'react';
import NProgressStatic from 'nprogress';
import Router from 'next/router';

const routeChangeStart = () => {
  NProgressStatic.start();
};

const routeChangeEnd = () => {
  NProgressStatic.done();
};

export default function NProgress() {
  useEffect(() => {
    Router.events.on('routeChangeStart', routeChangeStart);
    Router.events.on('routeChangeComplete', routeChangeEnd);
    Router.events.on('routeChangeError', routeChangeEnd);
    return () => {
      Router.events.off('routeChangeStart', routeChangeStart);
      Router.events.off('routeChangeComplete', routeChangeEnd);
      Router.events.off('routeChangeError', routeChangeEnd);
    };
  });

  return (
    <>
    </>
  );
};