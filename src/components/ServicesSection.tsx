"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView, useSpring, useTransform, useMotionValue } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Personal Brand Development",
    description: "Entwickeln Sie Ihre persönliche Marke und heben Sie sich von der Masse ab.",
    features: [
      "Strategische Markenpositionierung",
      "Social Media Optimierung",
      "Content-Strategie",
      "Visuelles Branding"
    ],
    color: "#00CC99",
    tag: "BRANDING"
  },
  {
    id: 2,
    title: "Recruitment Matching",
    description: "Finden Sie Ihre perfekte berufliche Passform mit unserem KI-gestützten Matching.",
    features: [
      "KI-basierte Jobanalyse",
      "Karriereberatung",
      "Interview-Vorbereitung",
      "Gehaltsverhandlung"
    ],
    color: "#F5E6D3",
    tag: "KARRIERE"
  },
  {
    id: 3,
    title: "Influence Growth",
    description: "Bauen Sie Ihre Präsenz als Thought Leader in Ihrer Branche auf.",
    features: [
      "Content Creation",
      "Networking Events",
      "Branchenvorträge",
      "Publikationen"
    ],
    color: "#00AA88",
    tag: "NETZWERK"
  }
];

// Advanced 3D Card Component
const ServiceCard3D = ({ service, isActive, onClick }) => {
  const cardRef = useRef(null);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  const rotateX = useSpring(0, { stiffness: 80, damping: 50 });
  const rotateY = useSpring(0, { stiffness: 80, damping: 50 });
  const scale = useSpring(1, { stiffness: 100, damping: 35 });
  const hoverScale = useSpring(1, { stiffness: 200, damping: 25 });
  
  useEffect(() => {
    if (isActive) {
      scale.set(1.05);
      hoverScale.set(1.02);
    } else {
      scale.set(1);
      hoverScale.set(1);
    }
  }, [isActive, scale, hoverScale]);
  
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseXRelative = e.clientX - centerX;
    const mouseYRelative = e.clientY - centerY;
    
    const rotateXValue = (mouseYRelative / rect.height) * 8;
    const rotateYValue = (mouseXRelative / rect.width) * -8;
    
    setMouseX(mouseXRelative);
    setMouseY(mouseYRelative);
    
    rotateX.set(rotateXValue);
    rotateY.set(rotateYValue);
  };
  
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    rotateX.set(0);
    rotateY.set(0);
  };
  
  const lightX = useTransform(
    rotateY,
    [-10, 0, 10],
    [0, 0.5, 1]
  ).get();
  
  const lightY = useTransform(
    rotateX,
    [-10, 0, 10],
    [1, 0.5, 0]
  ).get();
  
  const backgroundGradient = useTransform(
    [rotateX, rotateY],
    ([rx, ry]) => {
      const x = (50 + (ry as number) * 2);
      const y = (50 + (rx as number) * 2);
      return `
        radial-gradient(circle at ${x}% ${y}%, ${service.color}15, transparent 60%),
        linear-gradient(160deg, white, ${service.color}08, white),
        radial-gradient(circle at ${100-x}% ${100-y}%, ${service.color}10, transparent 40%)
      `;
    }
  );
  
  return (
    <motion.div
      ref={cardRef}
      className={`relative overflow-hidden rounded-3xl p-12 cursor-pointer transition-all backdrop-blur-lg h-full
                 ${isActive ? 'shadow-2xl z-10 scale-[1.02]' : 'shadow-lg'} 
                 group hover:shadow-xl flex`}
      style={{ 
        backgroundColor: 'rgba(255, 255, 255, 0.92)',
        rotateX,
        rotateY,
        scale: hoverScale,
        transformStyle: "preserve-3d",
        backgroundImage: backgroundGradient,
        boxShadow: isActive 
          ? `0 40px 80px -20px ${service.color}30, 0 0 48px -12px ${service.color}40, inset 0 2px 12px rgba(255,255,255,0.7)` 
          : `0 20px 40px -15px rgba(0,0,0,0.1), inset 0 2px 12px rgba(255,255,255,0.4)`
      }}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ 
        scale: { duration: 0.6 },
        default: { duration: 1, ease: "easeOut" }
      }}
    >
      <div className="flex-grow flex flex-col md:flex-row gap-12 relative z-10">
        {/* Left Content */}
        <div className="md:w-2/5 flex flex-col">
          {/* Enhanced Tag Badge */}
          <motion.div
            className="inline-block px-5 py-2.5 rounded-full text-sm font-medium backdrop-blur-xl mb-8
                     transform group-hover:scale-110 transition-transform duration-300 self-start"
            style={{
              backgroundColor: isActive ? service.color : `${service.color}10`,
              color: isActive ? 'white' : service.color,
              transformStyle: "preserve-3d",
              transform: "translateZ(40px)",
              boxShadow: isActive 
                ? `0 20px 40px -12px ${service.color}40, inset 0 2px 4px rgba(255,255,255,0.5)` 
                : `0 10px 20px -8px ${service.color}20`
            }}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {service.tag}
          </motion.div>

          <motion.h3 
            className="text-3xl lg:text-4xl font-medium mb-6 bg-gradient-to-br from-slate-900 to-slate-700 bg-clip-text text-transparent
                       group-hover:scale-105 transition-transform duration-300"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {service.title}
          </motion.h3>
          
          <motion.p 
            className="text-lg lg:text-xl text-slate-600 leading-relaxed"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
          >
            {service.description}
          </motion.p>
        </div>

        {/* Right Content - Features */}
        <div className="md:w-3/5 flex flex-col justify-center">
          <div className="space-y-4">
            {service.features.map((feature, idx) => (
              <motion.div
                key={idx}
                className="flex items-center gap-4 group/feature"
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 + idx * 0.1, ease: "easeOut" }}
                whileHover={{ 
                  x: 12,
                  transition: { duration: 0.4, ease: "easeOut" }
                }}
              >
                <motion.div 
                  className="w-3 h-3 rounded-full relative flex-shrink-0"
                  style={{ backgroundColor: service.color }}
                  whileHover={{ scale: 2 }}
                  transition={{ type: "spring", stiffness: 150, damping: 12 }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{ backgroundColor: service.color }}
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 0, 0.3]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
                <span className="text-lg text-slate-700 group-hover/feature:text-slate-900 transition-all duration-300">
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Hintergrund-Effekt */}
      <motion.div 
        className="absolute inset-0 -z-10"
        animate={{
          background: isHovered 
            ? `radial-gradient(circle at ${mouseX + 300}px ${mouseY + 300}px, ${service.color}20, transparent 60%)`
            : `radial-gradient(circle at 50% 50%, ${service.color}10, transparent 60%)`
        }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      {/* Enhanced 3D Effect Elements */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-full pointer-events-none" 
        style={{ 
          backgroundImage: `
            radial-gradient(circle at ${mouseX + 500}px ${mouseY + 500}px, ${service.color}15, transparent 60%),
            radial-gradient(circle at ${mouseX - 500}px ${mouseY - 500}px, ${service.color}10, transparent 50%)
          `,
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.8s ease'
        }}
      />
      
      {/* Enhanced Shine Effect */}
      <motion.div 
        className="absolute inset-0 opacity-0"
        animate={{ opacity: isHovered ? 0.5 : 0 }}
        transition={{ duration: 0.8 }}
        style={{
          background: `
            linear-gradient(105deg, 
              transparent 35%, 
              rgba(255, 255, 255, 0.5) 40%, 
              rgba(255, 255, 255, 0.8) 45%,
              transparent 50%
            )
          `,
          backgroundSize: "200% 100%",
          animation: isHovered ? 'shine 4s ease-in-out infinite' : 'none'
        }}
      />
      
      {/* Enhanced Bottom Accent */}
      <motion.div 
        className="absolute bottom-0 left-0 h-1.5 rounded-b-3xl"
        initial={{ width: "40%" }}
        animate={{ 
          width: isActive ? "100%" : "40%",
          boxShadow: isActive 
            ? `0 0 30px ${service.color}40` 
            : `0 0 20px ${service.color}20`
        }}
        style={{ 
          background: `linear-gradient(to right, ${service.color}, ${service.color}50)`
        }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />

      {/* Hover Glow Effect */}
      <motion.div
        className="absolute inset-0 rounded-3xl opacity-0 pointer-events-none"
        animate={{
          opacity: isHovered ? 0.15 : 0,
          boxShadow: `inset 0 0 80px ${service.color}`
        }}
        transition={{ duration: 0.8 }}
      />
    </motion.div>
  );
};

// Verbesserte Partikel-Animation
const ParticlesBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {Array.from({ length: 30 }).map((_, i) => {
        const size = Math.random() * 180 + 60;
        const xPos = Math.random() * 100;
        const yPos = Math.random() * 100;
        const duration = Math.random() * 25 + 20; // Längere Dauer
        const delay = Math.random() * 15;
        const opacity = Math.random() * 0.08 + 0.02;
        const color = Math.random() > 0.5 ? "#00CC99" : "#F5E6D3";
        
        return (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: size,
              height: size,
              backgroundColor: color,
              top: `${yPos}%`,
              left: `${xPos}%`,
              opacity,
              filter: 'blur(50px)'
            }}
            animate={{
              scale: [1, 1.3, 1],
              x: [0, Math.random() * 150 - 75, 0],
              y: [0, Math.random() * 150 - 75, 0],
              opacity: [opacity, opacity * 1.5, opacity]
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        );
      })}
    </div>
  );
};

// Verbesserte Fluid Motion
const FluidMotionBackground = () => {
  const baseSpeed = 60; // Langsamere Basisgeschwindigkeit
  const layers = [
    { color: "#00CC9915", size: "160%", speed: baseSpeed, reverse: false, blur: 80 },
    { color: "#F5E6D320", size: "140%", speed: baseSpeed * 1.4, reverse: true, blur: 60 },
    { color: "#00AA8810", size: "150%", speed: baseSpeed * 0.9, reverse: false, blur: 70 }
  ];
  
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {layers.map((layer, i) => (
        <motion.div
          key={i}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          style={{
            width: layer.size,
            height: layer.size,
            backgroundColor: layer.color,
            filter: `blur(${layer.blur}px)`,
            borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%"
          }}
          animate={{
            rotate: layer.reverse ? -360 : 360,
            scale: [1, 1.2, 0.9, 1.1, 1],
            borderRadius: [
              "40% 60% 70% 30% / 40% 50% 60% 50%",
              "60% 40% 30% 70% / 60% 50% 40% 50%",
              "50% 50% 50% 50% / 50% 50% 50% 50%",
              "40% 60% 70% 30% / 40% 50% 60% 50%"
            ]
          }}
          transition={{
            rotate: { duration: layer.speed, repeat: Infinity, ease: "linear" },
            scale: { duration: layer.speed * 0.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
            borderRadius: { duration: layer.speed * 0.7, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }
          }}
        />
      ))}
    </div>
  );
};

// Verbesserte Service Scene
const ServiceScene = ({ service }) => {
  const sceneRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!sceneRef.current) return;
      
      const rect = sceneRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const orbitElements = [
    { size: 24, distance: 150, speed: 35, angle: 0, color: service.color },
    { size: 16, distance: 120, speed: 25, angle: 120, color: "#00AA88" },
    { size: 12, distance: 180, speed: 45, angle: 240, color: "#F5E6D3" }
  ];

  return (
    <motion.div 
      ref={sceneRef}
      className="relative h-[450px] rounded-3xl p-8 overflow-hidden flex flex-col items-center justify-center"
      style={{
        background: 'rgba(255, 255, 255, 0.8)',
        boxShadow: `0 25px 50px -12px rgba(0, 0, 0, 0.08)`,
        perspective: "1000px"
      }}
    >
      {/* Dynamische Hintergrundanimation */}
      <motion.div 
        className="absolute inset-0 -z-10"
        animate={{
          background: [
            `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, ${service.color}30 0%, transparent 70%)`,
            `radial-gradient(circle at ${100 - mousePosition.x * 100}% ${100 - mousePosition.y * 100}%, ${service.color}30 0%, transparent 70%)`
          ]
        }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      />
      
      {/* Center Circle mit verbesserter Animation */}
      <motion.div
        className="relative"
        animate={{ 
          scale: [1, 1.1, 0.95, 1.05, 1],
          rotate: 360
        }}
        transition={{ 
          scale: { duration: 12, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
          rotate: { duration: 60, repeat: Infinity, ease: "linear" }
        }}
      >
        <motion.div 
          className="w-[120px] h-[120px] rounded-full flex items-center justify-center"
          animate={{
            boxShadow: [
              `0 0 60px 20px ${service.color}20`,
              `0 0 80px 30px ${service.color}30`,
              `0 0 60px 20px ${service.color}20`
            ]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          style={{ 
            backgroundColor: `${service.color}20`,
            backdropFilter: "blur(10px)"
          }}
        >
          <motion.div 
            className="w-[80px] h-[80px] rounded-full"
            animate={{
              scale: [1, 1.1, 1],
              boxShadow: [
                `0 0 30px 5px ${service.color}40`,
                `0 0 50px 10px ${service.color}60`,
                `0 0 30px 5px ${service.color}40`
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
            style={{
              backgroundColor: service.color
            }}
          />
        </motion.div>
        
        {/* Verbesserte Orbital Elements */}
        {orbitElements.map((elem, idx) => (
          <motion.div
            key={idx}
            className="absolute top-1/2 left-1/2 rounded-full"
            style={{
              width: elem.size,
              height: elem.size,
              backgroundColor: elem.color,
              marginLeft: -elem.size/2,
              marginTop: -elem.size/2,
              transformOrigin: "center"
            }}
            animate={{
              x: Array.from({ length: 30 }).map((_, i) => 
                Math.cos(i / 29 * Math.PI * 2) * elem.distance
              ),
              y: Array.from({ length: 30 }).map((_, i) => 
                Math.sin(i / 29 * Math.PI * 2) * elem.distance
              ),
              scale: [1, 1.3, 0.8, 1.2, 1],
              opacity: [0.8, 1, 0.7, 0.9, 0.8],
              boxShadow: [
                `0 0 15px 3px ${elem.color}60`,
                `0 0 25px 5px ${elem.color}80`,
                `0 0 15px 3px ${elem.color}60`
              ]
            }}
            transition={{
              x: { duration: elem.speed, repeat: Infinity, ease: "linear" },
              y: { duration: elem.speed, repeat: Infinity, ease: "linear" },
              scale: { duration: elem.speed * 0.4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
              opacity: { duration: elem.speed * 0.6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
              boxShadow: { duration: elem.speed * 0.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }
            }}
          />
        ))}
      </motion.div>
      
      {/* Verbesserte Ringe */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        {[200, 160, 120].map((diameter, idx) => (
          <motion.div
            key={idx}
            className="absolute top-1/2 left-1/2 border rounded-full opacity-40"
            style={{ 
              width: diameter, 
              height: diameter, 
              borderColor: `${service.color}40`,
              marginLeft: -diameter/2,
              marginTop: -diameter/2,
              borderWidth: idx === 0 ? 1 : 2,
              borderStyle: idx === 1 ? 'dashed' : 'solid'
            }}
            animate={{ 
              rotate: idx % 2 === 0 ? 360 : -360,
              scale: [1, 1.05, 0.95, 1],
              opacity: [0.4, 0.6, 0.3, 0.4]
            }}
            transition={{ 
              rotate: { duration: 40 + idx * 15, repeat: Infinity, ease: "linear" },
              scale: { duration: 8 + idx * 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
              opacity: { duration: 6 + idx * 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }
            }}
          />
        ))}
      </div>
      
      {/* Service Title mit verbesserter Animation */}
      <motion.div
        className="absolute bottom-12 w-full text-center"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        <motion.h3 
          className="text-3xl font-medium relative"
          animate={{
            color: [service.color, `${service.color}CC`, service.color],
            textShadow: [
              `0 0 20px ${service.color}20`,
              `0 0 30px ${service.color}40`,
              `0 0 20px ${service.color}20`
            ]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        >
          {service.title}
        </motion.h3>
        <motion.div 
          className="mt-3 h-1 mx-auto rounded-full"
          initial={{ width: 0 }}
          animate={{ 
            width: [0, 100, 80, 100],
            backgroundColor: [service.color, `${service.color}CC`, service.color]
          }}
          transition={{ 
            width: { duration: 2, delay: 0.6 },
            backgroundColor: { duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }
          }}
        />
      </motion.div>
    </motion.div>
  );
};

// Enhanced Feature Chip Component
const FeatureChip = ({ feature, color, index }) => {
  return (
    <motion.div
      className="inline-flex items-center max-w-max rounded-full px-4 py-2 m-1 group cursor-default backdrop-blur-sm"
      style={{ 
        backgroundColor: `${color}08`, 
        border: `1px solid ${color}30`,
        boxShadow: `inset 0 1px 3px rgba(255,255,255,0.3)`
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ 
        scale: 1.05, 
        backgroundColor: `${color}15`,
        boxShadow: `0 5px 15px -5px ${color}40, inset 0 1px 3px rgba(255,255,255,0.5)`
      }}
    >
      <motion.div 
        className="w-2 h-2 rounded-full mr-2"
        style={{ 
          backgroundColor: color,
          boxShadow: `0 0 5px ${color}60`
        }}
        whileHover={{ scale: 1.5 }}
        transition={{ type: "spring", stiffness: 300 }}
      />
      <span 
        className="text-sm font-medium bg-gradient-to-r bg-clip-text text-transparent transition-all duration-300"
        style={{ 
          backgroundImage: `linear-gradient(to right, ${color}, ${color}DD)`,
          filter: 'brightness(0.8)'
        }}
      >
        {feature}
      </span>
    </motion.div>
  );
};

// Hauptkomponente des Services-Bereichs
const ServicesSection = () => {
  const [activeId, setActiveId] = useState(1);
  const activeService = services.find(s => s.id === activeId) || services[0];
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });
  
  // Container Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  const titleVariants = {
    hidden: { y: -30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="relative py-36 overflow-hidden bg-white" id="services">
      {/* Animated Background Effects */}
      <ParticlesBackground />
      <FluidMotionBackground />
      
      <div className="max-w-7xl mx-auto px-6 relative" ref={containerRef}>
        {/* Section Header with Modern Typography & Animations */}
        <motion.div 
          className="mb-20 text-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div 
            className="inline-block mb-3 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#00CC9930] to-[#F5E6D340]"
            variants={titleVariants}
          >
            <span className="text-sm font-medium bg-gradient-to-r from-[#00CC99] to-[#00AA88] bg-clip-text text-transparent">
              ENTDECKEN SIE
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-5xl md:text-6xl font-medium bg-gradient-to-r from-slate-800 to-slate-700 bg-clip-text text-transparent mb-4"
            variants={titleVariants}
          >
            Unsere Leistungen
          </motion.h2>
          
          <motion.div 
            className="flex items-center justify-center gap-2 mb-5"
            variants={titleVariants}
          >
            <div className="w-16 h-[2px] bg-slate-200 rounded"></div>
            <div 
              className="w-3 h-3 rounded-full transform rotate-45"
              style={{ backgroundColor: "#00CC99" }}
            ></div>
            <div className="w-16 h-[2px] bg-slate-200 rounded"></div>
          </motion.div>
          
          <motion.p 
            className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
            variants={titleVariants}
          >
            Maßgeschneiderte Lösungen für Ihren beruflichen Erfolg und Ihre persönliche Marke
          </motion.p>
        </motion.div>
        
        {/* Interactive Card Grid */}
        <div className="grid grid-cols-1 gap-12 mb-16 px-4 lg:px-8">
          <motion.div 
            className="col-span-full mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
          </motion.div>
          
          <div className="grid grid-cols-1 gap-12 w-full">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="h-full"
              >
                <ServiceCard3D
                  service={service}
                  isActive={service.id === activeId}
                  onClick={() => setActiveId(service.id)}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Service Detail Scene */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mt-20"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeId}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <ServiceScene service={activeService} />
                <div>
                  <motion.div 
                    className="mb-8 inline-block px-4 py-2 rounded-full text-sm"
                    style={{ 
                      backgroundColor: `${activeService.color}20`,
                      color: activeService.color
                    }}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    {activeService.tag}
                  </motion.div>
                  
                  <motion.h3 
                    className="text-4xl font-medium mb-8 text-slate-800"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                  >
                    {activeService.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-xl text-slate-600 mb-10 leading-relaxed"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  >
                    {activeService.description}
                  </motion.p>
                  
                  <motion.div 
                    className="flex flex-wrap gap-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                  >
                    {activeService.features.map((feature, idx) => (
                      <FeatureChip
                        key={idx}
                        feature={feature}
                        color={activeService.color}
                        index={idx}
                      />
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
