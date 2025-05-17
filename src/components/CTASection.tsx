
import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-brand-blue to-brand-deepBlue text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para transformar seu marketing digital?
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Junte-se a centenas de empresas que estão crescendo com nossas estratégias inovadoras de marketing potencializadas por inteligência artificial.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-brand-blue hover:bg-gray-100 font-bold">
              Agendar Consultoria Gratuita
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white/10"
              onClick={() => window.location.href = '/pricing'}
            >
              Conhecer Planos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
