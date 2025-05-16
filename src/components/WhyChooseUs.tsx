
import React from 'react';

const WhyChooseUs = () => {
  const advantages = [
    {
      title: "Vetted Local Guides",
      description: "All our guides undergo thorough background checks and training to ensure your safety and the best experience.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
    },
    {
      title: "Personalized Itineraries",
      description: "Custom travel plans designed around your interests, time constraints and budget to create your perfect trip.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
          <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
          <path d="M4 2C2.8 3.7 2 5.7 2 8"></path>
          <path d="M22 8c0-2.3-.8-4.3-2-6"></path>
        </svg>
      ),
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock assistance for any questions or concerns during your trip for total peace of mind.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
          <path d="M12 17h.01"></path>
        </svg>
      ),
    },
    {
      title: "Local Payment Solutions",
      description: "Get help setting up and using Chinese payment systems like WeChat Pay and Alipay for cashless convenience.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="5" width="20" height="14" rx="2"></rect>
          <line x1="2" y1="10" x2="22" y2="10"></line>
        </svg>
      ),
    },
    {
      title: "Cultural Insight Access",
      description: "Learn about local customs, traditions, and etiquette from natives who love sharing their cultural heritage.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
        </svg>
      ),
    },
    {
      title: "Authentic Experiences",
      description: "Skip tourist traps and discover genuine local experiences that most visitors never find on their own.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"></path>
          <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"></path>
        </svg>
      ),
    },
  ];

  return (
    <section id="why-choose-us" className="section-padding relative">
      {/* Background pattern/gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
      
      <div className="container mx-auto container-padding relative z-10">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Travel Confidently in a New Culture</h2>
          <p className="text-lg text-gray-700 max-w-xl mx-auto">
            Our comprehensive services remove the stress from traveling in an unfamiliar environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {advantages.map((advantage, index) => (
            <div key={index} className="flex space-x-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-coral/10 flex items-center justify-center text-coral">
                {advantage.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Testimonial */}
        <div className="mt-20 bg-gray-50 rounded-2xl p-8 md:p-10 shadow-sm">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80" 
                alt="Sarah Chen" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <svg className="h-8 w-8 text-coral mb-4" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="text-lg md:text-xl italic text-gray-700 mb-4">
                "Having Trusted Local's help during my first trip to Beijing was invaluable. From getting me set up with WeChat Pay to translating at restaurants and helping me navigate the subway, my guide made what could have been an overwhelming experience actually enjoyable!"
              </p>
              <div>
                <p className="font-semibold">Sarah Chen</p>
                <p className="text-gray-600 text-sm">First-time visitor from Australia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
