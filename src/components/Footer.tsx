
import { Button } from '@/components/ui/button';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-gray-800 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Logo and info */}
          <div className="col-span-1 lg:col-span-2">
            <Logo className="mb-4 mx-auto lg:mx-0" />
            <p className="text-gray-400 mt-4 max-w-md mx-auto lg:mx-0 text-center lg:text-left">
              Transform your style with our AI-powered fashion and hairstyle assistant. 
              Try on outfits and hairstyles virtually before making any real changes.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-4 text-center lg:text-left">Quick Links</h3>
            <ul className="space-y-2 text-center lg:text-left">
              <li>
                <a href="https://chatgpt.com/g/g-68122f9753c48191a204f57f491ad2f3-virtual-stylist-gpt" 
                  className="text-gray-400 hover:text-white transition-colors">
                  Virtual Stylist GPT
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#disclaimer" className="text-gray-400 hover:text-white transition-colors">Disclaimer</a>
              </li>
              <li>
                <a href="https://www.aiwebtools.ai" className="text-gray-400 hover:text-white transition-colors">
                  More AI Tools
                </a>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-4 text-center lg:text-left">Contact</h3>
            <ul className="space-y-2 text-center lg:text-left">
              <li>
                <a href="tel:+14758008096" className="text-gray-400 hover:text-white transition-colors">
                  Phone: (475) 800-8096
                </a>
              </li>
              <li>
                <a href="mailto:Contact@ai-webtools.com" className="text-gray-400 hover:text-white transition-colors">
                  Email: Contact@ai-webtools.com
                </a>
              </li>
            </ul>
            <div className="mt-4 text-center lg:text-left">
              <a href="https://openai.com/policies/privacy-policy/" className="text-gray-400 hover:text-white mr-4">
                Privacy Policy
              </a>
              <a href="https://aiwebtools.ai/terms-of-services" className="text-gray-400 hover:text-white">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            <a href="https://www.aiwebtools.ai" className="hover:text-white transition-colors">
              © {currentYear} AI WEB TOOLS LLC. All rights reserved.
            </a>
          </p>
          
          <Button asChild variant="outline" className="rounded-full border-cyberpunk-purple bg-transparent hover:bg-cyberpunk-purple/20">
            <a href="https://www.aiwebtools.ai">
              More AI Tools
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
