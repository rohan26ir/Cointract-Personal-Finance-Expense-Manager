import Lottie from 'lottie-react';
import React from 'react';

import heroLottie from '../../../../public/lottie/Bussiness.json';
import { Bot } from 'lucide-react';

const Hero = () => {
  return (
    <div className=' rounded-lg bg-black/10'>
      <div className=''>
        <div className='flex flex-col md:flex-row justify-between gap-10 p-10 '>
          {/* left side */}
         <div className='flex flex-col w-[100%] lg:w-[80%] '>
           <h2 className='text-7xl font-bold'>Take Control of Your Finances</h2>
           <p className='text-2xl'>Track expenses, manage budgets, and gain insights—all in one simple platform. Stay organized, spot patterns, and set goals with ease.</p>

           <div className='mt-5'>
            <button className='bg-amber-500 text-white rounded-lg py-2 px-5 text-lg font-bold flex gap-2 cursor-pointer'> <Bot /> Start Managing Today</button>
           </div>
         </div>

         {/* right side */}
         <div className='flex flex-col md:flex-row justify-end w-[100%]  '>
           <div className='w-[100%] lg:w-[80%] bg-white py-5 rounded-lg'>
             <Lottie  
             animationData={heroLottie}
             loop
             autoplay
              style={{ width: "100%", height: 300,  }}
           />
           </div>
         </div>
      </div>
      </div>
    </div>
  );
};

export default Hero;