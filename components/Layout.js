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
          <title>不定期更新症候群</title>
          <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        </Head>
        <Header />
        { children }
        <Footer />
      </div>
    )
  }
}