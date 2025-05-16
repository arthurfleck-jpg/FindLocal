import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
const WaitlistCTA = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "You've joined the waitlist!",
        description: "We'll notify you when FindLocal launches."
      });
      setEmail('');
    }, 1000);
  };
  return <section id="cta" className="py-20 md:py-28">
      <div className="container mx-auto container-padding">
        <div className="bg-coral rounded-3xl overflow-hidden">
          <div className="flex flex-col md:flex-row items-center">
            {/* Left side - image */}
            <div className="w-full md:w-1/2 h-64 md:h-auto">
              <img src="https://images.unsplash.com/photo-1583116527329-7ea3bc587a19?auto=format&fit=crop&q=80&w=800&ixlib=rb-4.0.3" alt="Tourist in China" className="w-full h-full object-cover" />
            </div>
            
            {/* Right side - content */}
            <div className="w-full md:w-1/2 p-8 md:p-12 bg-gradient-to-r from-coral to-coral/90 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore China with a Local you trust</h2>
              <p className="text-white/90 text-lg mb-8">
                Join our exclusive waitlist and be the first to connect with trusted local guides who'll make your China experience unforgettable.
              </p>
              
              <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3">
                <Input type="email" placeholder="Enter your email address" className="flex-grow px-4 py-3 rounded-md border-white/20 bg-white/10 text-white placeholder:text-white/60 focus:border-white focus:ring-white" value={email} onChange={e => setEmail(e.target.value)} required />
                <Button className="bg-black hover:bg-black/80 text-white font-semibold py-3 px-6 rounded-md transition duration-200" disabled={loading} type="submit">
                  {loading ? "Joining..." : "Join Waitlist"}
                </Button>
              </form>
              
              <div className="mt-6 flex items-center">
                <svg className="w-5 h-5 text-white/80 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
                <span className="text-white/80 text-sm">We respect your privacy. No spam, ever.</span>
              </div>
              
              <div className="mt-8 flex items-center gap-2">
                
                <div className="h-1 w-1 rounded-full bg-white/50"></div>
                <div className="text-sm font-medium">Limited spots available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default WaitlistCTA;