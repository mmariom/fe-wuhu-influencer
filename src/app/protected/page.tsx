'use client'
import { redirect } from "next/navigation";
import { useRouter } from 'next/navigation';
import { useEffect } from "react";
import { getSession } from '../../backend/login'

export default function ProtectedRoute() {
  const router = useRouter();
  
  useEffect(() => {
    const getUserSession = async () => {
      const sessionObject = await getSession();
      if(!sessionObject.authorized) {
        router.push('/login')
      }
    }
    getUserSession();
  }, [])

  return (
    <div>
      This is a protected route.
      <br />
      
      You will only see this if you are authenticated.
    </div>
  );
}