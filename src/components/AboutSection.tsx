import React, { memo, useEffect } from 'react';
import { BriefcaseIcon, UsersIcon, UserIcon, AwardIcon, Check } from 'lucide-react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface FeatureCardProps {
  feature: Feature;
}

interface FeatureListProps {
  items: string[];
}

// Optimierte FeatureCard Komponente mit verbessertem Caching
const FeatureCard = memo<FeatureCardProps>(({ feature }) => (
  <div 
    className="bg-gray-50 rounded-lg p-6 border border-gray-200 print:break-inside-avoid"
    style={{ contain: 'none' }} // Verhindert content-visibility Optimierungen
  >
    <div 
      className="bg-white w-12 h-12 rounded-lg flex items-center justify-center mb-4 border border-gray-100"
      style={{ contentVisibility: 'visible' }}
    >
      {feature.icon}
    </div>
    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
    <p className="text-gray-600">{feature.description}</p>
  </div>
));

FeatureCard.displayName = 'FeatureCard';

// Optimierte FeatureList Komponente mit verbessertem Caching
const FeatureList = memo<FeatureListProps>(({ items }) => (
  <div className="space-y-3" style={{ contentVisibility: 'visible' }}>
    {items.map((item, i) => (
      <div 
        key={i} 
        className="flex items-start gap-2"
        style={{ contentVisibility: 'visible' }}
      >
        <Check className="w-4 h-4 mt-1 text-turquoise-600" />
        <p className="text-gray-700">{item}</p>
      </div>
    ))}
  </div>
));

FeatureList.displayName = 'FeatureList';

// Funktion zum Vorladen des Hauptbildes
const preloadMainImage = () => {
  const img = new Image();
  img.src = "https://images.unsplash.com/photo-1605810230434-7631ac76ec81";
};

const AboutSection = () => {
  const features = [
    {
      icon: <UserIcon className="w-8 h-8 text-turquoise-600" />,
      title: "Digitale Präsenz",
      description: "Wir sorgen dafür, dass Ihr Unternehmen genau dann sichtbar ist, wenn es zählt – strategisch und gezielt an den richtigen Orten, wo sich die passenden Bewerber aufhalten."
    },
    {
      icon: <BriefcaseIcon className="w-8 h-8 text-turquoise-600" />,
      title: "Technologischer Vorsprung",
      description: "Wir setzen moderne Technologien ein, um den Rekrutierungsprozess zu erleichtern, ohne den menschlichen Faktor aus den Augen zu verlieren. So erzielen wir die besten Ergebnisse."
    },
    {
      icon: <UsersIcon className="w-8 h-8 text-turquoise-600" />,
      title: "Intelligente Bewerberprozesse",
      description: "Durch individuell abgestimmte Prozesse stellen wir sicher, dass nur die passendsten Kandidaten den gesamten Auswahlprozess durchlaufen – was Ihre Einstellungsquote deutlich steigert."
    },
    {
      icon: <AwardIcon className="w-8 h-8 text-turquoise-600" />,
      title: "Attraktive Arbeitgebermarke",
      description: "Bewerber suchen mehr als nur ein Gehalt – sie wollen Wertschätzung, Verantwortung und ein Umfeld, in dem sie wachsen können. Wir helfen Ihnen, Ihr Unternehmen als solchen Arbeitgeber zu positionieren."
    }
  ];

  const featureList = [
    "Maßgeschneiderte Branding-Strategien für Ihre Branche und Ziele",
    "Datengestützte Inhaltsplanung und -optimierung",
    "Direkte Verbindungen zu unserem exklusiven Arbeitgebernetzwerk",
    "Kontinuierliche Unterstützung und Beratung zur Markenentwicklung"
  ];

  // Bilder beim ersten Laden vorladen
  useEffect(() => {
    preloadMainImage();
  }, []);

  return (
    <section 
      id="about" 
      className="py-16 bg-white print:py-8"
      style={{ contentVisibility: 'visible', containIntrinsicSize: '1px 5000px' }}
    >
      <div 
        className="container mx-auto px-4"
        style={{ contentVisibility: 'visible' }}
      >
        <div className="text-center mb-12 print:mb-8">
          <h2 className="text-3xl font-bold mb-4">
            Was ihren Erfolg ausmacht
          </h2>
          <p className="text-gray-600">
            Wir unterstützen Sie mit innovativen Lösungen und bewährten Strategien.
          </p>
        </div>

        <div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 print:gap-4 print:mb-8"
          style={{ containIntrinsicSize: '1px 5000px', contentVisibility: 'visible' }}
        >
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>

        <div 
          className="grid md:grid-cols-2 gap-8 items-center print:gap-4"
          style={{ contentVisibility: 'visible' }}
        >
          <div 
            className="aspect-video"
            style={{ contentVisibility: 'visible' }}
          >
            <img 
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
              alt="Unser Ansatz" 
              className="w-full h-full rounded-lg border border-gray-200 object-cover"
              loading="eager"
              decoding="sync"
              width={800}
              height={450}
              fetchPriority="high"
              style={{ contentVisibility: 'visible' }}
            />
          </div>

          <div style={{ contentVisibility: 'visible' }}>
            <h3 className="text-2xl font-bold mb-4">
              Strategie mit persönlicher Authentizität
            </h3>
            <p className="text-gray-600 mb-6">
              Bei ProzessExpress verstehen wir, dass jeder Fachmann einzigartige Stärken und Karriereziele hat. Unser maßgeschneiderter Ansatz stellt sicher, dass Ihre persönliche Marke Ihre Expertise authentisch widerspiegelt.
            </p>
            <FeatureList items={featureList} />
          </div>
        </div>
      </div>
    </section>
  );
};

// Memo um unnötige Re-Renders zu verhindern
export default memo(AboutSection);
