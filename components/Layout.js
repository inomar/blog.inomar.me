import React, { Component } from 'react';
import Head from 'next/head';

import '../styles/main.scss';
import Header from './Header';
import Footer from './Footer';

import ogp from '../modules/ogp';

export default class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Head>
          <title>不定期更新症候群 ~ フルスタックエンジニアを目指して ~ </title>
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
          <link rel="shortcut icon" type="image/x-icon" href="/static/favicon.ico"></link>
          <meta name="description" content="不定期更新のwebエンジニアいのまーのブログです。フルスタックエンジニアを目指して日々奮闘しております。" />
          <ogp />
        </Head>
        <Header />
        { children }
        <Footer />
      </div>
    )
  }
}