'use client'
import React from 'react';
import PortalLayout from '../layouts/PortalLayout';
import AccountMetrics from '@/components/portal/instagram/AccountMetrics';
import AccountInfo from '@/components/portal/instagram/AccountInfo';
import OffersList from '@/components/portal/instagram/OffersList';
import InstagramConnect from '@/components/portal/instagram/InstagramConnect';



export default function Index() {
  return (

    <PortalLayout>
              
        <div className='flex flex-wrap  -mb-3 md:mb-0'>
            


          <div className='w-full md:w-1/2 px-3 mb-3 md:mb-0'>
          <InstagramConnect/>
          </div>

          <div className='w-full md:w-1/2 px-3 mb-3 md:mb-0'>
          <AccountMetrics/>
          </div>

        </div>
    


        <AccountInfo/>
        <OffersList/>

    </PortalLayout>

  );
}

