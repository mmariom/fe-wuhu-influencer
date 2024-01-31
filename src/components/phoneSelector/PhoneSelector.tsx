// PhoneNumberInput.tsx
import React, { useState, useEffect } from 'react';
import countryCodes from './phoneCodes.json';
import { FormData } from '../registration/types';

interface PhoneNumberInputProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({ formData, setFormData }) => {
  const [selectedCountry, setSelectedCountry] = useState(countryCodes[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    if (countryCodes.length > 0) {
      setSelectedCountry(countryCodes[0]);
      setFormData({ ...formData, phoneCode: countryCodes[0].phone });
    }
  }, [setFormData]);

  const handleCountrySelect = (code: string) => {
    const country = countryCodes.find((c) => c.code === code);
    if (country) {
      setSelectedCountry(country);
      setFormData({ ...formData, phoneCode: country.phone });
    }
    setIsDropdownOpen(false);
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, phoneNumber: e.target.value });
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex items-center mb-5">
      {/* Country Code Dropdown */}
      <div className="relative">
        <button
          className="flex items-center pl-2 pr-8 py-3.5 bg-white border border-r-0 border-gray-300 rounded-l-lg focus:ring focus:ring-indigo-300"
          onClick={toggleDropdown} // Toggle dropdown on click
        >
          <img src={selectedCountry.flag} alt="" className="w-5 h-5 mr-2" />
          <span>{selectedCountry.phone}</span>
        </button>
        <div className={`absolute z-10 ${isDropdownOpen ? '' : 'hidden'} bg-white divide-y divide-gray-100 rounded-lg shadow w-52 h-40 overflow-y-auto`}>
          {countryCodes.map((country) => (
            <button
              key={country.code}
              onClick={() => handleCountrySelect(country.code)}
              className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <img src={country.flag} alt="" className="w-5 h-5 mr-2" />
              <span>{country.phone}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Phone Number Input */}
      <input
        className="w-full px-4 py-3.5 text-gray-500 bg-white border border-gray-300 rounded-r-lg focus:ring focus:ring-indigo-300"
        type="text"
        placeholder="Phone Number"
        value={formData.phoneNumber || ''}
        onChange={handlePhoneNumberChange}
      />
    </div>
  );
};

export default PhoneNumberInput;
