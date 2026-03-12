
import { Button } from '@/components/ui/button';

const CtaSection = () => {
  return (
    <section className="py-16 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-60 h-60 rounded-full bg-cyberpunk-purple/20 filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-cyberpunk-blue/20 filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto glass-card border-0 overflow-hidden rounded-xl">
          <div className="p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              Ready to Transform Your <span className="bg-clip-text text-transparent bg-cyberpunk-gradient">Style Journey</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Try on outfits, experiment with new hairstyles, and visualize yourself in stunning fashion scenes - all with the power of AI.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="rounded-full bg-cyberpunk-gradient hover:opacity-90">
                <a href="https://chatgpt.com/g/g-68122f9753c48191a204f57f491ad2f3-virtual-stylist-gpt" target="_blank" rel="noopener noreferrer">
                  Try Virtual Stylist Now
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-white/20 hover:bg-white/10">
                <a href="https://aiwebtools.lovable.app/?via=aiwebtools" target="_blank" rel="noopener noreferrer">
                  Explore More AI Tools
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
