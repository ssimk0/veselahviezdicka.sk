import axios from 'axios';

export default {
  list(slug) {
    return axios.get(`/api/v1/pages/${slug}`);
  },
};
