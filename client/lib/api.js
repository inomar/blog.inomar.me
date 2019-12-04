import WPAPI from 'wpapi';
import axios from 'axios';

class Api {
  constructor() {
    this.baseEndpoint = 'https://blog-inomar-me.cdn.prismic.io/api/v2';
    this.accessToken = 'MC5YZWRqU3hFQUFDc1lTclBF.Me-_vQQr77-9e--_vWQV77-977-9C3bvv73vv73vv73vv73vv73vv71A77-9GVbvv70r77-9Ru-_vUZE77-9Jw';
  }

  async getRef() {
    const response = await axios.get(this.baseEndpoint);
    if (response.status === 200) {
      const refs = response.data.refs;
      const refObj = refs.find(ref => ref.id === 'master');
      this.ref = refObj.ref;
      this.apiEndpoint = `${this.baseEndpoint}/documents/search?ref=${this.ref}&access_token=${this.accessToken}`;
    }
  }


  async getPost(id) {
    await this.getRef();
    return await axios.get(`${this.apiEndpoint}&q=[[at(document.id,"${id}")]]`);
  }

  async getPosts(per = 10, page = 1) {
    await this.getRef();
    return await axios.get(`${this.apiEndpoint}&page=${page}`);
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
