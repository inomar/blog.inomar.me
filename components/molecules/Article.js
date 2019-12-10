import React, { Component } from 'react';

import Tag from '../atoms/Tag';
import HyperLink from '../atoms/HyperLink';

export default class Article extends Component{
  render() {
    const { post } = this.props;
    const { title, publishedAt, uid, tags, type } = post;
    return (
      <div className="box content p-box">
        <h2 className="title is-6">
          <HyperLink uid={uid} type={type} >
            <a className="p-boxTitle">{title}</a>
          </HyperLink>
        </h2>
        <p className="subtitle is-7 u-pablished">{publishedAt}</p>
        <div className="field is-grouped is-grouped-multiline">
        {
          tags && tags.map(tag => {
            return (
              <Tag key={`${uid}-${tag}`} name={tag} color="blue" />
            )
          })
        }
        </div>
      </div>
    )
  }
}