import React from 'react';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import AppointmentSection from './components/AppointmentSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="min-h-screen bg-cream-50">
      <HeroSection />
      <ServicesSection />
      <AppointmentSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
