import React, { Component } from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import ReactMarkDown from 'react-markdown';

import Layout from '../components/Layout';
import Tag from '../components/Tag';

export default class Post extends Component {
  static async getInitialProps(context) {
    const { id } = context.query;
    const res = await fetch(`http://localhost:1337/posts/${id}`);
    const post = await res.json();

    return { post }
  }
  render() {
    const { post } = this.props;
    console.log(post)
    return(
      <Layout>
        <div className="container">
          <div className="box">
            <h1 className="title is-3">{post.title}</h1>
            <p className="subtitle is-7">{post.createdAt}</p>
            <div className="field is-grouped is-grouped-multiline">
              { post.tag && post.tag.map(tag => <Tag key={tag._id} name={tag.name} color={tag.color} />)}
            </div>
            <div className="p-post">
              <ReactMarkDown source={post.body} linkTarget={'_blank'} />
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}