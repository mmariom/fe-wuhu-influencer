import React, { useEffect, useState } from 'react';

import API from '@/backend/utils/api';
import { url } from '@/backend/utils/url';



const AccountInfo = () => {


  const [accountDetails, setAccountDetails] = useState({
    country: '',
    gender: '',
    yearOfBirth: '',
    interests: [],
  });
  
  
  useEffect(() => {
    const fetchAccountDetails = async () => {
      try {
        // Assuming you have an Axios instance named `API` configured
        const response = await API.get(`${url}/instagram/account/get-account-details`);
        console.log(response, 'response');
        console.log(response.data, 'response.data');
        setAccountDetails(response.data);
      } catch (error) {
        console.error('Failed to fetch account details:', error);
        // Handle error (e.g., showing a notification to the user)
      }
    };
  
    fetchAccountDetails();
  }, []);

  
  return (
    <div>

    <section className='py-3'>
    <div className='container px-4 mx-auto'>

    <div className='p-8 bg-gray-500 rounded-xl'>
      <div className='flex justify-center'>
        <span className='inline-block px-2 py-1 mb-6 text-xs text-green-500 font-medium bg-teal-900 rounded-full'>
            Active
        </span>
      </div>
    <div className='flex flex-wrap items-center justify-between -mx-4 mb-8 pb-6 border-b border-gray-400 border-opacity-20'>
     
      <div className='w-full sm:w-auto px-4 mb-8 sm:mb-0'>
        <h4 className='text-2xl font-bold tracking-wide text-white mb-1'>
          More details to your Instagram profile
        </h4>
        <p className='text-sm text-gray-300'>
          Update your billing details and address
        </p>
        
      </div>
   
 
    </div>
    <form action=''>
      
      <div className='flex flex-wrap items-start -mx-4'>
        <div className='w-full sm:w-1/3 px-4 mb-8 sm:mb-0'>
         
        <div className='block mt-5 text-sm font-medium text-gray-100'>
        <br />
        <p>Please follow the steps below to register your account:</p>
        <br />
        <ol>
          <li className='text-red-200'><strong>Step 1:</strong> Please connect your IG account with our application so we can verify that this account belongs to you . Lorem ipsum bla bla blac bla....</li>
         <br />
          <li className='text-yellow-200'><strong>Step 2:</strong> Dont forget to add infomation about  you and your profile like gender ,yob, the country you are from . And also try to add interest which are closely related to your Insgramra account (ex if most of your attention flows to dogs then put there animals for example).</li>
        <br />
          <li className='text-green-200'><strong>Step 3:</strong> When you fill al the  informationt dont forget to Submit it . Whenever you change your data or you decide to  change your ig profile you must resubmit so we ca manualy verify your account. You will receive reply on your email.</li>
          <br />
        </ol>
        <p>All the information which you have entered will be used by customers of this platform to provide them best result in their campaigns. By submiting this for you are agree with this Terms and conditions</p>
      </div>


        </div>
        <div className='w-full sm:w-2/3 px-4'>
          <div className='max-w-full'>
           {/* start */}


           {/* end */}
            <div className='flex flex-wrap -mx-4 -mb-10'>
              <div className='w-full md:w-1/2 px-4 mb-10'>

                
                <div className='relative w-full h-14 py-4 px-3 border border-gray-400 hover:border-white focus-within:border-green-500 rounded-lg'>
                  <span className='absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-300 px-1 bg-gray-500'>
                    Your Gender
                  </span>
                  <input
                    className='block w-full outline-none bg-transparent text-gray-50 placeholder-gray-50 font-semibold'
                    id='formInput2-7'
                    type='text'
                    placeholder='United States'
                  />
                </div>
              </div>
              <div className='w-full md:w-1/2 px-4 mb-10'>
                <div className='relative block px-3 w-full font-medium border border-gray-400 hover:border-white focus-within:border-green-500 rounded-lg'>
                  <span className='absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-300 px-1 bg-gray-500'>
                    Country
                  </span>
                  <span className='absolute top-1/2 right-0 mr-5 transform -translate-y-1/2'>
                    <svg
                      width={12}
                      height={8}
                      viewBox='0 0 12 8'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M10.9999 1.16994C10.8126 0.983692 10.5591 0.87915 10.2949 0.87915C10.0308 0.87915 9.77731 0.983692 9.58995 1.16994L5.99995 4.70994L2.45995 1.16994C2.27259 0.983692 2.01913 0.87915 1.75495 0.87915C1.49076 0.87915 1.23731 0.983692 1.04995 1.16994C0.95622 1.26291 0.881826 1.37351 0.831057 1.49537C0.780288 1.61723 0.75415 1.74793 0.75415 1.87994C0.75415 2.01195 0.780288 2.14266 0.831057 2.26452C0.881826 2.38638 0.95622 2.49698 1.04995 2.58994L5.28995 6.82994C5.38291 6.92367 5.49351 6.99807 5.61537 7.04883C5.73723 7.0996 5.86794 7.12574 5.99995 7.12574C6.13196 7.12574 6.26267 7.0996 6.38453 7.04883C6.50638 6.99807 6.61699 6.92367 6.70995 6.82994L10.9999 2.58994C11.0937 2.49698 11.1681 2.38638 11.2188 2.26452C11.2696 2.14266 11.2957 2.01195 11.2957 1.87994C11.2957 1.74793 11.2696 1.61723 11.2188 1.49537C11.1681 1.37351 11.0937 1.26291 10.9999 1.16994Z'
                        fill='#3D485B'
                      />
                    </svg>
                  </span>
                  <select
                    className='w-full py-4 text-gray-50 font-semibold appearance-none bg-transparent outline-none'
                    id='formInput2-9'
                    name=''
                  >
                    <option className='bg-gray-500' value={1}>
                      New York
                    </option>
                    <option className='bg-gray-500' value={1}>
                      New York
                    </option>
                    <option className='bg-gray-500' value={1}>
                      New York
                    </option>
                  </select>
                </div>
              </div>
              <div className='w-full md:w-1/2 px-4 mb-10'>
                <div className='relative w-full h-14 py-4 px-3 border border-gray-400 hover:border-white focus-within:border-green-500 rounded-lg'>
                  <span className='absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-300 px-1 bg-gray-500'>
                    YOB
                  </span>
                  <input
                    className='block w-full outline-none bg-transparent text-gray-50 placeholder-gray-50 font-semibold'
                    id='formInput2-10'
                    type='text'
                    placeholder='550-750'
                  />
                </div>
              </div>
              <div className='w-full px-4 mb-10'>
                <div className='relative w-full h-14 py-4 px-3 border border-gray-400 hover:border-white focus-within:border-green-500 rounded-lg'>
                  <span className='absolute bottom-full left-0 ml-3 -mb-1 transform translate-y-0.5 text-xs font-semibold text-gray-300 px-1 bg-gray-500'>
                    Interest
                  </span>
                  <input
                    className='block w-full outline-none bg-transparent text-gray-50 placeholder-gray-50 font-semibold'
                    id='formInput2-11'
                    type='text'
                  />
                </div>
              </div>
            </div>
            <div className='w-full sm:w-auto flex justify-center pt-5'>
        <div>
          {/* <a
            className='inline-block py-2 px-4 mr-3 text-xs text-center font-semibold leading-normal text-gray-400 bg-gray-600 hover:bg-gray-700 rounded-lg transition duration-200'
            href='#'
          >
            Cancel
          </a> */}
          <a
            className='inline-block py-2 px-4 text-xs text-center font-semibold leading-normal text-blue-50 bg-blue-500 hover:bg-blue-600 rounded-lg transition duration-200'
            href='#'
          >
            Save
          </a>
          
        </div>
      </div>
      
      <p className='text-white mt-3'>By clicking submit your accout will change its status to Pending.We will manualy verify All the information which you have entered will be used by customers of this platform to provide them best result in their campaigns. By submiting this for you are agree with this Terms and conditions</p>

          </div>
 
        </div>
        
      </div>
      
      <input
  className='block w-full outline-none bg-transparent text-gray-50 placeholder-gray-50 font-semibold'
  id='formInput2-7'
  type='text'
  placeholder='Gender'
  value={accountDetails.gender || ''} // Use the state value
  readOnly // Make it readOnly if you don't want it to be editable, or handle changes if it should be
/>

    
    </form>


    
  </div>
  </div>
   </section>
  </div>
  )
}

export default AccountInfo