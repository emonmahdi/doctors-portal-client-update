import React, { useState } from 'react';

const faqs = [
  {
    question: 'What is the best way to prevent the flu?',
    answer:
      'The best way to prevent the flu is to get vaccinated every year. You should also wash your hands frequently and avoid touching your face.',
  },
  {
    question: 'What are some common symptoms of COVID-19?',
    answer:
      'Some common symptoms of COVID-19 include fever, cough, and difficulty breathing. If you think you might have COVID-19, you should contact your doctor right away.',
  },
  {
    question: 'How often should I see my doctor for a checkup?',
    answer:
      'It depends on your age, health, and medical history. In general, you should see your doctor for a checkup at least once a year.',
  },
];

const FAQSection = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900">Frequently Asked Questions</h2>
        <div className="mt-8">
          <dl className="space-y-8">
            {faqs.map((faq) => (
              <div key={faq.question} onClick={() => setSelectedQuestion(faq.question)}>
                <dt className="cursor-pointer">
                  <span className="text-lg leading-6 font-medium text-gray-900">{faq.question}</span>
                </dt>
                {selectedQuestion === faq.question && (
                  <dd className="mt-2 text-base text-gray-500">{faq.answer}</dd>
                )}
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
