import React, { Component } from 'react';
import { Row, Col } from 'react-grid-system';
import Prismic from 'prismic-javascript';

import Article from '../components/molecules/Article';
import Pagenation from '../components/molecules/Pagination';
import { postFormatter } from '../lib/formatter';
import Client from '../lib/prismicHelpers';
import Layout from '../components/layouts/Layout'

export default class Index extends Component {
  static async getInitialProps({ req, query }) {
    const { page } = query;
    let posts = await Client(req).query(
      Prismic.Predicates.at('document.type', 'blogpost'),
      { pageSize : 10, page }
    )
    const { next_page, prev_page } = posts; 
    const currentPage = posts.page;
    posts = posts.results.map(post => postFormatter(post))
    return {　posts, next_page, prev_page, page: currentPage };
  }

  render() {
    const { posts, next_page, prev_page, page } = this.props;
    return (
      <Layout title="">
        <Row>
          {
            posts.length > 0 && posts.map(post => (
              <Col sm={12} >
                <Article key={post.id} post={post} />
              </Col>
            ))
          }
        </Row>
        <Row>
          <Pagenation page={page} nextPage={next_page} prevPage={prev_page} />
        </Row>
      </Layout>
    )
  }
}
