import React from 'react';
import { Link } from 'react-router';

const Error = () => {
    return (
        <div className='min-h-screen flex flex-col items-center justify-center bg-base-200 px-4'>
           <h1 className='text-7xl font-bold text-primary'>404</h1>
           <p className='text-xl mt-4 text-gray-600 text-center'>Page not found. Something went wrong</p>
           <img src="https://i.postimg.cc/XqJZLp6z/error-404.png" alt="Error" className='w-64 mt-6' />
           <Link to="/" className='btn btn-primary mt-6'>Back to Home</Link>
        </div>
    );
};

export default Error;