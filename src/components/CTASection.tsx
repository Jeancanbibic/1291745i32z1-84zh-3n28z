"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
      title: "Bereit, Ihre Marke auf das nächste Level zu bringen?",
      description: "Lassen Sie uns gemeinsam Ihre persönliche Erfolgsgeschichte schreiben.",
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
      title: "Was interessiert Sie besonders?",
      description: "Wählen Sie Ihren Schwerpunkt, damit wir das Gespräch optimal vorbereiten können.",
      cta: "Termin vereinbaren"
    },
    {
      badge: "ERFOLGREICH",
      title: "Danke für Ihr Vertrauen!",
      description: "Wir melden uns innerhalb von 24 Stunden bei Ihnen.",
      cta: "Zurück zur Startseite"
    }
  ];

  return (
    <section className="bg-white relative overflow-hidden">
      <motion.div 
        className="max-w-7xl mx-auto relative rounded-3xl overflow-hidden my-32"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {/* Hintergrund-Effekte */}
        <motion.div 
          className="absolute inset-0 -z-10"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, #00CC9915 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, #00CC9915 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, #00CC9915 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div 
          className="absolute inset-0 -z-20 opacity-40"
          style={{
            background: `
              linear-gradient(60deg, #00CC9908 0%, transparent 50%),
              linear-gradient(120deg, #F5E6D308 0%, transparent 50%),
              linear-gradient(180deg, #00AA8808 0%, transparent 50%)
            `
          }}
        />

        <div className="relative px-8 py-20 flex flex-col items-center text-center">
          {/* Floating Particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                width: Math.random() * 100 + 50,
                height: Math.random() * 100 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                backgroundColor: i % 2 === 0 ? "#00CC99" : "#F5E6D3",
                opacity: 0.03,
                filter: 'blur(40px)'
              }}
              animate={{
                x: [0, Math.random() * 100 - 50, 0],
                y: [0, Math.random() * 100 - 50, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
          ))}

          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-2xl mx-auto"
            >
              {/* Badge */}
              <motion.div 
                className="inline-block mb-6 px-6 py-2 rounded-full bg-gradient-to-r from-[#00CC9920] to-[#F5E6D320] backdrop-blur-sm"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="text-sm font-medium bg-gradient-to-r from-[#00CC99] to-[#00AA88] bg-clip-text text-transparent">
                  {funnelSteps[step].badge}
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h2 
                className="text-4xl md:text-5xl lg:text-6xl font-medium mb-8"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <span className="bg-gradient-to-r from-slate-800 to-slate-700 bg-clip-text text-transparent">
                  {funnelSteps[step].title}
                </span>
              </motion.h2>

              {/* Description */}
              <motion.p 
                className="text-xl text-slate-600 mb-12"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {funnelSteps[step].description}
              </motion.p>

              {/* Form Steps */}
              <motion.form
                onSubmit={handleSubmit}
                className="w-full space-y-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                {step === 1 && (
                  <>
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      className="space-y-4"
                    >
                      <input
                        type="text"
                        name="name"
                        placeholder="Ihr Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-6 py-4 rounded-xl bg-white/80 backdrop-blur-md border border-slate-200 focus:border-[#00CC99] focus:ring-2 focus:ring-[#00CC99]/20 outline-none transition-all duration-300"
                        required
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="Ihre E-Mail"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-6 py-4 rounded-xl bg-white/80 backdrop-blur-md border border-slate-200 focus:border-[#00CC99] focus:ring-2 focus:ring-[#00CC99]/20 outline-none transition-all duration-300"
                        required
                      />
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Ihre Telefonnummer (optional)"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-6 py-4 rounded-xl bg-white/80 backdrop-blur-md border border-slate-200 focus:border-[#00CC99] focus:ring-2 focus:ring-[#00CC99]/20 outline-none transition-all duration-300"
                      />
                    </motion.div>
                  </>
                )}

                {step === 2 && (
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  >
                    {["Personal Branding", "Karriereentwicklung", "Social Media Präsenz", "Führungskräfte-Coaching"].map((option, idx) => (
                      <motion.button
                        key={idx}
                        type="button"
                        onClick={() => {
                          setFormData({ ...formData, interesse: option });
                          setTimeout(() => setStep(step + 1), 300);
                        }}
                        className={`p-6 rounded-2xl text-left transition-all duration-300 group
                          ${formData.interesse === option 
                            ? 'bg-gradient-to-r from-[#00CC99] to-[#00AA88] text-white' 
                            : 'bg-white/80 hover:bg-white/90 border border-slate-200'
                          }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <h3 className="text-lg font-medium mb-2">{option}</h3>
                        <p className={`text-sm ${formData.interesse === option ? 'text-white/80' : 'text-slate-500'}`}>
                          Erfahren Sie mehr über unsere Expertise in diesem Bereich
                        </p>
                      </motion.button>
                    ))}
                  </motion.div>
                )}

                {/* CTA Button */}
                {(step === 0 || step === 1) && (
                  <motion.div
                    className="relative group mt-8"
                    whileHover={{ scale: 1.02 }}
                  >
                    <motion.div
                      className="absolute -inset-1 rounded-full opacity-70 blur-lg transition-all duration-500 ease-in-out bg-gradient-to-r from-[#00CC99] to-[#00AA88] group-hover:opacity-100 group-hover:blur-xl"
                      animate={{
                        scale: [1, 1.05, 1],
                        opacity: [0.7, 0.9, 0.7]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                      }}
                    />
                    <motion.button
                      type="submit"
                      className="relative w-full px-12 py-5 rounded-full bg-gradient-to-r from-[#00CC99] to-[#00AA88] text-white font-medium text-lg transition-all duration-300"
                      whileTap={{ scale: 0.98 }}
                    >
                      {funnelSteps[step].cta}
                      <motion.div
                        className="absolute inset-0 rounded-full"
                        style={{
                          background: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.2), transparent)",
                          opacity: 0
                        }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.button>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", duration: 0.6 }}
                    className="flex flex-col items-center"
                  >
                    <div className="w-20 h-20 rounded-full bg-[#00CC99] flex items-center justify-center mb-8">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-slate-600 mb-8">
                      Wir haben Ihre Anfrage erhalten und werden uns schnellstmöglich bei Ihnen melden.
                    </p>
                  </motion.div>
                )}
              </motion.form>
            </motion.div>
          </AnimatePresence>

          {/* Progress Steps */}
          {step > 0 && step < 3 && (
            <motion.div 
              className="flex justify-center gap-2 mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {[1, 2, 3].map((stepNum) => (
                <motion.div
                  key={stepNum}
                  className={`w-3 h-3 rounded-full ${stepNum <= step ? 'bg-[#00CC99]' : 'bg-slate-200'}`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </motion.div>
          )}

          {/* Accent Lines */}
          <div className="absolute left-0 right-0 bottom-0 h-1 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-transparent via-[#00CC9940] to-transparent"
              animate={{
                x: ["-100%", "100%"]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CTASection; 