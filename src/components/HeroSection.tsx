
import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useNavigate } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gradient-to-b from-white to-brand-lightBg">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-brand-darkText">
            Marketing Digital Potencializado por <span className="gradient-text">Inteligência Artificial</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Transforme sua presença digital com estratégias inovadoras e resultados comprovados.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => navigate('/pricing')}
              className="btn-primary flex items-center gap-2"
            >
              Iniciar Agora <ChevronRight className="h-4 w-4" />
            </Button>
            <Button 
              variant="outline"
              onClick={() => navigate('/learn-more')}
              className="btn-secondary"
            >
              Saiba Mais
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
