import React from 'react';
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ArrowRight } from "lucide-react";
const Hero = () => {
  return <section id="home" className="pt-28 pb-20 md:pt-32 md:pb-28 lg:pt-40 lg:pb-32 relative overflow-hidden">
      {/* Background pattern */}
      
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left content - text (60% width) */}
          <div className="w-full lg:w-3/5 text-center lg:text-left mb-10 lg:mb-0 pr-0 lg:pr-8">
            <h1 className="heading-xl mb-6 leading-tight">
              Find Your Trusted <span className="text-gradient">Local</span> Guide in China
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto lg:mx-0">
              Connect with English-speaking local guides who help you navigate language barriers, local apps, and discover authentic experiences throughout China.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-8">
              <a href="#cta">
                <Button className="btn-primary w-full sm:w-auto">Join the Waitlist</Button>
              </a>
              <a href="#features">
                <Button className="btn-outline w-full sm:w-auto">How It Works</Button>
              </a>
            </div>
            
            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              
              
              
            </div>
            
            {/* Trust indicators */}
            <div className="mt-12 flex items-center justify-center lg:justify-start">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs font-medium">JD</div>
                <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs font-medium">KL</div>
                <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs font-medium">AS</div>
                <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs font-medium">+</div>
              </div>
              <div className="ml-4 text-sm text-gray-600">Joined by 200+ travelers</div>
            </div>
          </div>
          
          {/* Right content - iPhone mockup (40% width) */}
          <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
            <div className="relative w-[280px] md:w-[320px] transform rotate-3 hover:rotate-0 transition-all duration-300">
              {/* iPhone frame */}
              <div className="relative w-full h-full">
                {/* Black iPhone frame */}
                <div className="absolute inset-0 bg-black/90 rounded-[40px] shadow-xl"></div>
                
                {/* Inner bezel - screen */}
                
                
                {/* Power button */}
                
                
                {/* Volume buttons */}
                
                <div className="absolute left-[-2px] top-[120px] w-[3px] h-[50px] bg-gray-700 rounded-r-md"></div>
              </div>
              
              {/* Second iPhone - layered behind */}
              <div className="absolute bottom-[-40px] right-[-40px] w-[280px] md:w-[320px] rotate-0 hidden md:block z-[-1]">
                {/* Black iPhone frame */}
                <div className="absolute inset-0 bg-black/90 rounded-[40px] shadow-xl"></div>
                
                {/* Inner bezel - screen */}
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;