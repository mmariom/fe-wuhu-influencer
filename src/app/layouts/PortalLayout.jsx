import React from 'react'
import Header from "@/components/homepage/Header";
import MainContent from "@/components/homepage/MainContent";
import Footer from "@/components/homepage/Footer";
import PortalHeader from "../../components/portal/PortalHeader";

const PortalLayout = ({ children }) => {
    return (
        <>

            <PortalHeader/>
            <main>{children}</main>
            <Footer/>

        </>
    )
}

export default PortalLayout