
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

const WaitlistCTA = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  
  // Email validation function
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate email before submission
    if (!email || !isValidEmail(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }
    
    setLoading(true);

    try {
      console.log('Submitting email to waitlist:', email);
      
      // Test supabase connection and log details
      const { data: connectionTest, error: connectionError } = await supabase.from('waitlist').select('count').limit(1);
      console.log('Supabase connection test:', { connectionTest, connectionError });
      
      // Insert email into the waitlist table
      const { data, error } = await supabase
        .from('waitlist')
        .insert([{ email, source: 'landing_page' }]);
      
      console.log('Supabase insert response:', { data, error });
      
      if (error) {
        console.error('Error saving to waitlist:', error);
        
        // Handle specific error cases
        if (error.code === '23505' || error.message.includes("duplicate key")) {
          toast({
            title: "Already on the waitlist",
            description: "This email is already on our waitlist.",
            variant: "destructive"
          });
        } else {
          // Log detailed error information for debugging
          console.error('Detailed error:', JSON.stringify(error));
          
          toast({
            title: "Couldn't join waitlist",
            description: "There was a problem joining the waitlist. Please try again.",
            variant: "destructive"
          });
        }
      } else {
        toast({
          title: "You've joined the waitlist!",
          description: "We'll notify you when FindLocal launches."
        });
        // Reset form after successful submission
        setEmail('');
      }
    } catch (error) {
      // Log any unhandled errors
      console.error('Unhandled error in submission:', error);
      toast({
        title: "Something went wrong",
        description: "There was an error submitting your email. Please try again.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };
  
  return <section id="cta" className="py-20 md:py-28">
      <div className="container mx-auto container-padding">
        <div className="bg-coral rounded-3xl overflow-hidden">
          <div className="flex flex-col md:flex-row items-center">
            {/* Left side - image */}
            <div className="w-full md:w-1/2 h-64 md:h-auto">
              <img alt="Tourist in China" className="w-full h-full object-cover" src="/lovable-uploads/0b480149-bb57-41c2-a891-9ec39a213105.png" />
            </div>
            
            {/* Right side - content */}
            <div className="w-full md:w-1/2 p-8 md:p-12 bg-gradient-to-r from-coral to-coral/90 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore China with a Local you trust</h2>
              <p className="text-white/90 text-lg mb-8">
                Join our exclusive waitlist and be the first to connect with trusted local guides who'll make your China experience unforgettable.
              </p>
              
              <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3">
                <Input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="flex-grow px-4 py-3 rounded-md border-white/20 bg-white/10 text-white placeholder:text-white/60 focus:border-white focus:ring-white" 
                  value={email} 
                  onChange={e => setEmail(e.target.value)} 
                  required 
                  aria-label="Email address"
                />
                <Button 
                  className="bg-black hover:bg-black/80 text-white font-semibold py-3 px-6 rounded-md transition duration-200" 
                  disabled={loading} 
                  type="submit"
                  aria-label="Join waitlist"
                >
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
