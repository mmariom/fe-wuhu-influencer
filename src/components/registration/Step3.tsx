import React from 'react';
import BackArrow from '../utils/BackArrow';
import CountrySelector from '../countrySelector/CountrySelector';
import { FormData } from './types'; // Import FormData from types.ts

interface Step3Props {
    onBack: () => void;
    onNext: () => void;
    formData: FormData;
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}




export const Step3: React.FC<Step3Props> = ({ onBack, onNext, formData, setFormData }) => {

  
      
    return (
        <div>
            <BackArrow onBack={onBack} />
            
            {/* First Name Input */}
            <label className='block mb-5'>
                <input
                    className='px-4 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300'
                    type='text'
                    placeholder='First Name'
                    value={formData.firstName || ''}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                />
            </label>

            {/* Last Name Input */}
            <label className='block mb-5'>
                <input
                    className='px-4 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300'
                    type='text'
                    placeholder='Last Name'
                    value={formData.lastName || ''}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                />
            </label>

            {/* Address Inputs */}
            <div className="space-y-5">
                <input
                    className='px-4 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300'
                    type='text'
                    placeholder='Street'
                    value={formData.street || ''}
                    onChange={(e) => setFormData({ ...formData, street: e.target.value })}
                />
                <input
                    className='px-4 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300'
                    type='text'
                    placeholder='City'
                    value={formData.city || ''}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                />
                <input
                    className='px-4 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300'
                    type='text'
                    placeholder='Postal Code'
                    value={formData.postalCode || ''}
                    onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                />
                {/* <input
                    className='px-4 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300'
                    type='text'
                    placeholder='Country'
                    value={formData.country || ''}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                /> */}

{/* <label className='block mb-5'>
        <select 
          value={formData.country || ''} 
          onChange={handleCountryChange} 
          className='px-4 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300'
        >
          <option value="">Select Country</option>
          {countries.map(country => (
            <option key={country.code} value={country.code}>
              {country.name}
            </option>
          ))}
        </select>
      </label> */}
<CountrySelector 
              value={formData.country}
              onChange={(selectedOption) => setFormData({ ...formData, country: selectedOption.value })}
            />

            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-5">
        
            <button onClick={onNext} className='mb-3 py-4 px-9 w-full text-white font-semibold border border-indigo-700 rounded-xl shadow-4xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200'>
                    Next
                </button>
            </div>
        </div>
    );
};
