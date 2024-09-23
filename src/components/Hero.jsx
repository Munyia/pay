import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='flex flex-col h-screen justify-between items-center'>
      <div className='flex flex-col items-center justify-center h-full text-center space-y-4'>
        <h1 className='text-4xl mb-6 md:text-6xl'>Hi, Jane Smith</h1>
        <p className='text-4xl mb-6  md:text-6xl'>Amount to pay</p>
        <p className='text-4xl mb-6  md:text-6xl text-dB'>£90</p>
      </div>
      <Link to={'/paymentoptions'} className='rounded-3xl p-4 mb-9 text-white bg-dB hover:bg-pry text-center w-full md:w-auto'>
        Make Payment
      </Link>
    </div>
  );
};

export default Hero;
