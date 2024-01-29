'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
// import { Helmet, HelmetProvider } from 'react-helmet-async';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default async function Home() {
  const router = useRouter();
  return (
    <React.Fragment>
      {/* <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider> */}
      <>
        <section className='relative'>
          <img
            className='absolute top-0 left-0'
            src='flaro-assets/images/headers/gradient4.svg'
            alt=''
          />
          <div className='container mx-auto overflow-hidden'>
            <div className='relative z-20 flex items-center justify-between px-4 py-5 bg-transparent'>
              <div className='w-auto'>
                <div className='flex flex-wrap items-center'>
                  <div className='w-auto mr-14'>
                    <a href='#'>
                      <img
                        src='flaro-assets/logos/flaro-logo-black.svg'
                        alt=''
                      />
                    </a>
                  </div>
                  <div className='w-auto hidden lg:block'>
                    <ul className='flex items-center mr-16'>
                      <li className='mr-9 font-medium hover:text-gray-700'>
                        <a href='#'>Features</a>
                      </li>
                      <li className='mr-9 font-medium hover:text-gray-700'>
                        <a href='#'>Solutions</a>
                      </li>
                      <li className='mr-9 font-medium hover:text-gray-700'>
                        <a href='#'>Resources</a>
                      </li>
                      <li className='font-medium hover:text-gray-700'>
                        <a href='#'>Pricing</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='w-auto'>
                <div className='flex flex-wrap items-center'>
                  <div className='w-auto hidden mr-5 lg:block'>
                    <div className='inline-block'>
                      <button
                        className='py-3 px-5 w-full hover:text-gray-700 font-medium rounded-xl bg-transparent transition ease-in-out duration-200'
                        type='button'
                        onClick={() => router.push('/login')}
                      >
                        Sign In
                      </button>
                    </div>
                  </div>
                  <div className='w-auto hidden lg:block'>
                    <div className='inline-block'>
                      <button
                        className='py-3 px-5 w-full text-white font-semibold border border-indigo-700 rounded-xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200'
                        type='button'
                      >
                        Try 14 Days Free Trial
                      </button>
                    </div>
                  </div>
                  <div className='w-auto lg:hidden'>
                    <a href='#'>
                      <svg
                        className='navbar-burger text-indigo-600'
                        width={51}
                        height={51}
                        viewBox='0 0 56 56'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <rect
                          width={56}
                          height={56}
                          rx={28}
                          fill='currentColor'
                        />
                        <path
                          d='M37 32H19M37 24H19'
                          stroke='white'
                          strokeWidth='1.5'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='hidden navbar-menu fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50'>
              <div className='navbar-backdrop fixed inset-0 bg-gray-800 opacity-80' />
              <nav className='relative z-10 px-9 pt-8 bg-white h-full overflow-y-auto'>
                <div className='flex flex-wrap justify-between h-full'>
                  <div className='w-full'>
                    <div className='flex items-center justify-between -m-2'>
                      <div className='w-auto p-2'>
                        <a className='inline-block' href='#'>
                          <img
                            src='flaro-assets/logos/flaro-logo-black.svg'
                            alt=''
                          />
                        </a>
                      </div>
                      <div className='w-auto p-2'>
                        <a className='navbar-burger' href='#'>
                          <svg
                            width={24}
                            height={24}
                            viewBox='0 0 24 24'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M6 18L18 6M6 6L18 18'
                              stroke='#111827'
                              strokeWidth={2}
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col justify-center py-16 w-full'>
                    <ul>
                      <li className='mb-12'>
                        <a className='font-medium hover:text-gray-700' href='#'>
                          Features
                        </a>
                      </li>
                      <li className='mb-12'>
                        <a className='font-medium hover:text-gray-700' href='#'>
                          Solutions
                        </a>
                      </li>
                      <li className='mb-12'>
                        <a className='font-medium hover:text-gray-700' href='#'>
                          Resources
                        </a>
                      </li>
                      <li>
                        <a className='font-medium hover:text-gray-700' href='#'>
                          Pricing
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className='flex flex-col justify-end w-full pb-8'>
                    <div className='flex flex-wrap'>
                      <div className='w-full mb-3'>
                        <div className='block'>
                          <button
                            className='py-3 px-5 w-full hover:text-gray-700 font-medium rounded-xl bg-transparent transition ease-in-out duration-200'
                            type='button'
                          >
                            Sign In
                          </button>
                        </div>
                      </div>
                      <div className='w-full'>
                        <div className='block'>
                          <button
                            className='py-3 px-5 w-full text-white font-semibold border border-indigo-700 rounded-xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200'
                            type='button'
                          >
                            Try 14 Days Free Trial
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <div className='overflow-hidden pt-16 pb-48'>
            <div className='relative container px-4 mx-auto'>
              <div className='flex flex-wrap -m-8'>
                <div className='w-full md:w-1/2 lg:w-4/12 xl:w-6/12 p-8'>
                  <h1 className='mb-9 text-6xl md:text-8xl lg:text-13xl font-bold font-heading md:max-w-2xl leading-none'>
                    Meet similar minded people
                  </h1>
                  <div>
                    <p className='mb-9 text-xl text-gray-900 font-medium md:max-w-sm'>
                      Get the best-in-class group mentoring plans and
                      professional benefits for your team
                    </p>
                    <div className='mb-12 md:inline-block'>
                      <button
                        className='py-4 px-6 w-full text-white font-semibold border border-indigo-700 rounded-xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200'
                        type='button'
                      >
                        Try 14 Days Free Trial
                      </button>
                    </div>
                    <h3 className='mb-3 text-gray-900 font-semibold'>
                      Trusted by 1M+ customers
                    </h3>
                    <div className='flex flex-wrap items-center -m-1'>
                      <div className='w-auto p-1'>
                        <div className='flex flex-wrap -m-0.5'>
                          <div className='w-auto p-0.5'>
                            <svg
                              width={17}
                              height={16}
                              viewBox='0 0 17 16'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                d='M7.707 1.21267C8.02812 0.224357 9.42632 0.224357 9.74744 1.21267L10.8948 4.74387C11.0384 5.18586 11.4503 5.48511 11.915 5.48511H15.6279C16.6671 5.48511 17.0992 6.81488 16.2585 7.42569L13.2547 9.60809C12.8787 9.88126 12.7214 10.3654 12.865 10.8074L14.0123 14.3386C14.3335 15.327 13.2023 16.1488 12.3616 15.538L9.35775 13.3556C8.98178 13.0824 8.47266 13.0824 8.09669 13.3556L5.09287 15.538C4.25216 16.1488 3.12099 15.327 3.44211 14.3386L4.58947 10.8074C4.73308 10.3654 4.57575 9.88126 4.19978 9.60809L1.19596 7.42569C0.355248 6.81488 0.787317 5.48511 1.82649 5.48511H5.53942C6.00415 5.48511 6.41603 5.18586 6.55964 4.74387L7.707 1.21267Z'
                                fill='#6366F1'
                              />
                            </svg>
                          </div>
                          <div className='w-auto p-0.5'>
                            <svg
                              width={17}
                              height={16}
                              viewBox='0 0 17 16'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                d='M7.707 1.21267C8.02812 0.224357 9.42632 0.224357 9.74744 1.21267L10.8948 4.74387C11.0384 5.18586 11.4503 5.48511 11.915 5.48511H15.6279C16.6671 5.48511 17.0992 6.81488 16.2585 7.42569L13.2547 9.60809C12.8787 9.88126 12.7214 10.3654 12.865 10.8074L14.0123 14.3386C14.3335 15.327 13.2023 16.1488 12.3616 15.538L9.35775 13.3556C8.98178 13.0824 8.47266 13.0824 8.09669 13.3556L5.09287 15.538C4.25216 16.1488 3.12099 15.327 3.44211 14.3386L4.58947 10.8074C4.73308 10.3654 4.57575 9.88126 4.19978 9.60809L1.19596 7.42569C0.355248 6.81488 0.787317 5.48511 1.82649 5.48511H5.53942C6.00415 5.48511 6.41603 5.18586 6.55964 4.74387L7.707 1.21267Z'
                                fill='#6366F1'
                              />
                            </svg>
                          </div>
                          <div className='w-auto p-0.5'>
                            <svg
                              width={17}
                              height={16}
                              viewBox='0 0 17 16'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                d='M7.707 1.21267C8.02812 0.224357 9.42632 0.224357 9.74744 1.21267L10.8948 4.74387C11.0384 5.18586 11.4503 5.48511 11.915 5.48511H15.6279C16.6671 5.48511 17.0992 6.81488 16.2585 7.42569L13.2547 9.60809C12.8787 9.88126 12.7214 10.3654 12.865 10.8074L14.0123 14.3386C14.3335 15.327 13.2023 16.1488 12.3616 15.538L9.35775 13.3556C8.98178 13.0824 8.47266 13.0824 8.09669 13.3556L5.09287 15.538C4.25216 16.1488 3.12099 15.327 3.44211 14.3386L4.58947 10.8074C4.73308 10.3654 4.57575 9.88126 4.19978 9.60809L1.19596 7.42569C0.355248 6.81488 0.787317 5.48511 1.82649 5.48511H5.53942C6.00415 5.48511 6.41603 5.18586 6.55964 4.74387L7.707 1.21267Z'
                                fill='#6366F1'
                              />
                            </svg>
                          </div>
                          <div className='w-auto p-0.5'>
                            <svg
                              width={17}
                              height={16}
                              viewBox='0 0 17 16'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                d='M7.707 1.21267C8.02812 0.224357 9.42632 0.224357 9.74744 1.21267L10.8948 4.74387C11.0384 5.18586 11.4503 5.48511 11.915 5.48511H15.6279C16.6671 5.48511 17.0992 6.81488 16.2585 7.42569L13.2547 9.60809C12.8787 9.88126 12.7214 10.3654 12.865 10.8074L14.0123 14.3386C14.3335 15.327 13.2023 16.1488 12.3616 15.538L9.35775 13.3556C8.98178 13.0824 8.47266 13.0824 8.09669 13.3556L5.09287 15.538C4.25216 16.1488 3.12099 15.327 3.44211 14.3386L4.58947 10.8074C4.73308 10.3654 4.57575 9.88126 4.19978 9.60809L1.19596 7.42569C0.355248 6.81488 0.787317 5.48511 1.82649 5.48511H5.53942C6.00415 5.48511 6.41603 5.18586 6.55964 4.74387L7.707 1.21267Z'
                                fill='#6366F1'
                              />
                            </svg>
                          </div>
                          <div className='w-auto p-0.5'>
                            <svg
                              width={17}
                              height={16}
                              viewBox='0 0 17 16'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                d='M7.707 1.21267C8.02812 0.224357 9.42632 0.224357 9.74744 1.21267L10.8948 4.74387C11.0384 5.18586 11.4503 5.48511 11.915 5.48511H15.6279C16.6671 5.48511 17.0992 6.81488 16.2585 7.42569L13.2547 9.60809C12.8787 9.88126 12.7214 10.3654 12.865 10.8074L14.0123 14.3386C14.3335 15.327 13.2023 16.1488 12.3616 15.538L9.35775 13.3556C8.98178 13.0824 8.47266 13.0824 8.09669 13.3556L5.09287 15.538C4.25216 16.1488 3.12099 15.327 3.44211 14.3386L4.58947 10.8074C4.73308 10.3654 4.57575 9.88126 4.19978 9.60809L1.19596 7.42569C0.355248 6.81488 0.787317 5.48511 1.82649 5.48511H5.53942C6.00415 5.48511 6.41603 5.18586 6.55964 4.74387L7.707 1.21267Z'
                                fill='#6366F1'
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className='w-auto p-1'>
                        <div className='flex flex-wrap -m-0.5'>
                          <div className='w-auto p-0.5'>
                            <p className='text-gray-900 font-bold'>4.2/5</p>
                          </div>
                          <div className='w-auto p-0.5'>
                            <p className='text-gray-600 font-medium'>
                              (45k Reviews)
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='w-full md:w-1/2 lg:w-8/12 xl:w-8/12 xl:absolute xl:right-0 xl:-bottom-20 p-8'>
                  <div className='flex flex-wrap justify-center items-center lg:justify-end -m-3'>
                    <div className='w-auto lg:w-1/3 xl:pt-28 p-3'>
                      <div className='flex flex-wrap justify-end'>
                        <div className='w-auto'>
                          <img
                            className='mx-auto transform hover:-translate-y-16 transition ease-in-out duration-1000'
                            src='flaro-assets/images/headers/people.png'
                            alt=''
                          />
                        </div>
                      </div>
                    </div>
                    <div className='w-auto lg:w-1/3 p-3'>
                      <div className='flex flex-wrap justify-center -m-3'>
                        <div className='w-auto p-3'>
                          <a href='#'>
                            <img
                              className='mx-auto transform hover:-translate-y-16 transition ease-in-out duration-1000'
                              src='flaro-assets/images/headers/video.png'
                              alt=''
                            />
                          </a>
                        </div>
                        <div className='w-auto p-3'>
                          <img
                            className='mx-auto transform hover:-translate-y-16 transition ease-in-out duration-1000'
                            src='flaro-assets/images/headers/people2.png'
                            alt=''
                          />
                        </div>
                      </div>
                    </div>
                    <div className='w-auto lg:w-1/3 p-3'>
                      <div className='flex flex-wrap'>
                        <div className='w-auto'>
                          <img
                            className='mx-auto transform hover:-translate-y-16 transition ease-in-out duration-1000'
                            src='flaro-assets/images/headers/people3.png'
                            alt=''
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='pt-24 pb-28 bg-white overflow-hidden'>
          <div className='container px-4 mx-auto'>
            <h2 className='mb-5 text-6xl md:text-7xl text-center font-bold font-heading tracking-px-n leading-tight'>
              How Flaro Works
            </h2>
            <p className='mb-20 text-lg text-gray-900 text-center font-medium md:max-w-lg mx-auto'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elemen tum.
            </p>
            <div className='flex flex-wrap -m-8'>
              <div className='w-full md:w-1/3 p-8'>
                <div className='relative text-center'>
                  <img
                    className='absolute -right-40 top-8'
                    src='flaro-assets/images/how-it-works/line4.svg'
                    alt=''
                  />
                  <div className='relative w-14 h-14 mb-10 mx-auto text-2xl font-bold font-heading bg-indigo-100 rounded-full'>
                    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                      <svg
                        width={25}
                        height={24}
                        viewBox='0 0 25 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M21.5391 21L15.5391 15M17.5391 10C17.5391 13.866 14.4051 17 10.5391 17C6.67307 17 3.53906 13.866 3.53906 10C3.53906 6.13401 6.67307 3 10.5391 3C14.4051 3 17.5391 6.13401 17.5391 10Z'
                          stroke='#111827'
                          strokeWidth={2}
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </div>
                  </div>
                  <div className='md:max-w-xs mx-auto'>
                    <h3 className='mb-5 font-heading text-xl font-bold font-heading leading-normal'>
                      Choose Package
                    </h3>
                    <p className='font-sans text-gray-600'>
                      Lorem ipsum dolor sit amet, consec tetur adipiscing elit
                      volutpat.
                    </p>
                  </div>
                </div>
              </div>
              <div className='w-full md:w-1/3 p-8'>
                <div className='relative text-center'>
                  <img
                    className='absolute -right-40 top-8'
                    src='flaro-assets/images/how-it-works/line4.svg'
                    alt=''
                  />
                  <div className='relative w-14 h-14 mb-10 mx-auto text-2xl font-bold font-heading bg-indigo-600 rounded-full'>
                    <img
                      className='absolute top-0 left-0'
                      src='flaro-assets/images/how-it-works/gradient.svg'
                      alt=''
                    />
                    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                      <svg
                        width={24}
                        height={24}
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M17 14V20M14 17H20M6 10H8C9.10457 10 10 9.10457 10 8V6C10 4.89543 9.10457 4 8 4H6C4.89543 4 4 4.89543 4 6V8C4 9.10457 4.89543 10 6 10ZM16 10H18C19.1046 10 20 9.10457 20 8V6C20 4.89543 19.1046 4 18 4H16C14.8954 4 14 4.89543 14 6V8C14 9.10457 14.8954 10 16 10ZM6 20H8C9.10457 20 10 19.1046 10 18V16C10 14.8954 9.10457 14 8 14H6C4.89543 14 4 14.8954 4 16V18C4 19.1046 4.89543 20 6 20Z'
                          stroke='white'
                          strokeWidth={2}
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </div>
                  </div>
                  <div className='md:max-w-xs mx-auto'>
                    <h3 className='mb-5 font-heading text-xl font-bold font-heading leading-normal'>
                      Make Secure Payment
                    </h3>
                    <p className='font-sans text-gray-600'>
                      Lorem ipsum dolor sit amet, consec tetur adipiscing elit
                      volutpat.
                    </p>
                  </div>
                </div>
              </div>
              <div className='w-full md:w-1/3 p-8'>
                <div className='text-center'>
                  <div className='relative w-14 h-14 mb-10 mx-auto text-2xl font-bold font-heading bg-indigo-100 rounded-full'>
                    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                      <svg
                        width={25}
                        height={24}
                        viewBox='0 0 25 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M12.4609 11C11.9087 11 11.4609 11.4477 11.4609 12C11.4609 12.5523 11.9087 13 12.4609 13V11ZM15.4609 13C16.0132 13 16.4609 12.5523 16.4609 12C16.4609 11.4477 16.0132 11 15.4609 11V13ZM12.4609 15C11.9087 15 11.4609 15.4477 11.4609 16C11.4609 16.5523 11.9087 17 12.4609 17V15ZM15.4609 17C16.0132 17 16.4609 16.5523 16.4609 16C16.4609 15.4477 16.0132 15 15.4609 15V17ZM9.46094 11C8.90865 11 8.46094 11.4477 8.46094 12C8.46094 12.5523 8.90865 13 9.46094 13V11ZM9.47094 13C10.0232 13 10.4709 12.5523 10.4709 12C10.4709 11.4477 10.0232 11 9.47094 11V13ZM9.46094 15C8.90865 15 8.46094 15.4477 8.46094 16C8.46094 16.5523 8.90865 17 9.46094 17V15ZM9.47094 17C10.0232 17 10.4709 16.5523 10.4709 16C10.4709 15.4477 10.0232 15 9.47094 15V17ZM18.4609 7V19H20.4609V7H18.4609ZM17.4609 20H7.46094V22H17.4609V20ZM6.46094 19V7H4.46094V19H6.46094ZM7.46094 6H9.46094V4H7.46094V6ZM15.4609 6H17.4609V4H15.4609V6ZM7.46094 20C6.90865 20 6.46094 19.5523 6.46094 19H4.46094C4.46094 20.6569 5.80408 22 7.46094 22V20ZM18.4609 19C18.4609 19.5523 18.0132 20 17.4609 20V22C19.1178 22 20.4609 20.6569 20.4609 19H18.4609ZM20.4609 7C20.4609 5.34315 19.1178 4 17.4609 4V6C18.0132 6 18.4609 6.44772 18.4609 7H20.4609ZM6.46094 7C6.46094 6.44772 6.90865 6 7.46094 6V4C5.80408 4 4.46094 5.34315 4.46094 7H6.46094ZM12.4609 13H15.4609V11H12.4609V13ZM12.4609 17H15.4609V15H12.4609V17ZM11.4609 4H13.4609V2H11.4609V4ZM13.4609 6H11.4609V8H13.4609V6ZM11.4609 6C10.9087 6 10.4609 5.55228 10.4609 5H8.46094C8.46094 6.65685 9.80408 8 11.4609 8V6ZM14.4609 5C14.4609 5.55228 14.0132 6 13.4609 6V8C15.1178 8 16.4609 6.65685 16.4609 5H14.4609ZM13.4609 4C14.0132 4 14.4609 4.44772 14.4609 5H16.4609C16.4609 3.34315 15.1178 2 13.4609 2V4ZM11.4609 2C9.80408 2 8.46094 3.34315 8.46094 5H10.4609C10.4609 4.44772 10.9087 4 11.4609 4V2ZM9.46094 13H9.47094V11H9.46094V13ZM9.46094 17H9.47094V15H9.46094V17Z'
                          fill='#111827'
                        />
                      </svg>
                    </div>
                  </div>
                  <div className='md:max-w-xs mx-auto'>
                    <h3 className='mb-5 font-heading text-xl font-bold font-heading leading-normal'>
                      Get Instant Access
                    </h3>
                    <p className='font-sans text-gray-600'>
                      Lorem ipsum dolor sit amet, consec tetur adipiscing elit
                      volutpat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='py-36 bg-white overflow-hidden'>
          <div className='container px-4 mx-auto'>
            <div className='flex flex-wrap xl:items-center -m-8'>
              <div className='w-full md:w-1/2 p-8'>
                <img
                  className='transform hover:translate-x-16 transition ease-in-out duration-1000'
                  src='flaro-assets/images/features/testimonail.png'
                  alt=''
                />
              </div>
              <div className='w-full md:w-1/2 p-8'>
                <div className='md:max-w-md'>
                  <div className='flex flex-wrap -m-4'>
                    <div className='w-auto p-4'>
                      <div className='flex flex-wrap -m-2'>
                        <div className='w-auto p-2'>
                          <svg
                            width={28}
                            height={28}
                            viewBox='0 0 28 28'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M4.66669 5.83329C4.66669 5.18896 5.18902 4.66663 5.83335 4.66663H22.1667C22.811 4.66663 23.3334 5.18896 23.3334 5.83329V8.16663C23.3334 8.81096 22.811 9.33329 22.1667 9.33329H5.83335C5.18902 9.33329 4.66669 8.81096 4.66669 8.16663V5.83329Z'
                              stroke='#6366F1'
                              strokeWidth={2}
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                            <path
                              d='M4.66669 15.1666C4.66669 14.5223 5.18902 14 5.83335 14H12.8334C13.4777 14 14 14.5223 14 15.1666V22.1666C14 22.811 13.4777 23.3333 12.8334 23.3333H5.83335C5.18902 23.3333 4.66669 22.811 4.66669 22.1666V15.1666Z'
                              stroke='#6366F1'
                              strokeWidth={2}
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                            <path
                              d='M18.6667 15.1666C18.6667 14.5223 19.189 14 19.8334 14H22.1667C22.811 14 23.3334 14.5223 23.3334 15.1666V22.1666C23.3334 22.811 22.811 23.3333 22.1667 23.3333H19.8334C19.189 23.3333 18.6667 22.811 18.6667 22.1666V15.1666Z'
                              stroke='#6366F1'
                              strokeWidth={2}
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                          </svg>
                        </div>
                        <div className='flex-1 p-2'>
                          <h3 className='text-lg font-semibold'>
                            Unlimited Team Members
                          </h3>
                        </div>
                        <div className='w-full p-2'>
                          <div className='pb-8 border-b'>
                            <p className='text-gray-600 font-medium leading-relaxed'>
                              Amet minim mollit non deserunt ullamco est sit
                              aliqua dolor do amet sint. Velit officia consequat
                              duis enim velit mollit. Exercitation veniam
                              consequat.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='w-auto p-4'>
                      <div className='flex flex-wrap -m-2'>
                        <div className='w-auto p-2'>
                          <svg
                            width={28}
                            height={28}
                            viewBox='0 0 28 28'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M5.83333 14.0001H22.1667M5.83333 14.0001C4.54467 14.0001 3.5 12.9554 3.5 11.6667V7.00008C3.5 5.71142 4.54467 4.66675 5.83333 4.66675H22.1667C23.4553 4.66675 24.5 5.71142 24.5 7.00008V11.6667C24.5 12.9554 23.4553 14.0001 22.1667 14.0001M5.83333 14.0001C4.54467 14.0001 3.5 15.0448 3.5 16.3334V21.0001C3.5 22.2887 4.54467 23.3334 5.83333 23.3334H22.1667C23.4553 23.3334 24.5 22.2887 24.5 21.0001V16.3334C24.5 15.0448 23.4553 14.0001 22.1667 14.0001M19.8333 9.33342H19.845M19.8333 18.6667H19.845'
                              stroke='#4F46E5'
                              strokeWidth={2}
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                          </svg>
                        </div>
                        <div className='flex-1 p-2'>
                          <h3 className='text-lg font-semibold'>
                            Up to 10GB Storage
                          </h3>
                        </div>
                        <div className='w-full p-2'>
                          <div className='pb-8 border-b'>
                            <p className='text-gray-600 font-medium leading-relaxed'>
                              Amet minim mollit non deserunt ullamco est sit
                              aliqua dolor do amet sint. Velit officia consequat
                              duis enim velit mollit. Exercitation veniam
                              consequat.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='w-auto p-4'>
                      <div className='flex flex-wrap -m-2'>
                        <div className='w-auto p-2'>
                          <svg
                            width={28}
                            height={28}
                            viewBox='0 0 28 28'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M3.5 11.6666H24.5M8.16667 17.4999H9.33333M14 17.4999H15.1667M7 22.1666H21C22.933 22.1666 24.5 20.5996 24.5 18.6666V9.33325C24.5 7.40026 22.933 5.83325 21 5.83325H7C5.067 5.83325 3.5 7.40026 3.5 9.33325V18.6666C3.5 20.5996 5.067 22.1666 7 22.1666Z'
                              stroke='#4F46E5'
                              strokeWidth={2}
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                          </svg>
                        </div>
                        <div className='flex-1 p-2'>
                          <h3 className='text-lg font-semibold'>
                            Secure Payment using Stripe
                          </h3>
                        </div>
                        <div className='w-full p-2'>
                          <p className='text-gray-600 font-medium leading-relaxed'>
                            Amet minim mollit non deserunt ullamco est sit
                            aliqua dolor do amet sint. Velit officia consequat
                            duis enim velit mollit. Exercitation veniam
                            consequat.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='relative pt-24 pb-28 bg-blueGray-50 overflow-hidden'>
          <img
            className='absolute bottom-0 left-1/2 transform -translate-x-1/2'
            src='flaro-assets/images/faqs/gradient.svg'
            alt=''
          />
          <div className='relative z-10 container px-4 mx-auto'>
            <div className='md:max-w-4xl mx-auto'>
              <p className='mb-7 text-sm text-indigo-600 text-center font-semibold uppercase tracking-px'>
                Have any questions?
              </p>
              <h2 className='mb-16 text-6xl md:text-8xl xl:text-10xl text-center font-bold font-heading tracking-px-n leading-none'>
                Frequently Asked Questions
              </h2>
              <div className='mb-11 flex flex-wrap -m-1'>
                <div className='w-full p-1'>
                  <a href='#'>
                    <div className='py-7 px-8 bg-white bg-opacity-60 border-2 border-indigo-600 rounded-2xl shadow-10xl'>
                      <div className='flex flex-wrap justify-between -m-2'>
                        <div className='flex-1 p-2'>
                          <h3 className='mb-4 text-lg font-semibold leading-normal'>
                            Do you provide any free plan?
                          </h3>
                          <p className='text-gray-600 font-medium'>
                            Lorem ipsum dolor sit amet, to the consectr
                            adipiscing elit. Volutpat tempor to the condi mentum
                            vitae vel purus.
                          </p>
                        </div>
                        <div className='w-auto p-2'>
                          <svg
                            className='relative top-1'
                            width={20}
                            height={20}
                            viewBox='0 0 20 20'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M4.16732 12.5L10.0007 6.66667L15.834 12.5'
                              stroke='#4F46E5'
                              strokeWidth={2}
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className='w-full p-1'>
                  <a href='#'>
                    <div className='py-7 px-8 bg-white bg-opacity-60 border border-gray-200 hover:border-gray-300 rounded-2xl shadow-10xl'>
                      <div className='flex flex-wrap justify-between -m-2'>
                        <div className='flex-1 p-2'>
                          <h3 className='text-lg font-semibold leading-normal'>
                            How to claim your 25% discount offer?
                          </h3>
                        </div>
                        <div className='w-auto p-2'>
                          <svg
                            className='relative top-1'
                            width={18}
                            height={18}
                            viewBox='0 0 18 18'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M14.25 6.75L9 12L3.75 6.75'
                              stroke='#18181B'
                              strokeWidth={2}
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className='w-full p-1'>
                  <a href='#'>
                    <div className='py-7 px-8 bg-white bg-opacity-60 border border-gray-200 hover:border-gray-300 rounded-2xl shadow-10xl'>
                      <div className='flex flex-wrap justify-between -m-2'>
                        <div className='flex-1 p-2'>
                          <h3 className='text-lg font-semibold leading-normal'>
                            What’s your refund policy?
                          </h3>
                        </div>
                        <div className='w-auto p-2'>
                          <svg
                            className='relative top-1'
                            width={18}
                            height={18}
                            viewBox='0 0 18 18'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M14.25 6.75L9 12L3.75 6.75'
                              stroke='#18181B'
                              strokeWidth={2}
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className='w-full p-1'>
                  <a href='#'>
                    <div className='py-7 px-8 bg-white bg-opacity-60 border border-gray-200 hover:border-gray-300 rounded-2xl shadow-10xl'>
                      <div className='flex flex-wrap justify-between -m-2'>
                        <div className='flex-1 p-2'>
                          <h3 className='text-lg font-semibold leading-normal'>
                            How to get support for the product?
                          </h3>
                        </div>
                        <div className='w-auto p-2'>
                          <svg
                            className='relative top-1'
                            width={18}
                            height={18}
                            viewBox='0 0 18 18'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M14.25 6.75L9 12L3.75 6.75'
                              stroke='#18181B'
                              strokeWidth={2}
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <p className='text-gray-600 text-center font-medium'>
                <span>Still have any questions?</span>
                <a
                  className='font-semibold text-indigo-600 hover:text-indigo-700'
                  href='#'
                >
                  Contact us
                </a>
              </p>
            </div>
          </div>
        </section>
        <section className='relative py-16 bg-white overflow-hidden'>
          <img
            className='absolute top-0 left-0 h-full'
            src='flaro-assets/images/footers/gradient4.svg'
            alt=''
          />
          <div className='relative z-10 container px-4 mx-auto'>
            <div className='flex flex-wrap justify-between items-center -m-8'>
              <div className='w-auto p-8'>
                <a href='#'>
                  <img
                    src='flaro-assets/logos/flaro-logo-black-xl.svg'
                    alt=''
                  />
                </a>
              </div>
              <div className='w-auto p-8'>
                <ul className='flex flex-wrap items-center -m-5'>
                  <li className='p-5'>
                    <a
                      className='text-gray-600 hover:text-gray-700 font-medium'
                      href='#'
                    >
                      About
                    </a>
                  </li>
                  <li className='p-5'>
                    <a
                      className='text-gray-600 hover:text-gray-700 font-medium'
                      href='#'
                    >
                      Leadership
                    </a>
                  </li>
                  <li className='p-5'>
                    <a
                      className='text-gray-600 hover:text-gray-700 font-medium'
                      href='#'
                    >
                      Press/News
                    </a>
                  </li>
                  <li className='p-5'>
                    <a
                      className='text-gray-600 hover:text-gray-700 font-medium'
                      href='#'
                    >
                      Careers/Team
                    </a>
                  </li>
                  <li className='p-5'>
                    <a
                      className='text-gray-600 hover:text-gray-700 font-medium'
                      href='#'
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              <div className='w-auto p-8'>
                <div className='flex flex-wrap -m-1.5'>
                  <div className='w-auto p-1.5'>
                    <a href='#'>
                      <div className='flex items-center justify-center w-8 h-8 border border-gray-300 hover:border-gray-400 rounded-full'>
                        <svg
                          width={8}
                          height={14}
                          viewBox='0 0 8 14'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M5.55736 5.2L5.55736 3.88C5.55736 3.308 5.69631 3 6.66894 3H7.87315V0.800003L6.02052 0.800003C3.70473 0.800003 2.77841 2.252 2.77841 3.88V5.2H0.925781L0.925781 7.4H2.77841L2.77841 14H5.55736L5.55736 7.4H7.59526L7.87315 5.2H5.55736Z'
                            fill='#27272A'
                          />
                        </svg>
                      </div>
                    </a>
                  </div>
                  <div className='w-auto p-1.5'>
                    <a href='#'>
                      <div className='flex items-center justify-center w-8 h-8 border border-gray-300 hover:border-gray-400 rounded-full'>
                        <svg
                          width={14}
                          height={11}
                          viewBox='0 0 14 11'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M13.6655 1.39641C13.1901 1.60149 12.6728 1.74907 12.1399 1.80656C12.6931 1.47788 13.1074 0.958619 13.3051 0.346204C12.7859 0.655036 12.2172 0.871595 11.6241 0.986274C11.3762 0.721276 11.0764 0.510168 10.7434 0.366102C10.4104 0.222036 10.0512 0.1481 9.68836 0.148902C8.22024 0.148902 7.03953 1.33893 7.03953 2.79928C7.03953 3.00436 7.06439 3.20943 7.10478 3.40673C4.90649 3.29177 2.94589 2.24155 1.64246 0.633614C1.40495 1.03927 1.2805 1.50117 1.28203 1.97123C1.28203 2.89094 1.74965 3.70191 2.46274 4.17885C2.0425 4.1623 1.63211 4.0468 1.26494 3.84173V3.87435C1.26494 5.16226 2.17533 6.22956 3.38866 6.47502C3.16084 6.5342 2.92649 6.56447 2.69111 6.56513C2.51866 6.56513 2.35554 6.54804 2.19086 6.52474C2.52643 7.57495 3.50362 8.33775 4.66724 8.3626C3.75685 9.07569 2.61654 9.49515 1.37835 9.49515C1.15619 9.49515 0.951119 9.48738 0.738281 9.46253C1.91278 10.216 3.30632 10.651 4.80706 10.651C9.67904 10.651 12.345 6.61484 12.345 3.11155C12.345 2.99659 12.345 2.88162 12.3372 2.76666C12.853 2.38914 13.3051 1.92152 13.6655 1.39641Z'
                            fill='#27272A'
                          />
                        </svg>
                      </div>
                    </a>
                  </div>
                  <div className='w-auto p-1.5'>
                    <a href='#'>
                      <div className='flex items-center justify-center w-8 h-8 border border-gray-300 hover:border-gray-400 rounded-full'>
                        <svg
                          width={16}
                          height={15}
                          viewBox='0 0 16 15'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M8.00094 0.360001C6.09046 0.360001 5.85022 0.368801 5.09958 0.402241C4.34894 0.437441 3.83766 0.555361 3.38974 0.729601C2.9199 0.906321 2.49433 1.18353 2.14278 1.54184C1.78468 1.89357 1.50751 2.31909 1.33054 2.7888C1.1563 3.23584 1.0375 3.748 1.00318 4.496C0.969738 5.2484 0.960937 5.48776 0.960937 7.40088C0.960937 9.31224 0.969738 9.5516 1.00318 10.3022C1.03838 11.052 1.1563 11.5633 1.33054 12.0112C1.51094 12.4741 1.75118 12.8666 2.14278 13.2582C2.5335 13.6498 2.92598 13.8909 3.38886 14.0704C3.83766 14.2446 4.34806 14.3634 5.09782 14.3978C5.84934 14.4312 6.0887 14.44 8.00094 14.44C9.91318 14.44 10.1517 14.4312 10.9032 14.3978C11.6521 14.3626 12.1651 14.2446 12.613 14.0704C13.0826 13.8936 13.5078 13.6164 13.8591 13.2582C14.2507 12.8666 14.4909 12.4741 14.6713 12.0112C14.8447 11.5633 14.9635 11.052 14.9987 10.3022C15.0321 9.5516 15.0409 9.31224 15.0409 7.4C15.0409 5.48776 15.0321 5.2484 14.9987 4.49688C14.9635 3.748 14.8447 3.23584 14.6713 2.7888C14.4944 2.31908 14.2172 1.89356 13.8591 1.54184C13.5077 1.1834 13.0821 0.906169 12.6121 0.729601C12.1633 0.555361 11.6512 0.436561 10.9023 0.402241C10.1508 0.368801 9.9123 0.360001 7.99918 0.360001H8.00182H8.00094ZM7.36998 1.62896H8.00182C9.8815 1.62896 10.1041 1.63512 10.846 1.66944C11.5324 1.70024 11.9055 1.81552 12.1537 1.91144C12.4819 2.03904 12.7169 2.19216 12.9633 2.43856C13.2097 2.68496 13.3619 2.91904 13.4895 3.24816C13.5863 3.49544 13.7007 3.86856 13.7315 4.55496C13.7658 5.2968 13.7729 5.51944 13.7729 7.39824C13.7729 9.27704 13.7658 9.50056 13.7315 10.2424C13.7007 10.9288 13.5854 11.301 13.4895 11.5492C13.3766 11.8549 13.1965 12.1313 12.9624 12.3579C12.716 12.6043 12.4819 12.7566 12.1528 12.8842C11.9064 12.981 11.5333 13.0954 10.846 13.127C10.1041 13.1605 9.8815 13.1684 8.00182 13.1684C6.12214 13.1684 5.89862 13.1605 5.15678 13.127C4.47038 13.0954 4.09814 12.981 3.84998 12.8842C3.54418 12.7715 3.26753 12.5916 3.04038 12.3579C2.80608 12.1309 2.62565 11.8543 2.51238 11.5483C2.41646 11.301 2.30118 10.9279 2.27038 10.2415C2.23694 9.49968 2.2299 9.27704 2.2299 7.39648C2.2299 5.5168 2.23694 5.29504 2.27038 4.5532C2.30206 3.8668 2.41646 3.49368 2.51326 3.24552C2.64086 2.91728 2.79398 2.68232 3.04038 2.43592C3.28678 2.18952 3.52086 2.03728 3.84998 1.90968C4.09814 1.81288 4.47038 1.69848 5.15678 1.6668C5.80622 1.63688 6.0579 1.62808 7.36998 1.6272V1.62896ZM11.7594 2.7976C11.6485 2.7976 11.5386 2.81945 11.4361 2.86191C11.3336 2.90436 11.2405 2.96659 11.1621 3.04504C11.0836 3.12348 11.0214 3.21661 10.9789 3.31911C10.9365 3.42161 10.9146 3.53146 10.9146 3.6424C10.9146 3.75334 10.9365 3.8632 10.9789 3.96569C11.0214 4.06819 11.0836 4.16132 11.1621 4.23976C11.2405 4.31821 11.3336 4.38044 11.4361 4.42289C11.5386 4.46535 11.6485 4.4872 11.7594 4.4872C11.9835 4.4872 12.1984 4.3982 12.3568 4.23976C12.5152 4.08133 12.6042 3.86646 12.6042 3.6424C12.6042 3.41835 12.5152 3.20347 12.3568 3.04504C12.1984 2.88661 11.9835 2.7976 11.7594 2.7976ZM8.00182 3.78496C7.52228 3.77748 7.04604 3.86547 6.60084 4.0438C6.15563 4.22214 5.75035 4.48726 5.40859 4.82373C5.06683 5.1602 4.79542 5.5613 4.61016 6.00367C4.4249 6.44604 4.32949 6.92084 4.32949 7.40044C4.32949 7.88004 4.4249 8.35484 4.61016 8.79721C4.79542 9.23958 5.06683 9.64068 5.40859 9.97715C5.75035 10.3136 6.15563 10.5787 6.60084 10.7571C7.04604 10.9354 7.52228 11.0234 8.00182 11.0159C8.95093 11.0011 9.85616 10.6137 10.5221 9.93726C11.1881 9.26084 11.5613 8.34967 11.5613 7.40044C11.5613 6.45121 11.1881 5.54004 10.5221 4.86362C9.85616 4.1872 8.95093 3.79977 8.00182 3.78496ZM8.00182 5.05304C8.62427 5.05304 9.22123 5.30031 9.66137 5.74045C10.1015 6.18059 10.3488 6.77755 10.3488 7.4C10.3488 8.02245 10.1015 8.61941 9.66137 9.05955C9.22123 9.49969 8.62427 9.74696 8.00182 9.74696C7.37937 9.74696 6.78241 9.49969 6.34227 9.05955C5.90213 8.61941 5.65486 8.02245 5.65486 7.4C5.65486 6.77755 5.90213 6.18059 6.34227 5.74045C6.78241 5.30031 7.37937 5.05304 8.00182 5.05304Z'
                            fill='#27272A'
                          />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </React.Fragment>
  );
}

