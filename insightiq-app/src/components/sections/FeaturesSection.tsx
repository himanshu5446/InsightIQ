import React from 'react';

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
}

interface FeatureCardProps {
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    id: 1,
    title: "Lightning Fast Analysis",
    description: "Get insights in seconds, not days. Our AI processes your data at unprecedented speeds.",
    icon: "lightning"
  },
  {
    id: 2,
    title: "Intelligent Predictions", 
    description: "Advanced machine learning algorithms that learn from your data and improve over time.",
    icon: "brain"
  },
  {
    id: 3,
    title: "Enterprise Security",
    description: "Bank-level encryption and compliance with major data protection regulations.",
    icon: "security"
  }
]

function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <div className="text-center">
      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
        {/* Icon placeholder - can be replaced with actual icons */}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

export default function FeaturesSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why choose InsightIQ</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}