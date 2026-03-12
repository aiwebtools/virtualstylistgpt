
import { Button } from '@/components/ui/button';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-gray-800 relative overflow-hidden">
      {/* Enhanced animated background effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-cyberpunk-purple via-cyberpunk-blue to-cyberpunk-pink filter blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-0 right-1/3 w-80 h-80 rounded-full bg-gradient-to-l from-cyberpunk-blue via-cyberpunk-teal to-cyberpunk-purple filter blur-2xl animate-float"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 rounded-full bg-gradient-to-r from-cyberpunk-pink via-cyberpunk-yellow to-cyberpunk-blue filter blur-3xl animate-rotate-slow opacity-40"></div>
      </div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-ping opacity-60"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-cyberpunk-blue rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-cyberpunk-pink rounded-full animate-bounce"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Logo and info */}
          <div className="col-span-1 lg:col-span-2">
            <Logo className="mb-4 mx-auto lg:mx-0" />
            <p className="text-gray-400 mt-4 max-w-md mx-auto lg:mx-0 text-center lg:text-left">
              Transform your style with our AI-powered fashion and hairstyle assistant. 
              Try on outfits and hairstyles virtually before making any real changes.
            </p>
            {/* New disclaimer */}
            <p className="text-xs text-gray-500 mt-3 max-w-md mx-auto lg:mx-0 text-center lg:text-left border-l-2 border-cyberpunk-purple/30 pl-3">
              For informational, educational, and research purposes only.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-4 text-center lg:text-left bg-clip-text text-transparent bg-cyberpunk-gradient">Quick Links</h3>
            <ul className="space-y-2 text-center lg:text-left">
              <li>
                <a href="https://chatgpt.com/g/g-68122f9753c48191a204f57f491ad2f3-virtual-stylist-gpt" 
                  className="text-gray-400 hover:text-white hover:bg-white/5 px-2 py-1 rounded transition-all duration-300">
                  Virtual Stylist GPT
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-white hover:bg-white/5 px-2 py-1 rounded transition-all duration-300">FAQ</a>
              </li>
              <li>
                <a href="#disclaimer" className="text-gray-400 hover:text-white hover:bg-white/5 px-2 py-1 rounded transition-all duration-300">Disclaimer</a>
              </li>
              <li>
                <a href="https://aiwebtools.lovable.app/?via=aiwebtools" className="text-gray-400 hover:text-white hover:bg-white/5 px-2 py-1 rounded transition-all duration-300">
                  More AI Tools
                </a>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-4 text-center lg:text-left bg-clip-text text-transparent bg-cyberpunk-gradient">Contact</h3>
            <ul className="space-y-2 text-center lg:text-left">
              <li>
                <a href="tel:+14758008096" className="text-gray-400 hover:text-white hover:bg-white/5 px-2 py-1 rounded transition-all duration-300">
                  Phone: (475) 800-8096
                </a>
              </li>
              <li>
                <a href="mailto:Contact@ai-webtools.com" className="text-gray-400 hover:text-white hover:bg-white/5 px-2 py-1 rounded transition-all duration-300">
                  Email: Contact@ai-webtools.com
                </a>
              </li>
            </ul>
            <div className="mt-4 text-center lg:text-left">
              <a href="https://openai.com/policies/privacy-policy/" className="text-gray-400 hover:text-white hover:bg-white/5 px-2 py-1 rounded transition-all duration-300 mr-4">
                Privacy Policy
              </a>
              <a href="https://aiwebtools.lovable.app/disclaimers" className="text-gray-400 hover:text-white hover:bg-white/5 px-2 py-1 rounded transition-all duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center relative">
          {/* Subtle glow effect behind the bottom section */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyberpunk-purple/5 via-cyberpunk-blue/5 to-cyberpunk-pink/5 rounded-lg"></div>
          
          <p className="text-sm text-gray-500 mb-4 md:mb-0 relative z-10">
            <a href="https://aiwebtools.lovable.app/?via=aiwebtools" className="hover:text-white transition-colors">
              © {currentYear} AI WEB TOOLS LLC. All rights reserved.
            </a>
          </p>
          
          <Button asChild variant="outline" className="rounded-full border-cyberpunk-purple bg-transparent hover:bg-cyberpunk-purple/20 hover:shadow-lg hover:shadow-cyberpunk-purple/25 transition-all duration-300 relative z-10">
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
