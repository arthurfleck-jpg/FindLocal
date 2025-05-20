
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img 
            src="/lovable-uploads/553473df-2c7e-4eda-a13f-2c6d38837ac6.png" 
            alt="FindLocal Logo" 
            className="h-10 md:h-12"
          />
        </a>

        {/* Desktop Navigation - Hidden on mobile */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="font-medium hover:text-coral transition-colors">Home</a>
          <a href="#features" className="font-medium hover:text-coral transition-colors">Features</a>
          <a href="#why-choose-us" className="font-medium hover:text-coral transition-colors">Why Choose Us</a>
          <a href="#contact" className="font-medium hover:text-coral transition-colors">Contact</a>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMobileMenu} className="md:hidden text-coral">
          {isMobileMenuOpen ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>}
        </button>
      </div>

      {/* Mobile Menu - Slide in from right */}
      <div className={`fixed inset-y-0 right-0 transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} w-64 bg-white shadow-xl z-50 transition-transform duration-300 ease-in-out md:hidden`}>
        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-between items-center mb-8">
            <img 
              src="/lovable-uploads/553473df-2c7e-4eda-a13f-2c6d38837ac6.png" 
              alt="FindLocal Logo" 
              className="h-8"
            />
            <button onClick={toggleMobileMenu} className="text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <div className="flex flex-col space-y-4">
            <a href="#home" className="font-medium py-2 hover:text-coral transition-colors" onClick={toggleMobileMenu}>Home</a>
            <a href="#features" className="font-medium py-2 hover:text-coral transition-colors" onClick={toggleMobileMenu}>Features</a>
            <a href="#why-choose-us" className="font-medium py-2 hover:text-coral transition-colors" onClick={toggleMobileMenu}>Why Choose Us</a>
            <a href="#about" className="font-medium py-2 hover:text-coral transition-colors" onClick={toggleMobileMenu}>About Us</a>
            <a href="#contact" className="font-medium py-2 hover:text-coral transition-colors" onClick={toggleMobileMenu}>Contact</a>
          </div>
          <div className="mt-auto">
            <Button className="btn-primary w-full" onClick={toggleMobileMenu}>Join Waitlist</Button>
          </div>
        </div>
      </div>
      
      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={toggleMobileMenu} />}
    </nav>;
};

export default Navbar;
