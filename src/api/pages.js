import axios from 'axios';

export default {
  detail(type, slug) {
    return axios.get(`/api/v1/pages/${type}/${slug}`);
  },
  list(slug) {
    return axios.get(`/api/v1/pages/${slug}`);
  },
  update(data) {
    const { id, title, body } = data;
    return axios.put(`/api/v1/pages/${id}`, {
      title,
      body,
    });
  },
};
