import React from 'react'
import { Navigation } from './components/Navigation'
import { HeroSection } from './components/HeroSection'
import { AboutSection } from './components/AboutSection'
import { ProcessSection } from './components/ProcessSection'
import { ServicesSection } from './components/ServicesSection'
import { WhyChooseSection } from './components/WhyChooseSection'
import { PortfolioSection } from './components/PortfolioSection'
import { ValuesSection } from './components/ValuesSection'
import { TechnologiesSection } from './components/TechnologiesSection'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'
import bgImage from './assets/City_of_JHB.png';

function App() {
  return (
    <div className="min-h-screen bg-[#050714] overflow-x-hidden">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProcessSection />
        <WhyChooseSection />
        <TechnologiesSection />
        <PortfolioSection />
        <ValuesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
