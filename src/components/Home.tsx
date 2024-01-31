'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Header from './homepage/Header';
import MainContent from './homepage/MainContent';
import Footer from './homepage/Footer';
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

    </React.Fragment>
  );
}

