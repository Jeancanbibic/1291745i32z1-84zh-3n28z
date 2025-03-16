import React, { memo, useEffect } from 'react';
import { Quote } from 'lucide-react';

interface Testimonial {
  content: string;
  author: string;
  role: string;
  company: string;
  image: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const testimonials = [
  {
    content: "ProzessExpress hat meine Online-Präsenz komplett transformiert. Innerhalb weniger Wochen erhielt ich Anfragen von Top-Unternehmen. Ihr personalisierter Ansatz und die Liebe zum Detail haben den Unterschied gemacht.",
    author: "Jessica Chen",
    role: "Leiterin für Produktmarketing",
    company: "Tech Innovators GmbH",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    content: "Ich war skeptisch gegenüber Personal-Branding-Diensten, aber ProzessExpress hat alle meine Erwartungen übertroffen. Sie haben eine Strategie entwickelt, die sich für mich authentisch anfühlte und mich gleichzeitig strategisch für Führungspositionen positionierte. Nach nur 3 Monaten habe ich meinen Traumjob bekommen!",
    author: "Michael Rodriguez",
    role: "Technischer Direktor",
    company: "Future Solutions",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    content: "Das Team von ProzessExpress hilft nicht nur bei der Online-Präsenz – sie verändert komplett, wie du in deiner Branche wahrgenommen wirst. Ihr strategischer Ansatz und die Branchenverbindungen sind unbezahlbar. Jeden Cent wert.",
    author: "Alexa Thompson",
    role: "VP Operations",
    company: "Global Enterprises",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  },
  {
    content: "Als jemand, der immer mit Eigenwerbung zu kämpfen hatte, half mir ProzessExpress, meine Expertise auf authentische Weise zu präsentieren. Ihr personalisierter Ansatz und die kontinuierliche Unterstützung ließen den gesamten Prozess natürlich und effektiv wirken.",
    author: "David Park",
    role: "Leiter Data Science",
    company: "Analytics Pro",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  }
];

// Funktion zum Vorladen aller Testimonial-Bilder
const preloadImages = () => {
  testimonials.forEach(testimonial => {
    const img = new Image();
    img.src = testimonial.image;
  });
};

// Optimierte TestimonialCard Komponente mit verbessertem Caching
const TestimonialCard = memo<TestimonialCardProps>(({ testimonial }) => (
  <div 
    className="bg-gray-50 rounded-lg p-6 border border-gray-200 print:break-inside-avoid"
    style={{ contain: 'none' }} // Verhindert content-visibility Optimierungen
  >
    <div style={{ containIntrinsicSize: '1px 5000px' }}> {/* Feste Größe für den Render-Cache */}
      <Quote size={24} className="text-gray-400 mb-4" />
      <p className="text-gray-700 mb-6">
        "{testimonial.content}"
      </p>
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-200 mr-4">
          <img 
            src={testimonial.image} 
            alt={testimonial.author}
            className="w-full h-full object-cover"
            loading="eager"
            decoding="sync"
            width={48}
            height={48}
            style={{ contentVisibility: 'visible' }}
          />
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
          <p className="text-gray-600 text-sm">{testimonial.role}, {testimonial.company}</p>
        </div>
      </div>
    </div>
  </div>
));

TestimonialCard.displayName = 'TestimonialCard';

const TestimonialSection = () => {
  // Bilder beim ersten Laden vorladen
  useEffect(() => {
    preloadImages();
  }, []);

  return (
    <section 
      id="testimonials" 
      className="py-16 bg-white print:py-8"
      style={{ contentVisibility: 'visible', containIntrinsicSize: '1px 5000px' }}
    >
      <div 
        className="container mx-auto px-4"
        style={{ contentVisibility: 'visible' }}
      >
        <div className="text-center mb-12 print:mb-8">
          <h2 className="text-3xl font-bold mb-4">
            Was unsere Kunden sagen
          </h2>
          <p className="text-gray-600">
            Echte Erfahrungen von Fachleuten
          </p>
        </div>

        <div 
          className="grid md:grid-cols-2 gap-6 print:gap-4"
          style={{ containIntrinsicSize: '1px 5000px', contentVisibility: 'visible' }}
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Memo um unnötige Re-Renders zu verhindern
export default memo(TestimonialSection);
