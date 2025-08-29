"use client";
import { CircleQuestionMark, ChevronDown } from "lucide-react";
import React, { useState } from "react";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "How does your platform help me track my expenses?",
      answer:
        "Our platform provides intuitive tools to categorize and monitor your spending automatically. You can connect bank accounts, credit cards, and manually input cash expenses to get a complete picture of where your money goes each month.",
    },
    {
      id: 2,
      question: "Can I create and manage budgets with your tool?",
      answer:
        "Yes, you can set custom budgets for different spending categories, track your progress in real-time, and receive alerts when you're approaching your limits. Our system helps you stay on track with visual indicators and monthly reports.",
    },
    {
      id: 3,
      question: "What kind of financial insights will I gain?",
      answer:
        "Our platform analyzes your spending patterns to identify trends, highlight potential savings opportunities, and show you where you might be overspending. You'll receive personalized recommendations to improve your financial health.",
    },
    {
      id: 4,
      question: "How does your platform help with financial goal setting?",
      answer:
        "You can set specific financial goals (like saving for a vacation or paying off debt), track your progress with visual milestones, and get actionable steps to help you achieve them faster. The system adjusts recommendations based on your spending habits.",
    },
    {
      id: 5,
      question: "Is my financial data secure with your platform?",
      answer:
        "Absolutely. We use bank-level encryption, secure connections, and never store your banking credentials. Your data is private and protected with multiple layers of security measures.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="mt-3  bg-gray-200 rounded-lg">
      <div className="rounded-lg p-10">
        <div className="w-[90%] md:w-[80%] lg:w-[55%] mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Frequently Asked Questions
          </h2>

          <div className="flex flex-col gap-3">
            {faqs.map((faq, index) => (
              <div
                key={faq.id}
                className="bg-black text-gray-300 rounded-lg transition-all duration-300 overflow-hidden"
                style={{
                  maxHeight: activeIndex === index ? "300px" : "64px",
                  transition: "max-height 0.3s ease-in-out",
                }}
              >
                <div
                  className="flex items-center justify-between px-4 py-4 cursor-pointer"
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="flex items-center gap-3">
                    <CircleQuestionMark
                      size={20}
                      className="text-blue-600 flex-shrink-0"
                    />
                    {/* <span className='font-medium'>{faq.id}.</span> */}
                    <p className="font-semibold">{faq.question}</p>
                  </div>
                  <ChevronDown
                    size={20}
                    className={`transition-transform duration-300 ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>

                <div
                  className="px-4 pb-4 pt-0"
                  style={{
                    opacity: activeIndex === index ? 1 : 0,
                    transform:
                      activeIndex === index
                        ? "translateY(0)"
                        : "translateY(-10px)",
                    transition: "opacity 0.3s ease, transform 0.3s ease",
                    maxHeight: activeIndex === index ? "1000px" : "0",
                  }}
                >
                  <p className="text-gray-300 pl-9">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;