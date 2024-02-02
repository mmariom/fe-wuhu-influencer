import React from 'react'
import PortalHeader from "../../components/portal/PortalHeader";
import PortalFooter from '@/components/portal/PortalFooter';

const PortalLayout = ({ children }) => {
    return (
      
        <>

            <PortalHeader/>

            <main className="min-h-screen bg-gray-600">
            <div className='mx-auto lg:ml-80'>
          <section className='py-8'>
            <div className='container px-4 mx-auto'>
                {children}
                
                
                </div>
                </section>
                 </div>
                 </main>
            <PortalFooter/>

            </>
    )
}

export default PortalLayout