'use server'

import fetch from 'node-fetch';
import { serialize } from 'cookie';

export default async function handler(req, res) {
  const backendUrl = process.env.NODE_ENV === 'development' ? process.env.NEST_PUBLIC_DEV_URL : process.env.NEST_PUBLIC_PROD_URL;

  try {
    console.log(`${backendUrl}/auth/refresh` + " NEST_PUBLIC_BACKEND_URL from refresh.js");
    const backendRes = await fetch(`${backendUrl}/auth/refresh`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Cookie: req.headers.cookie,
      },
    });

    if (!backendRes.ok) throw new Error('Failed to refresh token');

    const { accessToken, refreshToken } = await backendRes.json();
    console.log(accessToken + " NEW accessToken from refresh.js");

    res.setHeader('Set-Cookie', [
      serialize('accessToken', accessToken, {
        path: '/',
        httpOnly: false,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
      }),
      serialize('refreshToken', refreshToken, {
        path: '/',
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
      }),
    ]);

    return res.status(200).json({ message: 'Tokens refreshed' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

