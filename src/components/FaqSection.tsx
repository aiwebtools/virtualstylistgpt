
import { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection = () => {
  const faqs = [
    {
      question: "How does Virtual Stylist GPT work?",
      answer: "Virtual Stylist GPT uses advanced AI technology to generate realistic visualizations of you wearing different outfits or hairstyles. You simply upload a clear photo of yourself, then either upload an outfit image or describe what you'd like to try on. Our AI then creates a realistic image of you wearing that outfit in your chosen setting."
    },
    {
      question: "Is my personal data and photos secure?",
      answer: "Yes, we take your privacy seriously. All uploads are processed according to OpenAI's privacy policy and data handling practices. Your photos are not stored longer than necessary for providing the service, and they are not used to train our AI models without explicit consent."
    },
    {
      question: "Can I try any clothing style or just specific ones?",
      answer: "Virtual Stylist GPT supports a wide range of clothing styles from streetwear to formal attire, vintage looks to avant-garde designs. You can either upload specific outfit images or describe your desired style in detail."
    },
    {
      question: "How realistic are the virtual try-on results?",
      answer: "Our AI creates highly realistic visualizations that account for body shape, pose, lighting, and clothing physics. While not perfect, most users find the results remarkably accurate for visualizing how outfits will look on them."
    },
    {
      question: "Can I try different hairstyles as well?",
      answer: "Yes! Virtual Stylist GPT can visualize different hairstyles, cuts, and colors on your uploaded photo. This is perfect for experimenting with new looks before committing to a real change."
    },
    {
      question: "Is there a limit to how many outfits I can try on?",
      answer: "The number of try-ons may be limited by OpenAI's usage policies. Virtual Stylist GPT will guide you through one outfit at a time and let you know if you reach any usage limits."
    }
  ];

  return (
    <section id="faq" className="py-16 relative">
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-cyberpunk-dark to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Frequently Asked <span className="bg-clip-text text-transparent bg-cyberpunk-gradient">Questions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Everything you need to know about using Virtual Stylist GPT
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="glass-card border-0">
                <AccordionTrigger className="px-6 py-4 text-left font-heading font-medium hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
