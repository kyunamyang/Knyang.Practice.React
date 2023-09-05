import axios from 'axios';
import { getToken, isTokenExpired, tokenRefresh } from './token';

const instance = axios.create({
  baseURL: '',
  timeout: 3000,
});

instance.interceptors.request.use(
  (config) => {
    const accessToken = getToken();

    config.headers['Content-Type'] = 'application/json';
    config.headers['Authorization'] = `Bearer ${accessToken}`;

    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    if (response.status === 404) {
      // [TODO]
    }
    return response;
  },
  async (error) => {
    if (error.response?.status === 401) {
      if (isTokenExpired()) await tokenRefresh();

      const accessToken = getToken();

      error.config.headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      };

      const response = await axios.request(error.config);
      return response;
    }
    return Promise.reject(error);
  }
);

export default instance;
