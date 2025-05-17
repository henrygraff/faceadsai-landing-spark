
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Termos de Serviço</h1>
        
        <div className="prose max-w-none">
          <p className="mb-6">Última atualização: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Aceitação dos Termos</h2>
            <p className="mb-4">Ao acessar e usar nossos serviços, você concorda com estes termos de serviço.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Serviços Oferecidos</h2>
            <p className="mb-4">Nossos serviços incluem:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Gestão de Redes Sociais</li>
              <li>Facebook Ads</li>
              <li>Marketing de Influência</li>
              <li>SEO</li>
              <li>Análise de Dados</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Responsabilidades</h2>
            <p className="mb-4">O cliente se compromete a:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Fornecer informações precisas</li>
              <li>Manter sigilo sobre credenciais de acesso</li>
              <li>Respeitar direitos autorais</li>
              <li>Cumprir prazos estabelecidos</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Pagamentos</h2>
            <p className="mb-4">Informações sobre pagamentos e cancelamentos:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Formas de pagamento aceitas</li>
              <li>Prazos e condições</li>
              <li>Política de reembolso</li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
