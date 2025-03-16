import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import TestimonialSection from '@/components/TestimonialSection';
import ServicesSection from '@/components/ServicesSection';
import { LogoCarouselDemo } from '@/components/ui/logo-carousel-demo';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import ContactSection from '@/components/ContactSection';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  useEffect(() => {
    // Animation beim Scrollen für Elemente mit der Klasse 'animate-on-scroll'
    const handleScroll = () => {
      const animatedElements = document.querySelectorAll('.animate-on-scroll');
      
      animatedElements.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;
        const elementHeight = el.getBoundingClientRect().height;
        const windowHeight = window.innerHeight;
        
        // Verbessertes Einblendeverhalten (früher starten, sanfter überblenden)
        if (elementTop < windowHeight - elementHeight * 0.2) {
          el.classList.add('animated');
        }
      });
    };

    // Parallax-Effekt für Hintergrundelemente
    const handleMouseMove = (e: MouseEvent) => {
      const moveX = (e.clientX - window.innerWidth / 2) * 0.015;
      const moveY = (e.clientY - window.innerHeight / 2) * 0.015;
      
      document.querySelectorAll('.parallax-bg').forEach((el) => {
        const htmlEl = el as HTMLElement;
        htmlEl.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };

    // Schwebende Partikel für den Hintergrund
    const createFloatingParticles = () => {
      const container = document.querySelector('.interactive-background');
      if (!container) return;
      
      // Mehr Partikel für eine dichtere Atmosphäre
      for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        // Unterschiedliche Größen für mehr Tiefenwirkung
        const size = Math.random() * 12 + 4;
        
        particle.className = `absolute rounded-full opacity-20 animate-float-particle`;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        // Mehr Farbvariationen
        particle.style.background = 
          i % 3 === 0 ? 'rgba(42, 215, 215, 0.35)' : 
          i % 3 === 1 ? 'rgba(239, 226, 202, 0.45)' : 
          'rgba(255, 255, 255, 0.3)';
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.top = `${Math.random() * 100}vh`;
        // Unterschiedliche Animationsgeschwindigkeiten
        particle.style.animationDuration = `${Math.random() * 25 + 15}s`;
        particle.style.animationDelay = `${Math.random() * 8}s`;
        
        container.appendChild(particle);
      }
    };
    
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    createFloatingParticles();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      
      const container = document.querySelector('.interactive-background');
      if (container) {
        const particles = container.querySelectorAll('.animate-float-particle');
        particles.forEach(particle => particle.remove());
      }
    };
  }, []);

  return (
    <div className="overflow-hidden relative">
      <Helmet>
        <title>ProzessExpress | Qualifizierte Bewerber mit Ergebnisgarantie</title>
        <meta name="description" content="Planbar mehr qualifizierte Bewerber – mit Ergebnisgarantie. Wir bringen die richtigen Mitarbeiter, senken Ihre Kosten und sorgen für langfristigen Erfolg." />
        <meta name="keywords" content="Bewerbermanagement, Digitale Präsenz, Technologischer Vorsprung, Intelligente Bewerberprozesse, Arbeitgebermarke, Recruiting" />
        <meta property="og:title" content="ProzessExpress | Qualifizierte Bewerber mit Ergebnisgarantie" />
        <meta property="og:description" content="Planbar mehr qualifizierte Bewerber – mit Ergebnisgarantie. Optimieren Sie Ihren Recruitingprozess." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://prozessexpress.de" />
        <meta property="og:image" content="/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ProzessExpress | Qualifizierte Bewerber mit Ergebnisgarantie" />
        <meta name="twitter:description" content="Planbar mehr qualifizierte Bewerber – mit Ergebnisgarantie. Optimieren Sie Ihren Recruitingprozess." />
        <meta name="twitter:image" content="/og-image.png" />
        <link rel="canonical" href="https://prozessexpress.de" />
      </Helmet>
      
      {/* Verbesserte Hintergrundanimation */}
      <div className="interactive-background fixed inset-0 -z-20 opacity-60">
        <div className="parallax-bg absolute top-0 left-0 w-full h-full">
          {/* Haupthintergrundfarben - größer und weicher */}
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-turquoise-200/25 filter blur-[120px] animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/3 w-[450px] h-[450px] rounded-full bg-beige-300/20 filter blur-[100px] animate-float-medium"></div>
          <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] rounded-full bg-turquoise-100/30 filter blur-[90px] animate-float-slow"></div>
          
          {/* Zusätzliche subtile Hintergrundverläufe */}
          <div className="absolute top-1/3 left-1/2 w-[350px] h-[350px] rounded-full bg-turquoise-300/15 filter blur-[80px] animate-pulse-medium"></div>
          <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-beige-200/20 filter blur-[90px] animate-float-fast"></div>
          
          {/* Wellenanimationen am unteren Rand */}
          <div className="absolute bottom-0 left-0 w-full h-60 opacity-8 wave-animation"></div>
          <div className="absolute bottom-0 left-0 w-full h-80 opacity-4 wave-animation-delayed"></div>
        </div>
      </div>
      
      {/* Abschnittsseparator: Feinkörniges Raster für zusätzliche visuelle Textur */}
      <div 
        className="fixed inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle at center, rgba(35, 35, 35, 0.8) 1px, transparent 1px)',
          backgroundSize: '22px 22px'
        }}
      />
      
      {/* Hauptinhalt mit optimiertem Fluss */}
      <div className="relative z-10">
        <Navbar />
        
        {/* Hero-Sektion ohne Marginabstand, um nahtlosen Übergang zu ermöglichen */}
        <main>
          <HeroSection />
          
          {/* Abschnittsseparator: Geschwungene Linie */}
          <div className="relative">
            <div className="absolute left-0 right-0 h-16 -mt-8 bg-gradient-to-b from-transparent to-white/50 z-10"></div>
          </div>
          
          <AboutSection />
          
          {/* Abschnittsseparator: Subtiler Schatten */}
          <div className="relative">
            <div className="absolute left-0 right-0 h-12 -mt-6 bg-gradient-to-b from-transparent to-gray-50/80 z-10"></div>
          </div>
          
          <ServicesSection />
          
          {/* Logo-Karussell mit verbessertem Abstand */}
          <div className="py-16 bg-gradient-to-b from-white to-gray-50">
            <LogoCarouselDemo />
          </div>
          
          <TestimonialSection />
          
          {/* Nahtloser Übergang zum CTA-Bereich */}
          <div className="relative">
            <div className="absolute left-0 right-0 h-24 -mt-12 bg-gradient-to-b from-transparent to-beige-50/50 z-10"></div>
          </div>
          
          <CTASection />
          
          {/* Kontaktbereich hinzufügen */}
          <ContactSection />
          
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default Index;
