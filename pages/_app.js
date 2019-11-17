
import App from 'next/app';
import '@material/react-drawer/dist/drawer.css';
import '@material/react-list/dist/list.css';
import '@material/react-top-app-bar/dist/top-app-bar.css';

import Layout from '../hoc/Layout';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    );
  }
}

export default MyApp;
