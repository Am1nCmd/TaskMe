"use client";

import { Card, CardBody } from "@heroui/react";

const processSteps = [
  {
    step: "01",
    title: "Consultation",
    description: "We start by understanding your needs, goals, and vision for the project.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    color: "from-blue-500 to-cyan-500"
  },
  {
    step: "02",
    title: "Planning",
    description: "We create a detailed roadmap and timeline tailored to your specific requirements.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    color: "from-purple-500 to-pink-500"
  },
  {
    step: "03",
    title: "Execution",
    description: "Our expert team brings your vision to life with precision and attention to detail.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: "from-green-500 to-emerald-500"
  }
];

export default function ProcessSection() {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
            How we work.
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our streamlined process ensures every project is delivered on time and exceeds expectations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <div key={index} className="relative slide-up" style={{ animationDelay: `${index * 200}ms` }}>
              {/* Connection Line */}
              {index < processSteps.length - 1 && (
                <div className="hidden md:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-blue-200 to-transparent transform -translate-y-1/2 z-10">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-blue-400 rounded-full"></div>
                </div>
              )}
              
              <Card className="h-full bg-white border-0 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 rounded-2xl" radius="lg">
                <CardBody className="p-8 text-center">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mx-auto mb-6 text-white`}>
                    {step.icon}
                  </div>
                  
                  <div className="text-sm font-semibold text-gray-400 mb-2">
                    STEP {step.step}
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </CardBody>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}