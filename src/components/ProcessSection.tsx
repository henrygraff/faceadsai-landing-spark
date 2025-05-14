
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Search, BarChart, Target, Settings } from "lucide-react";

interface ProcessStepProps {
  icon: React.ReactNode;
  number: string;
  title: string;
  description: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ icon, number, title, description }) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 items-start animate-fade-in">
      <div className="flex-shrink-0">
        <div className="w-16 h-16 bg-brand-blue text-white rounded-full flex items-center justify-center text-xl font-bold relative">
          <span>{number}</span>
          <div className="absolute -right-2 -top-2 p-2 bg-white rounded-full shadow-md">
            {icon}
          </div>
        </div>
      </div>
      <div>
        <Badge className="mb-2 bg-brand-blue/10 text-brand-blue hover:bg-brand-blue/20">Etapa {number}</Badge>
        <h3 className="text-xl font-bold mb-2 text-brand-darkText">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="section-padding bg-brand-lightBg">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Nossa <span className="gradient-text">Metodologia</span>
          </h2>
          <p className="section-subtitle">
            Utilizamos um processo estratégico e baseado em dados para garantir resultados excepcionais para nossos clientes.
          </p>
        </div>
        <div className="space-y-16">
          <ProcessStep
            icon={<Search className="h-5 w-5 text-brand-blue" />}
            number="1"
            title="Análise e Descoberta"
            description="Analisamos seu negócio, concorrentes e mercado para entender completamente seu cenário atual e oportunidades de crescimento."
          />
          <ProcessStep
            icon={<Settings className="h-5 w-5 text-brand-blue" />}
            number="2"
            title="Estratégia Personalizada"
            description="Desenvolvemos uma estratégia sob medida com base nos insights coletados, alinhada aos seus objetivos de negócio e público-alvo."
          />
          <ProcessStep
            icon={<Target className="h-5 w-5 text-brand-blue" />}
            number="3"
            title="Implementação e Otimização"
            description="Executamos as estratégias definidas com foco em eficiência e resultados, ajustando continuamente para maximizar o desempenho."
          />
          <ProcessStep
            icon={<BarChart className="h-5 w-5 text-brand-blue" />}
            number="4"
            title="Análise de Resultados"
            description="Monitoramos, medimos e reportamos os resultados com transparência, usando dados para impulsionar melhorias contínuas."
          />
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
