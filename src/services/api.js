import axios from "axios";

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  timeout: 20000,
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json",
  },
});

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;
