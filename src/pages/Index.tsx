import React from 'react';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialSection from '@/components/TestimonialSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Helmet } from 'react-helmet-async';

export default function Index() {
  return (
    <main className="relative min-h-screen bg-white">
      <Helmet>
        <title>ProzessExpress | Qualifizierte Bewerber mit Ergebnisgarantie</title>
        <meta name="description" content="Wir helfen Ihnen, qualifizierte Bewerber zu finden und Ihre Einstellungsquote zu steigern. Mit unserer Ergebnisgarantie minimieren Sie Ihr Risiko." />
        <meta name="keywords" content="Personalrekrutierung, Bewerbersuche, Einstellungsquote, Personalmanagement, HR-Lösungen" />
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
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <TestimonialSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
