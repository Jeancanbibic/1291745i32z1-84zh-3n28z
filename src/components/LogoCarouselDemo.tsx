import React from 'react';
import { motion } from 'framer-motion';

const LogoCarouselDemo = () => {
  // Logos für die Kunden (beispielhafte Platzhalter-Firmennamen)
  const clientLogos = [
    { name: 'Technik AG', industry: 'Technologie' },
    { name: 'Bau Express', industry: 'Baugewerbe' },
    { name: 'MediCare Plus', industry: 'Gesundheitswesen' },
    { name: 'Logistik 24', industry: 'Logistik' },
    { name: 'Gastro Service', industry: 'Gastronomie' },
    { name: 'Green Energy', industry: 'Energie' },
    { name: 'Education Pro', industry: 'Bildung' },
    { name: 'Finance Group', industry: 'Finanzen' },
    { name: 'Retail Systems', industry: 'Einzelhandel' },
    { name: 'Automotive Plus', industry: 'Automobilindustrie' },
    { name: 'ConsultingPro', industry: 'Beratung' },
    { name: 'ITSolutions', industry: 'IT' },
  ];

  const secondRowLogos = [...clientLogos].reverse().slice(0, 8);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden relative">
      {/* Hintergrundeffekte */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-turquoise-300/5 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-beige-300/5 blur-[100px]" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
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
            VERTRAUEN VON BRANCHENFÜHRERN
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-semibold mb-6 text-gray-900"
          >
            Unsere <span className="text-turquoise-600">Kunden</span> aus allen Branchen
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-gray-600"
          >
            Wir arbeiten mit führenden Unternehmen verschiedener Branchen zusammen, um ihnen bei der Suche nach qualifizierten Mitarbeitern zu helfen.
          </motion.p>
        </motion.div>
      </div>

      {/* Erste Reihe des Karussells - bewegt sich nach links */}
      <div className="relative mb-12">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
        
        <div className="flex overflow-hidden">
          <motion.div
            className="flex space-x-12 items-center"
            animate={{ 
              x: [0, -1920]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 50,
                ease: "linear",
              },
            }}
          >
            {[...clientLogos, ...clientLogos].map((logo, index) => (
              <div 
                key={`${logo.name}-${index}`} 
                className="flex-shrink-0 w-[280px] h-[120px] bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center px-6 hover:shadow-md hover:border-turquoise-200 transition-all duration-300"
              >
                <p className="text-xl font-semibold text-gray-800">{logo.name}</p>
                <p className="text-sm text-gray-500 mt-1">{logo.industry}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Zweite Reihe des Karussells - bewegt sich nach rechts */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
        
        <div className="flex overflow-hidden">
          <motion.div
            className="flex space-x-12 items-center"
            animate={{ 
              x: [-1920, 0]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 60,
                ease: "linear",
              },
            }}
          >
            {[...secondRowLogos, ...secondRowLogos, ...secondRowLogos].map((logo, index) => (
              <div 
                key={`${logo.name}-reverse-${index}`} 
                className="flex-shrink-0 w-[280px] h-[120px] bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center px-6 hover:shadow-md hover:border-turquoise-200 transition-all duration-300"
              >
                <p className="text-xl font-semibold text-gray-800">{logo.name}</p>
                <p className="text-sm text-gray-500 mt-1">{logo.industry}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Statistik-Zahlen */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="p-8 rounded-2xl bg-gradient-to-b from-white to-turquoise-50 border border-turquoise-100/50 shadow-sm">
            <div className="text-5xl font-bold text-turquoise-600 mb-3">500+</div>
            <div className="text-lg font-semibold text-gray-900">Erfolgreiche Vermittlungen</div>
            <p className="text-gray-600 mt-2">Jedes Jahr finden wir die richtigen Talente</p>
          </div>
          
          <div className="p-8 rounded-2xl bg-gradient-to-b from-white to-beige-50 border border-beige-100/50 shadow-sm">
            <div className="text-5xl font-bold text-gray-900 mb-3">95%</div>
            <div className="text-lg font-semibold text-gray-900">Kundenzufriedenheit</div>
            <p className="text-gray-600 mt-2">Unsere Kunden empfehlen uns weiter</p>
          </div>
          
          <div className="p-8 rounded-2xl bg-gradient-to-b from-white to-turquoise-50 border border-turquoise-100/50 shadow-sm">
            <div className="text-5xl font-bold text-turquoise-600 mb-3">10+</div>
            <div className="text-lg font-semibold text-gray-900">Jahre Erfahrung</div>
            <p className="text-gray-600 mt-2">Expertise im Personalwesen</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LogoCarouselDemo; 