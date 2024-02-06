
import axios from 'axios';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

// Assuming you have environment variables set for your API's base URL for direct backend calls
const API_BASE_URL = process.env.NODE_ENV === 'development' ? process.env.NEST_PUBLIC_DEV_URL : process.env.NEST_PUBLIC_PROD_URL;

// Create an Axios instance for direct backend API calls
const API = axios.create({
  baseURL: API_BASE_URL,
});

// Function to call Next.js backend to refresh tokens
async function refreshTokensViaNextJS() {

  try {
    // Call the Next.js backend /api/refresh route
    await axios.post(`/api/refresh`, {}, {
      withCredentials: true // Important for including cookies (such as the HttpOnly refresh token)
    });
    // This call will refresh the tokens by setting new HttpOnly cookies
  } catch (error) {
    console.error('Error refreshing tokens through Next.js:', error);
    throw new Error('Failed to refresh token');
  }
}

// Add a request interceptor to handle token expiration
API.interceptors.request.use(async (config) => {
  const accessToken = Cookies.get('accessToken'); // Assuming you're storing the access token in a cookie accessible by JS
  if (accessToken) {
    const decodedToken:any = jwtDecode(accessToken);
    const currentTime = Date.now() / 1000; // Convert to seconds
    if (decodedToken.exp < currentTime) {
      // Token expired, attempt to refresh it
      config.headers.Authorization = null; // Remove the expired token
    } else {
      // If the token is not expired, use it for the API request
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// Add a response interceptor to retry requests after refreshing tokens
API.interceptors.response.use(undefined, async (error) => {
  const originalRequest = error.config;
  if (error.response.status === 401 && !originalRequest._retry) {
    originalRequest._retry = true;
    try {
      await refreshTokensViaNextJS(); // Refresh the token
      const newAccessToken = Cookies.get('accessToken'); // Get the new token
      originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`; // Update the request with the new token
      return API(originalRequest); // Retry the original request
    } catch (refreshError) {
      return Promise.reject(refreshError);
    }
  }
  return Promise.reject(error);
});

export default API;
