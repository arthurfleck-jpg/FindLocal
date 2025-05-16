
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-coral mb-6">
          <path d="M21.54 15H17a2 2 0 0 1-2-2V7.46a2 2 0 0 0-1-1.73l-7-4.2a2 2 0 0 0-2 0l-7 4.2a2 2 0 0 0-1 1.73V17a2 2 0 0 0 2 2h3.34"></path>
          <path d="m6 18 .42 3h11.16L18 18"></path>
          <path d="M2 7c6 0 22 1 22 1"></path>
          <path d="M22 7 A2 2 0 0 1 20 9 A2 2 0 0 1 18 7 A2 2 0 0 1 22 7 z"></path>
          <circle cx="4" cy="20" r="1"></circle>
        </svg>
      ),
      title: "Local Language Support",
      description:
        "Never get lost in translation with our English-speaking local guides. Navigate conversations with locals effortlessly and communicate exactly what you need.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-coral mb-6">
          <rect x="3" y="3" width="18" height="18" rx="2"></rect>
          <path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2"></path>
          <path d="M3 11h18"></path>
          <path d="M7 15h.01"></path>
          <path d="M11 15h.01"></path>
          <path d="M15 15h.01"></path>
        </svg>
      ),
      title: "Navigation & Payment Help",
      description:
        "Seamlessly use local apps like WeChat Pay and ride-hailing services with assistance from guides who know the digital landscape of China.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-coral mb-6">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
          <path d="M2 12h20"></path>
        </svg>
      ),
      title: "Personalized Experiences",
      description:
        "Discover authentic local spots tailored to your interests. From hidden food gems to breathtaking landscapes, experience the real China beyond tourist attractions.",
    },
  ];

  return (
    <section id="features" className="section-padding bg-gray-50">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">How We Help You Navigate China</h2>
          <p className="text-lg text-gray-700 max-w-xl mx-auto">
            Our platform bridges cultural gaps to make your travel experience smooth, authentic, and memorable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white overflow-hidden">
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center">
                  {feature.icon}
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
