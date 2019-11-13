import React, { Component } from 'react';
import MicrolinkCard from '@microlink/react';

export default class LinkCard extends Component {
  render() {
    const { href } = this.props;
    return (
      <MicrolinkCard url={href} />
    )
  }
}