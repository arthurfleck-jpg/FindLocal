
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const Team = () => {
  const team = [
    {
      name: "Jennifer Wong",
      role: "Founder & CEO",
      bio: "Former expat with 5+ years living in Beijing. Created Trusted Local after struggling with language barriers during her first years in China.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=256&ixlib=rb-4.0.3"
    },
    {
      name: "Michael Chen",
      role: "Co-Founder & CPO",
      bio: "Born in Guangzhou and educated in the US. Passionate about connecting travelers with authentic Chinese experiences beyond tourist attractions.",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=256&ixlib=rb-4.0.3"
    },
    {
      name: "Sarah Johnson",
      role: "Head of Guide Relations",
      bio: "Travel industry veteran with extensive experience in Asia. Ensures all guides meet our rigorous standards for quality and safety.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=256&ixlib=rb-4.0.3"
    },
  ];

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Meet Our Team</h2>
          <p className="text-lg text-gray-700 max-w-xl mx-auto">
            We're a passionate group of travel enthusiasts and tech innovators dedicated to making your China experience unforgettable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-coral mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-20 text-center max-w-2xl mx-auto">
          <h3 className="heading-sm mb-4">Our Story</h3>
          <p className="text-gray-700 mb-4">
            Trusted Local was born from our own struggles as first-time visitors to China. Despite the country's incredible beauty, rich culture, and technological advancement, we found ourselves constantly hitting roadblocks due to language barriers and unfamiliar systems.
          </p>
          <p className="text-gray-700">
            We created this platform to ensure other travelers can experience the real China without the frustrations we faced. By connecting visitors with trustworthy local guides, we're building bridges across cultures and making memorable experiences possible.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;
