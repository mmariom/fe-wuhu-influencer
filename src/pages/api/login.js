// import fetch from 'node-fetch';
// import { serialize } from 'cookie';

// export default async function login(req, res) {
//   const backendUrl = process.env.NODE_ENV === 'development' ? process.env.NEST_PUBLIC_DEV_URL : process.env.NEST_PUBLIC_PROD_URL;
//   if (req.method !== 'POST') {
//     return res.status(405).json({ error: 'Method not allowed' });
//   }

//   const { username, password } = req.body;
//   const url = `${backendUrl}/auth/login`;
//   console.log(url + " url");

//   const options = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       username,
//       password,
//     }),
//   };

//   try {
//     const backendResponse = await fetch(url, options);
//     if (!backendResponse.ok) {
//       const result = await backendResponse.json();
//       return res.status(backendResponse.status).json(result);
//     }

//     const { accessToken, refreshToken } = await backendResponse.json();

//     res.setHeader('Set-Cookie', [
//       serialize('accessToken', accessToken, {
//         path: '/',
//         httpOnly: false,
//         secure: process.env.NODE_ENV === 'production',
//         sameSite: 'strict',
        
//       }),
//       serialize('refreshToken', refreshToken, {
//         path: '/',
//         httpOnly: true,
//         secure: process.env.NODE_ENV === 'production',
//         sameSite: 'strict',
//       }),
//     ]);

//     return res.status(200).json({ message: 'Login successful' });
//   } catch (error) {
//     console.error('Login error:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// }
