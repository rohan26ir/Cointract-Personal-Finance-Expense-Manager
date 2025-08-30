import React from 'react';
import Link from 'next/link';
import ContinueWithSocial from '../components/ContinueWithSocial';
import SignInForm from '../components/SignInForm';

const page = () => {
    return (
        <div className=''>
          <div className='flex flex-col md:flex-row justify-between items-center gap-5'>
            <div className='w-[100%]  p-10   '>
            
            <div className='w-[100%] md:w-[80%] lg:w-[60%] mx-auto border p-10'>
                <h2 className='text-5xl font-bold'>Sign In </h2>
            <p className='text-xl'>Use your social profile to log in.</p>


            <ContinueWithSocial></ContinueWithSocial>



            {/* or */}
            <div className='flex items-center justify-center gap-3 my-5'>
                <div className='w-[100%] border-b'></div>
                <div>OR</div>
                <div className='w-[100%] border-b'></div>
            </div>



            {/* form */}
              <SignInForm></SignInForm>
            {/* End Form */}



            <div className='text-center mt-5'>
              <p>Already have an account? <Link href={'/SignUp'} className='text-blue-700'>Create Account</Link></p>
            </div>
            
            </div>
            
            
          </div>  
          {/* right */}
          <div className='w-[100%] border'>
          </div>

          </div>
        </div>
    );
};

export default page;