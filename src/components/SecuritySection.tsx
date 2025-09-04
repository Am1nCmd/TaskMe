"use client";

import { Card, CardBody } from "@heroui/react";

const securityFeatures = [
  {
    title: "Enterprise Encryption",
    description: "End-to-end encryption with AES-256 and TLS 1.3 protocols",
    icon: "🔒",
    details: [
      "Data encrypted at rest and in transit",
      "Zero-knowledge architecture", 
      "Hardware security modules (HSM)",
      "Regular security audits"
    ],
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "Access Controls",
    description: "Advanced authentication and authorization systems",
    icon: "👤",
    details: [
      "Multi-factor authentication (MFA)",
      "Single sign-on (SSO) support",
      "Role-based access control (RBAC)",
      "Session management"
    ],
    color: "from-green-500 to-green-600"
  },
  {
    title: "Data Privacy",
    description: "Comprehensive data protection and privacy controls",
    icon: "🛡️", 
    details: [
      "GDPR & CCPA compliant",
      "Data anonymization",
      "Right to deletion",
      "Privacy by design"
    ],
    color: "from-purple-500 to-purple-600"
  },
  {
    title: "Infrastructure",
    description: "Secure cloud infrastructure with global redundancy",
    icon: "☁️",
    details: [
      "AWS & Azure certified datacenters",
      "99.9% uptime SLA",
      "DDoS protection",
      "Continuous monitoring"
    ],
    color: "from-orange-500 to-orange-600"
  }
];

const certifications = [
  {
    name: "SOC 2 Type II",
    description: "Security, availability, and confidentiality controls",
    badge: "SOC2",
    year: "2024",
    color: "from-blue-500 to-blue-600"
  },
  {
    name: "ISO 27001",
    description: "Information security management system",
    badge: "ISO",
    year: "2024", 
    color: "from-green-500 to-green-600"
  },
  {
    name: "GDPR Compliant",
    description: "European data protection regulation compliance",
    badge: "GDPR",
    year: "2024",
    color: "from-purple-500 to-purple-600"
  },
  {
    name: "HIPAA Ready",
    description: "Healthcare information privacy and security",
    badge: "HIPAA",
    year: "2024",
    color: "from-red-500 to-red-600"
  }
];

const trustIndicators = [
  {
    metric: "99.9%",
    label: "Uptime SLA",
    description: "Guaranteed availability"
  },
  {
    metric: "< 1 min",
    label: "Incident Response",
    description: "Average response time"
  },
  {
    metric: "256-bit",
    label: "AES Encryption",
    description: "Military-grade security"
  },
  {
    metric: "24/7",
    label: "Security Monitoring",
    description: "Continuous protection"
  }
];

const securityPolicies = [
  {
    title: "Data Retention",
    summary: "Clear policies on how long we keep your data and why",
    icon: "📁"
  },
  {
    title: "Incident Response",
    summary: "Detailed procedures for security incident handling",
    icon: "🚨"
  },
  {
    title: "Employee Training",
    summary: "Regular security training for all team members",
    icon: "👥"
  },
  {
    title: "Vulnerability Management",
    summary: "Proactive identification and remediation of security issues",
    icon: "🔍"
  }
];

export default function SecuritySection() {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-gray-50/30 to-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-purple-200/30 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-6">
            🔐 Enterprise Security
          </div>
          <h2 className="text-5xl md:text-6xl text-thin text-gray-900 mb-8 leading-tight">
            Your data is <span className="gradient-text">secure</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
            Enterprise-grade security and compliance built into every aspect of our platform. 
            Your trust is our foundation.
          </p>
        </div>

        {/* Trust indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {trustIndicators.map((indicator, index) => (
            <div key={index} className="text-center scale-in" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="glass rounded-2xl p-6 bg-white/60 border border-white/20 hover:bg-white/80 transition-all duration-300">
                <div className="text-3xl font-bold text-gray-900 mb-1">{indicator.metric}</div>
                <div className="text-sm font-medium text-gray-900 mb-2">{indicator.label}</div>
                <div className="text-xs text-gray-600">{indicator.description}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Security features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {securityFeatures.map((feature, index) => (
            <Card
              key={index}
              className="glass card-hover bg-white/60 border border-white/20 h-full"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardBody className="p-8">
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg`}>
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 font-light text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <ul className="space-y-3">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 font-light">{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardBody>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl text-thin text-gray-900 mb-4">
              Certified & Compliant
            </h3>
            <p className="text-gray-500 font-light max-w-2xl mx-auto">
              We maintain the highest industry standards and certifications to protect your data.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="glass card-hover bg-white/60 border border-white/20 text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardBody className="p-8">
                  <div className={`w-20 h-20 mx-auto mb-4 rounded-3xl bg-gradient-to-br ${cert.color} flex items-center justify-center shadow-lg`}>
                    <span className="text-white font-bold text-lg">{cert.badge}</span>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{cert.name}</h4>
                  <p className="text-gray-600 font-light text-sm mb-3 leading-relaxed">
                    {cert.description}
                  </p>
                  <div className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                    Certified {cert.year}
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>

        {/* Security policies */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {securityPolicies.map((policy, index) => (
            <Card
              key={index}
              className="glass card-hover bg-white/60 border border-white/20 cursor-pointer group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardBody className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="text-2xl">{policy.icon}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {policy.title}
                    </h4>
                    <p className="text-gray-600 font-light text-sm leading-relaxed">
                      {policy.summary}
                    </p>
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>

        {/* Security report CTA */}
        <div className="text-center">
          <Card className="glass bg-white/40 border border-white/30 max-w-4xl mx-auto">
            <CardBody className="p-12">
              <div className="mb-8">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-xl">
                  <span className="text-white text-3xl">🛡️</span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Security & Compliance Report
                </h3>
                <p className="text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
                  Get detailed information about our security practices, compliance certifications, 
                  and data protection measures.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="magnetic-hover bg-blue-600 text-white px-8 py-4 rounded-2xl font-medium shadow-lg">
                  Download Security Report
                </button>
                <button className="glass bg-white/60 border border-white/20 text-gray-700 hover:bg-white/80 px-8 py-4 rounded-2xl font-medium transition-all duration-300">
                  Contact Security Team
                </button>
              </div>

              {/* Additional trust elements */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900 mb-1">0</div>
                    <div className="text-sm text-gray-600">Security breaches</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900 mb-1">100%</div>
                    <div className="text-sm text-gray-600">Incident disclosure</div>
                  </div>
                  <div className="text-center md:col-span-1 col-span-2">
                    <div className="text-2xl font-bold text-gray-900 mb-1">24/7</div>
                    <div className="text-sm text-gray-600">Security monitoring</div>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
}