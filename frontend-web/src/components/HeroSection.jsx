import React from 'react';

const HeroSection = () => (
  <section className="text-center  ">
    <h1 className='h-[26px]'></h1>
    <h1 className="text-6xl font-bold mb-4 text-left">Connecting Farmers to Markets, Smarter and Fairer </h1>
    <p className="text-l text-gray-700 text-left pb-[8px]">KisanSetu empowers farmers with AI-driven price insights, risk alerts, and direct access to buyers—helping them earn more while reducing losses</p>
    <div className="flex gap-x-4 justify-start">
      <button
        type="button"
        className="group flex h-min items-center justify-center rounded-lg font-semibold py-2 px-4 text-white text-sm sm:text-base shadow-md hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#52bd57] bg-[#52bd57] bg-gradient-to-t from-[#3d9b41] to-[#52bd57] hover:opacity-95 active:opacity-90"
        onClick={() => {
          const el = document.getElementById('marketplace-preview');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        Explore Marketplace
      </button>
      <button
        type="button"
        className="group flex h-min items-center justify-center rounded-lg font-semibold py-2 px-4 text-white text-sm sm:text-base shadow-md hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#52bd57] bg-[#52bd57] bg-gradient-to-t from-[#3d9b41] to-[#52bd57] hover:opacity-95 active:opacity-90"
      >
        Learn how it works
      </button>
    </div>
  </section>
);

export default HeroSection;
