
import App from 'next/app';
import Head from 'next/head';
import '@material/react-drawer/dist/drawer.css';
import '@material/react-list/dist/list.css';
import '@material/react-top-app-bar/dist/top-app-bar.css';

import Layout from '../hoc/Layout';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <link rel='icon' href='/favicon.ico' />
          <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet' />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    );
  }
}

export default MyApp;
