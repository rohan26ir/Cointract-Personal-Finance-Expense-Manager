import React from 'react';

const SignInForm = () => {
    return (
        <div>
            <div>
                <form action="" method="post"  className='flex flex-col gap-5'>
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
                        <button type="submit" className='w-full py-3 text-white font-bold bg-blue-700 rounded-lg cursor-pointer'>Log in</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignInForm;