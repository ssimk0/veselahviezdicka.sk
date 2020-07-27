import axios from 'axios';

export const GALLERY_TYPE = 'gallery';
export const PAGES_TYPE = 'pages';

export default {
  list(type) {
    return axios.get(`/api/v1/uploads/${type}`);
  },
  listUploads(args) {
    const { type, category } = args;
    return axios.get(`/api/v1/uploads/${type}/${category}`);
  },
};
