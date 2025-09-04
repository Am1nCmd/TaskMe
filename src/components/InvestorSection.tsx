"use client";

import { Card, CardBody } from "@heroui/react";

const investors = [
  {
    name: "TechCrunch",
    type: "press",
    logo: "/press/techcrunch-logo.svg",
    quote: "TaskMe is revolutionizing how businesses approach virtual assistance",
    color: "from-green-500 to-green-600"
  },
  {
    name: "Product Hunt",
    type: "recognition", 
    logo: "/press/producthunt-logo.svg",
    quote: "#1 Product of the Day - March 2024",
    color: "from-orange-500 to-orange-600"
  },
  {
    name: "Y Combinator",
    type: "investor",
    logo: "/investors/yc-logo.svg", 
    quote: "Backing the future of distributed work",
    color: "from-red-500 to-red-600"
  },
  {
    name: "Andreessen Horowitz",
    type: "investor",
    logo: "/investors/a16z-logo.svg",
    quote: "Leading Series A investment round",
    color: "from-purple-500 to-purple-600"
  }
];

const pressMetrics = [
  { label: "Media Mentions", value: "150+", icon: "📰" },
  { label: "Industry Awards", value: "8", icon: "🏆" },
  { label: "Expert Reviews", value: "4.9/5", icon: "⭐" },
  { label: "Coverage Reach", value: "2M+", icon: "📊" }
];

export default function InvestorSection() {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-white to-gray-50/30 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/10 via-transparent to-purple-50/10"></div>
      
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-6">
            Trusted by Industry Leaders
          </div>
          <h2 className="text-5xl md:text-6xl text-thin text-gray-900 mb-8 leading-tight">
            Backed by the <span className="gradient-text">best</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
            Join thousands of businesses and industry leaders who trust TaskMe to transform their operations.
          </p>
        </div>

        {/* Press metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {pressMetrics.map((metric, index) => (
            <div key={index} className="text-center scale-in" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="glass rounded-2xl p-6 bg-white/60 border border-white/20 hover:bg-white/80 transition-all duration-300">
                <div className="text-3xl mb-2">{metric.icon}</div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
                <div className="text-sm text-gray-600 font-medium">{metric.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Investors and Press */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {investors.map((investor, index) => (
            <Card
              key={index}
              className="glass card-hover bg-white/60 border border-white/20 shadow-lg rounded-3xl"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardBody className="p-8">
                <div className="flex items-start space-x-6">
                  {/* Logo placeholder */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${investor.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        {investor.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <h3 className="text-xl font-semibold text-gray-900">{investor.name}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        investor.type === 'investor' ? 'bg-blue-100 text-blue-700' :
                        investor.type === 'press' ? 'bg-green-100 text-green-700' :
                        'bg-orange-100 text-orange-700'
                      }`}>
                        {investor.type}
                      </span>
                    </div>
                    <blockquote className="text-gray-600 font-light italic leading-relaxed">
                      "{investor.quote}"
                    </blockquote>
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>

        {/* Featured press quotes */}
        <div className="text-center">
          <div className="glass rounded-3xl p-12 bg-white/40 border border-white/30 backdrop-blur-xl">
            <div className="max-w-4xl mx-auto">
              <div className="text-6xl text-gray-300 mb-6">"</div>
              <blockquote className="text-2xl md:text-3xl font-light text-gray-700 mb-8 leading-relaxed">
                TaskMe represents the future of work—seamless, intelligent, and incredibly efficient. 
                They're not just automating tasks; they're elevating human potential.
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                  <span className="text-white font-bold">F</span>
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900">Forbes Technology</div>
                  <div className="text-sm text-gray-600">Editor's Choice Award 2024</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}