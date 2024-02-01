'use client'
import React from 'react';
import PortalLayout from '../layouts/PortalLayout';
import AccountMetrics from '@/components/portal/instagram/AccountMetrics';
import AccountInfo from '@/components/portal/instagram/AccountInfo';
import OffersList from '@/components/portal/instagram/OffersList';



export default function Index() {
  return (

    <PortalLayout>
        
        <AccountMetrics/>
        <AccountInfo/>
        <OffersList/>

    </PortalLayout>

  );
}

