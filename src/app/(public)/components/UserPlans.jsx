import { Check } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const UserPlans = () => {
  const plans = [
    {
      id: 1,
      name: 'Starter',
      badge: 'FREE',
      price: '$0',
      priceType: 'Free-forever',
      description:
        'For Starter to get started with free plan forever and ever.',
      btn: 'Try for free',
      features: [
        'Unlimited files in drafts',
        'Unlimited viewers and commenters',
        'Unlimited editors on 3 team files',
        '1 team project',
      ],
      accent: '#FFBB00',
    },
    {
      id: 2,
      name: 'Professional',
      badge: 'BEST SELLER',
      price: '$12',
      priceType: 'Editor/month',
      description:
        'For professional business, billed annually or $15 month-to-month.',
      btn: 'Get Started',
      features: [
        'Unlimited files in drafts',
        'Unlimited viewers and commenters',
        '30-day version history',
        'Shareable team libraries',
      ],
      accent: '#0099FF',
    },
    {
      id: 3,
      name: 'Enterprise',
      badge: 'POG CHAMP',
      price: '$45',
      priceType: 'Editor/month',
      description:
        'For organizations team that need additional control, security, and support.',
      btn: 'Get Started',
      features: [
        'Unlimited files in drafts',
        'Unlimited viewers and commenters',
        'Shareable team libraries',
        'Design System Analytics',
      ],
      accent: '#7B55EC',
    },
    {
      id: 4,
      name: 'Custom',
      badge: 'CONTACT US',
      price: 'Contact us',
      priceType: '',
      description:
        'Tailored solutions for enterprises that need custom integrations and compliance.',
      btn: 'Talk to us',
      features: [
        'All Enterprise features',
        'Custom integrations',
        'Dedicated onboarding',
        '24/7 priority support',
      ],
      accent: '#FF5722',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-10">
      {plans.map((plan) => (
        <div
  key={plan.id}
  className="bg-[#0D0D0D] rounded-2xl px-8 py-10 text-white flex flex-col justify-between shadow-lg space-y-14"
  style={{ border: `1px solid ${plan.color}` }}
>

          <div className='space-y-6'>
            <p className="text-xs tracking-widest text-gray-400">PLAN</p>
            <div className="flex justify-between items-center ">
              <h3
                className="text-2xl font-bold"
                style={{ color: plan.accent }}
              >
                {plan.name}
              </h3>
              <span
                className="text-xs font-semibold px-3 py-1 rounded-full"
                style={{ backgroundColor: plan.accent }}
              >
                {plan.badge}
              </span>
            </div>

            <div className="flex items-end mt-6">
              <p className="text-5xl font-bold">{plan.price}</p>
              <p className="ml-2 text-lg text-gray-400">{plan.priceType}</p>
            </div>

            <p className="mt-4 text-gray-400">{plan.description}</p>

            <hr className="my-6 border-gray-700" />

            <ul className="space-y-3">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Check
                    className="h-5 w-5"
                    style={{ color: plan.accent }}
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <Link
            href="#"
            className="mt-8 w-full py-3 rounded-xl text-center font-semibold"
            style={{ backgroundColor: plan.accent }}
          >
            {plan.btn}
          </Link>

        </div>
      ))}
    </div>
  );
};

export default UserPlans;