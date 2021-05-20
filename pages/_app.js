import React from 'react';
import Head from 'next/head';
import easterEgg from '../components/easterEgg';

import '../public/styles.css';

const App = ({ Component, pageProps }) => {
  return (
    <React.Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {console.log(easterEgg, "font-family:monospace")}
      <Component {...pageProps} />
    </React.Fragment>
  )
}

export default App;