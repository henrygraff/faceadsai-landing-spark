
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const FacebookAds = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Facebook Ads</h1>
        
        <div className="prose max-w-none">
          <section className="mb-12">
            <p className="text-lg text-gray-700 mb-6">
              Maximize seu retorno sobre investimento com nossas campanhas de Facebook Ads otimizadas por IA. Nossa equipe utiliza tecnologia avançada e estratégias comprovadas para atingir seu público-alvo com precisão.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">Nossos Serviços Incluem:</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>Configuração e otimização de campanhas</li>
              <li>Segmentação avançada de público</li>
              <li>Criação de anúncios persuasivos</li>
              <li>Monitoramento em tempo real</li>
              <li>Relatórios detalhados de performance</li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FacebookAds;
