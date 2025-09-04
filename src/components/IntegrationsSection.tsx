"use client";

import { Card, CardBody } from "@heroui/react";
import { useState } from "react";

const integrations = [
  {
    name: "Slack",
    category: "Communication",
    description: "Get task updates and notifications directly in your Slack channels",
    logo: "/integrations/slack-logo.svg",
    color: "from-purple-500 to-purple-600",
    status: "live",
    users: "15k+"
  },
  {
    name: "Zapier", 
    category: "Automation",
    description: "Connect TaskMe with 5000+ apps for seamless workflow automation",
    logo: "/integrations/zapier-logo.svg",
    color: "from-orange-500 to-orange-600",
    status: "live",
    users: "8k+"
  },
  {
    name: "Google Workspace",
    category: "Productivity",
    description: "Sync with Gmail, Drive, Calendar, and Docs for complete integration",
    logo: "/integrations/google-logo.svg", 
    color: "from-blue-500 to-blue-600",
    status: "live",
    users: "12k+"
  },
  {
    name: "Microsoft 365",
    category: "Productivity",
    description: "Seamless integration with Outlook, Teams, OneDrive, and Office apps",
    logo: "/integrations/microsoft-logo.svg",
    color: "from-blue-600 to-blue-700",
    status: "live", 
    users: "9k+"
  },
  {
    name: "Trello",
    category: "Project Management",
    description: "Automatically create cards and update project boards with task progress",
    logo: "/integrations/trello-logo.svg",
    color: "from-blue-400 to-blue-500",
    status: "live",
    users: "6k+"
  },
  {
    name: "Notion",
    category: "Productivity",
    description: "Sync tasks and data with your Notion workspace and databases",
    logo: "/integrations/notion-logo.svg",
    color: "from-gray-600 to-gray-700",
    status: "beta",
    users: "2k+"
  },
  {
    name: "Salesforce",
    category: "CRM",
    description: "Integrate customer data and automate CRM workflows",
    logo: "/integrations/salesforce-logo.svg",
    color: "from-blue-500 to-cyan-500",
    status: "coming_soon",
    users: "Soon"
  },
  {
    name: "HubSpot",
    category: "Marketing",
    description: "Streamline marketing campaigns and lead management processes",
    logo: "/integrations/hubspot-logo.svg",
    color: "from-orange-400 to-orange-500",
    status: "coming_soon",
    users: "Soon"
  }
];

const apiFeatures = [
  {
    title: "REST API",
    description: "Full REST API with comprehensive documentation and SDKs",
    icon: "🔗",
    features: ["RESTful endpoints", "Rate limiting", "Webhook support", "Real-time updates"]
  },
  {
    title: "GraphQL",
    description: "Flexible GraphQL API for efficient data fetching",
    icon: "📊", 
    features: ["Type-safe queries", "Real-time subscriptions", "Batch operations", "Schema introspection"]
  },
  {
    title: "Webhooks",
    description: "Real-time notifications for task updates and status changes",
    icon: "🔔",
    features: ["Event-driven", "Secure payloads", "Retry logic", "Custom filters"]
  },
  {
    title: "SDKs",
    description: "Official SDKs for popular programming languages",
    icon: "⚙️",
    features: ["JavaScript/Node.js", "Python", "PHP", "C# / .NET"]
  }
];

const integrationStats = [
  { label: "Total Integrations", value: "50+", description: "And growing" },
  { label: "API Calls/Month", value: "2.5M+", description: "Reliable at scale" },
  { label: "Uptime SLA", value: "99.9%", description: "Enterprise-grade" },
  { label: "Response Time", value: "<200ms", description: "Lightning fast" }
];

export default function IntegrationsSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedIntegration, setSelectedIntegration] = useState(null);

  const categories = ['all', 'Communication', 'Productivity', 'Project Management', 'CRM', 'Marketing', 'Automation'];
  
  const filteredIntegrations = activeCategory === 'all' 
    ? integrations 
    : integrations.filter(integration => integration.category === activeCategory);

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-white to-gray-50/30 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-green-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 right-1/3 w-48 h-48 bg-purple-200/20 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-green-50 text-green-600 rounded-full text-sm font-medium mb-6">
            🔌 Powerful Integrations
          </div>
          <h2 className="text-5xl md:text-6xl text-thin text-gray-900 mb-8 leading-tight">
            Connect with <span className="gradient-text">everything</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
            TaskMe integrates seamlessly with your favorite tools and workflows. No disruption, just enhancement.
          </p>
        </div>

        {/* Integration stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {integrationStats.map((stat, index) => (
            <div key={index} className="text-center scale-in" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="glass rounded-2xl p-6 bg-white/60 border border-white/20 hover:bg-white/80 transition-all duration-300">
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm font-medium text-gray-900 mb-2">{stat.label}</div>
                <div className="text-xs text-gray-600">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Category filter */}
        <div className="flex justify-center mb-12">
          <div className="glass rounded-2xl p-2 bg-white/60 border border-white/20 flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-xl transition-all duration-300 font-medium text-sm capitalize ${
                  activeCategory === category 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'text-gray-600 hover:bg-white/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Integration grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {filteredIntegrations.map((integration, index) => (
            <Card
              key={index}
              className={`cursor-pointer glass card-hover bg-white/60 border border-white/20 relative ${
                selectedIntegration === index ? 'ring-2 ring-blue-500 bg-white/90' : ''
              }`}
              onClick={() => setSelectedIntegration(selectedIntegration === index ? null : index)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardBody className="p-6">
                {/* Status badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    integration.status === 'live' ? 'bg-green-100 text-green-700' :
                    integration.status === 'beta' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-gray-100 text-gray-600'
                  }`}>
                    {integration.status.replace('_', ' ')}
                  </span>
                </div>

                <div className="text-center">
                  {/* Logo placeholder */}
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${integration.color} flex items-center justify-center shadow-lg`}>
                    <span className="text-white font-bold text-xl">
                      {integration.name.charAt(0)}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{integration.name}</h3>
                  <div className="text-xs text-blue-600 font-medium mb-3 uppercase tracking-wide">
                    {integration.category}
                  </div>
                  <p className="text-sm text-gray-600 font-light leading-relaxed mb-4">
                    {integration.description}
                  </p>
                  
                  <div className="text-xs text-gray-500">
                    {integration.users} users
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>

        {/* API Features */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl text-thin text-gray-900 mb-4">Developer-First API</h3>
            <p className="text-gray-500 font-light max-w-2xl mx-auto">
              Build custom integrations with our comprehensive API and developer tools.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {apiFeatures.map((feature, index) => (
              <Card
                key={index}
                className="glass card-hover bg-white/60 border border-white/20 text-center h-full"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardBody className="p-8">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h4>
                  <p className="text-gray-600 font-light text-sm mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 flex-shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>

        {/* Request integration CTA */}
        <div className="text-center">
          <Card className="glass bg-white/40 border border-white/30 max-w-4xl mx-auto">
            <CardBody className="p-12">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Don't see your tool?
              </h3>
              <p className="text-gray-600 font-light mb-8 max-w-2xl mx-auto leading-relaxed">
                We're constantly adding new integrations based on customer demand. 
                Let us know what you need and we'll prioritize it.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="magnetic-hover bg-blue-600 text-white px-8 py-4 rounded-2xl font-medium shadow-lg">
                  Request Integration
                </button>
                <button className="glass bg-white/60 border border-white/20 text-gray-700 hover:bg-white/80 px-8 py-4 rounded-2xl font-medium transition-all duration-300">
                  View API Docs
                </button>
              </div>

              {/* Popular requests */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-500 mb-4">Coming soon:</p>
                <div className="flex flex-wrap justify-center gap-3">
                  {['Figma', 'Linear', 'Monday.com', 'Airtable', 'Discord'].map((tool) => (
                    <span key={tool} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
}