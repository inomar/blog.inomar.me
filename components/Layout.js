import React, { Component } from 'react';
import Head from 'next/head';

import 'normalize.css';
import Header from './Header';

export default class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Head>
          <title>不定期更新症候群</title>
        </Head>
        <Header />
        { children }
      </div>
    )
  }
}