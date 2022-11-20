import axios, { AxiosInstance } from 'axios';

export class RequestHandler {
  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL: import.meta.env.VITE_BACKEND_URL,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  http() {
    this.instance.interceptors.request.use((config) => {
      const token = localStorage.getItem('bearer_token');
      config.headers?.common?.set('Authorization', token ? `Bearer ${token}` : '');
      return config;
    })
    return this.instance;
  }
}