'use client'

import React, { useState } from 'react';
import { Step1 } from "@/components/registration/Step1";
import { Step2 } from "@/components/registration/Step2"; // Import Step2
import { Step3 } from "@/components/registration/Step3"; // Import Step3
import AuthLayout from "@/app/layouts/AuthLayout";
import { CompanyData, FormData } from '@/components/registration/types'; 
import { Step4 } from '@/components/registration/Step4';
import { createApiRequestData } from './(utils)/createApiRequestData';
import { register } from '@/backend/register';


export default function Register() {
  const [companyData, setCompanyData] = useState<CompanyData | undefined>(undefined);

  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    phoneCode: '',
    firstName: '',
    lastName: '',
    street: '',     
    city: '',      
    postalCode: '', 
    country: '',    
    isBusinessUser: false, 

  });


  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const prevStep = () => setCurrentStep((prev) => prev - 1);



  // const handleSubmit = () => {
  //   const apiRequestData = createApiRequestData(formData);

  //   console.log(apiRequestData);
  // };

  // In your Register component

const handleSubmit = async () => {
  const apiRequestData = createApiRequestData(formData);
console.log(apiRequestData);
  try {
    const sessionObject = await register(apiRequestData);
    console.log('Registration successful:', sessionObject);
    // Redirect the user or perform other actions upon successful registration
  } catch (error) {
    console.error('Error during registration:', error);
    // Handle errors (e.g., show an error message)
  }
};


  return (
      <AuthLayout>
        <section className='py-16 xl:pb-56 bg-white overflow-hidden'>
          <div className='container px-4 mx-auto'>
            <div className='text-center max-w-md mx-auto'>
              <h2 className='mb-4 text-6xl md:text-7xl text-center font-bold font-heading tracking-px-n leading-tight'>
                Join for free
              </h2>
              <p className='mb-12 font-medium text-lg text-gray-600 leading-normal'>
                Lorem ipsum dolor sit amet, to the con adipiscing. Volutpat tempor to the condim entum.
              </p>
              {currentStep === 1 && <Step1 onNext={nextStep} formData={formData} setFormData={setFormData} />}
              {currentStep === 2 && <Step2 onBack={prevStep} onNext={nextStep} formData={formData} setFormData={setFormData} />}
              {currentStep === 3 && <Step3 onBack={prevStep} onNext={nextStep} formData={formData} setFormData={setFormData} />}
              {currentStep === 4 && (
    <Step4
    onBack={prevStep}
    onNext={(isBizUser, companyInfo) => {
        setFormData(prevFormData => ({
            ...prevFormData,
            isBusinessUser: isBizUser,
            ...(isBizUser ? { company: companyInfo } : {}), // Include company if isBizUser is true
        }));
        handleSubmit(); // Consider moving handleSubmit outside if it doesn't need to be called immediately
    }}
    formData={formData}
    setFormData={setFormData}
/>

    
)}




            </div>
          </div>
        </section>
      </AuthLayout>
  );
}
