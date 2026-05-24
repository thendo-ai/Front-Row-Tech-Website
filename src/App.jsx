import React from 'react';

import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProcessSection } from './components/ProcessSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { PortfolioSection } from './components/PortfolioSection';
import { TechnologiesSection } from './components/TechnologiesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

/* Background Image */
import heroBackground from './assets/City_of_JHB.png';

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* FIXED BACKGROUND */}
      <div
        className="fixed inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBackground})`,
        }}
      />

      {/* DARK OVERLAY */}
      <div className="fixed inset-0 -z-10 bg-[#050714]/80 backdrop-blur-[2px]" />

      {/* CONTENT */}
      <Navigation />

      <main>
        {/* Uses fixed background */}
        <HeroSection />

        {/* Solid break section */}
        <AboutSection />

        {/* Continue fixed background */}
        <ServicesSection />
        <ProcessSection />
        <WhyChooseSection />
        <PortfolioSection />

        {/* Keep contact darker for readability */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
