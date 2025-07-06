
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const EarlyAccess = () => {
  const scrollToHero = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
          Limited Time Pre-Release Offer
        </Badge>
        
        <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">
          Get exclusive early access perks
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white/10 backdrop-blur rounded-lg p-6 border border-white/20">
            <div className="text-2xl mb-2">🚀</div>
            <h3 className="font-semibold text-white mb-2">No fees during pre-release</h3>
            <p className="text-green-100 text-sm">Full access to all features at zero cost during beta</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur rounded-lg p-6 border border-white/20">
            <div className="text-2xl mb-2">🎯</div>
            <h3 className="font-semibold text-white mb-2">Free onboarding</h3>
            <p className="text-green-100 text-sm">Skip the $299 setup fee—we'll migrate your data for free</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur rounded-lg p-6 border border-white/20">
            <div className="text-2xl mb-2">📞</div>
            <h3 className="font-semibold text-white mb-2">Priority feedback calls</h3>
            <p className="text-green-100 text-sm">Shape the product with direct access to our founders</p>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur rounded-lg p-6 border border-white/20 mb-8">
          <p className="text-white text-lg">
            <span className="font-semibold">Only 500 spots available.</span> We're limiting our beta to ensure exceptional support for early users.
          </p>
        </div>

        <Button
          onClick={scrollToHero}
          size="lg"
          className="bg-white text-green-700 hover:bg-gray-100 font-semibold px-8 py-3 text-lg"
        >
          Claim Your Spot Now
        </Button>
        
        <p className="text-green-100 text-sm mt-4">
          Join the waitlist in 30 seconds. No credit card required.
        </p>
      </div>
    </section>
  );
};

export default EarlyAccess;
