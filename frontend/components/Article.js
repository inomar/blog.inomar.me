import React, { Component } from 'react';
import Link from 'next/link';

import Tag from './Tag';

export default class Article extends Component{
  render() {
    const { title, publishedAt, categories, slug, postId } = this.props.post;
    const allCategories = this.props.categories;
    const tags = categories.map(category_id => allCategories.find(item => item.id == category_id));
    return (
      <div className="box content p-box">
        <h2 className="title is-6">
          <Link as={`/post/${1}`} href={`/post?id=${1}`} >
            <a className="p-boxTitle">{title}</a>
          </Link>
        </h2>
        <p className="subtitle is-7 u-pablished">{publishedAt}</p>
        <div className="field is-grouped is-grouped-multiline">
        {
          tags && tags.map(tag => {
            return (
              <Tag name={tag.name} color="blue" />
            )
          })
        }
        </div>
      </div>
    )
  }
}