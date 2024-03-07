import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is the reason for statVital?",
      answer: " our solution streamlines workflows and eliminates the risk of human error ensuring that your records are always accurat and up-to-date."
      
    },
    {
      question: "What is the full meaning of statVital?",
      answer: "Vital Statistics (CRVS) systems is used to record and manage essential events in human life, primarily births and deaths"
    },
    {
      question: "Can i view my Hospital / Mortuary profile?",
      answer: "As we are open for growth, our hospital profile has not yet be implemented now, we will let you know when we integrate that. Apologies for that. Thanks"
    }
  ];

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl font-bold text-center text-blue-950 mb-8">Frequently Asked Questions</h1>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4">
          <div
            className="flex justify-between items-center border-b border-gray-300 cursor-pointer"
            onClick={() => toggleFaq(index)}
          >
            <h2 className="text-lg font-semibold">{faq.question}</h2>
            <svg
              className={`w-6 h-6 transition-transform transform ${activeIndex === index ? 'rotate-180' : ''}`}
              fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          {activeIndex === index && (
            <p className="mt-2 text-gray-700">{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
