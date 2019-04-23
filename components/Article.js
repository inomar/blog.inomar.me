import React, { Component } from 'react';
import { FaSlackHash } from "react-icons/fa";

export default class Article extends Component{
  render() {
    const { title, publishedAt, tags } = this.props;
    return (
      <div className="box content">
        <h2 className="title is-6"><a href="#">{title}</a></h2>
        <p className="subtitle is-7 u-pablished">{publishedAt}</p>
        <div className="field is-grouped is-grouped-multiline">
        {
          tags && tags.map(tag => {
            return (
              <div className="control" key={tag.id}>
                <div className="tags has-addons">
                  <span className="tag u-tag__hash"><FaSlackHash /></span>
                  <span className={`tag is-${tag.color}`}>{tag.name}</span>
                </div>
              </div>
            )
          })
        }
        </div>
      </div>
    )
  }
}