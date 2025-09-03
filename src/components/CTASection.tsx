"use client";

import { Button } from "@heroui/react";

export default function CTASection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, white 2px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative">
        <div className="fade-in">
          <h2 className="text-4xl md:text-6xl font-semibold text-white mb-8 tracking-tight">
            Let TaskMe handle<br />
            your next task.
          </h2>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Ready to simplify your workflow and focus on what matters most?
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 px-8 py-6 text-lg font-semibold hover:bg-gray-50 transition-colors duration-200 min-w-48 flex items-center justify-center rounded-2xl"
              radius="lg"
            >
              Start Today
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="text-white border-white/30 px-8 py-6 text-lg font-medium hover:bg-white/10 transition-colors duration-200 min-w-48 flex items-center justify-center rounded-2xl border-2"
              radius="lg"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}