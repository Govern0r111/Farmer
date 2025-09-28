import React from 'react';

const MarketplacePreviewSection = () => (
  <section id="marketplace-preview" className="py-12">
    <h2 className="text-3xl font-bold mb-8 text-left">Marketplace Preview</h2>
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
      <div className="mb-4">
        <span className="font-semibold text-gray-700">Crop:</span> Wheat
      </div>
      <div className="mb-4">
        <span className="font-semibold text-gray-700">Price:</span> ₹21/kg <span className="text-xs text-gray-500">(Predicted: ₹23 next week)</span>
      </div>
      <div className="mb-4">
        <span className="font-semibold text-gray-700">Buyer Offers:</span> ₹22/kg – Local Buyer
      </div>
      <button
        type="button"
        className="group flex h-min items-center justify-center rounded-lg font-semibold py-2 px-4 text-white text-sm sm:text-base shadow-md hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#52bd57] bg-[#52bd57] bg-gradient-to-t from-[#3d9b41] to-[#52bd57] hover:opacity-95 active:opacity-90 w-full mt-4"
      >
        View Full Marketplace
      </button>
    </div>
  </section>
);

export default MarketplacePreviewSection;
