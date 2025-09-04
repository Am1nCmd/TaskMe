"use client";

import { Button } from "@heroui/react";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 py-20 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <div className="fade-in">
          <h1 className="text-5xl md:text-7xl font-semibold text-gray-900 tracking-tight mb-6 leading-none">
            TaskMe —<br />
            <span className="gradient-text">
              Your Tasks, Simplified.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            From digital services to creative solutions,<br />
            TaskMe handles it all.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-blue-600 text-white px-8 py-6 text-lg font-medium hover:bg-blue-700 button-hover min-w-48 flex items-center justify-center rounded-2xl"
              radius="lg"
              onClick={() => window.open('https://tawk.to/AmS1gnSupport', '_blank')}
            >
              Need help
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="text-blue-600 px-8 py-6 text-lg font-medium hover:bg-blue-50 button-hover min-w-48 flex items-center justify-center rounded-2xl border border-blue-200"
              radius="lg"
            >
              Learn More
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}