
import React from 'react';

const Team = () => {
  return (
    <section id="team" className="py-20 bg-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
            Our passionate team is dedicated to connecting travelers with trusted local guides across China.
          </h2>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 max-w-5xl mx-auto items-center">
          {/* Left side: Imperial College London Business School logo */}
          <div className="w-full md:w-2/5 flex justify-center">
            <div className="rounded-lg shadow-md overflow-hidden max-w-xs">
              <img 
                src="/lovable-uploads/21ec11ca-28ac-4387-a7f8-bca6f67f5d57.png" 
                alt="Imperial College London Business School" 
                className="w-full h-auto"
              />
            </div>
          </div>
          
          {/* Right side: Team description */}
          <div className="w-full md:w-3/5">
            <h3 className="text-2xl font-semibold mb-4 text-black">About Our Team</h3>
            <div className="space-y-4 text-black">
              <p>
                We are a team of ambitious students from Imperial College London Business School, 
                one of the world's leading business schools. Our diverse backgrounds in finance, 
                technology, and entrepreneurship drive us to create innovative solutions that 
                bridge the gap between academic excellence and real-world impact.
              </p>
              <p>
                With our strong foundation in business strategy and cutting-edge research, 
                we're committed to delivering exceptional value through our platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
