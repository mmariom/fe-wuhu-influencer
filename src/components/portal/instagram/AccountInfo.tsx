import React from 'react'

const AccountInfo = () => {
  return (
    <section className='py-3'>
    <div className='container px-4 mx-auto'>

    <div className='p-8 bg-gray-500 rounded-xl'>

      
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

          
    <div className='relative p-6 mb-5 text-center bg-gray-500 rounded-xl'>
      <img
        className='block mx-auto mb-5 w-28 h-28'
        src='trizzle-assets/images/avatar-men-1.png'
        alt=''
      />
      <h4 className='text-xl text-white font-bold mb-3'>
        @johndeep
      </h4>
      <p className='text-gray-300 mb-3'>last update</p>
      <span className='inline-block px-2 py-1 mb-6 text-xs text-green-500 font-medium bg-teal-900 rounded-full'>
        paired
      </span>
      <div className='flex flex-wrap items-center -mx-2'>
        <div className='w-full sm:w-1/2 px-2 mb-2 sm:mb-0'>
          <a
            className='flex px-2 py-3 items-center justify-center bg-gray-600 hover:bg-gray-700 text-sm leading-6 font-bold text-white rounded-xl transition duration-200'
            href='#'
          >
            <svg
              width={14}
              height={12}
              viewBox='0 0 14 12'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M11.6668 0.666664H2.3335C1.80306 0.666664 1.29436 0.877378 0.919283 1.25245C0.54421 1.62752 0.333496 2.13623 0.333496 2.66666V9.33333C0.333496 9.86376 0.54421 10.3725 0.919283 10.7475C1.29436 11.1226 1.80306 11.3333 2.3335 11.3333H11.6668C12.1973 11.3333 12.706 11.1226 13.081 10.7475C13.4561 10.3725 13.6668 9.86376 13.6668 9.33333V2.66666C13.6668 2.13623 13.4561 1.62752 13.081 1.25245C12.706 0.877378 12.1973 0.666664 11.6668 0.666664ZM11.3935 2L7.4735 5.92C7.41152 5.98248 7.33779 6.03208 7.25655 6.06593C7.17531 6.09977 7.08817 6.1172 7.00016 6.1172C6.91215 6.1172 6.82502 6.09977 6.74378 6.06593C6.66254 6.03208 6.5888 5.98248 6.52683 5.92L2.60683 2H11.3935ZM12.3335 9.33333C12.3335 9.51014 12.2633 9.67971 12.1382 9.80474C12.0132 9.92976 11.8436 10 11.6668 10H2.3335C2.15668 10 1.98712 9.92976 1.86209 9.80474C1.73707 9.67971 1.66683 9.51014 1.66683 9.33333V2.94L5.58683 6.86C5.96183 7.23453 6.47016 7.4449 7.00016 7.4449C7.53016 7.4449 8.03849 7.23453 8.4135 6.86L12.3335 2.94V9.33333Z'
                fill='#194BFB'
              />
            </svg>
            <span className='ml-3'>Email</span>
          </a>
        </div>
        <div className='w-full sm:w-1/2 px-2'>
          <a
            className='flex px-2 py-3 items-center justify-center bg-gray-600 hover:bg-gray-700 text-sm leading-6 font-bold text-white rounded-xl transition duration-200'
            href='#'
          >
            <svg
              width={15}
              height={14}
              viewBox='0 0 15 14'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M12.4601 7.66667C12.3134 7.66667 12.1601 7.62 12.0134 7.58667C11.7164 7.52121 11.4245 7.43432 11.1401 7.32666C10.8308 7.21415 10.4908 7.21999 10.1856 7.34307C9.88038 7.46614 9.63146 7.69775 9.48673 7.99333L9.34007 8.29333C8.69074 7.93212 8.09406 7.48349 7.56673 6.96C7.04325 6.43268 6.59461 5.836 6.2334 5.18666L6.5134 5C6.80898 4.85528 7.04059 4.60635 7.16366 4.30113C7.28674 3.9959 7.29258 3.65594 7.18007 3.34666C7.07422 3.06161 6.98736 2.76986 6.92007 2.47333C6.88673 2.32667 6.86007 2.17333 6.84007 2.02C6.75911 1.55041 6.51315 1.12516 6.14648 0.820825C5.77981 0.51649 5.31653 0.353071 4.84007 0.359999H2.84007C2.55275 0.357301 2.26823 0.416541 2.00587 0.533685C1.74351 0.65083 1.50947 0.823129 1.31969 1.03885C1.1299 1.25458 0.988824 1.50866 0.906059 1.78381C0.823295 2.05895 0.800787 2.3487 0.840067 2.63333C1.19523 5.42625 2.47075 8.02125 4.46517 10.0084C6.45958 11.9956 9.05921 13.2617 11.8534 13.6067H12.1067C12.5983 13.6074 13.073 13.427 13.4401 13.1C13.651 12.9114 13.8195 12.6801 13.9344 12.4215C14.0493 12.163 14.108 11.883 14.1067 11.6V9.6C14.0986 9.13692 13.9299 8.69103 13.6296 8.33844C13.3293 7.98585 12.9159 7.74842 12.4601 7.66667ZM12.7934 11.6667C12.7933 11.7613 12.773 11.8549 12.7339 11.9411C12.6948 12.0273 12.6378 12.1042 12.5667 12.1667C12.4925 12.2313 12.4054 12.2796 12.3112 12.3083C12.217 12.337 12.1178 12.3456 12.0201 12.3333C9.52333 12.0132 7.20422 10.871 5.42854 9.08686C3.65286 7.30273 2.52167 4.97822 2.2134 2.48C2.20279 2.38234 2.21209 2.28355 2.24074 2.18959C2.26938 2.09563 2.31678 2.00846 2.38007 1.93333C2.44254 1.86222 2.51944 1.80523 2.60565 1.76614C2.69186 1.72706 2.78541 1.70678 2.88007 1.70667H4.88007C5.0351 1.70322 5.18648 1.75392 5.30816 1.85005C5.42984 1.94617 5.51421 2.08171 5.54673 2.23333C5.5734 2.41555 5.60673 2.59555 5.64673 2.77333C5.72375 3.12476 5.82624 3.47012 5.9534 3.80666L5.02007 4.24C4.94026 4.27661 4.86848 4.32863 4.80884 4.39306C4.7492 4.45749 4.70287 4.53307 4.67251 4.61546C4.64216 4.69785 4.62838 4.78542 4.63197 4.87315C4.63555 4.96087 4.65643 5.04703 4.6934 5.12666C5.65287 7.18183 7.3049 8.83387 9.36007 9.79333C9.52237 9.86001 9.70443 9.86001 9.86673 9.79333C9.94987 9.76359 10.0263 9.71763 10.0915 9.65812C10.1567 9.59861 10.2095 9.52673 10.2467 9.44666L10.6601 8.51333C11.0047 8.63658 11.3565 8.73899 11.7134 8.82C11.8912 8.86 12.0712 8.89333 12.2534 8.92C12.405 8.95252 12.5406 9.03689 12.6367 9.15857C12.7328 9.28025 12.7835 9.43163 12.7801 9.58667L12.7934 11.6667Z'
                fill='#194BFB'
              />
            </svg>
            <span className='ml-3'>Call</span>
          </a>
        </div>
      </div>
    </div>

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

      
    </form>
  </div>
  </div>
   </section>
  )
}

export default AccountInfo