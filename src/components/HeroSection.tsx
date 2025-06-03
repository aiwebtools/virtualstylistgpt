
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center relative pt-20 pb-16">
      {/* Enhanced Schema.org structured data for better SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "Virtual Stylist GPT",
          "description": "AI-powered fashion and hair visualization tool for virtual outfit try-ons and hairstyle experiments",
          "url": "https://aiwebtools.lovable.app/",
          "category": "AI Tools, Fashion Technology, Virtual Try-On",
          "operatingSystem": "Web Browser",
          "applicationCategory": "DesignApplication",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          }
        })
      }} />

      {/* Background animated circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-cyberpunk-purple/20 filter blur-3xl"></div>
        <div className="absolute top-1/3 -right-20 w-80 h-80 rounded-full bg-cyberpunk-blue/20 filter blur-3xl"></div>
        <div className="absolute -bottom-40 left-1/4 w-80 h-80 rounded-full bg-cyberpunk-pink/20 filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <div className={`w-full lg:w-1/2 text-center lg:text-left transition-all duration-1000 ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading">
              <span className="bg-clip-text text-transparent bg-cyberpunk-gradient">
                Experience Yourself
              </span>
              <br />
              in the Future of Fashion
            </h1>
            <h2 className="text-xl text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0 font-medium">
              Try on outfits, visualize new hairstyles, and transform your look virtually with our advanced AI stylist before making any real changes.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="rounded-full bg-cyberpunk-gradient hover:opacity-90">
                <a href="https://chatgpt.com/g/g-68122f9753c48191a204f57f491ad2f3-virtual-stylist-gpt" target="_blank" rel="noopener noreferrer" aria-label="Try Virtual Stylist GPT - AI Fashion Tool">
                  Try Virtual Stylist Now
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-white/20 hover:bg-white/10">
                <a href="#how-it-works" aria-label="Learn more about AI fashion tools">
                  Learn More
                </a>
              </Button>
            </div>
          </div>

          <div className={`w-full lg:w-1/2 transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative">
              <div className="aspect-square max-w-[500px] mx-auto">
                {/* 3D Model Placeholder */}
                <div className="absolute inset-0 rounded-full animate-rotate-slow opacity-30 bg-cyberpunk-gradient blur-md"></div>
                <div className="absolute inset-2 rounded-full bg-cyberpunk-dark"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[80%] h-[80%] relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img 
                        src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=500&q=80" 
                        alt="AI Fashion Model - Virtual Stylist GPT demonstration showing fashion visualization technology" 
                        className="rounded-lg object-cover object-center animate-float shadow-lg shadow-cyberpunk-purple/20"
                        loading="eager"
                        width="500"
                        height="500"
                      />
                    </div>
                    <div className="absolute -bottom-4 -right-4">
                      <img 
                        src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80" 
                        alt="AI styling for men - Virtual outfit try-on demonstration" 
                        className="rounded-lg w-32 h-32 object-cover object-center animate-float shadow-lg shadow-cyberpunk-blue/20"
                        style={{animationDelay: "0.5s"}}
                        loading="lazy"
                        width="200"
                        height="200"
                      />
                    </div>
                    <div className="absolute -top-4 -left-4">
                      <img 
                        src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80" 
                        alt="AI hairstyle visualization - Virtual hair styling demonstration" 
                        className="rounded-lg w-24 h-24 object-cover object-center animate-float shadow-lg shadow-cyberpunk-pink/20"
                        style={{animationDelay: "1s"}}
                        loading="lazy"
                        width="200"
                        height="200"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
