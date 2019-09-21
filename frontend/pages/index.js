import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';

import Layout from '../components/Layout';
import Article from '../components/Article';
import Pagenation from '../components/Pagination';
import Api from '../lib/api';
import { postFormatter, categoryFormatter } from '../lib/formatter';

// import { ENDPOINT } from '../constants';

export default class Index extends Component {
  static async getInitialProps({ req }) {
    const api = new Api();
    let posts = await api.getPosts();
    let categories = await api.getCategories();
    posts = posts.map(post => postFormatter(post));
    categories = categories.map(category => categoryFormatter(category));
    return { posts, categories };
  }

  render() {
    const { posts, categories } = this.props;
    return (
      <Layout>
        <section className="section">
          <div className="container">
          {
            posts && posts.map(post => <Article post={post} categories={categories} />)
          }
          
          </div>
        </section>

      </Layout>
    )
  }
}

const samplePosts = [
  {
    title: 'hoge',
    id: 1,
    slug: 'hogehoge',
    tag: [{_id: 1, name: 'react'}, {_id: 2, name: 'rest'}],
    publishedAt: '2019-09-20 00:00:00'
  },
  {
    title: 'hoge',
    id: 2,
    slug: 'hogehoge',
    tag: [{_id: 1, name: 'react'}, {_id: 2, name: 'rest'}],
    publishedAt: '2019-09-20 00:00:00'
  }
]
