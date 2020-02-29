import React from 'react';

import Link from 'next/Link';
import Head from 'next/head';

import withAnalytics from '~/hocs/withAnalytics';

function Home() {
  return (
    <>
      <Head>
        <title>
          Fabiomoraes.dev - Full Stack Developer (React JS - React Native -
          NodeJS)
        </title>
      </Head>
      <div>Pagina</div>
    </>
  );
}

export default withAnalytics()(Home);
