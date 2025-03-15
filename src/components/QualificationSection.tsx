import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { 
  CheckCircle2, 
  ChevronRight,
  ChevronUp,
  LucideIcon, 
  Users, 
  Trophy, 
  Target,
  Sparkles,
  Star,
  Zap,
  Award,
  Rocket,
  Heart,
  Lightbulb,
  ArrowRight,
  Circle,
  Gem,
  Crown,
  Shield
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from 'framer-motion';

// Moderne Floating Element Komponente
const FloatingElement = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ y: 0 }}
    animate={{ 
      y: [-10, 10, -10],
      rotate: [-2, 2, -2],
    }}
    transition={{ 
      duration: 6,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  >
    {children}
  </motion.div>
);

// Moderne Progress Indicator
const ProgressIndicator = ({ progress, isActive }: { progress: number, isActive: boolean }) => (
  <div className="relative w-full h-1.5">
    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-slate-100/50 to-slate-200/50 overflow-hidden">
      <motion.div 
        className="absolute inset-y-0 left-0 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-violet-500 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
      {isActive && (
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          animate={{ x: ['0%', '100%'] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
      )}
    </div>
  </div>
);

type StepData = {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  questions: {
    id: string;
    question: string;
    options?: {
      value: string;
      label: string;
    }[];
    type: 'radio' | 'input';
  }[];
};

const QualificationSection = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isComplete, setIsComplete] = useState(false);
  const [isCompleting, setIsCompleting] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const steps: StepData[] = [
    {
      title: "Persönliche Details",
      subtitle: "Erzählen Sie uns von Ihren Zielen",
      icon: Crown,
      questions: [
        {
          id: "name",
          question: "Wie dürfen wir Sie nennen?",
          type: "input"
        },
        {
          id: "email",
          question: "Ihre E-Mail für exklusive Updates",
          type: "input"
        },
        {
          id: "experience",
          question: "Ihre bisherige Expertise",
          options: [
            { value: "starter", label: "Ich starte gerade durch" },
            { value: "growing", label: "Ich entwickle mich weiter" },
            { value: "advanced", label: "Ich bin bereits etabliert" },
            { value: "expert", label: "Ich bin Branchen-Experte" }
          ],
          type: "radio"
        }
      ]
    },
    {
      title: "Ihre Vision",
      subtitle: "Definieren Sie Ihre Ziele",
      icon: Gem,
      questions: [
        {
          id: "goals",
          question: "Was möchten Sie primär erreichen?",
          options: [
            { value: "visibility", label: "Mehr Sichtbarkeit & Reichweite" },
            { value: "authority", label: "Experten-Status aufbauen" },
            { value: "leads", label: "Qualifizierte Leads generieren" },
            { value: "brand", label: "Persönliche Marke entwickeln" }
          ],
          type: "radio"
        },
        {
          id: "timeline",
          question: "Ihr gewünschter Zeitrahmen",
          options: [
            { value: "fast", label: "Schnelle Resultate (1-3 Monate)" },
            { value: "balanced", label: "Ausgewogen (3-6 Monate)" },
            { value: "sustainable", label: "Nachhaltig (6-12 Monate)" }
          ],
          type: "radio"
        }
      ]
    },
    {
      title: "Ihr Potenzial",
      subtitle: "Entdecken Sie Ihre Stärken",
      icon: Shield,
      questions: [
        {
          id: "strengths",
          question: "Ihre größte Stärke",
          options: [
            { value: "innovation", label: "Innovative Lösungen" },
            { value: "expertise", label: "Fachliche Expertise" },
            { value: "communication", label: "Kommunikationsstärke" },
            { value: "leadership", label: "Führungsqualitäten" }
          ],
          type: "radio"
        },
        {
          id: "focus",
          question: "Ihr Fokusbereich",
          options: [
            { value: "social", label: "Social Media Präsenz" },
            { value: "content", label: "Content Creation" },
            { value: "network", label: "Netzwerk Aufbau" },
            { value: "speaking", label: "Öffentliche Auftritte" }
          ],
          type: "radio"
        }
      ]
    }
  ];

  const isStepComplete = () => {
    const currentQuestions = steps[currentStep].questions;
    return currentQuestions.every(q => answers[q.id] && answers[q.id].trim() !== '');
  };

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      completeQualification();
    }
  };

  const completeQualification = () => {
    setIsCompleting(true);
    setTimeout(() => {
      setIsComplete(true);
      setIsCompleting(false);
      toast({
        title: "Qualifikation erfolgreich!",
        description: "Wir analysieren Ihre Informationen und melden uns in Kürze bei Ihnen.",
      });
    }, 1500);
  };

  return (
    <motion.div 
      id="qualification" 
      ref={sectionRef}
      className="min-h-screen py-20 relative bg-gradient-to-b from-slate-50 via-white to-slate-50/80 overflow-hidden"
    >
      {/* Hintergrund-Effekte */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(120,50,255,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(255,80,200,0.05),transparent_50%)]" />
      </div>

      {/* Dekorative Elemente */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingElement delay={0}>
          <div className="absolute top-20 left-[15%] w-64 h-64 bg-gradient-to-br from-violet-500/5 to-fuchsia-500/5 rounded-full blur-3xl" />
        </FloatingElement>
        <FloatingElement delay={2}>
          <div className="absolute top-40 right-[10%] w-96 h-96 bg-gradient-to-bl from-fuchsia-500/5 to-violet-500/5 rounded-full blur-3xl" />
        </FloatingElement>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header Bereich */}
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center px-6 py-3 mb-8 rounded-2xl bg-white shadow-xl shadow-violet-500/5 border border-slate-100"
            whileHover={{ y: -2, boxShadow: "0 25px 30px -8px rgba(120,50,255,0.1)" }}
          >
            <Gem size={20} className="mr-3 text-violet-500" />
            <span className="font-medium text-base tracking-wide bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
              Premium Qualifikation
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-violet-900 via-violet-700 to-fuchsia-700 bg-clip-text text-transparent tracking-tight"
          >
            Entfalten Sie Ihr <br/>
            volles Potenzial
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl text-slate-600 font-light"
          >
            Starten Sie Ihre persönliche Erfolgsgeschichte mit <br/>
            unserem exklusiven Qualifikationsprozess
          </motion.p>
        </motion.div>

        {/* Hauptbereich */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {!isComplete ? (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="relative"
              >
                {/* Steps Navigation */}
                <div className="mb-16">
                  <div className="flex items-start justify-between relative">
                    {steps.map((step, idx) => (
                      <motion.div
                        key={idx}
                        className="flex flex-col items-center relative"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <motion.div
                          className={cn(
                            "w-16 h-16 rounded-2xl flex items-center justify-center relative mb-4",
                            "transition-all duration-300",
                            idx < currentStep 
                              ? "bg-gradient-to-br from-violet-500 to-fuchsia-600 text-white" 
                              : idx === currentStep 
                                ? "bg-gradient-to-br from-violet-100 to-fuchsia-100 text-violet-700" 
                                : "bg-white text-slate-400"
                          )}
                          whileHover={{ scale: 1.05 }}
                        >
                          {idx < currentStep ? (
                            <CheckCircle2 size={24} />
                          ) : (
                            React.createElement(step.icon, { size: 24 })
                          )}
                          
                          {idx === currentStep && (
                            <motion.div
                              className="absolute -inset-1 rounded-2xl border-2 border-violet-200"
                              animate={{ scale: [1, 1.1, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            />
                          )}
                        </motion.div>

                        <div className="text-center">
                          <p className={cn(
                            "font-medium transition-colors duration-200",
                            idx === currentStep ? "text-violet-800" : "text-slate-500"
                          )}>
                            {step.title}
                          </p>
                        </div>

                        {idx < steps.length - 1 && (
                          <div className="absolute left-[120%] top-8 w-[140%] -translate-x-1/2">
                            <ProgressIndicator 
                              progress={idx < currentStep ? 100 : idx === currentStep ? 50 : 0}
                              isActive={idx === currentStep}
                            />
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Questions */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-8"
                  >
                    {steps[currentStep].questions.map((q, qIndex) => (
                      <motion.div
                        key={q.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: qIndex * 0.1 }}
                        className="bg-white rounded-2xl p-8 shadow-lg shadow-violet-500/5"
                      >
                        <Label 
                          htmlFor={q.id} 
                          className="text-lg font-medium mb-6 block text-violet-900"
                        >
                          {q.question}
                        </Label>
                        
                        {q.type === 'input' ? (
                          <motion.div whileHover={{ scale: 1.01 }}>
                            <Input
                              id={q.id}
                              value={answers[q.id] || ''}
                              onChange={(e) => setAnswers(prev => ({ ...prev, [q.id]: e.target.value }))}
                              className="bg-slate-50 border-slate-200 focus:border-violet-400 focus:ring-violet-400/30"
                              placeholder="Ihre Antwort..."
                            />
                          </motion.div>
                        ) : (
                          <RadioGroup 
                            value={answers[q.id]}
                            onValueChange={(value) => setAnswers(prev => ({ ...prev, [q.id]: value }))}
                            className="grid sm:grid-cols-2 gap-4"
                          >
                            {q.options?.map((option, optIndex) => (
                              <motion.div
                                key={option.value}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: optIndex * 0.1 }}
                              >
                                <label className="flex items-center space-x-3 p-4 rounded-xl bg-slate-50 hover:bg-violet-50 cursor-pointer transition-colors">
                                  <RadioGroupItem 
                                    id={`${q.id}-${option.value}`}
                                    value={option.value}
                                    className="text-violet-600"
                                  />
                                  <span className="font-medium text-slate-700">
                                    {option.label}
                                  </span>
                                </label>
                              </motion.div>
                            ))}
                          </RadioGroup>
                        )}
                      </motion.div>
                    ))}

                    <motion.div 
                      className="flex justify-between pt-8"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <Button
                        variant="outline"
                        onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}
                        disabled={currentStep === 0}
                        className="text-slate-600"
                      >
                        <ChevronRight className="mr-2 h-4 w-4 rotate-180" />
                        Zurück
                      </Button>

                      <Button
                        onClick={handleNextStep}
                        disabled={!isStepComplete() || isCompleting}
                        className={cn(
                          "bg-gradient-to-r from-violet-600 to-fuchsia-600",
                          "hover:from-violet-700 hover:to-fuchsia-700",
                          "text-white shadow-lg shadow-violet-500/25",
                          "disabled:from-slate-400 disabled:to-slate-500"
                        )}
                      >
                        {isCompleting ? (
                          <>
                            <ChevronUp className="mr-2 h-4 w-4 animate-spin" />
                            Verarbeitung...
                          </>
                        ) : (
                          <>
                            {currentStep < steps.length - 1 ? "Weiter" : "Abschließen"}
                            <ChevronRight className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-3xl p-16 text-center shadow-2xl shadow-violet-500/10"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.2 }}
                  className="w-20 h-20 mx-auto mb-8 relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-full opacity-20 animate-pulse" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Trophy className="h-10 w-10 text-violet-600" />
                  </div>
                </motion.div>

                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-2xl font-bold mb-4 bg-gradient-to-r from-violet-700 to-fuchsia-700 bg-clip-text text-transparent"
                >
                  Herzlichen Glückwunsch!
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-slate-600 mb-8"
                >
                  Ihr Qualifikationsprozess wurde erfolgreich abgeschlossen. <br/>
                  Wir analysieren Ihre Informationen und melden uns innerhalb von 24 Stunden bei Ihnen.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Button
                    onClick={() => {
                      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-500/25 hover:from-violet-700 hover:to-fuchsia-700"
                  >
                    <Heart className="mr-2 h-4 w-4" />
                    Zum Kontaktbereich
                  </Button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default QualificationSection;
