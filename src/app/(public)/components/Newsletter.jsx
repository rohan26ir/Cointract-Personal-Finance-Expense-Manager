"use client"

import { Undo, Vault } from "lucide-react";
import { useState } from "react";

const Newsletter = () => {
  // const [formdata, setFormData] = useState({
  //   name: "",
  //   email: "",
  // });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submited");
  }

  return (
    <div className='my-3'>
      <div className='bg-black text-white rounded-lg p-10   w-[75%] mx-auto '>
        <div>

          <form onSubmit={handleSubmit} className='text-white flex flex-col justify-center items-center w-[70%] mx-auto gap-5'>
            <label htmlFor="" className="text-5xl text-center">Stay Ahead of Expenses With Exclusive Budgeting Tips and News</label>
            
            <div className='flex gap-2 w-[70%]'>
              <input 
              type="email" 
              required 
              name='newsletter' 
              placeholder='Your email' 
              className='bg-white text-black rounded-md forced-colors:bg-red-600 px-2 py-5  w-[80%]' />
              <button type="submit" className='bg-amber-500 px-5 rounded-lg font-bold cursor-pointer w-[30%] flex items-center justify-center gap-1 '>Subscribe <Undo /></button>
            </div>

            <div className="flex justify-center items-center ">
              <p className="text-gray-300">Join 4,300+ user · Unsubscribe anytime</p>
            </div>

          </form>

        </div>
      </div>
    </div>
  );
};

export default Newsletter;