import React, { Component } from 'react';

import 'normalize.css';
import Header from './Header';

export default class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Header />
        { children }
      </div>
    )
  }
}