
import React from 'react';
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

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
          
          {/* Right content - app screenshots */}
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              {/* First image - homepage screenshot */}
              <div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <AspectRatio ratio={9/19.5} className="bg-white">
                  <img 
                    src="/lovable-uploads/a7bd4cb8-1e34-44f8-9133-17b1d5adf1d2.png" 
                    alt="FindLocal app home screen" 
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
              </div>
              
              {/* Second image - detail page screenshot */}
              <div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300 mt-4 md:mt-12">
                <AspectRatio ratio={9/19.5} className="bg-white">
                  <img 
                    src="/lovable-uploads/3bdc5530-16f6-4872-af23-ae85f99b4034.png" 
                    alt="FindLocal guide profile screen" 
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default Hero;
