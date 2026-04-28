import React from 'react'
import { Navigation } from './components/Navigation'
import { HeroSection } from './components/HeroSection'
import { AboutSection } from './components/AboutSection'
import { ProcessSection } from './components/ProcessSection'
import { ServicesSection } from './components/ServicesSection'
import { WhyChooseSection } from './components/WhyChooseSection'
import { ValuesSection } from './components/ValuesSection'
import { TechnologiesSection } from './components/TechnologiesSection'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#050714] overflow-x-hidden">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ProcessSection />
        <ServicesSection />
        <WhyChooseSection />
        <ValuesSection />
        <TechnologiesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
