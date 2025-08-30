import React from 'react';

const SignUpForm = () => {
    return (
        <div>
            <div>
                <form action="" method="post"  className='flex flex-col gap-5'>

                    <div className='flex flex-col md:flex-row gap-5 '>
                      <div className='flex flex-col gap-2 w-[100%]'>
                        <label htmlFor="">First Name</label>
                        <input type="text" name="firstName" placeholder='e.g. Tony' className='border w-full p-2 rounded-lg'  id="" />
                      </div>
                      <div className='flex flex-col gap-2 w-[100%]'>
                        <label htmlFor="">Last Name</label>
                        <input type="text" name="lastName" placeholder='e.g. Stark' className='border w-full p-2 rounded-lg'  id="" />
                      </div>
                    </div>
                    {/* email */}
                    <div>
                        <label htmlFor="">Email</label>
                        <input type="email" name="email" placeholder='e.g. tony@stark.com' className='border w-full p-2 rounded-lg'  />
                    </div>
                    {/* password */}
                    <div>
                        <label htmlFor="">Passwoard</label>
                        <input type="password" name="passwoard" placeholder='passwoard' min={6} className='border w-full p-2 rounded-lg'  />
                        <p className='text-[14px]'>Must be at least 8 characters</p>
                    </div>
                    {/*  */}
                    <div>
                        <checkbox name="terms" id=""  />
                        <span className='text-[14px]'>By signing up, you agree to our <span className='text-blue-600 underline'>Terms of Service</span> and <span className='text-blue-600 underline'>Privacy Policy</span></span>      

                    </div>

                    <div>
                        <button type="submit" className='w-full py-3 text-white font-bold bg-blue-700 rounded-lg cursor-pointer'>Let's get started</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUpForm;