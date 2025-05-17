
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const SocialMediaManagement = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Gestão de Redes Sociais</h1>
        
        <div className="prose max-w-none">
          <section className="mb-12">
            <p className="text-lg text-gray-700 mb-6">
              Nossa equipe especializada em gestão de redes sociais trabalha para criar e manter uma presença digital forte e consistente para sua marca. Utilizamos estratégias personalizadas e as últimas tendências do mercado para garantir o máximo engajamento com seu público-alvo.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">Nossos Serviços Incluem:</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>Planejamento estratégico de conteúdo</li>
              <li>Criação e curadoria de conteúdo</li>
              <li>Gerenciamento de comunidade</li>
              <li>Monitoramento de métricas e análise de resultados</li>
              <li>Relatórios mensais de desempenho</li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SocialMediaManagement;
