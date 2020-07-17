import axios from 'axios';

export default {
  login(data) {
    // Make sure don't send anything more then email, password
    const { email, password } = data;
    return axios.post('/api/v1/auth/login', {
      email,
      password,
    });
  },
  forgotPassword(data) {
    const { email } = data;
    return axios.post('/api/v1/auth/forgot-password', { email });
  },
  userInfo() {
    return axios.get('/api/v1/auth/user');
  },
};
