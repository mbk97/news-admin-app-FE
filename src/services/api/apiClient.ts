import axios, { AxiosInstance } from "axios";

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
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  return client;
};

const apiClient = createApiClient();

export default apiClient;
