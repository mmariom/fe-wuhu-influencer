import React from 'react'
import Header from "@/components/homepage/Header";
import MainContent from "@/components/homepage/MainContent";
import Footer from "@/components/homepage/Footer";

const HomeLayout = ({ children }) => {
  return (
      <>

          <Header/>
          <main className="min-h-screen">{children}</main>
          <Footer/>

      </>
  )
}

export default HomeLayout