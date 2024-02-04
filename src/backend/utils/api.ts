
// utils/api.ts
import axios from 'axios';
import Cookies from 'js-cookie';
import {jwtDecode} from 'jwt-decode';

// Assuming you have environment variables set for your API's base URL
const API_BASE_URL = process.env.NODE_ENV === 'development' ? process.env.NEXT_PUBLIC_DEV_URL : process.env.NEXT_PUBLIC_PROD_URL;

// Create an Axios instance
const API = axios.create({
  baseURL: API_BASE_URL,
});

// Function to refresh tokens
async function refreshTokens() {
  const refreshToken = Cookies.get('wuhu-refreshToken');
  if (!refreshToken) {
    throw new Error('No refresh token available');
  }
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/refresh`, {}, {
      headers: {
        Authorization: `Bearer ${refreshToken}`
      }
    });
    Cookies.set('wuhu-accessToken', response.data.accessToken);
    Cookies.set('wuhu-refreshToken', response.data.refreshToken);
    return response.data.accessToken;
  } catch (error) {
    console.error('Error refreshing tokens:', error);
    throw new Error('Failed to refresh token');
  }
}

// Add a request interceptor
API.interceptors.request.use(async (config) => {
  const accessToken = Cookies.get('wuhu-accessToken');
  if (accessToken) {
    const decodedToken = jwtDecode<{ exp: number }>(accessToken);
    const currentTime = Date.now() / 1000; // Convert to seconds
    if (decodedToken.exp < currentTime) {
      // Token expired, refresh it
      try {
        const newAccessToken = await refreshTokens();
        config.headers.Authorization = `Bearer ${newAccessToken}`;
      } catch (error) {
        console.error(error);
        // Redirect to login or handle token refresh failure
        // This might involve client-side navigation or showing a message to the user
      }
    } else {
      // If the token is not expired, use it for the API request
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default API;
