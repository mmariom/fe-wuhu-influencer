'use server'
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";




export const register = async (apiRequestData:any) => {
  const API_BASE_URL = process.env.NODE_ENV === 'development' ? process.env.NEST_PUBLIC_DEV_URL : process.env.NEST_PUBLIC_PROD_URL;

    // let baseUrl = process.env.NEXT_PUBLIC_DEV_URL || process.env.NEXT_PUBLIC_PROD_URL;
    let url = `${API_BASE_URL}/auth/register`;

    console.log("apiRequestData" + JSON.stringify(apiRequestData));
    let options = {
      method: "POST",
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRequestData),
    };
  
    const resp = await fetch(url, options);
    if (!resp.ok) {
        const errorBody = await resp.json(); // Assuming the server sends JSON with error details
        console.error('Registration error response:', errorBody);
        throw new Error(`Registration failed: ${errorBody.message}`); // Adjust based on actual error response structure
    }
    
  
    const data = await resp.json();
    // Assuming the API sends back tokens upon successful registration
    cookies().set('accessToken', data.accessToken, { httpOnly: false, path: '/',sameSite: 'strict',secure: false});
    cookies().set('refreshToken', data.refreshToken, { httpOnly: true, path: '/',sameSite: 'strict',secure: false});
  
    return {
      authorized: true,
      accessToken: data.accessToken,
    };
  };
  