"use client";

import { Button } from "@heroui/react";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 py-20 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <div className="fade-in">
          <h1 className="text-6xl md:text-8xl text-ultralight text-gray-900 mb-6 leading-none">
            TaskMe —<br />
            <span className="gradient-text text-thin">
              Your Tasks, Simplified.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-16 leading-relaxed font-light">
            From digital services to creative solutions,<br />
            TaskMe handles it all with precision and care.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-blue-600 text-white px-10 py-7 text-base font-medium magnetic-hover min-w-52 flex items-center justify-center rounded-2xl border-0 shadow-lg"
              radius="lg"
              onClick={() => window.open('https://tawk.to/AmS1gnSupport', '_blank')}
            >
              Get Started
              <svg className="w-4 h-4 ml-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="text-gray-600 px-10 py-7 text-base font-medium hover:bg-gray-50 magnetic-hover min-w-52 flex items-center justify-center rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm"
              radius="lg"
            >
              Watch Demo
              <svg className="w-4 h-4 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1M12 16v-6" />
              </svg>
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