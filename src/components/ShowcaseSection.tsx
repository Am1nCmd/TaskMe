"use client";

import { Card, CardBody, Chip } from "@heroui/react";

const showcaseItems = [
  {
    category: "Digital Services",
    title: "Streamlined Operations",
    description: "Automate your workflow and increase productivity with our comprehensive digital solutions.",
    tags: ["Automation", "Efficiency", "Scalability"],
    gradient: "from-blue-500 to-purple-600"
  },
  {
    category: "Creative Solutions",
    title: "Visual Excellence",
    description: "Captivating designs that tell your story and connect with your audience on a deeper level.",
    tags: ["Branding", "UI/UX", "Graphics"],
    gradient: "from-orange-500 to-pink-500"
  },
  {
    category: "Technical Expertise",
    title: "Modern Development",
    description: "Cutting-edge web applications built with the latest technologies and industry standards.",
    tags: ["React", "Next.js", "TypeScript"],
    gradient: "from-green-500 to-blue-500"
  }
];

export default function ShowcaseSection() {
  return (
    <section id="work" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
            Crafted with precision.
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Every project is a testament to our commitment to quality and innovation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {showcaseItems.map((item, index) => (
            <div key={index} className="slide-up" style={{ animationDelay: `${index * 200}ms` }}>
              <Card className="h-full group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-white border-0 shadow-md overflow-hidden rounded-2xl" radius="lg">
                <CardBody className="p-0">
                  <div className={`h-48 bg-gradient-to-br ${item.gradient} relative overflow-hidden rounded-t-2xl flex items-end`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300 rounded-t-2xl"></div>
                    <div className="relative z-10 p-6 w-full">
                      <span className="text-white/90 text-sm font-medium bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {item.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mt-2">
                      {item.tags.map((tag, tagIndex) => (
                        <Chip 
                          key={tagIndex}
                          size="sm"
                          variant="flat"
                          className="bg-blue-50 text-blue-700 border border-blue-200 px-3 py-1 rounded-full flex items-center justify-center text-center"
                          radius="full"
                        >
                          {tag}
                        </Chip>
                      ))}
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}