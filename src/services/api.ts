
import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add authentication token to requests if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('auth_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authService = {
  login: async (email: string, password: string) => {
    const response = await api.post('/users/login', { email, password });
    localStorage.setItem('auth_token', response.data.token);
    return response.data;
  },
  
  register: async (userData: {
    email: string;
    password: string;
    mobile: string;
    age: string;
    location: string;
  }) => {
    const response = await api.post('/users/register', {
      ...userData,
      age: parseInt(userData.age)
    });
    localStorage.setItem('auth_token', response.data.token);
    return response.data;
  },
  
  logout: () => {
    localStorage.removeItem('auth_token');
  },
  
  getProfile: async () => {
    return api.get('/users/profile');
  }
};

export default api;
