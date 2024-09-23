import React from 'react';
import { Link } from 'react-router-dom';

const PaymentOptions = () => {
  return (
    <div className='flex flex-col py-6 items-center w-full min-h-screen bg-dB px-4 sm:px-6'>
      <h1 className='text-3xl sm:text-4xl font-bold text-center my-10 text-white drop-shadow-md'>
        Select Payment Option
      </h1>
      <div className='flex flex-col sm:flex-row text-center justify-center mx-auto w-full flex-wrap gap-y-10 gap-6'>
        <Link
          to={'/crypto'}
          className='border border-gray-300 rounded-3xl w-full sm:w-1/3 py-8 sm:py-10 bg-white shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105 hover:bg-blue-200'
        >
          <p className='text-xl sm:text-2xl font-semibold text-gray-800'>Crypto</p>
        </Link>
        <Link
          to={'/banktransfer'}
          className='border border-gray-300 rounded-3xl w-full sm:w-1/3 py-8 sm:py-10 bg-white shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105 hover:bg-blue-200'
        >
          <p className='text-xl sm:text-2xl font-semibold text-gray-800'>Bank Transfer</p>
        </Link>
        <Link
          to={'/cardpayment'}
          className='border border-gray-300 rounded-3xl w-full sm:w-1/3 py-8 sm:py-10 bg-white shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105 hover:bg-blue-200'
        >
          <p className='text-xl sm:text-2xl font-semibold text-gray-800'>PayPal/Card Payment</p>
        </Link>
      </div>
    </div>
  );
};

export default PaymentOptions;
