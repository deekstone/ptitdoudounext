import { Config } from "@config";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `${Config.BASE_URL}`,
  timeout: 10000,
  headers: { "X-Custom-Header": "foobar" },
});

// axiosInstance.interceptors.request.use(async (config) => {
//   const token = await store.getState().user.accessToken;
//   config.headers.common.Authorization = token;
//   return config;
// });

axiosInstance.interceptors.response.use(
  (response) => Promise.resolve(response.data),
  (error) => {
    console.log("error", error);
    return Promise.reject(error);
  }
);

export { axiosInstance };
