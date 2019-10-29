
import App, { Container } from 'next/app';
import Head from 'next/head';

import Layout from '../hoc/Layout';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <link rel='icon' href='/favicon.ico' />
          <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet' />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
    );
  }
}

export default MyApp;
