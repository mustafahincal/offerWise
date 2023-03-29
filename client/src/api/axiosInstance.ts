import axios from "axios";

const apiURL = process.env.NEXT_PUBLIC_BASE_ENDPOINT;

const instance = axios.create({
  baseURL: apiURL,
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status === 401) {
      console.log("Please login again.");
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    try {
      //console.log(error?.response?.data?.message);
    } catch (e) {
      console.log("Something went wrong.");
    }
    return error;
  }
);

export default instance;
