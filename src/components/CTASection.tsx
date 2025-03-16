"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronRight, Sparkles, Award, Clock, Users } from "lucide-react";

const CTASection = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interesse: ""
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(step + 1);
  };

  const funnelSteps = [
    {
      badge: "KOSTENLOSE ERSTBERATUNG",
      title: "Optimieren Sie Ihren Rekrutierungsprozess",
      description: "Entdecken Sie, wie wir Ihre Personalgewinnung revolutionieren können.",
      cta: "Jetzt durchstarten"
    },
    {
      badge: "SCHRITT 1 VON 3",
      title: "Wie können wir Sie erreichen?",
      description: "Ihre Daten werden vertraulich behandelt und nicht an Dritte weitergegeben.",
      cta: "Weiter zu Ihren Zielen"
    },
    {
      badge: "SCHRITT 2 VON 3",
      title: "Wo liegt Ihr Schwerpunkt?",
      description: "Wählen Sie den Bereich, auf den wir uns im Gespräch konzentrieren sollen.",
      cta: "Termin vereinbaren"
    },
    {
      badge: "ERFOLGREICH",
      title: "Vielen Dank für Ihr Vertrauen!",
      description: "Wir melden uns innerhalb von 24 Stunden bei Ihnen.",
      cta: "Zurück zur Startseite"
    }
  ];

  return (
    <section id="cta" className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Hintergrund-Effekte */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-turquoise-50/30 via-transparent to-beige-50/20"></div>
        <motion.div 
          className="absolute -top-64 -right-64 w-[600px] h-[600px] rounded-full bg-turquoise-400/5 blur-[100px]"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.3, 0.4, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-beige-300/10 blur-[80px]"
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          className="max-w-5xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block px-4 py-1.5 mb-6 rounded-full bg-turquoise-100 text-turquoise-800 text-sm font-medium border border-turquoise-200/40"
          >
            QUALIFIKATION OHNE UMWEGE
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-semibold mb-6 text-gray-900"
          >
            Ihr direkter Weg zu <span className="text-turquoise-600">qualifizierten Bewerbern</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Mit unserem bewährten Prozess finden wir garantiert die passenden Mitarbeiter für Ihr Unternehmen – effizient und zuverlässig.
          </motion.p>
        </motion.div>

        {/* Hauptkarte für den CTA-Bereich */}
        <motion.div 
          className="bg-white rounded-2xl shadow-xl overflow-hidden relative border border-gray-100"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Innere Dekoration */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-turquoise-400 via-turquoise-500 to-turquoise-400"></div>
          
          <div className="grid md:grid-cols-12 min-h-[400px]">
            {/* Linke Seite - Funnel-Schritte */}
            <div className="md:col-span-6 p-8 md:p-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.5 }}
                  className="h-full flex flex-col"
                >
                  <span className="inline-block px-3 py-1 rounded-full bg-turquoise-100/60 text-turquoise-800 text-xs font-medium tracking-wide mb-8">
                    {funnelSteps[step].badge}
                  </span>
                  
                  <h3 className="text-3xl font-semibold mb-6 text-gray-900">
                    {funnelSteps[step].title}
                  </h3>
                  
                  <p className="text-gray-600 mb-8">
                    {funnelSteps[step].description}
                  </p>
                  
                  {step === 0 && (
                    <div className="mt-auto">
                      <div className="flex flex-col gap-4 mb-8">
                        {[
                          { icon: Award, text: "94% Erfolgsrate bei Stellenbesetzungen" },
                          { icon: Clock, text: "Erste Ergebnisse innerhalb von 48 Stunden" },
                          { icon: Users, text: "Über 1.200 erfolgreiche Vermittlungen" },
                        ].map((item, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-turquoise-100/60 flex items-center justify-center text-turquoise-700">
                              <item.icon size={16} />
                            </div>
                            <span className="text-gray-700">{item.text}</span>
                          </div>
                        ))}
                      </div>
                      <button
                        onClick={() => setStep(1)}
                        className="w-full py-4 px-6 bg-turquoise-600 hover:bg-turquoise-700 text-white rounded-xl transition-all flex items-center justify-center gap-2 group"
                      >
                        <span>{funnelSteps[step].cta}</span>
                        <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  )}
                  
                  {step === 1 && (
                    <form onSubmit={handleSubmit} className="mt-auto">
                      <div className="space-y-4 mb-8">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-turquoise-500 focus:border-transparent transition-all"
                            placeholder="Ihr vollständiger Name"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            E-Mail
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-turquoise-500 focus:border-transparent transition-all"
                            placeholder="Ihre E-Mail-Adresse"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                            Telefon
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-turquoise-500 focus:border-transparent transition-all"
                            placeholder="Ihre Telefonnummer"
                          />
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="w-full py-4 px-6 bg-turquoise-600 hover:bg-turquoise-700 text-white rounded-xl transition-all flex items-center justify-center gap-2 group"
                      >
                        <span>{funnelSteps[step].cta}</span>
                        <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </form>
                  )}
                  
                  {step === 2 && (
                    <form onSubmit={handleSubmit} className="mt-auto">
                      <div className="space-y-3 mb-8">
                        {[
                          { id: "digitale-praesenz", label: "Digitale Präsenz" },
                          { id: "bewerberprozesse", label: "Intelligente Bewerberprozesse" },
                          { id: "arbeitgebermarke", label: "Attraktive Arbeitgebermarke" },
                          { id: "technologie", label: "Technologischer Vorsprung" }
                        ].map((option) => (
                          <label 
                            key={option.id}
                            className={`block p-4 rounded-lg border cursor-pointer transition-all ${
                              formData.interesse === option.id
                                ? "border-turquoise-500 bg-turquoise-50/50"
                                : "border-gray-200 hover:border-turquoise-200"
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                                formData.interesse === option.id
                                  ? "bg-turquoise-500"
                                  : "border border-gray-300"
                              }`}>
                                {formData.interesse === option.id && (
                                  <Check size={12} className="text-white" />
                                )}
                              </div>
                              <span className={`text-${formData.interesse === option.id ? "turquoise-700" : "gray-700"}`}>
                                {option.label}
                              </span>
                            </div>
                            <input
                              type="radio"
                              name="interesse"
                              className="sr-only"
                              value={option.id}
                              checked={formData.interesse === option.id}
                              onChange={handleInputChange}
                            />
                          </label>
                        ))}
                      </div>
                      <button
                        type="submit"
                        className="w-full py-4 px-6 bg-turquoise-600 hover:bg-turquoise-700 text-white rounded-xl transition-all flex items-center justify-center gap-2 group"
                        disabled={!formData.interesse}
                      >
                        <span>{funnelSteps[step].cta}</span>
                        <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </form>
                  )}
                  
                  {step === 3 && (
                    <div className="h-full flex flex-col items-center justify-center text-center">
                      <div className="w-20 h-20 rounded-full bg-turquoise-100 flex items-center justify-center mb-8">
                        <Sparkles size={32} className="text-turquoise-600" />
                      </div>
                      <h4 className="text-2xl font-semibold mb-4">Wir freuen uns auf Sie!</h4>
                      <p className="text-gray-600 mb-10">Unser Experten-Team bereitet sich bereits auf Ihr individuelles Beratungsgespräch vor.</p>
                      <button
                        onClick={() => {
                          setStep(0);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="py-3 px-6 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg transition-all"
                      >
                        Zurück zur Startseite
                      </button>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Rechte Seite - Illustration */}
            <div className="hidden md:block md:col-span-6 bg-gradient-to-br from-turquoise-50 to-beige-50/20 p-6">
              <div className="h-full w-full relative rounded-xl overflow-hidden bg-white/40 backdrop-blur-sm p-6 border border-white/60">
                <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[radial-gradient(#00CC99_1px,transparent_1px)] [background-size:16px_16px]"></div>
                
                <div className="h-full flex flex-col items-center justify-center text-center relative">
                  <motion.div 
                    className="w-36 h-36 rounded-full bg-turquoise-500/10 flex items-center justify-center mb-6"
                    animate={{ 
                      scale: [1, 1.05, 1],
                      boxShadow: [
                        "0 0 0 0 rgba(0, 204, 153, 0.1)",
                        "0 0 0 20px rgba(0, 204, 153, 0.0)",
                        "0 0 0 0 rgba(0, 204, 153, 0.1)"
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-inner">
                      <Users size={36} className="text-turquoise-600" />
                    </div>
                  </motion.div>
                  
                  <h3 className="text-2xl font-semibold mb-3 text-gray-800">
                    Ihr Recruiting-Erfolg
                  </h3>
                  
                  <p className="text-gray-600 mb-8 max-w-xs">
                    Mit unserer Expertise und datengestützten Methoden finden wir die idealen Mitarbeiter für Ihr Unternehmen.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3 w-full max-w-sm">
                    {[
                      { label: "Bewerber pro Stelle", value: "3-5" },
                      { label: "Schnellere Besetzung", value: "60%" },
                      { label: "Retention Rate", value: "94%" },
                      { label: "Zufriedenheit", value: "97%" }
                    ].map((stat, i) => (
                      <div 
                        key={i} 
                        className="bg-white rounded-lg p-3 border border-gray-100 shadow-sm"
                      >
                        <div className="text-lg font-bold text-turquoise-700">{stat.value}</div>
                        <div className="text-xs text-gray-500">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Vertrauenszeichen */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <p className="text-sm text-gray-500 mb-8 uppercase tracking-wider">Vertrauen von führenden Unternehmen</p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-8">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-8 w-32 bg-gray-200/60 rounded-md"></div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection; 