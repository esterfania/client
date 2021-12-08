import { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyles from 'styles/global';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React - Boilerplate</title>
        <link rel="shortcut icon" href="/img/icon.png"></link>
        <link rel="apple-touch-icon" href="/img/icon.png"></link>
        <link rel="manifest" href="/manifest.json"></link>
        <meta name="description" content="Um projeto simples para começar a trabalhar com React Avançado" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default App;
