"use client";

import { useEffect, useState } from "react";

const stats = [
  {
    number: 500,
    suffix: "+",
    label: "Projects Completed",
    description: "Successfully delivered"
  },
  {
    number: 99,
    suffix: "%",
    label: "Client Satisfaction",
    description: "Happy customers"
  },
  {
    number: 24,
    suffix: "/7",
    label: "Support Available",
    description: "Round the clock"
  },
  {
    number: 3,
    suffix: "x",
    label: "Faster Delivery",
    description: "Than industry average"
  }
];

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = target / steps;
    const stepTime = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      setCurrent(Math.min(increment * step, target));
      
      if (step >= steps) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <span className="text-4xl md:text-5xl font-bold text-blue-600">
      {Math.round(current)}{suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="py-20 px-6 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center slide-up" style={{ animationDelay: `${index * 150}ms` }}>
              <AnimatedNumber target={stat.number} suffix={stat.suffix} />
              <h3 className="text-lg font-semibold text-gray-900 mt-3 mb-1">
                {stat.label}
              </h3>
              <p className="text-sm text-gray-600">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}