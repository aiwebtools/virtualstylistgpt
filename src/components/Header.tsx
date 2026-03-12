
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Update header style on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Virtual Stylist GPT", href: "https://chatgpt.com/g/g-68122f9753c48191a204f57f491ad2f3-virtual-stylist-gpt" },
    { name: "FAQ", href: "#faq" },
    { name: "Disclaimer", href: "#disclaimer" },
    { name: "More AI Tools", href: "https://aiwebtools.lovable.app/?via=aiwebtools" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-2 neo-blur' : 'py-4 bg-transparent'
      }`}
    >
      <div className="container flex justify-between items-center">
        <a href="/" className="z-10">
          <Logo />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-300 hover:text-white hover:bg-white/10 px-3 py-2 rounded-md transition-all"
            >
              {item.name}
            </a>
          ))}
          <Button asChild className="bg-cyberpunk-gradient hover:opacity-90 rounded-full">
            <a href="https://chatgpt.com/g/g-68122f9753c48191a204f57f491ad2f3-virtual-stylist-gpt" target="_blank" rel="noopener noreferrer">
              Try Now
            </a>
          </Button>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden z-10 p-2 text-gray-300"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-black/95 backdrop-blur-lg flex flex-col items-center justify-center">
            <nav className="flex flex-col items-center space-y-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-xl text-gray-300 hover:text-white hover:bg-white/10 px-4 py-2 rounded-md transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button asChild className="bg-cyberpunk-gradient hover:opacity-90 rounded-full mt-4">
                <a href="https://chatgpt.com/g/g-68122f9753c48191a204f57f491ad2f3-virtual-stylist-gpt" target="_blank" rel="noopener noreferrer">
                  Try Now
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
