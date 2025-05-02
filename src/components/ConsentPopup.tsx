
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const ConsentPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has already agreed
    const hasAgreed = localStorage.getItem('consentAgreed');
    
    // Only show popup if user hasn't agreed yet
    if (!hasAgreed) {
      // Show popup after a short delay (only once)
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []); // Empty dependency array ensures this only runs once on mount

  const handleAgree = () => {
    localStorage.setItem('consentAgreed', 'true');
    setIsOpen(false);
  };

  // Don't render anything if popup shouldn't be shown
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/70 backdrop-blur-sm">
      <div className="w-full max-w-md glass-card p-6 rounded-lg shadow-lg animate-scale-in">
        <h3 className="text-xl font-heading font-bold mb-4">Important Notice</h3>
        <p className="text-gray-300 mb-6">
          By using Virtual Stylist GPT, you agree to our Terms of Service, Privacy Policy, and the processing of your images for the purpose of virtual try-on. Your data will be handled according to OpenAI's privacy standards.
        </p>
        <div className="flex justify-end">
          <Button onClick={handleAgree} className="bg-cyberpunk-gradient hover:opacity-90">
            I Agree
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConsentPopup;
