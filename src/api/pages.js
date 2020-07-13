import axios from 'axios';

export default {
  detail(type, slug) {
    return axios.get(`/api/v1/pages/${type}/${slug}`);
  },
  list(slug) {
    return axios.get(`/api/v1/pages/${slug}`);
  },
};
