import React, { Component } from 'react';
import Link from 'next/link';

import Tag from './Tag';

export default class Article extends Component{
  render() {
    const { title, publishedAt, publishedYear, publishedMonth, id } = this.props.post;
    const tags = []
    return (
      <div className="box content p-box">
        <h2 className="title is-6">
          <Link as={`/posts/${id}`} href={`/post?id=${id}`} >
            <a className="p-boxTitle">{title}</a>
          </Link>
        </h2>
        <p className="subtitle is-7 u-pablished">{publishedAt}</p>
        <div className="field is-grouped is-grouped-multiline">
        {
          tags && tags.map(tag => {
            return (
              <Tag key={tag.slug} name={tag.name} color="blue" />
            )
          })
        }
        </div>
      </div>
    )
  }
}