
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Team = () => {
  const team = [{
    name: "Jennifer Wong",
    role: "Founder & CEO",
    initials: "JW"
  }, {
    name: "Michael Chen",
    role: "Co-Founder & CPO",
    initials: "MC"
  }, {
    name: "Sarah Johnson",
    role: "Head of Guide Relations",
    initials: "SJ"
  }];

  // Using the uploaded image as the source for all avatars
  const avatarImageUrl = "/lovable-uploads/eb808fc8-5cbb-435a-8e3d-42e2c96b13ba.png";
  
  return (
    <section id="team" className="py-20 bg-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our passionate team is dedicated to connecting travelers with trusted local guides across China.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <Avatar className="w-24 h-24">
                    {avatarImageUrl ? (
                      <AvatarImage src={avatarImageUrl} alt={member.name} />
                    ) : null}
                    <AvatarFallback className="text-lg bg-orange-100 text-orange-800">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
