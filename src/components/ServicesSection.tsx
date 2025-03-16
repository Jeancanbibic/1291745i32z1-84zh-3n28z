"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

const services = [
  {
    id: 1,
    title: "Digitale Präsenz",
    description: "Wir sorgen dafür, dass Ihr Unternehmen genau dann sichtbar ist, wenn es zählt – strategisch und gezielt an den richtigen Orten, wo sich die passenden Bewerber aufhalten.",
    features: [
      "Strategische Sichtbarkeit",
      "Gezielte Ansprache",
      "Passende Plattformen",
      "Mehr Reichweite"
    ],
    color: "#00CC99",
    tag: "PRÄSENZ",
    icon: "/icons/digital-presence.svg"
  },
  {
    id: 2,
    title: "Technologischer Vorsprung",
    description: "Wir setzen moderne Technologien ein, um den Rekrutierungsprozess zu erleichtern, ohne den menschlichen Faktor aus den Augen zu verlieren. So erzielen wir die besten Ergebnisse.",
    features: [
      "Moderne Tools",
      "Einfache Prozesse",
      "Schnelle Abwicklung",
      "Beste Ergebnisse"
    ],
    color: "#F5E6D3",
    tag: "TECHNIK",
    icon: "/icons/tech-advantage.svg"
  },
  {
    id: 3,
    title: "Intelligente Bewerberprozesse",
    description: "Durch individuell abgestimmte Prozesse stellen wir sicher, dass nur die passendsten Kandidaten den gesamten Auswahlprozess durchlaufen – was Ihre Einstellungsquote deutlich steigert.",
    features: [
      "Passende Kandidaten",
      "Schnelle Auswahl",
      "Hohe Qualität",
      "Bessere Quote"
    ],
    color: "#4A90E2",
    tag: "PROZESSE",
    icon: "/icons/smart-process.svg"
  },
  {
    id: 4,
    title: "Attraktive Arbeitgebermarke",
    description: "Bewerber suchen mehr als nur ein Gehalt – sie wollen Wertschätzung, Verantwortung und ein Umfeld, in dem sie wachsen können. Wir helfen Ihnen, Ihr Unternehmen als solchen Arbeitgeber zu positionieren.",
    features: [
      "Starke Positionierung",
      "Klare Werte",
      "Echte Vorteile",
      "Authentische Kultur"
    ],
    color: "#00AA88",
    tag: "MARKE",
    icon: "/icons/employer-brand.svg"
  }
];

const BackgroundAnimation = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute w-[700px] h-[700px] rounded-full bg-turquoise-100/10 blur-[120px]"
        animate={{
          x: ["-30%", "5%", "-30%"],
          y: ["-25%", "5%", "-25%"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute right-0 bottom-0 w-[600px] h-[600px] rounded-full bg-turquoise-200/10 blur-[100px]"
        animate={{
          x: ["10%", "-15%", "10%"],
          y: ["10%", "-15%", "10%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
};

const ServiceCard = ({ service, index }) => {
  // Staggered animation delay based on index
  const animationDelay = 0.2 + (index * 0.1);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: animationDelay }}
      className="group relative bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
    >
      {/* Subtle gradient border */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white via-gray-50/50 to-gray-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Animated background glow on hover */}
      <div 
        className="absolute -inset-1 rounded-[22px] bg-gradient-to-r opacity-0 group-hover:opacity-100 blur transition-all duration-500"
        style={{ backgroundImage: `linear-gradient(120deg, ${service.color}10, ${service.color}30)` }}
      />

      {/* Content container with relative positioning */}
      <div className="relative z-10">
        {/* Tag Badge with enhanced styling */}
        <motion.div 
          className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 transition-all duration-300"
          style={{ 
            backgroundColor: `${service.color}15`,
            color: service.color,
            border: `1px solid ${service.color}30`
          }}
          whileHover={{
            y: -2,
            transition: { duration: 0.2 }
          }}
        >
          {service.tag}
        </motion.div>

        {/* Title with animated arrow */}
        <h3 className="text-2xl font-semibold mb-4 flex items-center gap-3 group-hover:text-turquoise-800 transition-colors duration-300">
          <span>{service.title}</span>
          <ArrowRight className="w-5 h-5 text-turquoise-500 opacity-0 transform -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
        </h3>

        {/* Description with subtle hover effect */}
        <p className="text-gray-600 mb-8 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
          {service.description}
        </p>

        {/* Features with enhanced animations */}
        <div className="space-y-3">
          {service.features.map((feature, idx) => (
            <motion.div 
              key={idx} 
              className="flex items-start gap-3 group/item"
              initial={{ x: -10, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: animationDelay + (idx * 0.1) }}
            >
              <motion.div 
                className="mt-0.5 min-w-[18px] h-[18px] rounded-full flex items-center justify-center transition-all duration-300"
                style={{ 
                  backgroundColor: `${service.color}20`,
                  border: `1px solid ${service.color}40`
                }}
                whileHover={{ scale: 1.2 }}
              >
                <Check className="w-3 h-3" style={{ color: service.color }} />
              </motion.div>
              <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors duration-300">
                {feature}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden" id="services">
      <BackgroundAnimation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-4xl mx-auto mb-16 md:mb-24"
        >
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-block px-4 py-1.5 mb-6 rounded-full bg-turquoise-100 text-turquoise-800 text-sm font-medium border border-turquoise-200/40"
          >
            WAS IHREN ERFOLG AUSMACHT
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-4xl md:text-5xl font-semibold mb-6"
          >
            Planbar mehr{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-turquoise-600 to-turquoise-400 bg-clip-text text-transparent">
                qualifizierte
              </span>
              <motion.span 
                className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-turquoise-600/80 to-turquoise-400/80"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </span>{" "}
            Bewerber
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-xl text-gray-600"
          >
            Wir bringen die richtigen Mitarbeiter, senken Ihre Kosten und sorgen für langfristigen Erfolg
          </motion.p>
        </motion.div>

        {/* Services Grid - optimiert für verschiedene Bildschirmgrößen */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
        
        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex justify-center mt-16"
        >
          <motion.a 
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            whileHover={{ y: -3 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-turquoise-600 hover:bg-turquoise-700 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            Lassen Sie uns über Ihre Anforderungen sprechen
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
