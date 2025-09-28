import React from 'react';

const features = [
  {
    icon: '📊',
    title: 'Price Prediction + Market Intelligence',
    description: 'Accurate forecasts with best mandi suggestions.'
  },
  {
    icon: '⚠️',
    title: 'Risk Mitigation (Weather + Pests)',
    description: 'Stay prepared with alerts on weather, pests, and yield risks.'
  },
  {
    icon: '🤖',
    title: 'AI-Driven Crop Advisory',
    description: 'Upload crop photos → get instant health checks & advice.'
  },
  {
    icon: '🛒',
    title: 'Community Marketplace',
    description: 'Sell directly to buyers, form groups, and sign bulk deals.'
  },
  {
    icon: '👥',
    title: 'Cooperative Advantage',
    description: 'Pool harvests with other farmers to negotiate better prices.'
  }
];

const KeyFeaturesSection = () => (
  <section className="py-12">
    <h2 className="text-3xl font-bold mb-8 text-left">Key Features</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature, idx) => (
        <div key={idx} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
          <div className="text-5xl mb-4">{feature.icon}</div>
          <h3 className="text-xl font-semibold mb-2 text-center">{feature.title}</h3>
          <p className="text-gray-600 text-center">{feature.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default KeyFeaturesSection;
