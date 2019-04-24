import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';

import Layout from '../components/Layout';
import Article from '../components/Article';

import { ENDPOINT } from '../constants';

export default class Index extends Component {
  static async getInitialProps({ req }) {
    const res = await fetch(`${ENDPOINT}/posts?published=true`);
    const posts = await res.json();

    return { posts }
  }
  render() {
    const { posts } = this.props;

    return (
      <Layout>
        <div className="container">
          {
            posts && posts.map(post => <Article key={post._id} postId={post._id} title={post.title} publishedAt={post.publishedAt} slug={post.slug} tags={post.tag} />)
          }
        </div>
      </Layout>
    )
  }
}
