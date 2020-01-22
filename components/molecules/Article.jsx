import React, { Component } from 'react';

import Box from '../atoms/Box';
import Title from '../atoms/Title';
import DateText from '../atoms/DateText';
import HyperLink from '../atoms/HyperLink';
import Tags from './Tags';

export default class Article extends Component {
  render() {
    const { post } = this.props;
    const { title, publishedRawAt, uid, tags, type } = post;
    return (
      <Box p={3}>
        <Title as="h2" color="primary" mb={2} fontSize={3}>
          <HyperLink uid={uid} type={type} >
            <a>{title}</a>
          </HyperLink>
        </Title>
        <DateText date={publishedRawAt} />
        <Tags tags={tags} id={uid} />
      </Box>
    )
  }
}