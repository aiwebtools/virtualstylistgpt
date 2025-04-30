
import { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { cn } from '@/lib/utils';

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  avatarUrl: string;
  delay?: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, name, title, avatarUrl, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100 + delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <Card 
      className={cn(
        "glass-card border-0 transition-all duration-700 transform",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
    >
      <CardContent className="p-6">
        <div className="mb-4">
          <svg width="45" height="36" className="text-cyberpunk-purple opacity-40" viewBox="0 0 45 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.4 36C9.6 36 6.4 34.6 3.8 31.8C1.2 28.8 0 24.8 0 19.8C0 14.2 1.2 9.4 3.6 5.4C6.2 1.4 9.8 0 15.4 0L18.2 6.6C15.4 7 13.2 8 11.6 9.6C10 11.2 9 13.2 8.6 15.6C9 15.4 9.8 15.2 11 15.2C12.6 15.2 14 15.8 15.2 17C16.4 18 17 19.6 17 21.8C17 24.2 16.2 26.2 14.6 27.8C13 29.4 11.4 30.2 9 30.2C8.2 30.2 7.6 30.2 7 30L7.6 34.8L13.4 36ZM37.8 36C34 36 30.8 34.6 28.2 31.8C25.6 28.8 24.4 24.8 24.4 19.8C24.4 14.2 25.6 9.4 28 5.4C30.6 1.4 34.2 0 39.8 0L42.6 6.6C39.8 7 37.6 8 36 9.6C34.4 11.2 33.4 13.2 33 15.6C33.4 15.4 34.2 15.2 35.4 15.2C37 15.2 38.4 15.8 39.6 17C40.8 18 41.4 19.6 41.4 21.8C41.4 24.2 40.6 26.2 39 27.8C37.4 29.4 35.8 30.2 33.4 30.2C32.6 30.2 32 30.2 31.4 30L32 34.8L37.8 36Z" fill="currentColor" />
          </svg>
        </div>
        <p className="text-gray-300 mb-6">{quote}</p>
        <div className="flex items-center">
          <img src={avatarUrl} alt={name} className="h-12 w-12 rounded-full object-cover mr-4" />
          <div>
            <h4 className="font-bold">{name}</h4>
            <p className="text-gray-400 text-sm">{title}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Virtual Stylist GPT completely changed how I shop online. I can see exactly how clothes will look on me before buying. It's saved me from so many regrettable purchases!",
      name: "Alexandra Chen",
      title: "Fashion Blogger",
      avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      quote: "As a stylist, I use this tool to help clients visualize my recommendations. The realistic rendering and variety of styles has made my consulting business so much more effective.",
      name: "Marcus Johnson",
      title: "Personal Stylist",
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      quote: "I was nervous about cutting my hair short, but Virtual Stylist showed me exactly how it would look. It gave me the confidence to make the change, and I love my new style!",
      name: "Priya Patel",
      title: "Marketing Executive",
      avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80"
    }
  ];

  return (
    <section id="testimonials" className="py-16 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            What Our Users <span className="bg-clip-text text-transparent bg-cyberpunk-gradient">Are Saying</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover how Virtual Stylist GPT is transforming fashion experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              title={testimonial.title}
              avatarUrl={testimonial.avatarUrl}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
