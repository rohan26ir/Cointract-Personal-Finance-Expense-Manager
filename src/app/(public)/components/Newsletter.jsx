"use client"

import { Vault } from "lucide-react";
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
      <div className='bg-black text-white rounded-lg p-10'>
        <div>

          <form onSubmit={handleSubmit} className='text-white flex flex-col w-60 mx-auto'>
            <label htmlFor="">Newsletter</label>
            
            <div className='flex gap-2'>
              <input 
              type="email" 
              required 
              name='newsletter' 
              placeholder='Enter your email' 
              className='bg-white text-black rounded-md forced-colors:bg-red-600 p-2' />
              <button type="submit" className='bg-amber-500 px-5 rounded-lg font-bold cursor-pointer'>Submit</button>
            </div>

          </form>

        </div>
      </div>
    </div>
  );
};

export default Newsletter;