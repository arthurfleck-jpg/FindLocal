import React from 'react';
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ArrowRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
const Hero = () => {
  return <section id="home" className="pt-28 pb-20 md:pt-32 md:pb-28 lg:pt-40 lg:pb-32 relative overflow-hidden">
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
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-8">
              <a href="#" className="transition hover:opacity-90">
                
              </a>
              <a href="#" className="transition hover:opacity-90">
                
              </a>
            </div>
            
            {/* Trust indicators */}
            <div className="mt-6 flex items-center justify-center lg:justify-start">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs font-medium">JD</div>
                <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs font-medium">KL</div>
                <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs font-medium">AS</div>
                <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs font-medium">+</div>
              </div>
              <div className="ml-4 text-sm text-gray-600">Joined by 200+ travelers</div>
            </div>
          </div>
          
          {/* Right content - iPhone mockup carousel (40% width) */}
          <div className="w-full lg:w-2/5 h-full">
            <div className="relative w-full overflow-hidden">
              <Carousel className="w-full">
                <CarouselContent className="-ml-4">
                  {/* iPhone Mockup 1 */}
                  <CarouselItem className="pl-4 md:basis-1/1 lg:basis-3/4">
                    <PhoneMockup>
                      <img src="/lovable-uploads/1909dda8-2d72-4735-b6a1-15f1caf66cff.png" alt="FindLocal App Home Screen" className="w-full h-full object-cover rounded-[32px]" />
                    </PhoneMockup>
                  </CarouselItem>
                  
                  {/* iPhone Mockup 2 */}
                  <CarouselItem className="pl-4 md:basis-1/1 lg:basis-3/4">
                    <PhoneMockup>
                      <img src="/lovable-uploads/af32652a-5b63-4a6c-ac49-8f4a65288ef6.png" alt="FindLocal Guide Onboarding" className="w-full h-full object-cover rounded-[32px]" />
                    </PhoneMockup>
                  </CarouselItem>
                  
                  {/* iPhone Mockup 3 */}
                  <CarouselItem className="pl-4 md:basis-1/1 lg:basis-3/4">
                    <PhoneMockup>
                      <img src="/lovable-uploads/444596fb-ef41-460d-a9a7-f5f3f0024bc8.png" alt="FindLocal Messaging" className="w-full h-full object-cover rounded-[32px]" />
                    </PhoneMockup>
                  </CarouselItem>
                  
                  {/* iPhone Mockup 4 */}
                  <CarouselItem className="pl-4 md:basis-1/1 lg:basis-3/4">
                    <PhoneMockup>
                      <img src="/lovable-uploads/3893e779-bacb-4233-a9d2-0d86319c35b7.png" alt="FindLocal Profile Screen" className="w-full h-full object-cover rounded-[32px]" />
                    </PhoneMockup>
                  </CarouselItem>
                </CarouselContent>
                <div className="absolute top-1/2 -translate-y-1/2 -left-1 z-10">
                  <CarouselPrevious className="relative left-0" />
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 -right-1 z-10">
                  <CarouselNext className="relative right-0" />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>;
};

// Reusable iPhone mockup component
const PhoneMockup = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return <div className="relative w-full max-w-[300px] mx-auto transform transition-transform duration-500 hover:scale-[1.02]">
      {/* iPhone frame */}
      <div className="relative w-full pb-[210%]">
        {/* Black iPhone frame */}
        <div className="absolute inset-0 bg-black rounded-[40px] shadow-xl overflow-hidden">
          {/* iPhone notch (Dynamic Island) */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[30%] h-[25px] bg-black z-20 rounded-b-[14px]"></div>
          
          {/* Screen content */}
          <div className="absolute inset-[3px] rounded-[36px] overflow-hidden bg-white">
            {/* Status bar */}
            <div className="absolute top-0 left-0 right-0 h-[40px] bg-transparent z-10 flex justify-between items-center px-6">
              <div className="text-xs font-semibold">9:41</div>
              <div className="flex items-center space-x-1">
                <div className="w-4 h-4">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 15V9H8V15H6Z" fill="currentColor" />
                    <path d="M10 17V7H12V17H10Z" fill="currentColor" />
                    <path d="M14 21V3H16V21H14Z" fill="currentColor" />
                  </svg>
                </div>
                <div className="w-4 h-4">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 8C14.2091 8 16 6.20914 16 4H20V6C20 9.31371 17.3137 12 14 12H10C6.68629 12 4 14.6863 4 18V20H8C8 17.7909 9.79086 16 12 16Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="w-7 h-3.5 border border-black rounded-sm relative">
                  <div className="absolute top-0.5 bottom-0.5 left-0.5 right-1 bg-black rounded-sm"></div>
                </div>
              </div>
            </div>
            
            {/* Screen content */}
            <div className="absolute inset-0">
              {children}
            </div>
            
            {/* Home indicator */}
            <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-[30%] h-1 bg-black rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </div>;
};
export default Hero;