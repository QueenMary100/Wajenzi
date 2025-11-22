import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="text-xl sm:text-2xl font-bold text-foreground hover:text-accent transition-colors"
          >
            Salamander<span className="text-accent">.</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              Projects
            </button>
            <a
              href="/events"
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              Events
            </a>
            <button
              onClick={() => scrollToSection('blog')}
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              Blog
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-accent transition-colors font-medium"
            >
              Contact
            </button>
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection('about')}
                className="text-left px-4 py-2 text-foreground hover:text-accent hover:bg-secondary/50 rounded-lg transition-colors font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-left px-4 py-2 text-foreground hover:text-accent hover:bg-secondary/50 rounded-lg transition-colors font-medium"
              >
                Projects
              </button>
              <a
                href="/events"
                className="text-left px-4 py-2 text-foreground hover:text-accent hover:bg-secondary/50 rounded-lg transition-colors font-medium"
              >
                Events
              </a>
              <button
                onClick={() => scrollToSection('blog')}
                className="text-left px-4 py-2 text-foreground hover:text-accent hover:bg-secondary/50 rounded-lg transition-colors font-medium"
              >
                Blog
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left px-4 py-2 text-foreground hover:text-accent hover:bg-secondary/50 rounded-lg transition-colors font-medium"
              >
                Contact
              </button>
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-accent text-accent-foreground hover:bg-accent/90 mx-4"
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
