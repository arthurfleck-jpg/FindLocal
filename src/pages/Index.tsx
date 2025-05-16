
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import WhyChooseUs from '@/components/WhyChooseUs';
import WaitlistCTA from '@/components/WaitlistCTA';
import Team from '@/components/Team';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <WhyChooseUs />
      <WaitlistCTA />
      <Team />
      <Footer />
    </div>
  );
};

export default Index;
