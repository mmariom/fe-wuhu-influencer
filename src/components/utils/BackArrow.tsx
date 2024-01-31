// BackArrow.tsx
import React from 'react';

interface BackArrowProps {
  onBack: () => void;
}

const BackArrow: React.FC<BackArrowProps> = ({ onBack }) => {
  return (
    <button 
      onClick={onBack} 
      className='flex items-center mb-5 justify-center text-gray-500 hover:text-indigo-700'
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /> 
      </svg>
      <span className='font-bold'>Back</span>
    </button>
  );
};

export default BackArrow;
