
import React from 'react';
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="pt-28 pb-20 md:pt-32 md:pb-28 lg:pt-40 lg:pb-32 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-orange-50 to-white z-0"></div>
      
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
              <button className="flex items-center justify-center bg-black text-white px-4 py-2 rounded-lg hover:bg-black/90 transition-colors">
                <div className="mr-2">
                  <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.3922 12.6549C16.3783 9.63254 18.8522 8.20164 18.9643 8.13673C17.5613 6.02431 15.3955 5.73422 14.6434 5.70905C12.8083 5.5295 11.0231 6.81906 10.089 6.81906C9.13552 6.81906 7.68329 5.73422 6.12346 5.77447C4.11066 5.81396 2.24091 6.95329 1.21317 8.75948C-0.922976 12.4294 0.707163 17.842 2.74302 20.8242C3.76142 22.2802 4.9509 23.9105 6.51073 23.844C8.02645 23.772 8.59141 22.8587 10.4102 22.8587C12.2133 22.8587 12.7435 23.844 14.3349 23.8046C15.9819 23.772 17.0183 22.3241 18.0006 20.8557C19.187 19.1548 19.6727 17.488 19.6893 17.4118C19.6562 17.3999 16.4088 16.0787 16.3922 12.6549Z" fill="white"/>
                    <path d="M13.3754 3.80998C14.1969 2.79834 14.7537 1.40383 14.5849 0C13.3919 0.0473776 11.9065 0.815782 11.0546 1.80257C10.2998 2.67085 9.63547 4.11021 9.82039 5.47043C11.1581 5.56437 12.5259 4.80725 13.3754 3.80998Z" fill="white"/>
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </button>
              
              <button className="flex items-center justify-center bg-black text-white px-4 py-2 rounded-lg hover:bg-black/90 transition-colors">
                <div className="mr-2">
                  <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.554688 0.56543V23.4346L14.9519 12L0.554688 0.56543Z" fill="white"/>
                    <path d="M15.5312 12L21.1086 6.42264L3.97465 0.12207C3.32465 -0.14793 2.36016 0.06221 1.62109 0.6185L15.5312 12Z" fill="white"/>
                    <path d="M1.62109 23.3815C2.35961 23.9378 3.32465 24.1479 3.97465 23.8778L21.1086 17.5773L15.5312 12L1.62109 23.3815Z" fill="white"/>
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </button>
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
                <div className="absolute inset-[3px] rounded-[37px] overflow-hidden bg-white border-4 border-black">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[30%] h-[30px] bg-black rounded-b-xl z-20"></div>
                  
                  {/* Screen content - the uploaded app image */}
                  <div className="w-full aspect-[9/19.5] relative">
                    <img 
                      src="/lovable-uploads/d03dd205-594b-4925-a184-a049a8278811.png" 
                      alt="FindLocal app screen" 
                      className="w-full h-full object-cover absolute inset-0"
                    />
                  </div>
                </div>
                
                {/* Power button */}
                <div className="absolute right-[-2px] top-[100px] w-[3px] h-[50px] bg-gray-700 rounded-l-md"></div>
                
                {/* Volume buttons */}
                <div className="absolute left-[-2px] top-[80px] w-[3px] h-[30px] bg-gray-700 rounded-r-md"></div>
                <div className="absolute left-[-2px] top-[120px] w-[3px] h-[50px] bg-gray-700 rounded-r-md"></div>
              </div>
              
              {/* Second iPhone - layered behind */}
              <div className="absolute bottom-[-40px] right-[-40px] w-[280px] md:w-[320px] rotate-0 hidden md:block z-[-1]">
                {/* Black iPhone frame */}
                <div className="absolute inset-0 bg-black/90 rounded-[40px] shadow-xl"></div>
                
                {/* Inner bezel - screen */}
                <div className="absolute inset-[3px] rounded-[37px] overflow-hidden bg-white border-4 border-black">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[30%] h-[30px] bg-black rounded-b-xl z-20"></div>
                  
                  {/* Screen content - the uploaded app image */}
                  <div className="w-full aspect-[9/19.5] relative">
                    <img 
                      src="/lovable-uploads/caf72070-1df5-4310-afcd-4fa805c1761d.png" 
                      alt="FindLocal guide profile screen" 
                      className="w-full h-full object-cover absolute inset-0"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
