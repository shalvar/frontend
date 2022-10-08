// create global axios instance
import axios from "axios";

const getToken = () => {
  if (typeof window === "undefined") return null;
  const token = (localStorage && localStorage?.getItem("access")) || null;
  return token;
};

const api = axios.create({
  baseURL: "http://localhost:8000/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

const request = (url, method, data) => {
  const token = getToken();
  if (token) api.defaults.headers.common.Authorization = `Bearer ${getToken()}`;

  return new Promise((resolve, reject) => {
    api
      .request({ url, method, data })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export default request;
