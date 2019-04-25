import React, { Component } from 'react';
import Head from 'next/head';

import '../styles/main.scss';
import Header from './Header';
import Footer from './Footer';

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
{/* 
          <meta property="og:url" content="ページのURL" />
          <meta property="og:title" content="ページのタイトル" />
          <meta property="og:type" content="ページのタイプ">
          <meta property="og:description" content="記事の抜粋" />
          <meta property="og:image" content="画像のURL" />
          <meta name="twitter:card" content="カード種類" />
          <meta name="twitter:site" content="@Twitterユーザー名" />
          <meta property="og:site_name" content="サイト名" />
          <meta property="og:locale" content="ja_JP" />
          <meta property="fb:app_id" content="appIDを入力" /> */}
        </Head>
        <Header />
        { children }
        <Footer />
      </div>
    )
  }
}