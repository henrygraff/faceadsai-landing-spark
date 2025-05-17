import React from 'react';
import { Card } from "@/components/ui/card";
import { Instagram, Target, Users, TrendingUp, BarChart, MessageSquare } from "lucide-react";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <Card className="p-8 card-shadow border border-brand-blue/10 hover:border-brand-blue/30 transition-all group">
      <div className="p-3 bg-brand-blue/10 rounded-full inline-block mb-5 group-hover:bg-brand-blue/20 transition-all">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-brand-darkText">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Card>
  );
};

const ServiceSection: React.FC = () => {
  const services = [
    {
      icon: <Instagram className="h-6 w-6 text-brand-blue" />,
      title: "Gestão de Redes Sociais",
      description: "Criamos e gerenciamos conteúdo engajador para suas plataformas sociais, aumentando seu alcance e interação.",
    },
    {
      icon: <Target className="h-6 w-6 text-brand-blue" />,
      title: "Campanhas de Facebook Ads",
      description: "Desenvolvemos campanhas altamente segmentadas para atrair clientes qualificados e aumentar suas conversões.",
    },
    {
      icon: <Users className="h-6 w-6 text-brand-blue" />,
      title: "Marketing de Influência",
      description: "Conectamos sua marca com os influenciadores certos para amplificar sua mensagem e credibilidade.",
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-brand-blue" />,
      title: "SEO e Tráfego Orgânico",
      description: "Otimizamos sua presença online para melhorar seu posicionamento nos mecanismos de busca.",
    },
    {
      icon: <BarChart className="h-6 w-6 text-brand-blue" />,
      title: "Análise de Dados e IA",
      description: "Utilizamos inteligência artificial para analisar dados e otimizar suas estratégias de marketing continuamente.",
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-brand-blue" />,
      title: "Consultoria Estratégica",
      description: "Oferecemos orientação especializada para desenvolver estratégias eficazes de marketing digital.",
    },
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">Nossos <span className="gradient-text">Serviços</span></h2>
          <p className="section-subtitle">
            Oferecemos soluções completas de marketing digital com foco em resultados mensuráveis para seu negócio.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (

              <Card key={index} className="p-8 card-shadow border border-brand-blue/10 hover:border-brand-blue/30 transition-all group">
                <Link 
                  to={`/services/${service.title.toLowerCase().replace(/ /g, '-').normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`}
                  className="block"
                >
                  <div className="p-3 bg-brand-blue/10 rounded-full inline-block mb-5 group-hover:bg-brand-blue/20 transition-all">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-brand-darkText group-hover:text-brand-blue transition-colors">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </Link>
              </Card>
            ))}
          </div>
      </div>
    </section>
  );
};

export default ServiceSection;