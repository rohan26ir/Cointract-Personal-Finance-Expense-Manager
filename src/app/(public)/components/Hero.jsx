import React from 'react';

const Hero = () => {
  return (
    <div className='border border-white rounded-lg bg-black text-white'>
      <div className=''>
        <div className='flex flex-col md:flex-row justify-between gap-10 p-10 border'>
         <div className='flex flex-col w-[100%] '>
           <h2 className='text-4xl font-bold'>Lorem ipsum dolor consectetur adipisicing elit.</h2>
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis cumque deleniti esse. Tempore consequuntur consequatur neque vel delectus consectetur magnam.</p>
         </div>
         <div className='flex flex-col md:flex-row w-[100%]'>
          <h2>Lorem ipsum dolor sit amet.</h2>
         </div>
      </div>
      </div>
    </div>
  );
};

export default Hero;