import React from 'react';
import { cn } from "@/lib/utils";
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-b from-beige-50 to-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-400/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-beige-100/10 rounded-full blur-[120px]" />
      </div>

      <div 
        className="absolute inset-0 opacity-3"
        style={{
          backgroundImage: 'radial-gradient(circle at center, rgba(45,212,191,0.08) 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }} 
      />

      <div className="max-w-screen-xl mx-auto px-8 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-4">
            <a href="#" className="text-2xl font-serif font-medium text-foreground inline-block mb-6 relative group">
              <span className="text-teal-600">Social</span>Partner
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 group-hover:w-full transition-all duration-300"></span>
            </a>
            <p className="text-gray-600 mb-8 max-w-sm leading-relaxed">
              Wir transformieren berufliche Perspektiven durch strategisches Personal Branding und exklusive Rekrutierungsmöglichkeiten.
            </p>
            <div className="flex space-x-5">
              {['linkedin', 'instagram', 'twitter', 'facebook'].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className={cn(
                    "w-11 h-11 rounded-full flex items-center justify-center",
                    "bg-white border border-beige-100 shadow-lg transition-all duration-300",
                    "hover:bg-teal-500 hover:text-white hover:border-transparent hover:shadow-teal-200/40"
                  )}
                  aria-label={`Besuchen Sie unsere ${social} Seite`}
                >
                  <SocialIcon name={social} />
                </a>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <h3 className="font-bold text-black mb-6 text-lg">Services</h3>
            <ul className="space-y-4">
              {['Personal Branding', 'Karriere-Coaching', 'Recruiting', 'Content Strategie', 'Netzwerk-Aufbau'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-gray-600 hover:text-teal-700 transition-colors duration-300 inline-flex items-center group"
                  >
                    <span>{item}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 ml-1 opacity-0 -translate-y-1 translate-x-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:translate-y-0 transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="lg:col-span-2">
            <h3 className="font-bold text-black mb-6 text-lg">Ressourcen</h3>
            <ul className="space-y-4">
              {['Blog', 'Karriere-Guide', 'Fallstudien', 'Referenzen', 'FAQ'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-gray-600 hover:text-teal-700 transition-colors duration-300 inline-flex items-center group"
                  >
                    <span>{item}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 ml-1 opacity-0 -translate-y-1 translate-x-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:translate-y-0 transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="lg:col-span-4">
            <h3 className="font-bold text-black mb-6 text-lg">Kontakt</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4 group">
                <div className="mt-1 w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center border border-teal-100 group-hover:bg-teal-500 group-hover:text-white transition-colors duration-300">
                  <MapPin className="w-5 h-5 text-teal-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <span className="text-gray-600 leading-relaxed">
                    Branding Straße 123<br />10115 Berlin, Deutschland
                  </span>
                </div>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center border border-teal-100 group-hover:bg-teal-500 group-hover:text-white transition-colors duration-300">
                  <Phone className="w-5 h-5 text-teal-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="text-gray-600">(030) 123-4567</span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-teal-50 flex items-center justify-center border border-teal-100 group-hover:bg-teal-500 group-hover:text-white transition-colors duration-300">
                  <Mail className="w-5 h-5 text-teal-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="text-gray-600">contact@socialpartner.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="h-px bg-gradient-to-r from-transparent via-beige-200 to-transparent mb-10"></div>
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-6 md:mb-0">
            © {currentYear} <span className="font-medium">SocialPartner</span>. Alle Rechte vorbehalten.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {['Datenschutz', 'AGB', 'Cookie-Richtlinie', 'Impressum'].map((item) => (
              <a 
                key={item}
                href="#" 
                className="text-sm text-gray-500 hover:text-teal-700 transition-colors duration-300 border-b border-transparent hover:border-teal-700"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ name }: { name: string }) => {
  switch (name) {
    case 'twitter':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      );
    case 'instagram':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      );
    case 'facebook':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      );
    default:
      return null;
  }
};

export default Footer;
