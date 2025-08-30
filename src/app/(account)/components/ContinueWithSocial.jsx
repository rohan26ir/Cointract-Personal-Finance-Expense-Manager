import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const ContinueWithSocial = () => {
    return (
        <div>
            <div className='flex flex-col gap-3 mt-5 w-[100%]'>
                <div className='flex gap-3 items-center justify-start cursor-pointer p-3 rounded-lg bg-white border border-gray-400 '>
                     <div className='text-2xl '> <FcGoogle /> </div>     <p>Continue with Google</p>
                </div>
                <div className='flex gap-3 items-center justify-start cursor-pointer p-3 rounded-lg bg-blue-500 border border-blue-500 text-white'>
                     <div  className='text-2xl '> <FaFacebook  />  </div>     <p>Continue with Facebook</p>
                </div>
            </div>
        </div>
    );
};

export default ContinueWithSocial;