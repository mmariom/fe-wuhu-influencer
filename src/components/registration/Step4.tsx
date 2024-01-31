import React, { useState, useEffect } from 'react';
import BackArrow from '../utils/BackArrow';
import CountrySelector from '../countrySelector/CountrySelector'; // Assuming you have this component
import { CompanyData, FormData } from './types';



interface Step4Props {
  onBack: () => void;
  onNext: (isBusinessUser: boolean, companyData?: CompanyData) => void;
  formData: FormData; // Assuming formData might be needed for initial values or similar
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}




  

export const Step4: React.FC<Step4Props> = ({ onBack, onNext, formData, setFormData }) => {
    // const [isBusinessUser, setIsBusinessUser] = useState(formData.isBusinessUser ? "yes" : "no");
    const [isBusinessUser, setIsBusinessUser] = useState(formData.isBusinessUser);


    const [companyData, setCompanyData] = useState<CompanyData>(formData.company || {
      companyName: '',
      street: '',
      city: '',
      postalCode: '',
      country: '',
      companyRegNumber: '',
    });
  
    // Update formData whenever companyData changes
    useEffect(() => {
        setFormData(currentFormData => ({
          ...currentFormData,
          company: isBusinessUser ? companyData : undefined,
        }));
      }, [companyData, isBusinessUser, setFormData]);
    
      const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCompanyData({ ...companyData, [e.target.name]: e.target.value });
      };
   
      const handleBusinessUserChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const isBizUser = e.target.value === 'true'; // Correctly interpret the string value
        setIsBusinessUser(isBizUser);
        setFormData(currentFormData => ({
            ...currentFormData,
            isBusinessUser: isBizUser,
            company: isBizUser ? companyData : undefined,
         

        }));
    };

    
  

  return (
    <div>
      <BackArrow onBack={onBack} />
      
      {/* Business User Selection */}
      <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Are you a business user?
      </label>
      <select
    className="block appearance-none w-full  border border-indigo-600 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-indigo-800"
    value={String(isBusinessUser)} // Ensure the select value is a string representation of the boolean state
    onChange={handleBusinessUserChange}
>
    <option value="false">No</option>
    <option value="true">Yes, I am a business</option>
</select>

    </div>

    {isBusinessUser && (
  <>
    <input
      type="text"
      name="companyName"
      placeholder="Company Name"
      className="px-4 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300 mb-4"
      value={companyData.companyName}
      onChange={handleInputChange}
    />

    <input
      type="text"
      name="companyRegNumber"
      placeholder="Company Registration Number"
      className="px-4 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300 mb-4"
      value={companyData.companyRegNumber}
      onChange={handleInputChange}
    />

    <input
      type="text"
      name="street"
      placeholder="Street"
      className="px-4 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300 mb-4"
      value={companyData.street}
      onChange={handleInputChange}
    />
    <input
      type="text"
      name="city"
      placeholder="City"
      className="px-4 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300 mb-4"
      value={companyData.city}
      onChange={handleInputChange}
    />
    <input
      type="text"
      name="postalCode"
      placeholder="Postal Code"
      className="px-4 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300 mb-4"
      value={companyData.postalCode}
      onChange={handleInputChange}
    />
    <CountrySelector
      value={companyData.country}
      onChange={(selectedOption) =>
        setCompanyData({ ...companyData, country: selectedOption.value })
      }
    />
 
  </>
)}

       <div className="flex justify-between mt-5">
            <button
              className="mb-3 py-4 px-9 w-full text-white font-semibold border border-indigo-700 rounded-xl shadow-4xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200"
              onClick={() => onNext(isBusinessUser, companyData)}
            >
                
              Finish Registration { isBusinessUser && 'as Business'}
            </button>
          </div>
    </div>
  );
};
