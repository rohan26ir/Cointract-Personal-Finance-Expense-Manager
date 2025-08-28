import Link from 'next/link';
import React from 'react';

const UserPlans = () => {

    const plans = [
  {
    id: 1,
    name: 'Free Plan',
    price: 'Free',
    priceType: '',
    btn: "Get Started",
    features: [
      'Basic budgeting tools',
      'Expense tracking',
      'Financial goal setting',
      'Email support',
      'Mobile access',
      'Weekly spending summaries'
    ]
  },
  {
    id: 2,
    name: 'Pro Plan',
    price: '$9.99',
    priceType: '/mo',
    btn: "Upgrade Now",
    features: [
      'All Free Plan features',
      'Advanced analytics',
      'Priority email support',
      'Customizable reports',
      'Automatic bank syncing',
      'Export data to CSV/Excel',
      'Smart alerts and notifications'
    ]
  },
  {
    id: 3,
    name: 'Premium Plan',
    price: '$19.99',
    priceType: '/mo',
    btn: "Upgrade Now",
    features: [
      'All Pro Plan features',
      'One-on-one financial coaching',
      'Early access to new features',
      'Dedicated account manager',
      'Personalized investment insights',
      'Tax optimization tips',
      'Advanced security and data encryption'
    ]
  },
  {
    id: 4,
    name: 'Enterprise Plan',
    price: 'Contact us',
    priceType: '',
    btn: "Talk to Us",
    features: [
      'All Premium Plan features',
      'Team accounts',
      'Custom integrations',
      '24/7 phone support',
      'Dedicated onboarding specialist',
      'API access',
      'Custom compliance and reporting tools'
    ]
  }
]


    return (
        <div>
            <div>
                
                <div className='flex flex-col md:flex-row justify-between items-center mb-5 py-5'>
                    <div className='flex-1'>
                        <h2 className='text-4xl font-extrabold'>User plan</h2>
                        <p className='text-xl'>Choose the plan that best fits your needs and start managing your finances effectively today!</p>
                    </div>
                    <div className='flex-2 flex justify-end'>

                    </div>
                </div>

                <div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4   gap-5'>
                        {plans.map((plan) => (
                            <div key={plan.id} className='bg-black text-white p-10 rounded-lg  space-y-10'>
                                <h3 className='bg-blue-500 px-3 py-1 inline-block rounded-md uppercase text-sm font-bold'>{plan.name}</h3>
                                <div className='flex '>
                                    <p className='text-4xl font-bold'>{plan.price}</p>
                                    <p className='text-xl font-bold flex items-end'>{plan.priceType}</p>
                                </div>

                                <Link href="#" 
                                className='bg-amber-500 text-white rounded-lg py-2 px-5 text-lg font-bold flex gap-2 cursor-pointer justify-center'>
                                    {plan.btn}
                                </Link>

                                <ul>
                                    {plan.features.map((feature, index) => (
                                        
                                        <div className='flex items-center gap-2'>
                                            <div className='h-3 w-3 bg-white  rounded-[1px]'></div>
                                            <p key={index} className='list-disc'>{feature}</p>
                                        </div>

                                    ))}
                                </ul>
                               
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserPlans;