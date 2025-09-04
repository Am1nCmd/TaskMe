"use client";

import { Card, CardBody } from "@heroui/react";
import { useState } from "react";

const teamMembers = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Founder & CEO",
    bio: "Former VP of Engineering at Stripe. 10+ years building scalable platforms. MIT Computer Science.",
    story: "After experiencing the pain of managing virtual teams at scale, Sarah founded TaskMe to democratize access to high-quality virtual assistance. Her vision: make every business owner feel like they have a world-class assistant.",
    achievements: [
      "Built engineering teams of 200+ at Stripe",
      "Led $50M product initiatives",
      "Forbes 30 Under 30 recipient"
    ],
    social: {
      twitter: "@sarahc_builds",
      linkedin: "sarahchen"
    },
    color: "from-blue-500 to-blue-600",
    image: "/team/sarah-placeholder.jpg"
  },
  {
    id: 2,
    name: "Marcus Rodriguez", 
    role: "Co-founder & CTO",
    bio: "Ex-Google AI researcher. PhD in Machine Learning from Stanford. Expert in natural language processing.",
    story: "Marcus pioneered the AI technology that powers TaskMe's intelligent task automation. His research background in NLP enables TaskMe to understand context like a human assistant.",
    achievements: [
      "Published 15+ AI research papers",
      "Led Google's Assistant team for 3 years",
      "Patents in voice recognition technology"
    ],
    social: {
      twitter: "@marcusai",
      linkedin: "marcus-rodriguez"
    },
    color: "from-purple-500 to-purple-600", 
    image: "/team/marcus-placeholder.jpg"
  },
  {
    id: 3,
    name: "Emily Watson",
    role: "Head of Operations",
    bio: "Former McKinsey consultant. Expert in business operations and process optimization. Harvard MBA.",
    story: "Emily ensures TaskMe delivers exceptional quality at scale. Her consulting background helps optimize every aspect of the customer experience, from onboarding to delivery.",
    achievements: [
      "Scaled operations for 500+ clients",
      "Reduced delivery time by 40%",
      "Built quality systems with 99.5% accuracy"
    ],
    social: {
      twitter: "@emilywatson",
      linkedin: "emily-watson"
    },
    color: "from-green-500 to-green-600",
    image: "/team/emily-placeholder.jpg"
  },
  {
    id: 4,
    name: "David Kim",
    role: "Head of Design", 
    bio: "Previously Lead Designer at Airbnb. Passionate about human-centered design and accessibility.",
    story: "David believes great design should be invisible. He crafts TaskMe's user experience to feel effortless and intuitive, removing friction between humans and their digital assistants.",
    achievements: [
      "Designed for 100M+ Airbnb users",
      "Winner of 5 design awards",
      "Accessibility advocate and speaker"
    ],
    social: {
      twitter: "@davidkimdesign",
      linkedin: "david-kim-design"
    },
    color: "from-orange-500 to-orange-600",
    image: "/team/david-placeholder.jpg"
  }
];

const companyValues = [
  {
    title: "Quality First",
    description: "We never compromise on quality. Every task is reviewed by humans to ensure excellence.",
    icon: "🎯"
  },
  {
    title: "Radical Transparency", 
    description: "Open communication, clear pricing, and honest feedback drive everything we do.",
    icon: "💎"
  },
  {
    title: "Human-Centric AI",
    description: "Technology should augment human capability, not replace human judgment.",
    icon: "🤝"
  },
  {
    title: "Global Impact",
    description: "We're building a more equitable future of work for businesses and freelancers worldwide.",
    icon: "🌍"
  }
];

const companyStats = [
  { label: "Team Members", value: "50+", description: "Across 12 countries" },
  { label: "Years Experience", value: "45+", description: "Combined leadership experience" },
  { label: "Funding Raised", value: "$12M", description: "Series A completed" },
  { label: "Advisory Board", value: "8", description: "Industry experts" }
];

export default function TeamSection() {
  const [activeTeamMember, setActiveTeamMember] = useState(0);

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-200/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-200/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-purple-50 text-purple-600 rounded-full text-sm font-medium mb-6">
            Meet the Team
          </div>
          <h2 className="text-5xl md:text-6xl text-thin text-gray-900 mb-8 leading-tight">
            Built by <span className="gradient-text">visionaries</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
            Our team combines deep technical expertise with human-centered design to create the future of work.
          </p>
        </div>

        {/* Company stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {companyStats.map((stat, index) => (
            <div key={index} className="text-center scale-in" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="glass rounded-2xl p-6 bg-white/60 border border-white/20 hover:bg-white/80 transition-all duration-300">
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm font-medium text-gray-900 mb-2">{stat.label}</div>
                <div className="text-xs text-gray-600">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Team showcase */}
        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          {/* Team member cards */}
          <div className="lg:col-span-2 space-y-4">
            {teamMembers.map((member, index) => (
              <Card
                key={member.id}
                className={`cursor-pointer transition-all duration-500 ${
                  activeTeamMember === index 
                    ? 'glass card-hover border-blue-200 shadow-xl bg-white/90 scale-102' 
                    : 'glass hover:bg-white/70 border-white/20 bg-white/60'
                }`}
                onClick={() => setActiveTeamMember(index)}
              >
                <CardBody className="p-8">
                  <div className="flex items-start space-x-6">
                    {/* Avatar */}
                    <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${member.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                      <span className="text-white font-bold text-2xl">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                        {activeTeamMember === index && (
                          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                        )}
                      </div>
                      <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                      <p className="text-gray-600 font-light leading-relaxed mb-4">{member.bio}</p>
                      
                      {/* Social links */}
                      <div className="flex space-x-4">
                        <a href={`https://twitter.com/${member.social.twitter}`} className="text-gray-400 hover:text-blue-500 transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                          </svg>
                        </a>
                        <a href={`https://linkedin.com/in/${member.social.linkedin}`} className="text-gray-400 hover:text-blue-500 transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                            <circle cx="4" cy="4" r="2"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>

          {/* Active member spotlight */}
          <div className="glass rounded-3xl p-8 bg-white/60 border border-white/20 sticky top-8 h-fit">
            <div className="text-center mb-6">
              <div className={`w-24 h-24 mx-auto mb-4 rounded-3xl bg-gradient-to-br ${teamMembers[activeTeamMember].color} flex items-center justify-center shadow-xl`}>
                <span className="text-white font-bold text-3xl">
                  {teamMembers[activeTeamMember].name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                {teamMembers[activeTeamMember].name}
              </h3>
              <p className="text-blue-600 font-medium">{teamMembers[activeTeamMember].role}</p>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Their Story</h4>
                <p className="text-gray-600 font-light leading-relaxed text-sm">
                  {teamMembers[activeTeamMember].story}
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Key Achievements</h4>
                <ul className="space-y-2">
                  {teamMembers[activeTeamMember].achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm font-light">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Company values */}
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl text-thin text-gray-900 mb-8">Our Values</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {companyValues.map((value, index) => (
            <Card
              key={index}
              className="glass card-hover bg-white/60 border border-white/20 text-center h-full"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardBody className="p-8">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 font-light leading-relaxed text-sm">{value.description}</p>
              </CardBody>
            </Card>
          ))}
        </div>

        {/* Join the team CTA */}
        <div className="text-center mt-16">
          <div className="glass rounded-3xl p-12 bg-white/40 border border-white/30">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Join Our Mission</h3>
            <p className="text-gray-600 font-light mb-8 max-w-2xl mx-auto">
              We&apos;re always looking for passionate individuals who want to shape the future of work. 
              Join us in building technology that empowers human potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="magnetic-hover bg-blue-600 text-white px-8 py-4 rounded-2xl font-medium hover:shadow-xl transition-all duration-300">
                View Open Positions
              </button>
              <button className="glass bg-white/60 border border-white/20 text-gray-700 hover:bg-white/80 px-8 py-4 rounded-2xl font-medium transition-all duration-300">
                Learn About Our Culture
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}