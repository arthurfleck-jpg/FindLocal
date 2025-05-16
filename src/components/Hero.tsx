import React from 'react';
import { Button } from "@/components/ui/button";
const Hero = () => {
  return <section id="home" className="pt-28 pb-20 md:pt-32 md:pb-28 lg:pt-40 lg:pb-32 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-orange-50 to-white z-0"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left content - text */}
          <div className="w-full lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
            <h1 className="heading-xl mb-6 leading-tight">
              Find Your Trusted <span className="text-gradient">Local</span> Guide in China
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto lg:mx-0">
              Connect with English-speaking local guides who help you navigate language barriers, local apps, and discover authentic experiences throughout China.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Button className="btn-primary">Join the Waitlist</Button>
              <Button className="btn-outline">How It Works</Button>
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
          
          {/* Right content - image/device mockup */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              {/* Main image */}
              <div className="mx-auto lg:ml-auto lg:mr-0 max-w-md rounded-xl overflow-hidden shadow-2xl">
                <img alt="Tourist with local guide in China" className="w-full h-auto" src="/lovable-uploads/169965e6-245f-4fb0-8e90-d00f6bb503ac.jpg" />
              </div>
              
              {/* Floating elements */}
              
              
              
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;