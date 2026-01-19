import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LiveGrid } from './components/LiveGrid';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { JoinModal } from './components/JoinModal';
import { AgeGate } from './components/AgeGate';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAgeVerified, setIsAgeVerified] = useState(false);

  // Check local storage for age verification on mount
  useEffect(() => {
    const verified = localStorage.getItem('age-verified');
    if (verified === 'true') {
      setIsAgeVerified(true);
    }
  }, []);

  const handleVerifyAge = () => {
    localStorage.setItem('age-verified', 'true');
    setIsAgeVerified(true);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-dark-bg text-gray-100 selection:bg-brand-500 selection:text-white overflow-x-hidden">
      {!isAgeVerified && <AgeGate onVerify={handleVerifyAge} />}
      
      <div className={`transition-opacity duration-700 ${isAgeVerified ? 'opacity-100' : 'opacity-0 h-screen overflow-hidden'}`}>
        <Navbar onJoin={openModal} />
        
        <main>
          <Hero onJoin={openModal} />
          <LiveGrid />
          <Features />
          <Testimonials />
        </main>

        <Footer />
        
        {isModalOpen && <JoinModal onClose={closeModal} />}
      </div>
    </div>
  );
}