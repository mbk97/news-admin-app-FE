import axios, { AxiosInstance } from "axios";
import { getUserDetails } from "../../utils/saveData";

const redirectToLogin = () => {
  localStorage.clear(); // You should implement this to clear localStorage/session
  window.location.href = "/login";
};

// Create a base API client
const createApiClient = (): AxiosInstance => {
  const baseURL = import.meta.env.VITE_API_URL;

  const client = axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
    },
  });

  // Add request interceptor for auth token
  client.interceptors.request.use((config) => {
    const token = getUserDetails("user_data")?.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  // Add response interceptor to catch 401 errors
  client.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response?.status === 401) {
        redirectToLogin();
      }
      return Promise.reject(error);
    }
  );
  return client;
};

const apiClient = createApiClient();

export default apiClient;
