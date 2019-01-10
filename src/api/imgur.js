import axios from 'axios';
import qs from 'qs';
const CLIENT_ID = 'db34a535ac38743';
const ROOT_URL = 'https://api.imgur.com';

export default {
  login() {
    const queryString = {
      client_id: CLIENT_ID,
      response_type: 'token'
    };
    window.location.href = `${ROOT_URL}/oauth2/authorize?${qs.stringify(queryString)}`
  },
  fetchImages(token) {
    const config = { 
      method: 'get',
      baseURL: ROOT_URL,
      url: '/3/account/me/images',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }
    return axios(config);
  },
  uploadImages(imageList, token) {
    const imageRequests = Array.from(imageList).map(image => {
      const formData = new FormData();
      formData.append('image', image);
      return axios.post(`${ROOT_URL}/3/image`, formData, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
    });
    return Promise.all(imageRequests);
  }
};