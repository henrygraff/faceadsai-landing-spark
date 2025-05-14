
import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="bg-gradient-to-b from-brand-lightBg to-white section-padding">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
              Marketing Digital <span className="gradient-text">Potencializado por IA</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Transformamos sua presença nas redes sociais com estratégias avançadas e tecnologia de inteligência artificial para maximizar seu ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary flex items-center gap-2">
                Iniciar Agora <ChevronRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue/5">
                Saiba Mais
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-brand-blue/10 rounded-full filter blur-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-brand-pink/10 rounded-full filter blur-xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000" 
                alt="Marketing Digital" 
                className="relative z-10 rounded-xl shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
