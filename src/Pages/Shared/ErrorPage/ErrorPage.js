import React from 'react';
import { Link } from 'react-router-dom';
import errorimage from '../../../assets/images/errorImage.jpeg';

const ErrorPage = () => {
    return (
        <div className='my-10'>
            <p className='text-5xl font-bolder text-center text-white'>Upps!! Page not Found </p>
            <img className='w-2/3 mx-auto rounded' src={errorimage} alt=''></img>
            <p className='text-center my-4 py-4'><button className='btn btn-accent'><Link to='/'>Back Home</Link></button></p>
        </div>
    );
};

export default ErrorPage;