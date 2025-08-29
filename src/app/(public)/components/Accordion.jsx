"use client";
import { CircleQuestionMark, ChevronDown } from "lucide-react";
import React, { useState } from "react";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "What is your return policy?",
      answer:
        "We offer a 30-day return policy on all unused items with original packaging. Returns must be accompanied by a valid receipt or proof of purchase.",
    },
    {
      id: 2,
      question: "How long does shipping take?",
      answer:
        "Standard shipping takes 3-5 business days. Express shipping is available for delivery within 1-2 business days. International shipping typically takes 7-14 business days depending on the destination.",
    },
    {
      id: 3,
      question: "Do you offer international shipping?",
      answer:
        "Yes, we ship to over 50 countries worldwide. Shipping costs and delivery times vary by destination. Additional customs fees or taxes may apply depending on your country's import regulations.",
    },
    {
      id: 4,
      question: "How can I track my order?",
      answer:
        "Once your order ships, you'll receive a confirmation email with a tracking number and link. You can also track your order by logging into your account on our website and visiting the 'Order History' section.",
    },
    {
      id: 5,
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, Apple Pay, Google Pay, and select cryptocurrencies. All payments are processed securely through encrypted channels.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="mt-3">
      <div className="bg-black text-white rounded-lg p-10">
        <div className="w-[90%] md:w-[80%] lg:w-[55%] mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Frequently Asked Questions
          </h2>

          <div className="flex flex-col gap-3">
            {faqs.map((faq, index) => (
              <div
                key={faq.id}
                className="bg-white text-black rounded-lg transition-all duration-300 overflow-hidden"
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
                  <p className="text-gray-700 pl-9">{faq.answer}</p>
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