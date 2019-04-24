import React, { Component } from 'react';
import Link from 'next/link';
import moment from 'moment';

import Tag from './Tag';

export default class Article extends Component{
  render() {
    const { title, publishedAt, tags, slug, postId } = this.props;
    const publishedDate = moment(new Date(publishedAt)).format('YYYY.MM.DD');
    return (
      <div className="box content">
        <h2 className="title is-6">
          <Link as={`/post/${postId}`} href={`/post?id=${postId}`} >
            <a>{title}</a>
          </Link>
        </h2>
        <p className="subtitle is-7 u-pablished">{publishedDate}</p>
        <div className="field is-grouped is-grouped-multiline">
        {
          tags && tags.map(tag => {
            return (
              <Tag key={tag._id} name={tag.name} color="blue" />
            )
          })
        }
        </div>
      </div>
    )
  }
}