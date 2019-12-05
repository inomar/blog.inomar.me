import React, { Component } from 'react';

import Layout from '../components/Layout';
import Prismic from 'prismic-javascript';
import { RichText } from 'prismic-reactjs';
import { apiEndpoint, accessToken } from '../lib/prismic-configuration';

export default class About extends Component {
  static async getInitialProps({ req }) {
    const about = await this.getAboutPage(req);
    return { doc: about }
  }

  static async getAboutPage(req) {
    const API = await Prismic.getApi(apiEndpoint, { req, accessToken });
    return await API.getSingle('profile');
  }

  render() {
    const { doc } = this.props;
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="box">
              { RichText.asText(doc.data.about) }
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}