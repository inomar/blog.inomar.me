import React, { Component } from 'react';

import Layout from '../components/Layout';
import Article from '../components/Article';
import Pagenation from '../components/Pagination';
import Api from '../lib/api';
import { postFormatter, categoryFormatter } from '../lib/formatter';

export default class Index extends Component {
  static async getInitialProps({ query }) {
    const api = new Api();
    const response = await api.getPosts();
    if (response.status === 200) {
      const { results } = response.data;
      const posts = results.map(result => postFormatter(result));
      return { posts };
    }
  }

  render() {
    const { posts } = this.props;
    return (
      <Layout>
        <section className="section">
          <div className="container">
          {
            posts.length > 0 && posts.map(post => <Article key={post.id} post={post} />)
          }
          </div>
        </section>

      </Layout>
    )
  }
}
