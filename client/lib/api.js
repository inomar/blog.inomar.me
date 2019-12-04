import axios from 'axios';

class Api {
  constructor() {
    this.baseEndpoint = process.env.BASE_URL;
    this.accessToken = process.env.ACCESS_TOKEN;
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
}

export default Api;
