import React, { Component } from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import ReactMarkDown from 'react-markdown';

import Layout from '../components/Layout';
import Tag from '../components/Tag';
import CodeBlock from '../components/CodeBlock';
import { strDateTo } from '../modules/utility';
import { ENDPOINT } from '../constants';

export default class Post extends Component {
  static async getInitialProps(context) {
    const { id } = context.query;
    const res = await fetch(`${ENDPOINT}/posts/${id}`);
    const post = await res.json();

    return { post }
  }
  render() {
    const { post } = this.props;
    const publishedDate = strDateTo(post.publishedAt)
    return(
      <Layout>
        <section className="section">
          <div className="container">
            <div className="box">
              <h1 className="p-post__title title is-3">{post.title}</h1>
              <p className="p-post__date subtitle is-7">{publishedDate}</p>
              <div className="field is-grouped is-grouped-multiline">
                { post.tag && post.tag.map(tag => <Tag key={tag._id} name={tag.name} color={tag.color} />)}
              </div>
              <div className="p-post">
                <ReactMarkDown source={post.body} renderers={{ code: CodeBlock }} linkTarget={'_blank'} />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}