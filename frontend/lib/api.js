import WPAPI from 'wpapi';

class Api {
  constructor() {
    const isProduction = process.env.NODE_ENV === 'production';
    const endpoint = isProduction ? process.env.WP_URL : `http://wp-api:80`;
    this.wp = new WPAPI({ endpoint: `${endpoint}/wp-json` });
  }

  getPosts(per = 10, page = 1) {
    return this.wp.posts().perPage(per).page(page);
  }

  getCategories() {
    return this.wp.categories();
  }

  getCategory(id) {
    return this.wp.categories().id(id);
  }

  searchCases() {
    this.endpoint.searchCases = this.endpoint.registerRoute('wp/v2','/cases/(?P<id>[0-9]+)');
    return this.endpoint.searchCases();
  }
}

export default Api;
