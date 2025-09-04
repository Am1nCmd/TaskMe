"use client";

import { Card, CardBody } from "@heroui/react";
import { useState, useEffect } from "react";

const realTimeMetrics = [
  {
    label: "Active Tasks",
    value: 1247,
    change: "+12%",
    trend: "up",
    unit: "",
    icon: "📋",
    color: "from-blue-500 to-blue-600"
  },
  {
    label: "Completion Rate",
    value: 99.2,
    change: "+0.8%",
    trend: "up", 
    unit: "%",
    icon: "✅",
    color: "from-green-500 to-green-600"
  },
  {
    label: "Avg Response Time",
    value: 2.3,
    change: "-15%",
    trend: "down",
    unit: "hrs",
    icon: "⚡",
    color: "from-yellow-500 to-yellow-600"
  },
  {
    label: "Client Satisfaction",
    value: 4.9,
    change: "+0.1",
    trend: "up",
    unit: "/5",
    icon: "⭐",
    color: "from-purple-500 to-purple-600"
  }
];

const growthStats = [
  {
    period: "This Month",
    tasks: 12450,
    revenue: 186750,
    clients: 89,
    growth: "+18%"
  },
  {
    period: "Last Month", 
    tasks: 10540,
    revenue: 158100,
    clients: 75,
    growth: "+12%"
  },
  {
    period: "3 Months Ago",
    tasks: 8960,
    revenue: 134400,
    clients: 63,
    growth: "+8%"
  }
];

const serviceBreakdown = [
  { name: "Transcription", percentage: 45, color: "bg-blue-500" },
  { name: "Virtual Assistant", percentage: 30, color: "bg-green-500" },
  { name: "Creative Design", percentage: 15, color: "bg-purple-500" },
  { name: "Web Development", percentage: 10, color: "bg-orange-500" }
];

const recentActivities = [
  { action: "New enterprise client onboarded", time: "2 mins ago", type: "client" },
  { action: "1,000th transcription completed", time: "5 mins ago", type: "milestone" },
  { action: "5-star review from TechCorp", time: "12 mins ago", type: "review" },
  { action: "System uptime: 99.99% maintained", time: "1 hour ago", type: "system" },
  { action: "New integration with Slack launched", time: "3 hours ago", type: "feature" }
];

// Animate counter function
const useCountUp = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return count;
};

export default function MetricsDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-gray-50/50 to-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/20 via-transparent to-green-50/20"></div>
      <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-blue-200/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-green-200/10 rounded-full blur-2xl"></div>
      
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-green-50 text-green-600 rounded-full text-sm font-medium mb-6">
            🔥 Real-time Analytics
          </div>
          <h2 className="text-5xl md:text-6xl text-thin text-gray-900 mb-8 leading-tight">
            Growing at <span className="gradient-text">scale</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
            Transparent metrics showing our growth, performance, and impact in real-time.
          </p>
        </div>

        {/* Tab navigation */}
        <div className="flex justify-center mb-12">
          <div className="glass rounded-2xl p-2 bg-white/60 border border-white/20 flex space-x-2">
            {['overview', 'growth', 'services'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-xl transition-all duration-300 font-medium capitalize ${
                  activeTab === tab 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'text-gray-600 hover:bg-white/50'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Real-time metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {realTimeMetrics.map((metric, index) => {
                const animatedValue = useCountUp(metric.value, 2000);
                return (
                  <Card
                    key={index}
                    className="glass card-hover bg-white/60 border border-white/20"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <CardBody className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-2xl">{metric.icon}</div>
                        <div className={`flex items-center text-sm font-medium ${
                          metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                        }`}>
                          <svg className={`w-4 h-4 mr-1 ${metric.trend === 'down' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
                          </svg>
                          {metric.change}
                        </div>
                      </div>
                      <div className="text-3xl font-bold text-gray-900 mb-1">
                        {animatedValue.toLocaleString()}{metric.unit}
                      </div>
                      <div className="text-sm text-gray-600 font-medium">{metric.label}</div>
                    </CardBody>
                  </Card>
                );
              })}
            </div>

            {/* Recent activity feed */}
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card className="glass bg-white/60 border border-white/20 h-full">
                  <CardBody className="p-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                      📊 Live Activity Feed
                      <div className="ml-3 w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    </h3>
                    <div className="space-y-4">
                      {recentActivities.map((activity, index) => (
                        <div key={index} className="flex items-start space-x-4 p-4 rounded-2xl bg-gray-50/50 hover:bg-white/50 transition-colors">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs ${
                            activity.type === 'client' ? 'bg-blue-100 text-blue-600' :
                            activity.type === 'milestone' ? 'bg-green-100 text-green-600' :
                            activity.type === 'review' ? 'bg-yellow-100 text-yellow-600' :
                            activity.type === 'system' ? 'bg-purple-100 text-purple-600' :
                            'bg-orange-100 text-orange-600'
                          }`}>
                            {activity.type === 'client' ? '👤' :
                             activity.type === 'milestone' ? '🎉' :
                             activity.type === 'review' ? '⭐' :
                             activity.type === 'system' ? '🔧' : '🚀'}
                          </div>
                          <div className="flex-1">
                            <p className="text-gray-900 font-medium">{activity.action}</p>
                            <p className="text-sm text-gray-500">{activity.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardBody>
                </Card>
              </div>

              {/* Service breakdown */}
              <Card className="glass bg-white/60 border border-white/20">
                <CardBody className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">Service Distribution</h3>
                  <div className="space-y-6">
                    {serviceBreakdown.map((service, index) => (
                      <div key={index}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-700">{service.name}</span>
                          <span className="text-sm text-gray-600">{service.percentage}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${service.color} transition-all duration-1000 ease-out`}
                            style={{ width: `${service.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        )}

        {/* Growth Tab */}
        {activeTab === 'growth' && (
          <div className="grid md:grid-cols-3 gap-8">
            {growthStats.map((stat, index) => (
              <Card key={index} className="glass card-hover bg-white/60 border border-white/20">
                <CardBody className="p-8">
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-gray-900 mb-6">{stat.period}</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="text-3xl font-bold text-gray-900">{stat.tasks.toLocaleString()}</div>
                        <div className="text-sm text-gray-600">Tasks Completed</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-green-600">${stat.revenue.toLocaleString()}</div>
                        <div className="text-sm text-gray-600">Revenue Generated</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-blue-600">{stat.clients}</div>
                        <div className="text-sm text-gray-600">Active Clients</div>
                      </div>
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <div className="text-lg font-semibold text-green-600">{stat.growth}</div>
                        <div className="text-sm text-gray-600">Growth Rate</div>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>
        )}

        {/* Services Tab */}
        {activeTab === 'services' && (
          <div className="text-center">
            <Card className="glass bg-white/60 border border-white/20 max-w-4xl mx-auto">
              <CardBody className="p-12">
                <h3 className="text-2xl font-semibold text-gray-900 mb-8">Service Performance Metrics</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">99.5%</div>
                    <div className="text-sm text-gray-600">Transcription Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">18hrs</div>
                    <div className="text-sm text-gray-600">Avg Turnaround</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-purple-600 mb-2">4.9</div>
                    <div className="text-sm text-gray-600">Client Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-orange-600 mb-2">25+</div>
                    <div className="text-sm text-gray-600">Languages Supported</div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="glass rounded-3xl p-8 bg-white/40 border border-white/30">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Want to see your metrics grow like this?</h3>
            <p className="text-gray-600 font-light mb-6">Join thousands of businesses already scaling with TaskMe.</p>
            <button className="magnetic-hover bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-medium shadow-lg">
              Start Your Free Trial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}