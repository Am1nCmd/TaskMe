"use client";

import { useState } from "react";
import { Card, CardBody } from "@heroui/react";

const faqs = [
  {
    question: "What services does TaskMe offer?",
    answer: "TaskMe specializes in manual transcription, virtual assistance, creative design, and web development. We provide comprehensive digital solutions tailored to your business needs."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary depending on scope and complexity. Simple tasks can be completed within 24-48 hours, while larger projects typically take 1-4 weeks. We provide detailed timelines during our consultation phase."
  },
  {
    question: "Do you offer revisions on completed work?",
    answer: "Yes! We include up to 3 rounds of revisions in all our packages. We want to ensure you're completely satisfied with the final deliverable and it meets your expectations."
  },
  {
    question: "What makes TaskMe different from other service providers?",
    answer: "Our commitment to quality, attention to detail, and personalized approach sets us apart. We treat every project as unique and work closely with clients to deliver solutions that exceed expectations."
  },
  {
    question: "How do you ensure data security and confidentiality?",
    answer: "We take data security seriously. All client information is protected under strict confidentiality agreements, and we use secure communication channels and storage systems for all project materials."
  },
  {
    question: "Can I get a custom quote for my specific needs?",
    answer: "Absolutely! Every project is unique, and we provide customized quotes based on your specific requirements. Contact us for a free consultation and detailed proposal."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
            Frequently asked questions.
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about TaskMe and our services.
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card 
              key={index} 
              className="bg-white border border-gray-200 hover:shadow-md transition-all duration-300 rounded-2xl overflow-hidden"
              radius="lg"
            >
              <CardBody className="p-0">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Still have questions?
          </p>
          <button className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200">
            Contact our support team →
          </button>
        </div>
      </div>
    </section>
  );
}