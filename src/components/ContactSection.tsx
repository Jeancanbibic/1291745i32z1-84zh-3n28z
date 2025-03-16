import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from '@/hooks/use-toast';
import { ArrowRightIcon, PhoneIcon, MailIcon, MapPinIcon, LinkedinIcon, CalendarIcon, CheckCircleIcon } from 'lucide-react';

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulation einer Formularübermittlung
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Nachricht gesendet!",
        description: "Wir werden uns schnellstmöglich bei Ihnen melden.",
      });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: PhoneIcon,
      title: "Rufen Sie uns an",
      value: "+49 123 456 789",
      link: "tel:+49123456789"
    },
    {
      icon: MailIcon,
      title: "Schreiben Sie uns",
      value: "info@prozessexpress.de",
      link: "mailto:info@prozessexpress.de"
    },
    {
      icon: MapPinIcon,
      title: "Besuchen Sie uns",
      value: "Musterstraße 123, 10115 Berlin",
      link: "https://maps.google.com"
    },
    {
      icon: LinkedinIcon,
      title: "LinkedIn",
      value: "prozessexpress",
      link: "https://linkedin.com/company/prozessexpress"
    }
  ];

  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Hintergrundeffekte */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -right-64 -top-64 w-[600px] h-[600px] rounded-full bg-turquoise-200/10 blur-[100px] opacity-30" />
        <div className="absolute -left-64 -bottom-64 w-[500px] h-[500px] rounded-full bg-beige-300/10 blur-[80px] opacity-20" />
        
        {/* Subtiles Muster */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#00CC99_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Überschrift */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-turquoise-100 text-turquoise-800 text-sm font-medium border border-turquoise-200/40">
            KONTAKTIEREN SIE UNS
          </span>
          
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-gray-900">
            Lassen Sie uns ins <span className="text-turquoise-600">Gespräch</span> kommen
          </h2>
          
          <p className="text-xl text-gray-600">
            Wir freuen uns darauf, mehr über Ihre Anforderungen zu erfahren und Ihnen bei der Suche nach qualifizierten Mitarbeitern zu helfen.
          </p>
        </div>
        
        {/* Kontaktbereich */}
        <div className="grid md:grid-cols-12 gap-10">
          {/* Linke Spalte - Kontaktformular */}
          <div className="md:col-span-7 bg-white rounded-2xl shadow-lg p-8 border border-gray-100 relative overflow-hidden">
            {/* Formularüberschrift */}
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">
              Schreiben Sie uns eine Nachricht
            </h3>
            
            {isSubmitted ? (
              <div className="py-12 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-turquoise-100 flex items-center justify-center mb-6">
                  <CheckCircleIcon size={32} className="text-turquoise-600" />
                </div>
                <h4 className="text-2xl font-semibold mb-3 text-gray-800">Vielen Dank für Ihre Nachricht!</h4>
                <p className="text-gray-600 mb-8 max-w-md">
                  Wir haben Ihre Anfrage erhalten und werden uns innerhalb von 24 Stunden bei Ihnen melden.
                </p>
                <Button 
                  onClick={() => setIsSubmitted(false)}
                  variant="outline"
                  className="px-6"
                >
                  Neues Formular
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-700">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Ihr vollständiger Name"
                      value={formState.name}
                      onChange={handleChange}
                      className="rounded-lg border-gray-300 focus:border-turquoise-500 focus:ring focus:ring-turquoise-500/20"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700">E-Mail</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Ihre E-Mail-Adresse"
                      value={formState.email}
                      onChange={handleChange}
                      className="rounded-lg border-gray-300 focus:border-turquoise-500 focus:ring focus:ring-turquoise-500/20"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-gray-700">Telefon (optional)</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Ihre Telefonnummer"
                      value={formState.phone}
                      onChange={handleChange}
                      className="rounded-lg border-gray-300 focus:border-turquoise-500 focus:ring focus:ring-turquoise-500/20"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-gray-700">Unternehmen (optional)</Label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Name Ihres Unternehmens"
                      value={formState.company}
                      onChange={handleChange}
                      className="rounded-lg border-gray-300 focus:border-turquoise-500 focus:ring focus:ring-turquoise-500/20"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-700">Nachricht</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Wie können wir Ihnen helfen?"
                    value={formState.message}
                    onChange={handleChange}
                    className="min-h-[120px] rounded-lg border-gray-300 focus:border-turquoise-500 focus:ring focus:ring-turquoise-500/20"
                    required
                  />
                </div>
                
                <div className="pt-2">
                  <Button 
                    type="submit" 
                    className="w-full py-6 bg-turquoise-600 hover:bg-turquoise-700 rounded-lg"
                    disabled={isSubmitting}
                  >
                    <span className="mr-2">
                      {isSubmitting ? "Wird gesendet..." : "Nachricht senden"}
                    </span>
                    <ArrowRightIcon className="w-5 h-5" />
                  </Button>
                </div>
              </form>
            )}
          </div>

          {/* Rechte Spalte - Kontaktinformationen und Karte */}
          <div className="md:col-span-5 space-y-8">
            {/* Kontaktinformationen */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">
                Kontaktinformationen
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target={info.icon === MapPinIcon ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 text-gray-600 hover:text-turquoise-600"
                  >
                    <div className="w-12 h-12 rounded-full bg-turquoise-50 flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-turquoise-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">{info.title}</h4>
                      <p>{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Terminvereinbarung */}
            <div className="bg-turquoise-600 rounded-2xl shadow-lg p-8 text-white">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <CalendarIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Terminvereinbarung</h3>
                  <p className="text-turquoise-100">Buchen Sie ein persönliches Gespräch</p>
                </div>
              </div>
              
              <p className="mb-6 text-turquoise-50">
                Vereinbaren Sie einen Termin für ein persönliches Beratungsgespräch. Wir nehmen uns Zeit für Ihre Anliegen.
              </p>
              
              <Button 
                className="w-full bg-white text-turquoise-600 hover:bg-turquoise-50"
                onClick={() => window.open('https://calendly.com/prozessexpress', '_blank')}
              >
                Termin vereinbaren
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* Google Maps Einbettung */}
            <div className="rounded-2xl overflow-hidden shadow-lg h-[300px] bg-gray-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.409042569214!2d13.384161776680424!3d52.52000867210282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851c655f20989%3A0x26bbfb4e84674c63!2sBrandenburg%20Gate!5e0!3m2!1sen!2sde!4v1687890762024!5m2!1sen!2sde"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
