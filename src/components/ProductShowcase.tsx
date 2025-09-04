"use client";

import { Card, CardBody } from "@heroui/react";
import { useState } from "react";

const showcaseItems = [
  {
    id: 1,
    title: "Precision Transcription",
    subtitle: "Human-quality accuracy",
    description: "Our expert team delivers 99.5% accurate transcriptions with lightning-fast turnaround times.",
    image: "/showcase/transcription-demo.jpg",
    metrics: {
      accuracy: "99.5%",
      turnaround: "24hrs",
      languages: "25+"
    },
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    title: "Virtual Assistant",
    subtitle: "Your digital productivity partner",
    description: "Streamline operations with AI-powered assistance that learns and adapts to your workflow.",
    image: "/showcase/assistant-demo.jpg", 
    metrics: {
      productivity: "+40%",
      tasks: "1000+",
      availability: "24/7"
    },
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    title: "Creative Design",
    subtitle: "Stunning visuals that convert",
    description: "From brand identity to digital campaigns, we create designs that captivate and convert.",
    image: "/showcase/design-demo.jpg",
    metrics: {
      conversion: "+65%",
      designs: "500+",
      revisions: "3 free"
    },
    color: "from-green-500 to-emerald-500"
  }
];

export default function ProductShowcase() {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-gray-50/50 to-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/20 via-transparent to-purple-50/20"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-6">
            Product Showcase
          </div>
          <h2 className="text-5xl md:text-6xl text-thin text-gray-900 mb-8 leading-tight">
            See TaskMe in <span className="gradient-text">action</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
            Discover how our services transform workflows and drive results for businesses worldwide.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Interactive showcase */}
          <div className="space-y-8">
            {showcaseItems.map((item, index) => (
              <Card
                key={item.id}
                className={`cursor-pointer transition-all duration-500 glass ${
                  activeItem === index 
                    ? 'card-hover border-blue-200 shadow-xl bg-white/80' 
                    : 'hover:bg-white/60 border-white/20'
                }`}
                onClick={() => setActiveItem(index)}
              >
                <CardBody className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${item.color} flex-shrink-0`}>
                      <div className="w-8 h-8 bg-white/20 rounded-xl flex items-center justify-center">
                        <span className="text-white font-bold text-lg">{item.id}</span>
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-xl font-medium text-gray-900">{item.title}</h3>
                        {activeItem === index && (
                          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                        )}
                      </div>
                      <p className="text-sm text-blue-600 font-medium mb-3">{item.subtitle}</p>
                      <p className="text-gray-600 font-light leading-relaxed mb-4">{item.description}</p>
                      
                      {/* Metrics */}
                      <div className="flex flex-wrap gap-4">
                        {Object.entries(item.metrics).map(([key, value]) => (
                          <div key={key} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                            <span className="text-sm text-gray-500 capitalize">{key}:</span>
                            <span className="text-sm font-medium text-gray-900">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>

          {/* Right side - Visual showcase */}
          <div className="relative">
            <div className="aspect-square relative overflow-hidden rounded-3xl glass shadow-2xl">
              {/* Placeholder for product images */}
              <div className={`absolute inset-0 bg-gradient-to-br ${showcaseItems[activeItem].color} opacity-20`}></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-12">
                  <div className={`w-32 h-32 mx-auto mb-8 bg-gradient-to-br ${showcaseItems[activeItem].color} rounded-3xl shadow-xl flex items-center justify-center`}>
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                      <span className="text-white font-bold text-2xl">{showcaseItems[activeItem].id}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-medium text-gray-900 mb-4">{showcaseItems[activeItem].title}</h3>
                  <p className="text-gray-600 font-light">{showcaseItems[activeItem].subtitle}</p>
                </div>
              </div>
              
              {/* Animated indicators */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex justify-center space-x-2">
                  {showcaseItems.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveItem(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        activeItem === index ? 'bg-white shadow-lg scale-125' : 'bg-white/40'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            {/* Floating metrics */}
            <div className="absolute -top-6 -right-6 glass rounded-2xl p-4 bg-white/80 shadow-xl">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">99.9%</div>
                <div className="text-xs text-gray-500 font-medium">Uptime</div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 bg-white/80 shadow-xl">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">2.5k+</div>
                <div className="text-xs text-gray-500 font-medium">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}