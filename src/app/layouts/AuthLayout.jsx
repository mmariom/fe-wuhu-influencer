import React from 'react'
import Header from "@/components/homepage/Header";
import MainContent from "@/components/homepage/MainContent";
import Footer from "@/components/homepage/Footer";

const AuthLayout = ({ children }) => {
  return (
      <>

          <Header/>
          <main className="flex justify-center items-center h-screen">{children}</main>
          <Footer/>

      </>
  )
}

export default AuthLayout