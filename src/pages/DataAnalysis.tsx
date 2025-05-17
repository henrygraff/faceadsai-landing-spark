
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const DataAnalysis = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Análise de Dados</h1>
        
        <div className="prose max-w-none">
          <section className="mb-12">
            <p className="text-lg text-gray-700 mb-6">
              Transforme dados em insights acionáveis com nossa análise avançada. Nossa equipe utiliza ferramentas modernas e técnicas estatísticas para ajudar você a tomar decisões baseadas em dados.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">Nossos Serviços Incluem:</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>Análise de comportamento do usuário</li>
              <li>Rastreamento de conversões</li>
              <li>Análise de ROI</li>
              <li>Relatórios personalizados</li>
              <li>Recomendações estratégicas</li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DataAnalysis;
