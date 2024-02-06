'use server'
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";

const sessionObject = {
  authorized: false,
  accessToken: "",
}

// Import the js-cookie module
import Cookies from 'js-cookie';

// export const login = async (username:string, password:string) => {
//   let url = process.env.NODE_ENV === "development" ? `${process.env.NEXT_PUBLIC_DEV_URL}/auth/login` : `${process.env.NEXT_PUBLIC_PROD_URL}/auth/login`;
//   let options = {
//     method: "POST",
//     credentials: 'include', // Important for sending cookies in cross-origin requests
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ username, password }),
//   };

//   try {
//     const resp = await fetch(url, options);
//     if (!resp.ok) throw new Error('Login failed');

//     const { accessToken } = await resp.json(); // Assuming the response includes the accessToken directly
//     // Set cookies on the client side
//     Cookies.set('wuhu-accessToken', accessToken, { expires: 7 }); // Expires in 7 days

//     // Assuming refreshToken is set by server as HttpOnly cookie and doesn't need to be manually set here

//     return { authorized: true, accessToken };
//   } catch (error) {
//     console.error('Login error:', error);
//     return { authorized: false, accessToken: "" };
//   }
// };


export const login = async (username: string, password: string) => {
  const API_BASE_URL = process.env.NODE_ENV === 'development' ? process.env.NEST_PUBLIC_DEV_URL : process.env.NEST_PUBLIC_PROD_URL;

  let url = `${API_BASE_URL}/auth/login`;
  // Add your sign-in logic here using the email and password state values
  console.log('username:', username);
  console.log('Password:', password);
  let options = {
    method: "POST",
    headers: {
      Accept: "*/*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  };

  const resp = await fetch(url, options);
  if (!resp.ok)  {
    sessionObject.authorized = false;
    return sessionObject;
  }

  const user = await resp.json();
  // localStorage.setItem('wuhu-accessToken', user.accessToken)
  // localStorage.setItem('wuhu-refreshToken', user.refreshToken)
  cookies().set('accessToken', user.accessToken, { httpOnly: false, path: '/',sameSite: 'strict',secure: false});
  cookies().set('refreshToken', user.refreshToken, { httpOnly: true, path: '/',sameSite: 'strict',secure: false});

  


  sessionObject.authorized = true;
  sessionObject.accessToken = user.accessToken;

  return sessionObject;
};

// export const login = async (username:string, password:string) => {
//   const url = `${process.env.NEXT_PUBLIC_API_URL}/auth/login`; // Adjusted for simplicity

//   try {
//     const response = await fetch(url, {
//       method: "POST",
//       credentials: 'include', // Essential for cookies
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ username, password }),
//     });

//     if (!response.ok) {
//       throw new Error('Login failed');
//     }

//     const { accessToken } = await response.json(); // Extracting the access token
//     // Here, you handle the accessToken, e.g., setting it in your application's state

//     // No need to manually set the refresh token cookie; the browser will handle it if 'credentials: include' is set
//     return { authorized: true, accessToken };
//   } catch (error) {
//     console.error('Login error:', error);
//     return { authorized: false, accessToken: "" };
//   }
// };









// functions/auth.js or wherever you manage API calls
// export async function login(username:string, password:string) {
//   try {
//     const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       credentials: 'include', // Necessary for cookies
//       body: JSON.stringify({ username, password }),
//     });
    

//     if (!response.ok) throw new Error('Login failed');

//     const data = await response.json();
//     // Assume data contains the accessToken or it's set as an HTTP-only cookie
//     // Manage application state as needed, e.g., setting user context
//     return { success: true, accessToken: data.accessToken };
//   } catch (error) {
//     console.error('Login error:', error);
//     return { success: false };
//   }
// }



// Example login function
// export const login = async (username:string, password:string) => {
//   const url = `${process.env.NEXT_PUBLIC_API_URL}/auth/login`; // Your backend login endpoint
//   try {
//     const response = await fetch(url, {
//       method: 'POST',
//       credentials: 'include', // Important: to receive cookies
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ username, password }),
//     });

//     if (!response.ok) {
//       throw new Error('Login failed');
//     }

//     const data = await response.json();
//     // Store access token in-memory or in React context, but NOT in local storage
//     return { success: true, accessToken: data.accessToken };
//   } catch (error) {
//     console.error('Login error:', error);
//     return { success: false };
//   }
// };


export const getSession = async () => {
  let url = process.env.NODE_ENV == "development" ? `${process.env.NEXT_PUBLIC_DEV_URL}/auth/refresh` : `${process.env.NEXT_PUBLIC_PROD_URL}/auth/refresh`;
  // // Add your sign-in logic here using the email and password state values
  const accessToken: any = cookies().get('wuhu-accessToken') ?? '';
  const refreshToken: any = cookies().get('wuhu-refreshToken') ?? '';

  if (!accessToken && !refreshToken) {
    sessionObject.authorized = false;
    sessionObject.accessToken = "";
    return sessionObject;
  }

  let decodedToken:any = jwtDecode(accessToken.value.toString()) != undefined ? jwtDecode(accessToken.value.toString()) : {
      "email": "",
      "firstName": "",
      "id": "",
      "iat": 0,
      "exp": 0
  };
  // try {
  //   decodedToken = jwtDecode(accessToken.value.toString());
  // } catch (error) {
  //   console.error("Error decoding token: ", error);
  //   decodedToken = null;
  // }

  if (decodedToken) {
    let currentDate = new Date();

    // Check if access token is expired
    if ((decodedToken.exp * 1000) < currentDate.getTime()) {
      console.log("Access token expired, refreshing tokens...");

      const options = {
        method: "POST",
        headers: {
          Accept: "*/*",
          "Content-Type": "application/json",
          "Authorization": `Bearer ${refreshToken.value}`

        },
      };

      const resp = await fetch(url, options);
      if (!resp.ok) {
        console.log("Unable to refresh tokens. Logging out.");
        sessionObject.authorized = false;
        return sessionObject;
      }

      const response = await resp.json();
      cookies().set('wuhu-accessToken', response.accessToken)
      cookies().set('wuhu-refreshToken', response.refreshToken)

      sessionObject.accessToken = response.accessToken;
      sessionObject.authorized = true;
    } else {
      console.log("Access token valid.");
      sessionObject.authorized = true;
      sessionObject.accessToken = accessToken.value;
    }
  } else {
    console.log("Invalid or missing access token.");
    sessionObject.authorized = false;
  }

  return sessionObject;
};
