"use client";

import { useState } from "react";
import { Button, Input, Textarea, Card, CardBody } from "@heroui/react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setFormData({ name: '', email: '', service: '', message: '' });
    
    // You would integrate with your backend here
    console.log('Form submitted:', formData);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, white 2px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-white">
            <div className="fade-in">
              <h2 className="text-4xl md:text-6xl font-semibold mb-8 tracking-tight">
                Let's work<br />
                together.
              </h2>
              
              <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                Ready to simplify your workflow and focus on what matters most?
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Email us</p>
                    <p className="text-blue-200">hello@taskme.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Response time</p>
                    <p className="text-blue-200">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side - Contact form */}
          <div className="slide-up">
            <Card className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl" radius="lg">
              <CardBody className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label className="block text-white/90 text-sm font-medium">Name *</label>
                      <input
                        type="text"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        required
                        className="w-full px-4 py-3.5 bg-white/10 border border-white/20 rounded-2xl text-white placeholder:text-white/60 focus:bg-white/20 focus:border-white/40 focus:outline-none transition-all duration-200"
                      />
                    </div>
                    
                    <div className="space-y-3">
                      <label className="block text-white/90 text-sm font-medium">Email *</label>
                      <input
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        required
                        className="w-full px-4 py-3.5 bg-white/10 border border-white/20 rounded-2xl text-white placeholder:text-white/60 focus:bg-white/20 focus:border-white/40 focus:outline-none transition-all duration-200"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <label className="block text-white/90 text-sm font-medium">Service needed</label>
                    <input
                      type="text"
                      placeholder="Web development, design, transcription..."
                      value={formData.service}
                      onChange={(e) => handleChange('service', e.target.value)}
                      className="w-full px-4 py-3.5 bg-white/10 border border-white/20 rounded-2xl text-white placeholder:text-white/60 focus:bg-white/20 focus:border-white/40 focus:outline-none transition-all duration-200"
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <label className="block text-white/90 text-sm font-medium">Project details *</label>
                    <textarea
                      placeholder="Tell us about your project..."
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      required
                      rows={4}
                      className="w-full px-4 py-3.5 bg-white/10 border border-white/20 rounded-2xl text-white placeholder:text-white/60 focus:bg-white/20 focus:border-white/40 focus:outline-none resize-none transition-all duration-200"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className={`w-full bg-white text-blue-600 font-semibold py-6 rounded-2xl button-hover flex items-center justify-center ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                    radius="lg"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}