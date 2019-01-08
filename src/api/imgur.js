// import axios from 'axios';
import qs from 'qs';
const CLIENT_ID = 'db34a535ac38743';
const ROOT_URL = 'https://api.imgur.com'
export default {
  login() {
    const queryString = {
      client_id: CLIENT_ID,
      response_type: 'token'
    };
    window.location.href = `${ROOT_URL}/oauth2/authorize?${qs.stringify(queryString)}`
  }
};