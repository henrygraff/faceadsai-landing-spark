
import React from 'react';
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialProps {
  content: string;
  author: string;
  position: string;
  company: string;
  stars: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ content, author, position, company, stars }) => {
  return (
    <Card className="p-8 card-shadow border border-brand-blue/10">
      <div className="flex mb-4">
        {Array.from({ length: stars }).map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-brand-blue text-brand-blue" />
        ))}
      </div>
      <p className="text-gray-700 mb-6 italic">"{content}"</p>
      <div>
        <h4 className="font-bold text-brand-darkText">{author}</h4>
        <p className="text-sm text-gray-600">{position}, {company}</p>
      </div>
    </Card>
  );
};

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">
            O Que Nossos <span className="gradient-text">Clientes Dizem</span>
          </h2>
          <p className="section-subtitle">
            A satisfação dos nossos clientes é nosso maior indicador de sucesso.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Testimonial
            content="A FaceAdsAI transformou completamente nossa presença digital. Em apenas 3 meses, nossas conversões aumentaram 200% e nosso ROI disparou. Melhor investimento que fizemos!"
            author="Carlos Silva"
            position="CEO"
            company="TechSolution"
            stars={5}
          />
          <Testimonial
            content="A estratégia de marketing usando IA realmente nos diferenciou da concorrência. A equipe é extremamente profissional e os resultados falam por si mesmos."
            author="Ana Oliveira"
            position="Diretora de Marketing"
            company="Moda Express"
            stars={5}
          />
          <Testimonial
            content="Trabalhamos com várias agências antes, mas nenhuma entregou resultados como a FaceAdsAI. Sua abordagem baseada em dados e IA é revolucionária."
            author="Roberto Santos"
            position="Proprietário"
            company="Café Aroma"
            stars={4}
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
