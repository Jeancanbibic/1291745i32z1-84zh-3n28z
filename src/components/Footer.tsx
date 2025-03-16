import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Logo } from '@/components/Logo';
import { 
  Instagram, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUp, 
  ArrowRight,
  Send,
  CheckCircle
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [emailValue, setEmailValue] = React.useState('');
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(e.target.value);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailValue) {
      // Hier würde die tatsächliche Newsletter-Anmeldung stattfinden
      setTimeout(() => {
        setIsSubmitted(true);
        setEmailValue('');
      }, 500);
    }
  };

  const footerLinks = [
    {
      title: 'Unternehmen',
      links: [
        { name: 'Über uns', href: '#about' },
        { name: 'Karriere', href: '#' },
        { name: 'Neuigkeiten', href: '#' },
        { name: 'Partner werden', href: '#' }
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'Personalvermittlung', href: '#services' },
        { name: 'Direktvermittlung', href: '#services' },
        { name: 'Zeitarbeit', href: '#services' },
        { name: 'On-Site Management', href: '#services' }
      ]
    },
    {
      title: 'Ressourcen',
      links: [
        { name: 'Blog', href: '#' },
        { name: 'Fallstudien', href: '#' },
        { name: 'FAQ', href: '#' },
        { name: 'Hilfe & Support', href: '#' }
      ]
    },
    {
      title: 'Rechtliches',
      links: [
        { name: 'Datenschutz', href: '#' },
        { name: 'AGB', href: '#' },
        { name: 'Impressum', href: '#' },
        { name: 'Cookie-Einstellungen', href: '#' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' }
  ];

  const contactInfo = [
    { icon: Phone, label: '+49 123 456 789', href: 'tel:+49123456789' },
    { icon: Mail, label: 'info@prozessexpress.de', href: 'mailto:info@prozessexpress.de' },
    { icon: MapPin, label: 'Musterstraße 123, Berlin', href: 'https://maps.google.com' }
  ];

  return (
    <footer className="bg-gray-900 text-white pt-20 pb-8 relative overflow-hidden">
      {/* Hintergrundeffekte */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -left-64 -top-64 w-[500px] h-[500px] rounded-full bg-turquoise-600/5 blur-[100px] opacity-30" />
        <div className="absolute -right-64 bottom-0 w-[600px] h-[600px] rounded-full bg-beige-400/5 blur-[80px] opacity-20" />
        
        {/* Subtiles Muster */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(rgba(255,255,255,0.25)_1px,transparent_1px)] [background-size:24px_24px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-gray-800">
          {/* Logo und Unternehmensbeschreibung */}
          <div className="lg:col-span-4">
            <Logo variant="light" className="h-10 mb-6" />
            <p className="text-gray-400 mb-8 max-w-md">
              ProzessExpress ist Ihr zuverlässiger Partner für Personalvermittlung und Recruiting-Lösungen. Wir verbinden Top-Talente mit führenden Unternehmen.
            </p>
            
            {/* Kontaktinfos */}
            <div className="space-y-4">
              {contactInfo.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target={item.icon === MapPin ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-turquoise-400 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0 group-hover:bg-turquoise-900/30">
                    <item.icon size={14} className="group-hover:text-turquoise-400" />
                  </div>
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </div>
          
          {/* Footer Links */}
          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {footerLinks.map((category, idx) => (
              <div key={idx}>
                <h3 className="font-semibold text-white mb-6">{category.title}</h3>
                <ul className="space-y-4">
                  {category.links.map((link, index) => (
                    <li key={index}>
                      <a href={link.href} className="text-gray-400 hover:text-turquoise-400 transition-colors">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          {/* Newsletter */}
          <div className="lg:col-span-3">
            <h3 className="font-semibold text-white mb-6">Newsletter abonnieren</h3>
            
            {isSubmitted ? (
              <div className="p-4 bg-gray-800 rounded-xl border border-gray-700">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-turquoise-900/50 flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={16} className="text-turquoise-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Erfolgreich angemeldet!</p>
                    <p className="text-gray-400 text-sm">Vielen Dank für Ihr Interesse.</p>
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit}>
                <p className="text-gray-400 mb-4">
                  Erhalten Sie regelmäßig Updates zu Trends im Recruiting und Personalwesen.
                </p>
                <div className="relative">
                  <Input
                    type="email"
                    placeholder="Ihre E-Mail-Adresse"
                    value={emailValue}
                    onChange={handleEmailChange}
                    required
                    className="bg-gray-800 border-gray-700 rounded-lg text-white pl-4 pr-12 h-12 w-full focus:ring-1 focus:ring-turquoise-500 focus:border-turquoise-500"
                  />
                  <Button 
                    type="submit" 
                    className="absolute right-1 top-1 bg-turquoise-600 hover:bg-turquoise-700 rounded-md h-10 px-3"
                  >
                    <Send size={16} />
                  </Button>
                </div>
              </form>
            )}
            
            {/* Social Media Links */}
            <div className="mt-8">
              <h3 className="font-semibold text-white mb-4">Folgen Sie uns</h3>
              <div className="flex gap-3">
                {socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-turquoise-900/40 hover:text-turquoise-400 text-gray-400 transition-all hover:-translate-y-1"
                    aria-label={social.name}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Unterer Bereich - Copyright und Links */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 mb-4 md:mb-0">
            © {currentYear} ProzessExpress. Alle Rechte vorbehalten.
          </p>
          
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 py-2 px-4 bg-gray-800 hover:bg-gray-700 rounded-full text-gray-400 hover:text-white transition-all hover:-translate-y-1"
          >
            <span>Nach oben</span>
            <ArrowUp size={16} className="group-hover:animate-bounce" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
