
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';

const LearnMore = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Descubra o Poder do Marketing Digital</h1>
            
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Por que escolher a FaceAdsAI?</h2>
              <p className="text-lg text-gray-700 mb-6">
                Combinamos expertise em marketing digital com tecnologia de ponta para entregar resultados excepcionais. Nossa abordagem única utiliza inteligência artificial para otimizar suas campanhas e maximizar seu ROI.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Nossos Diferenciais</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-white rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3">Tecnologia Avançada</h3>
                  <p>Utilizamos IA e machine learning para otimizar suas campanhas em tempo real.</p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3">Equipe Especializada</h3>
                  <p>Profissionais certificados com anos de experiência em marketing digital.</p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3">Resultados Comprovados</h3>
                  <p>Histórico de sucesso com centenas de clientes satisfeitos.</p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3">Suporte Dedicado</h3>
                  <p>Acompanhamento personalizado e relatórios detalhados mensais.</p>
                </div>
              </div>
            </section>

            <div className="text-center">
              <Button 
                onClick={() => navigate('/pricing')} 
                className="bg-brand-blue text-white hover:bg-brand-blue/90"
              >
                Ver Nossos Planos
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LearnMore;
