import React, { useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from '@/hooks/use-toast';
import { ArrowRightIcon, PhoneIcon, MailIcon, MapPinIcon, LinkedinIcon, CalendarIcon, CheckCircleIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
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
        <motion.div 
          className="absolute -right-64 -top-64 w-[600px] h-[600px] rounded-full bg-turquoise-200/10 blur-[100px]"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.3, 0.4, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute -left-64 -bottom-64 w-[500px] h-[500px] rounded-full bg-beige-300/10 blur-[80px]"
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        
        {/* Subtiles Muster */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#00CC99_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Überschrift */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block px-4 py-1.5 mb-6 rounded-full bg-turquoise-100 text-turquoise-800 text-sm font-medium border border-turquoise-200/40"
          >
            KONTAKTIEREN SIE UNS
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-semibold mb-6 text-gray-900"
          >
            Lassen Sie uns ins <span className="text-turquoise-600">Gespräch</span> kommen
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-gray-600"
          >
            Wir freuen uns darauf, mehr über Ihre Anforderungen zu erfahren und Ihnen bei der Suche nach qualifizierten Mitarbeitern zu helfen.
          </motion.p>
        </motion.div>
        
        {/* Kontaktbereich */}
        <div className="grid md:grid-cols-12 gap-10">
          {/* Linke Spalte - Kontaktformular */}
          <motion.div 
            className="md:col-span-7 bg-white rounded-2xl shadow-lg p-8 border border-gray-100 relative overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Formularüberschrift */}
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">
              Schreiben Sie uns eine Nachricht
            </h3>
            
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 flex flex-col items-center text-center"
              >
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
              </motion.div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-700">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Ihr vollständiger Name"
                      value={formState.name}
                      onChange={handleChange}
                      className="rounded-lg border-gray-300 focus:border-turquoise-500 focus:ring focus:ring-turquoise-500/20 transition-all"
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
                      className="rounded-lg border-gray-300 focus:border-turquoise-500 focus:ring focus:ring-turquoise-500/20 transition-all"
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
                      className="rounded-lg border-gray-300 focus:border-turquoise-500 focus:ring focus:ring-turquoise-500/20 transition-all"
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
                      className="rounded-lg border-gray-300 focus:border-turquoise-500 focus:ring focus:ring-turquoise-500/20 transition-all"
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
                    className="min-h-[120px] rounded-lg border-gray-300 focus:border-turquoise-500 focus:ring focus:ring-turquoise-500/20 transition-all"
                    required
                  />
                </div>
                
                <div className="pt-2">
                  <Button 
                    type="submit" 
                    className="w-full py-6 bg-turquoise-600 hover:bg-turquoise-700 rounded-lg transition-all group"
                    disabled={isSubmitting}
                  >
                    <span className="mr-2">
                      {isSubmitting ? "Wird gesendet..." : "Nachricht senden"}
                    </span>
                    <ArrowRightIcon size={18} className="transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
                
                <p className="text-sm text-gray-500 text-center mt-4">
                  Wir respektieren Ihre Privatsphäre und werden Ihre Daten nicht an Dritte weitergeben.
                </p>
              </form>
            )}
          </motion.div>
          
          {/* Rechte Spalte - Kontaktinformationen und Karte */}
          <motion.div 
            className="md:col-span-5 space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {/* Kontaktinformationen */}
            <div className="bg-gray-900 text-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold mb-8 text-white">Kontaktinformationen</h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, idx) => (
                  <motion.a
                    key={idx}
                    href={item.link}
                    target={item.icon === MapPinIcon || item.icon === LinkedinIcon ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 group"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="mt-1 w-10 h-10 rounded-full bg-turquoise-500/20 flex items-center justify-center flex-shrink-0">
                      <item.icon size={18} className="text-turquoise-400" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{item.title}</p>
                      <p className="text-white group-hover:text-turquoise-400 transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
              
              <div className="mt-10 pt-8 border-t border-gray-800">
                <h4 className="font-medium mb-4 text-white">Unsere Öffnungszeiten</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Montag - Freitag:</span>
                    <span className="text-white">9:00 - 18:00 Uhr</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Samstag - Sonntag:</span>
                    <span className="text-white">Geschlossen</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Terminvereinbarung */}
            <motion.div 
              className="bg-gradient-to-br from-turquoise-50 to-turquoise-100/50 rounded-2xl p-8 border border-turquoise-200/30"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-turquoise-600 text-white flex items-center justify-center flex-shrink-0">
                  <CalendarIcon size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    Beratungstermin vereinbaren
                  </h3>
                  <p className="text-gray-600">
                    Sichern Sie sich einen persönlichen Beratungstermin mit einem unserer Experten.
                  </p>
                </div>
              </div>
              
              <Button 
                className="w-full bg-turquoise-600 hover:bg-turquoise-700 transition-all group"
                onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="mr-2">Termin anfragen</span>
                <ArrowRightIcon size={16} className="transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Google Maps Einbettung */}
        <motion.div 
          className="mt-16 rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-[400px] bg-gray-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          {/* Hier würde der eigentliche Google Maps iFrame eingebettet werden */}
          <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
            Google Maps-Karte würde hier angezeigt werden
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
