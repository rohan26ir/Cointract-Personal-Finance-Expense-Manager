import React from 'react';

const Accordion = () => {
  
   const faqs = [
    {id:1, Qusetion:"Lorem lorem lorem lorem", answer:""},
    {id:2, Qusetion:"Lorem lorem lorem lorem", answer:""},
    {id:3, Qusetion:"Lorem lorem lorem lorem", answer:""},
    {id:4, Qusetion:"Lorem lorem lorem lorem", answer:""},
    {id:5, Qusetion:"Lorem lorem lorem lorem", answer:""},
  ]
  return (
    <div className='mt-3'>
      <div className='bg-black text-white rounded-lg p-10 '>
        <div className='w-[55%] mx-auto'>
          <h2>FAQS</h2>

          <div className='flex flex-col gap-3'>
            {
            faqs.slice(0,5).map((faq) => (

              <div key={faq.id} className='bg-white text-black p-2 rounded-lg'>
               <p>{faq.id}.  {faq.Qusetion}</p>
              </div>

            ))
          }
          </div>
           
        </div>
      </div>
    </div>
  );
};

export default Accordion;