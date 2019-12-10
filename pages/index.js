import React, { Component } from 'react';
import Prismic from 'prismic-javascript';

import Layout from '../components/Layout';
import Article from '../components/Article';
import Pagenation from '../components/Pagination';
import Api from '../lib/api';
import { postFormatter, categoryFormatter } from '../lib/formatter';
import { apiEndpoint, accessToken } from '../lib/prismic-configuration';
import Client from '../lib/prismicHelpers';

export default class Index extends Component {
  static async getInitialProps({ req }) {
    let posts = await Client(req).query(
      Prismic.Predicates.at('document.type', 'blogpost')
    )
    posts = posts.results.map(post => postFormatter(post))
    return {　posts }
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
