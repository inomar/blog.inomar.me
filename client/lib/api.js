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
    }}}

export default Api;
