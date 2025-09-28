import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import HowItWorksSection from './components/HowItWorksSection';
import KeyFeaturesSection from './components/KeyFeaturesSection';
import MarketplacePreviewSection from './components/MarketplacePreviewSection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto p-6">
        <HeroSection />

      

  <HowItWorksSection />
  <KeyFeaturesSection />
  <MarketplacePreviewSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
