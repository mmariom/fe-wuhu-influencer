
import React from 'react';
import { FormData } from './types';

// Step1.tsx

interface Step1Props {
    onNext: () => void;
    formData: FormData;
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

export const Step1: React.FC<Step1Props> = ({ onNext, formData, setFormData }) => {
    const [error, setError] = React.useState('');

    const validateAndNext = () => {
        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match");
            return;
        }
        setError('');
        onNext();
    };

    return (
        <div>
            {/* Email Input */}
            <label className='block mb-5'>
                <input
                    className='px-4 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300'
                    type='text'
                    placeholder='Email Address'
                    value={formData.email || ''}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
            </label>
            {/* Password Input */}
            <label className='block mb-5'>
                <input
                    className='px-4 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300'
                    type='password'
                    placeholder='Create Password'
                    value={formData.password || ''}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
            </label>
            {/* Confirm Password Input */}
            <label className='block mb-5'>
                <input
                    className='px-4 py-3.5 w-full text-gray-500 font-medium placeholder-gray-500 bg-white outline-none border border-gray-300 rounded-lg focus:ring focus:ring-indigo-300'
                    type='password'
                    placeholder='Confirm Password'
                    value={formData.confirmPassword || ''}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                />
            </label>
            {error && <p className="text-red-500">{error}</p>}
            <button onClick={validateAndNext} className='mb-8 py-4 px-9 w-full text-white font-semibold border border-indigo-700 rounded-xl shadow-4xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200'>
                Next
            </button>
            <p className='font-medium'>
                  <span>Do you alrady have an account ? </span>
                  <a className='text-indigo-600 hover:text-indigo-700' href='/login'>
                    Log in 
                  </a>
                </p>
        </div>
    );
};
