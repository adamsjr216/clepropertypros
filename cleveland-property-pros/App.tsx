import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyCleveland from './components/WhyCleveland';
import Services from './components/Services';
import PropertyTypes from './components/PropertyTypes';
import Process from './components/Process';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <WhyCleveland />
      <div className="bg-gradient-to-b from-slate-50 to-white h-10 w-full"></div>
      <Services />
      <PropertyTypes />
      <Process />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;