import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Star, Users, Award, Clock, BarChart } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-beige-50 text-black overflow-hidden" id="hero">
      {/* Hintergrund-Effekte */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-400/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-beige-100/20 rounded-full blur-[120px]" />
      </div>

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle at center, rgba(45,212,191,0.15) 1px, transparent 1px)',
          backgroundSize: '28px 28px'
        }} 
      />

      {/* Hauptinhalt */}
      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Linke Spalte - Content */}
          <div className="relative z-10">
            {/* Headline */}
            <div className="mb-10">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="block mb-2">Planbar mehr</span>
                <span className="block mb-2">qualifizierte</span>
                <span className="block text-teal-600">Bewerber</span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg text-black mb-14 max-w-xl leading-relaxed">
              Wir bringen die richtigen Mitarbeiter, senken Ihre Kosten und sorgen für langfristigen Erfolg
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-5 mb-14">
              {[
                { icon: Award, value: '94%', label: 'Erfolgsrate' },
                { icon: Clock, value: '48h', label: 'Prozessstart' },
                { icon: BarChart, value: '60%', label: 'Kostenersparnis' }
              ].map((stat, i) => (
                <div key={i} className="bg-white rounded-xl p-5 shadow-md border border-beige-100">
                  <stat.icon className="w-6 h-6 text-teal-500 mb-2" />
                  <div className="text-2xl font-bold text-black">{stat.value}</div>
                  <div className="text-sm text-teal-600">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="flex flex-wrap items-center gap-6">
              <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-6 text-lg font-medium rounded-xl shadow-lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                <span>Prozess optimieren</span>
                <ArrowUpRight className="w-5 h-5" />
              </Button>
              <a 
                href="#testimonials" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-teal-600 hover:text-teal-700 flex items-center gap-2 font-medium"
              >
                <Star className="w-5 h-5 text-teal-500" />
                <span>Referenzen ansehen</span>
              </a>
            </div>
          </div>

          {/* Rechte Spalte - Visual */}
          <div className="relative hidden lg:block">
            <div className="relative flex justify-center items-center">
              {/* Haupt-Visual */}
              <div className="relative aspect-square max-w-md w-full">
                {/* Ring */}
                <div className="absolute inset-0 border-[3px] border-beige-100 rounded-full">
                  <div className="absolute -top-2 -left-2 w-4 h-4 bg-teal-500 rounded-full" />
                </div>
                
                {/* Innerer Ring */}
                <div className="absolute inset-10 border-[3px] border-beige-100 rounded-full">
                  <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-teal-400 rounded-full" />
                </div>
                
                {/* Zentrum */}
                <div className="absolute inset-20 bg-white rounded-full border border-beige-100 shadow-xl flex items-center justify-center">
                  <Users className="w-20 h-20 text-teal-500" />
                </div>

                {/* Cards */}
                <div className="absolute -top-6 right-16 bg-white p-4 rounded-xl shadow-lg border border-beige-100 rotate-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center">
                      <Award className="w-4 h-4 text-teal-600" />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-teal-600">Garantierte Qualität</div>
                      <div className="text-sm font-bold text-black">94% Erfolgsrate</div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-10 -right-6 bg-white p-4 rounded-xl shadow-lg border border-beige-100 -rotate-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center">
                      <Clock className="w-4 h-4 text-teal-600" />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-teal-600">Express-Start</div>
                      <div className="text-sm font-bold text-black">48h Prozessstart</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Unterer Bereich */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-beige-200 to-transparent" />
    </div>
  );
};

export default HeroSection;
