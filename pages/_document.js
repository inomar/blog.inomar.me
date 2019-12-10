import Document, { Head, Main, NextScript } from 'next/document';

import Ogp from '../lib/ogp';
import Header from '../components/layouts/Header';
import Footer from '../components/layouts/Footer';
import '../styles/main.scss';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return(
      <html>
        <Head>
          <meta charSet="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
          <link rel="shortcut icon" type="image/x-icon" href="/static/favicon.ico"></link>
          <Ogp />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
