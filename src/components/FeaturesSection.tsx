
import { useState, useEffect } from 'react';
import { 
  Shirt, 
  Scissors, 
  Camera, 
  Palette, 
  FileImage, 
  Users 
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100 + delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={cn(
        "glass-card p-6 rounded-lg transition-all duration-700 transform",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
    >
      <div className="h-12 w-12 flex items-center justify-center rounded-full bg-cyberpunk-gradient mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-heading font-bold mb-3">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: <Shirt className="text-white" />,
      title: "Virtual Outfit Try-On",
      description: "Upload your photo and try on any outfit virtually before making purchase decisions."
    },
    {
      icon: <Scissors className="text-white" />,
      title: "Hair Style Visualization",
      description: "Experiment with various haircuts and styles on your photo to find your perfect look."
    },
    {
      icon: <Camera className="text-white" />,
      title: "Fashion Scenes",
      description: "Visualize yourself in different settings - from runways to editorial photoshoots."
    },
    {
      icon: <Palette className="text-white" />,
      title: "Custom Style Design",
      description: "Get outfits designed from scratch based on your preferences and body type."
    },
    {
      icon: <FileImage className="text-white" />,
      title: "Lookbook Creation",
      description: "Compile your favorite virtual try-ons into a professional digital lookbook."
    },
    {
      icon: <Users className="text-white" />,
      title: "Personalized Recommendations",
      description: "Receive style suggestions tailored specifically to your body shape and preferences."
    }
  ];

  return (
    <section id="features" className="py-16 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Transform Your Style <span className="bg-clip-text text-transparent bg-cyberpunk-gradient">Virtually</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Experience the future of fashion with our cutting-edge AI-powered tools
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
