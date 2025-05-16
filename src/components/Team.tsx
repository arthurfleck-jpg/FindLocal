
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Team = () => {
  const team = [
    {
      name: "Jennifer Wong",
      role: "Founder & CEO",
      initials: "JW"
    },
    {
      name: "Michael Chen",
      role: "Co-Founder & CPO",
      initials: "MC"
    },
    {
      name: "Sarah Johnson",
      role: "Head of Guide Relations",
      initials: "SJ"
    },
  ];

  // Using the uploaded image as the source for all avatars
  const avatarImageUrl = "/lovable-uploads/3c6c8e13-02f0-4bc7-9c3e-33dacfe0f674.png";

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
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4">
                  <Avatar className="h-24 w-24 border-2 border-coral">
                    <AvatarImage src={avatarImageUrl} alt={member.name} className="object-cover" />
                    <AvatarFallback>{member.initials}</AvatarFallback>
                  </Avatar>
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-coral">{member.role}</p>
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
