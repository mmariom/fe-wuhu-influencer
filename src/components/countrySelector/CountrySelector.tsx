import React from 'react';
import countries from './countries.json';
import Select from 'react-select';

// Define the shape of a country option
interface CountryOption {
  value: string;
  label: string;
  customAbbreviation: string;
}

// Define the props for the CountrySelector component
interface CountrySelectorProps {
  value?: string; // Make the value prop optional
  onChange: (newValue: any, actionMeta: any) => void;
}



const formatOptionLabel = (option: CountryOption) => (
  <div style={{ display: "flex", alignItems: "center" }}>
    <img src={option.customAbbreviation} alt={option.label} style={{ marginRight: 10, width: 20 }} />
    <div>{option.label}</div>
  </div>
);

const CountrySelector: React.FC<CountrySelectorProps> = ({ value, onChange }) => {
  const options = countries.map((country) => ({
    value: country.code,
    label: country.name,
    customAbbreviation: country.flag,
  }));

  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      backgroundColor: 'white',
      borderColor: '#d1d5db',
      minHeight: '48px',
      boxShadow: value ? '0 0 0 2px rgba(79, 70, 229, 0.5)' : 'none',
    }),
    option: (provided: any) => ({
      ...provided,
      color: 'black',
    }),
  };

  return (
    <Select 
      options={options} 
      value={options.find((option) => option.value === value)}
      onChange={onChange}
      formatOptionLabel={formatOptionLabel}
      styles={customStyles}
      classNamePrefix="react-select"
    />
  );
};

export default CountrySelector;
