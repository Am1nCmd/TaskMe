"use client";

import { Button, Card, CardBody } from "@heroui/react";
import { useState } from "react";

const pricingPlans = [
  {
    name: "Starter",
    subtitle: "Perfect for individuals",
    price: { monthly: 0, yearly: 0 },
    originalPrice: null,
    features: [
      "5 transcription minutes/month",
      "Basic virtual assistant",
      "Email support",
      "Standard turnaround (48h)",
      "1 revision included"
    ],
    limitations: [
      "No priority support",
      "Limited file formats",
      "Basic quality"
    ],
    cta: "Start Free",
    popular: false,
    color: "from-gray-400 to-gray-500"
  },
  {
    name: "Professional",
    subtitle: "For growing businesses", 
    price: { monthly: 49, yearly: 39 },
    originalPrice: { monthly: 69, yearly: 55 },
    features: [
      "300 transcription minutes/month",
      "Advanced AI assistant",
      "Priority support (4h response)",
      "Fast turnaround (24h)",
      "3 revisions included",
      "Custom templates",
      "API access",
      "Analytics dashboard"
    ],
    limitations: [],
    cta: "Start 14-day Trial",
    popular: true,
    color: "from-blue-500 to-blue-600"
  },
  {
    name: "Enterprise", 
    subtitle: "For large organizations",
    price: { monthly: 199, yearly: 159 },
    originalPrice: null,
    features: [
      "Unlimited transcriptions",
      "Dedicated account manager",
      "24/7 phone support",
      "Same-day turnaround",
      "Unlimited revisions",
      "Custom integrations",
      "Advanced security",
      "SLA guarantee",
      "Team collaboration",
      "White-label options"
    ],
    limitations: [],
    cta: "Contact Sales",
    popular: false,
    color: "from-purple-500 to-purple-600"
  }
];

const comparisonFeatures = [
  { feature: "Transcription Minutes", starter: "5/month", pro: "300/month", enterprise: "Unlimited" },
  { feature: "Response Time", starter: "48 hours", pro: "24 hours", enterprise: "Same day" },
  { feature: "Revisions", starter: "1", pro: "3", enterprise: "Unlimited" },
  { feature: "API Access", starter: "❌", pro: "✅", enterprise: "✅" },
  { feature: "Custom Templates", starter: "❌", pro: "✅", enterprise: "✅" },
  { feature: "Priority Support", starter: "❌", pro: "✅", enterprise: "✅" },
  { feature: "Account Manager", starter: "❌", pro: "❌", enterprise: "✅" },
  { feature: "SLA Guarantee", starter: "❌", pro: "❌", enterprise: "✅" }
];

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);
  const [showComparison, setShowComparison] = useState(false);

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-gray-50/30 to-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-green-50 text-green-600 rounded-full text-sm font-medium mb-6">
            Simple, Transparent Pricing
          </div>
          <h2 className="text-5xl md:text-6xl text-thin text-gray-900 mb-8 leading-tight">
            Choose your <span className="gradient-text">plan</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto font-light leading-relaxed mb-8">
            Start free, scale as you grow. No hidden fees, no surprises.
          </p>
          
          {/* Billing toggle */}
          <div className="inline-flex items-center space-x-4 glass rounded-2xl p-2 bg-white/60 border border-white/20">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-3 rounded-xl transition-all duration-300 font-medium ${
                !isYearly ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-600 hover:bg-white/50'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-3 rounded-xl transition-all duration-300 font-medium relative ${
                isYearly ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-600 hover:bg-white/50'
              }`}
            >
              Yearly
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                20% OFF
              </span>
            </button>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <Card
              key={`pricing-plan-${plan.name}`}
              className={`relative ${
                plan.popular 
                  ? 'glass card-hover bg-white/80 border-2 border-blue-200 shadow-2xl scale-105 z-10' 
                  : 'glass card-hover bg-white/60 border border-white/20 shadow-lg'
              } rounded-3xl overflow-hidden`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-center py-2 text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <CardBody className={`p-8 ${plan.popular ? 'pt-14' : ''}`}>
                {/* Plan header */}
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center shadow-lg`}>
                    <span className="text-white font-bold text-xl">
                      {plan.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.subtitle}</p>
                  
                  {/* Pricing */}
                  <div className="mb-6">
                    {plan.originalPrice && (
                      <div className="text-gray-400 line-through text-lg mb-1">
                        ${isYearly ? plan.originalPrice.yearly : plan.originalPrice.monthly}
                      </div>
                    )}
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-gray-900">
                        ${isYearly ? plan.price.yearly : plan.price.monthly}
                      </span>
                      <span className="text-gray-600 ml-2">
                        {plan.price.monthly === 0 ? '' : '/month'}
                      </span>
                    </div>
                    {isYearly && plan.price.monthly > 0 && (
                      <div className="text-sm text-green-600 font-medium mt-2">
                        Save ${(plan.price.monthly - plan.price.yearly) * 12}/year
                      </div>
                    )}
                  </div>
                  
                  {/* CTA Button */}
                  <Button
                    className={`w-full py-6 rounded-2xl font-medium text-base magnetic-hover ${
                      plan.popular 
                        ? 'bg-blue-600 text-white shadow-lg hover:shadow-xl' 
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </div>

                {/* Features */}
                <div className="space-y-4">
                  <div className="text-sm font-medium text-gray-900 mb-4">What&apos;s included:</div>
                  {plan.features.map((feature, idx) => (
                    <div key={`${plan.name}-feature-${idx}-${feature.slice(0, 10)}`} className="flex items-center space-x-3">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </div>
                  ))}
                  
                  {plan.limitations.map((limitation, idx) => (
                    <div key={`${plan.name}-limitation-${idx}-${limitation.slice(0, 10)}`} className="flex items-center space-x-3 opacity-50">
                      <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <span className="text-gray-400 text-sm">{limitation}</span>
                    </div>
                  ))}
                </div>
              </CardBody>
            </Card>
          ))}
        </div>

        {/* Feature comparison toggle */}
        <div className="text-center mb-8">
          <button
            onClick={() => setShowComparison(!showComparison)}
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
          >
            <span className="font-medium">Compare all features</span>
            <svg 
              className={`w-4 h-4 transition-transform ${showComparison ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Feature comparison table */}
        {showComparison && (
          <div className="glass rounded-3xl p-8 bg-white/60 border border-white/20 overflow-x-auto fade-in">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 font-medium text-gray-900">Feature</th>
                  <th className="text-center py-4 font-medium text-gray-900">Starter</th>
                  <th className="text-center py-4 font-medium text-gray-900">Professional</th>
                  <th className="text-center py-4 font-medium text-gray-900">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row, index) => (
                  <tr key={`comparison-${row.feature.replace(/\s+/g, '-').toLowerCase()}`} className={`${index % 2 === 0 ? 'bg-gray-50/50' : ''}`}>
                    <td className="py-4 font-medium text-gray-900">{row.feature}</td>
                    <td className="text-center py-4 text-gray-600">{row.starter}</td>
                    <td className="text-center py-4 text-gray-600">{row.pro}</td>
                    <td className="text-center py-4 text-gray-600">{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* FAQ teaser */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">Have questions about pricing?</p>
          <Button
            variant="bordered"
            className="glass bg-white/60 border border-white/20 text-gray-700 hover:bg-white/80 rounded-2xl px-8 py-6"
            size="lg"
          >
            View FAQ
          </Button>
        </div>
      </div>
    </section>
  );
}