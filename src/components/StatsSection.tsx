
import React from 'react';
import { Card } from "@/components/ui/card";
import { Users, TrendingUp, Award, Target } from "lucide-react";

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, value, label }) => {
  return (
    <Card className="p-6 card-shadow border border-brand-blue/10 flex flex-col items-center text-center">
      <div className="p-3 bg-brand-blue/10 rounded-full mb-4">{icon}</div>
      <h3 className="text-3xl font-bold mb-1 text-brand-darkText">{value}</h3>
      <p className="text-gray-600">{label}</p>
    </Card>
  );
};

const StatsSection: React.FC = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-brand-lightBg">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">
            Resultados que <span className="gradient-text">Impressionam</span>
          </h2>
          <p className="section-subtitle">
            Nossa abordagem baseada em dados tem transformado negócios com resultados mensuráveis e crescimento escalável.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            icon={<Users className="h-6 w-6 text-brand-blue" />}
            value="10K+"
            label="Clientes Alcançados"
          />
          <StatCard
            icon={<TrendingUp className="h-6 w-6 text-brand-blue" />}
            value="350%"
            label="Aumento Médio em ROI"
          />
          <StatCard
            icon={<Award className="h-6 w-6 text-brand-blue" />}
            value="15+"
            label="Prêmios da Indústria"
          />
          <StatCard
            icon={<Target className="h-6 w-6 text-brand-blue" />}
            value="98%"
            label="Taxa de Satisfação"
          />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
