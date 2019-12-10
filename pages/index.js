import React, { Component } from 'react';
import Prismic from 'prismic-javascript';

import Article from '../components/molecules/Article';
import Pagenation from '../components/Pagination';
import { postFormatter } from '../lib/formatter';
import Client from '../lib/prismicHelpers';
import Layout from '../components/layouts/Layout'

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
      <Layout title="">
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
