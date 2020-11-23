import axios from 'axios';

export const GALLERY_TYPE = 'gallery';
export const PAGES_TYPE = 'pages';
export const MENU_TYPE = 'menu';

export default {
  list(type) {
    return axios.get(`/api/v1/uploads/${type}`);
  },
  listUploads(args) {
    const { type, category } = args;
    return axios.get(`/api/v1/uploads/${type}/${category}`);
  },
  delete(args) {
    const { type, category, id } = args;
    return axios.delete(`/api/v1/uploads/${type}/${category}/${id}`);
  },
  createCategory(args) {
    const { name, subPath, type } = args;

    return axios.post(`/api/v1/uploads/${type}`, {
      name,
      subPath,
    });
  },
};
