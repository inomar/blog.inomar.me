import React, { Component } from 'react';

import Layout from '../components/Layout';
import Article from '../components/Article';
import Pagenation from '../components/Pagination';
import Api from '../lib/api';
import { postFormatter, categoryFormatter } from '../lib/formatter';

export default class Index extends Component {
  static async getInitialProps({ query }) {
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
            posts && posts.map(post => <Article key={post.slug} post={post} categories={categories} />)
          }
          </div>
        </section>

      </Layout>
    )
  }
}
