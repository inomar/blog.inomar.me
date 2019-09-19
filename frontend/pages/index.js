import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';

import Layout from '../components/Layout';
import Article from '../components/Article';
import Pagenation from '../components/Pagination';

import { ENDPOINT } from '../constants';

export default class Index extends Component {
  // static async getInitialProps({ req }) {
  //   let page = req && req.query ? req.query.page : 0;
  //   page = parseInt(page) > 1 ? parseInt(page) : 1;
  //   const resCount = await fetch(`${ENDPOINT}/posts/count?published=true`);
  //   const res = await fetch(`${ENDPOINT}/posts?_sort=publishedAt:DESC&_limit=10&_start=${(page-1)*10}&published=true`);
  //   const posts = await res.json();
  //   const count = await resCount.json();
  //   return { posts, page, count }
  // }

  render() {
    const { posts, page, count } = this.props;
    return (
      <Layout>
        <section className="section">
          <div className="container">
          <p>準備中。。。</p>
          {
            // posts && posts.map(post => <Article key={post._id} postId={post._id} title={post.title} publishedAt={post.publishedAt} slug={post.slug} tags={post.tag} />)
          }
          
          </div>
        </section>

      </Layout>
    )
  }
}
