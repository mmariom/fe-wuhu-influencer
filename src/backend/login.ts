'use server'
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";

const sessionObject = {
  authorized: false,
  accessToken: "",
}

export const login = async (username: string, password: string) => {
  let url = process.env.NODE_ENV == "development" ? `${process.env.NEXT_PUBLIC_DEV_URL}/auth/login` : `${process.env.NEXT_PUBLIC_PROD_URL}/auth/login`;
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
  cookies().set('wuhu-accessToken', user.accessToken)
  cookies().set('wuhu-refreshToken', user.refreshToken)


  sessionObject.authorized = true;
  sessionObject.accessToken = user.accessToken;

  return sessionObject;
};



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
