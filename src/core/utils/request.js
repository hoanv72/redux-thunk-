import axios from "axios";

const service = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 5000,
});

service.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
service.interceptors.response.use(
  (response) => {
    if (response.status !== 200) {
      console.log({
        message: response.message || "Error",
        type: "error",
        duration: 5 * 1000,
      });
      return Promise.reject(new Error(response.message || "Error"));
    } else {
      return response.data;
    }
  },
  (error) => {
    console.log({
      message: error,
      type: "error",
      duration: 5 * 1000,
    });
    return Promise.reject(error);
  }
);

export default service;
