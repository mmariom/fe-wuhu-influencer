'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { login, getSession } from '../../../backend/login';
import HomeLayout from "@/app/layouts/HomeLayout";
import AuthLayout from '@/app/layouts/AuthLayout';
// import { Helmet, HelmetProvider } from 'react-helmet-async';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    const getUserSession = async () => {
      toast('Checking session!', {
        icon: '🔍',
      })
      const sessionObject = await getSession();
      if (sessionObject.authorized) {
        toast.dismiss()
        toast('Session is available.', {
          icon: '💻',
        })
        router.push('/protected')
      } else {
        toast.dismiss()
        toast('Session is not available. Please Login!', {
          icon: '⛔',
        })
      }
    }
    getUserSession();
  }, [])

  useEffect(() => {
    // Custom CSS classes for elements from the index.html
    // let classes = document.body.classList;
    // document.body.classList.remove(...classes);
    // document.body.classList.add(...'h-screen'.split(' '));
    // const rootElement = document.getElementById('root');
    // classes = rootElement.classList;
    // rootElement.classList.remove(...classes);
    // rootElement.classList.add(...'h-full'.split(' '));
  });

  const handleUsernameChange = (e: any) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const handleSignIn = async (e: any) => {
    e.preventDefault();
    const toastId = toast.loading('trying to validate');
    // Add your sign-in logic here using the email and password state values
    setLoading(true);
    const sessionObject: any = await login(username, password);
    if (sessionObject && sessionObject?.authorized) {
      toast.success('Login successfully.');
      router.push('/dashboard')
    } else {
      toast.error('Username or password invalid');
    }
    toast.dismiss(toastId);
    setLoading(false);
  };

  return (
    <AuthLayout>

      < >

        <section className='py-16 xl:pb-56 bg-white overflow-hidden'>
          <div className='container px-4 mx-auto'>
            <div className='text-center max-w-md mx-auto'>

              <h2 className='mb-4 text-6xl md:text-7xl text-center font-bold font-heading tracking-px-n leading-tight'>
                Welcome Back
              </h2>
              <p className='mb-12 font-medium text-lg text-gray-600 leading-normal'>
                Lorem ipsum dolor sit amet, to the con adipiscing. Volutpat
                tempor to the condim entum.
              </p>
              <form onSubmit={handleSignIn}>
                <label className='block mb-5'>
                  <input
                    className='px-4 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300'
                    id='signInInput2-1'
                    type='text'
                    placeholder='Email address'
                    required
                    value={username}
                    onChange={handleUsernameChange}
                  />
                </label>
                <label className='relative block mb-5'>
                  <div className='absolute right-4 top-1/2 transform -translate-y-1/2'>
                    <a
                      className='text-sm text-indigo-600 hover:text-indigo-700 font-medium'
                      href='#'
                    >
                      Forgot Password?
                    </a>
                  </div>
                  <input
                    className='px-4 pr-36 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300'
                    id='signInInput2-2'
                    type='password'
                    placeholder='Password'
                    required
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </label>
                <button
                  className='mb-8 py-4 px-9 w-full text-white font-semibold border border-indigo-700 rounded-xl shadow-4xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200'
                  type='submit'
                >
                  Sign In
                </button>
                <p className='font-medium'>
                  <span>Don’t have an account ? </span>
                  <a className='text-indigo-600 hover:text-indigo-700' href='/register'>
                    Create free account
                  </a>
                </p>
              </form>
            </div>
          </div>
        </section>

      </>

    </AuthLayout>
  );
}

