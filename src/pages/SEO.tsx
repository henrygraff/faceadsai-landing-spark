
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const SEO = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">SEO</h1>
        
        <div className="prose max-w-none">
          <section className="mb-12">
            <p className="text-lg text-gray-700 mb-6">
              Melhore sua visibilidade nos mecanismos de busca com nossas estratégias avançadas de SEO. Utilizamos as melhores práticas e técnicas atualizadas para garantir que seu site alcance as primeiras posições.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">Nossos Serviços Incluem:</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>Otimização on-page</li>
              <li>Construção de links</li>
              <li>Pesquisa de palavras-chave</li>
              <li>Otimização técnica</li>
              <li>Análise de concorrentes</li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SEO;
