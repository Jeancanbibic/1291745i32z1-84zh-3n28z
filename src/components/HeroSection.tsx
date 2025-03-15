import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Star, Users, Sparkles, BarChart, Clock, Award } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-beige-50 text-black overflow-hidden">
      {/* Hintergrund-Effekte */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-400/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-beige-100/20 rounded-full blur-[120px] animate-pulse" />
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
            {/* Headline - neuer Stil wie in AboutSection, aber größer */}
            <div className="mb-10">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="block mb-2">Außergewöhnliche</span>
                <span className="block mb-2">Talente entdecken,</span>
                <span className="block text-teal-600">die Ihr Team stärken</span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-lg text-black mb-14 max-w-xl leading-relaxed">
              Nutzen Sie strategische Social Media Kampagnen und zielgerichtetes Recruiting, 
              um die perfekten Kandidaten für Ihr Unternehmen zu gewinnen – schneller und effizienter.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-5 mb-14">
              {[
                { icon: Award, value: '94%', label: 'Erfolgsquote' },
                { icon: Clock, value: '36h', label: 'Erste Kandidaten' },
                { icon: BarChart, value: '3.2x', label: 'Zeitersparnis' }
              ].map((stat, i) => (
                <div key={i} className="relative group">
                  <div className="absolute inset-0 bg-white rounded-xl group-hover:scale-105 transition-all duration-300" />
                  <div className="relative bg-white rounded-xl p-5 shadow-md group-hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center border border-beige-100">
                    <stat.icon className="w-6 h-6 text-teal-500 mb-2" />
                    <div className="text-2xl font-bold text-black">{stat.value}</div>
                    <div className="text-sm text-teal-600">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="flex flex-wrap items-center gap-6">
              <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-6 text-lg font-medium rounded-xl transition-all duration-300 flex items-center gap-2 group shadow-lg shadow-teal-500/10 hover:shadow-teal-500/20">
                <span>Jetzt durchstarten</span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </Button>
              <a href="#" className="text-teal-600 hover:text-teal-700 transition-colors duration-300 flex items-center gap-2 font-medium">
                <Star className="w-5 h-5 text-teal-500" />
                <span>Erfolgsgeschichten</span>
              </a>
            </div>
          </div>

          {/* Rechte Spalte - Visual */}
          <div className="relative hidden lg:block">
            <div className="relative flex justify-center items-center">
              {/* Haupt-Visual */}
              <div className="relative aspect-square max-w-md w-full">
                {/* Animierter Ring */}
                <div className="absolute inset-0 border-[3px] border-beige-100 rounded-full animate-[spin_30s_linear_infinite] after:content-[''] after:absolute after:-top-2 after:-left-2 after:w-4 after:h-4 after:bg-teal-500 after:rounded-full" />
                
                {/* Innerer Ring */}
                <div className="absolute inset-10 border-[3px] border-beige-100 rounded-full animate-[spin_20s_linear_infinite_reverse] after:content-[''] after:absolute after:-bottom-2 after:-right-2 after:w-4 after:h-4 after:bg-teal-400 after:rounded-full" />
                
                {/* Zentrum */}
                <div className="absolute inset-20 bg-white rounded-full border border-beige-100 shadow-xl flex items-center justify-center group transition-all duration-500 hover:shadow-2xl">
                  <Users className="w-20 h-20 text-teal-500 transition-transform duration-300 group-hover:scale-110" />
                </div>

                {/* Floating Cards */}
                <div className="absolute -top-6 right-16 bg-white p-4 rounded-xl shadow-lg border border-beige-100 transform rotate-3 animate-[float_4s_ease-in-out_infinite]">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center">
                      <Award className="w-4 h-4 text-teal-600" />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-teal-600">Top-Qualität</div>
                      <div className="text-sm font-bold text-black">94% Vermittlungsrate</div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-10 -right-6 bg-white p-4 rounded-xl shadow-lg border border-beige-100 transform -rotate-6 animate-[float_5s_ease-in-out_infinite_0.5s]">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center">
                      <Clock className="w-4 h-4 text-teal-600" />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-teal-600">Schnelle Lösung</div>
                      <div className="text-sm font-bold text-black">3.2x schneller besetzt</div>
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
