import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Sparkles, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      // Früher einsetzen des Navbar-Effekts für ein angenehmeres Erlebnis
      setIsScrolled(window.scrollY > 10);
      
      // Verbesserte Berechnung des aktiven Abschnitts
      const sections = ['hero', 'about', 'services', 'testimonials', 'cta', 'contact'];
      let currentSection = '';
      
      // Dynamischere Berechnung mit Vorrang für den Abschnitt näher an der Bildschirmmitte
      let closestSectionDistance = Infinity;
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const distanceToCenter = Math.abs(rect.top + rect.height/2 - window.innerHeight/2);
          
          // Wenn der Abschnitt im Viewport und näher an der Mitte als der vorherige
          if (
            rect.top < window.innerHeight &&
            rect.bottom > 0 &&
            distanceToCenter < closestSectionDistance
          ) {
            closestSectionDistance = distanceToCenter;
            currentSection = section;
          }
        }
      });
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    // Initial auslösen für korrekte Anzeige beim Laden
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300",
        isScrolled 
          ? "py-2 bg-white/90 backdrop-blur-md shadow-subtle" 
          : "py-4 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center">
          <a 
            href="#hero" 
            className="text-xl font-serif font-medium text-foreground relative group" 
            aria-label="ProzessExpress Home"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span className="text-turquoise-600 relative group-hover:text-turquoise-700 transition-colors duration-300">
              Prozess
              <span className="absolute -right-1 -top-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <Sparkles className="h-4 w-4 text-turquoise-400" />
              </span>
            </span>
            <span className="text-gray-800 group-hover:text-gray-900 transition-colors duration-300">Express</span>
          </a>
        </div>

        {/* Desktop Navigation - verbesserte Animationen und Interaktivität */}
        <div className="hidden md:flex items-center space-x-1">
          <NavLinks activeSection={activeSection} />
          
          {/* Call-to-Action-Button mit verbessertem Hover-Effekt */}
          <Button 
            variant="default" 
            size="sm" 
            className="ml-4 bg-turquoise-600 hover:bg-turquoise-700 text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span className="mr-1">Kontakt</span>
            <Sparkles className="h-3.5 w-3.5" />
          </Button>
        </div>

        {/* Mobile Menu Toggle - verbesserte Animationen */}
        <div className="md:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-turquoise-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-turquoise-500 transition-all duration-200"
            aria-expanded="false"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="sr-only">Menü öffnen</span>
            {isMobileMenuOpen ? (
              <X className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="block h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu - verbesserte Animationen und Übergänge */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 right-0 transition-all duration-300 ease-in-out bg-white/95 backdrop-blur-md shadow-lg",
          isMobileMenuOpen 
            ? "opacity-100 translate-y-0 pointer-events-auto" 
            : "opacity-0 -translate-y-4 pointer-events-none"
        )}
      >
        <div className="px-4 pt-4 pb-6 space-y-1">
          <NavLinks 
            mobile 
            setIsMobileMenuOpen={setIsMobileMenuOpen} 
            activeSection={activeSection} 
          />
          
          {/* Mobiler CTA-Button */}
          <Button 
            variant="default" 
            size="default" 
            className="w-full mt-4 bg-turquoise-600 hover:bg-turquoise-700 text-white"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              setIsMobileMenuOpen(false);
            }}
          >
            <span className="mr-1">Kontakt aufnehmen</span>
            <Sparkles className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

interface NavLinksProps {
  mobile?: boolean;
  setIsMobileMenuOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  activeSection: string;
}

const NavLinks = ({ mobile, setIsMobileMenuOpen, activeSection }: NavLinksProps) => {
  const links = [
    { href: '#about', label: 'Über uns', id: 'about' },
    { href: '#services', label: 'Leistungen', id: 'services' },
    { href: '#testimonials', label: 'Referenzen', id: 'testimonials' },
    { href: '#cta', label: 'Qualifikation', id: 'cta' },
  ];

  const handleClick = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      if (mobile && setIsMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    }
  };

  return (
    <>
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          onClick={handleClick(link.href)}
          className={cn(
            mobile 
              ? "block px-3 py-3 text-base font-medium border-b border-gray-100" 
              : "inline-flex items-center px-3 py-2 text-sm font-medium rounded-md",
            activeSection === link.id
              ? "text-turquoise-700 bg-turquoise-50/70"
              : "text-gray-600 hover:text-turquoise-600 hover:bg-gray-50/80",
            "transition-all duration-200 relative"
          )}
        >
          {link.label}
          {activeSection === link.id && (
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-turquoise-500 hidden md:block" />
          )}
        </a>
      ))}
    </>
  );
};

export default Navbar;
