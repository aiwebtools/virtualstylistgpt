
import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { cn } from '@/lib/utils';

interface StepCardProps {
  number: number;
  title: string;
  description: string;
  delay?: number;
}

const StepCard: React.FC<StepCardProps> = ({ number, title, description, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100 + delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className={cn(
        "relative transition-all duration-700 transform",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
    >
      <Card className="glass-card border-0 overflow-hidden">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <div className="h-10 w-10 rounded-full bg-cyberpunk-gradient flex items-center justify-center flex-shrink-0">
              <span className="font-bold text-white">{number}</span>
            </div>
            <div>
              <h3 className="text-xl font-heading font-bold mb-2">{title}</h3>
              <p className="text-gray-300">{description}</p>
            </div>
          </div>
        </CardContent>
      </Card>
      {number < 6 && (
        <div className="hidden md:block absolute h-12 w-1 bg-gradient-to-b from-cyberpunk-gradient to-transparent left-5 top-full"></div>
      )}
    </div>
  );
};

const HowItWorksSection = () => {
  const steps = [
    {
      title: "Upload Your Photo",
      description: "Start by uploading a clear photo of yourself that will be used for virtual try-ons."
    },
    {
      title: "Choose Your Style",
      description: "Select an outfit to try on or describe the fashion style you'd like to visualize."
    },
    {
      title: "Customize the Scene",
      description: "Pick the setting, pose, and overall style for your virtual fashion experience."
    },
    {
      title: "Generate Your Look",
      description: "Our AI creates a realistic visualization of you in your selected outfit and scene."
    },
    {
      title: "Refine & Experiment",
      description: "Try different styles, scenes, or poses until you find your perfect look."
    },
    {
      title: "Create Your Lookbook",
      description: "Save your favorite styles and compile them into a personal digital lookbook."
    }
  ];

  return (
    <section id="how-it-works" className="py-16 relative">
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-cyberpunk-dark to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-cyberpunk-dark to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            How <span className="bg-clip-text text-transparent bg-cyberpunk-gradient">Virtual Stylist</span> Works
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Transform your style in just six simple steps
          </p>
        </div>

        <div className="space-y-8 md:space-y-6 max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              number={index + 1}
              title={step.title}
              description={step.description}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
