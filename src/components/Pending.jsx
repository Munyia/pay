import React from 'react';

const Pending = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen p-6'>
      <div className='flex flex-col justify-center items-center bg-white shadow-lg rounded-lg p-8 w-full max-w-md'>
        <h1 className='text-4xl md:text-5xl font-bold text-yellow-600 mb-4'>PENDING</h1>
        <p className='text-lg md:text-xl text-gray-700 mb-2'>Your payment is pending</p>
        <p className='text-4xl md:text-5xl font-semibold text-gray-800 mb-6'>£90</p>
        <p className='text-gray-600 text-center'>Please wait while we process your payment.</p>
      </div>
    </div>
  );
}

export default Pending;
