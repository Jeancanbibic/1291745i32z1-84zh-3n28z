import React, { memo } from 'react';
import { ArrowRight, Check } from 'lucide-react';

interface Service {
  id: number;
  title: string;
  description: string;
  features: string[];
  color: string;
  tag: string;
  icon: string;
}

interface ServiceCardProps {
  service: Service;
}

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

const ServiceCard = memo<ServiceCardProps>(({ service }) => {
  return (
    <div className="bg-white rounded-lg p-6 border border-gray-200">
      <div>
        <div 
          className="inline-block px-3 py-1 rounded text-sm font-medium mb-4"
          style={{ 
            backgroundColor: `${service.color}15`,
            color: service.color,
            border: `1px solid ${service.color}30`
          }}
        >
          {service.tag}
        </div>

        <div className="mb-4">
          <img
            src={service.icon}
            alt={service.title}
            width={32}
            height={32}
          />
        </div>

        <h3 className="text-xl font-semibold mb-3 text-gray-900">
          {service.title}
        </h3>

        <p className="text-gray-600 mb-6">
          {service.description}
        </p>

        <div className="space-y-2">
          {service.features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <Check className="w-4 h-4 mt-1" style={{ color: service.color }} />
              <span className="text-gray-700">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

ServiceCard.displayName = 'ServiceCard';

const ServicesSection = () => {
  return (
    <section className="py-16 bg-white print:py-8" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 print:mb-8">
          <h2 className="text-3xl font-bold mb-4">
            Planbar mehr qualifizierte Bewerber
          </h2>
          <p className="text-gray-600">
            Wir bringen die richtigen Mitarbeiter, senken Ihre Kosten und sorgen für langfristigen Erfolg
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 print:gap-4">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        
        <div className="text-center mt-12 print:hidden">
          <a 
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-turquoise-600 text-white rounded-lg no-underline"
          >
            Lassen Sie uns über Ihre Anforderungen sprechen
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default memo(ServicesSection);
