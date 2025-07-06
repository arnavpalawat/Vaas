
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const Hero = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('waitlist_emails')
        .insert([{ email }]);

      if (error) {
        throw error;
      }

      toast({
        title: "Welcome to the waitlist! 🎉",
        description: "You'll be among the first to access Vaas.ai and claim your 2 months free.",
        duration: 5000,
      });
      
      setEmail('');
    } catch (error: any) {
      console.error('Error adding email to waitlist:', error);
      
      if (error.code === '23505') {
        toast({
          title: "Already on the list!",
          description: "This email is already registered for early access.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Something went wrong",
          description: "Please try again or contact support.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white to-green-50/30 py-20 lg:py-32">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))]" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-800 mb-6">
            <span className="mr-2">🚀</span>
            Limited Pre-Release Access Available
          </div>
          
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
            AI-Powered Property 
            <span className="block text-green-600">Management</span>
            <span className="block text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-700 mt-2">
              Smarter, Faster, Easier.
            </span>
          </h1>
          
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 sm:text-xl">
            Vaas.ai automates tax filings, rent collection, and tenant calls—so you don't have to. 
            <span className="font-semibold text-gray-900"> For Investors… By Investors.</span>
          </p>

          <form onSubmit={handleSubmit} className="mx-auto mt-10 flex max-w-md flex-col gap-4 sm:flex-row">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 rounded-lg border-gray-300 px-4 py-3 text-base focus:border-green-500 focus:ring-green-500"
              required
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-base font-semibold rounded-lg transition-colors"
            >
              {isSubmitting ? 'Joining...' : 'Get 2 Months Free'}
            </Button>
          </form>

          <p className="mt-4 text-sm text-gray-500">
            Join today and skip the <span className="font-semibold text-gray-700">$299 onboarding fee</span>
          </p>

          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              No setup fees during pre-release
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              Free onboarding for waitlist members
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
