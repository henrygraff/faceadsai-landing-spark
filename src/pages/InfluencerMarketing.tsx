
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const InfluencerMarketing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Marketing de Influência</h1>
        
        <div className="prose max-w-none">
          <section className="mb-12">
            <p className="text-lg text-gray-700 mb-6">
              Conecte sua marca com os influenciadores certos para amplificar seu alcance e credibilidade. Nossa abordagem estratégica ao marketing de influência garante parcerias autênticas e resultados mensuráveis.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">Nossos Serviços Incluem:</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>Identificação de influenciadores relevantes</li>
              <li>Gestão de parcerias</li>
              <li>Desenvolvimento de campanhas</li>
              <li>Medição de resultados</li>
              <li>Análise de ROI</li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default InfluencerMarketing;
