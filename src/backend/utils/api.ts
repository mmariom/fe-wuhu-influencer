// // api.ts
// import axios from 'axios';
// import { jwtDecode } from "jwt-decode";

// // Function to check if the token needs to be refreshed based on its expiration
// function tokenNeedsRefresh(token: string): boolean {
//   const decoded: any = jwtDecode(token);
//   const currentTime = Date.now() / 1000; // Current time in seconds
//   return decoded.exp < currentTime;
// }

// // Function to refresh the token
// async function refreshToken(): Promise<void> {
//   const refreshToken = localStorage.getItem('refreshToken'); // Adjust based on where you store the refresh token
//   let url = process.env.NODE_ENV == "development" ? `${process.env.NEXT_PUBLIC_DEV_URL}/auth/refresh` : `${process.env.NEXT_PUBLIC_PROD_URL}/auth/refresh`;

//   if (refreshToken) {
//     try {
//       const response = await axios.post(url, {}, {
//         headers: { 'Authorization': `Bearer ${refreshToken}` }
//       });
//       // Assuming the API response includes the new access and refresh tokens
//       localStorage.setItem('accessToken', response.data.accessToken);
//       localStorage.setItem('refreshToken', response.data.refreshToken);
//     } catch (error) {
//       console.error('Error refreshing token:', error);
//       // Handle error, e.g., redirecting to login page
//     }
//   }
// }

// // Create an Axios instance
// const API = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_API_BASE_URL, // Adjust according to your environment variable or hardcode as needed
//   withCredentials: true, // Important for cookies to be included in requests automatically

// });

// // Request interceptor to inject the token or refresh it if needed
// API.interceptors.request.use(async (config) => {
//   let accessToken = localStorage.getItem('accessToken'); // Adjust based on where you store the access token

//   if (accessToken && tokenNeedsRefresh(accessToken)) {
//     await refreshToken();
//     accessToken = localStorage.getItem('accessToken'); // Update accessToken with the refreshed one
//   }

//   if (accessToken) {
//     config.headers['Authorization'] = `Bearer ${accessToken}`;
//   }

//   return config;
// }, (error) => {
//   return Promise.reject(error);
// });

// export default API;



// Import dependencies for cookie handling
import Cookies from 'js-cookie'; // For client-side cookie handling
import axios from 'axios';
import jwtDecode from 'jwt-decode';

// Setup Axios instance
export const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  withCredentials: true,
});

API.interceptors.response.use(response => response, async (error) => {
  const originalRequest = error.config;
  if (error.response.status === 401 && !originalRequest._retry) {
    originalRequest._retry = true;

    // Attempt to refresh the token using the refresh token stored in cookies
    try {
      const refreshToken = Cookies.get('wuhu-refreshToken'); // Adjust based on your cookie name
      const refreshResponse = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/refresh`,
        {}, // Your API might expect the refresh token in the body or headers
        {
          headers: { 'Authorization': `Bearer ${refreshToken}` },
          withCredentials: true
        }
      );

      if (refreshResponse.status === 200) {
        // Update cookies with the new tokens
        Cookies.set('wuhu-accessToken', refreshResponse.data.accessToken, { expires: 1 }); // Set expiration as needed
        Cookies.set('wuhu-refreshToken', refreshResponse.data.refreshToken, { expires: 7 }); // Set expiration as needed
        
        // Update the original request's headers and retry
        originalRequest.headers['Authorization'] = `Bearer ${refreshResponse.data.accessToken}`;
        return API(originalRequest);
      }
    } catch (refreshError) {
      console.error('Failed to refresh token:', refreshError);
      // Handle failure: redirect to login, clear cookies, etc.
    }
  }

  return Promise.reject(error);
});
