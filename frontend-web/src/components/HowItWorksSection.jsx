import React from 'react';

const steps = [
  {
    icon: '📈', // chart/graph
    title: 'Step 1 → Predict',
    description: 'AI forecasts crop prices, weather, and demand.'
  },
  {
    icon: '💡', // lightbulb/decision tree
    title: 'Step 2 → Decide',
    description: 'Get smart advice on when to sell, store, or group with others.'
  },
  {
    icon: '🤝', // handshake/marketplace
    title: 'Step 3 → Connect',
    description: 'Sell directly to buyers or cooperatives at better prices.'
  }
];

const HowItWorksSection = () => (
    
  <section className="">
    <div className='h-8'></div>
    <h2 className="text-3xl font-bold mb-8 text-left">How It Works</h2>
    <div className="flex flex-col sm:flex-row gap-8">
      {steps.map((step, idx) => (
        <div key={idx} className="flex-1 bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
          <div className="text-5xl mb-4">{step.icon}</div>
          <h3 className="text-xl font-semibold mb-2 text-center">{step.title}</h3>
          <p className="text-gray-600 text-center">{step.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default HowItWorksSection;
