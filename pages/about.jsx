import React, { Component } from 'react';

import Layout from '../components/layouts/Layout';
import Prismic from 'prismic-javascript';
import { apiEndpoint, accessToken } from '../lib/prismic-configuration';
import HtmlSerializer from '../lib/htmlSerializer';
import Box from '../components/atoms/Box';

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
      <Layout title={'about'}>
        <Box>
          { HtmlSerializer(doc.data.about)}
        </Box>
      </Layout>
    )
  }
}