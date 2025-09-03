"use client";

import { Card, CardBody } from "@heroui/react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Marketing Director",
    company: "TechFlow",
    content: "TaskMe transformed our content workflow. Their transcription service is incredibly accurate and fast.",
    avatar: "/avatars/sarah.jpg"
  },
  {
    name: "Marcus Rodriguez",
    role: "Founder",
    company: "StartupLab",
    content: "The virtual assistance team helped us scale efficiently. Couldn't have grown this fast without them.",
    avatar: "/avatars/marcus.jpg"
  },
  {
    name: "Emily Johnson",
    role: "Creative Director",
    company: "BrandStudio",
    content: "Outstanding design work. They captured our vision perfectly and delivered beyond expectations.",
    avatar: "/avatars/emily.jpg"
  }
];

export default function TestimonialSection() {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
            Trusted by innovators.
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See what our clients say about working with TaskMe.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="slide-up" style={{ animationDelay: `${index * 150}ms` }}>
              <Card className="h-full bg-white border-0 shadow-sm hover:shadow-md transition-all duration-300 rounded-2xl" radius="lg">
                <CardBody className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                        <span className="text-white font-semibold text-lg">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                  
                  <blockquote className="text-gray-700 leading-relaxed">
                    &ldquo;{testimonial.content}&rdquo;
                  </blockquote>
                </CardBody>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}