
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Política de Privacidade</h1>
        
        <div className="prose max-w-none">
          <p className="mb-6">Última atualização: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Informações que Coletamos</h2>
            <p className="mb-4">Coletamos informações que você nos fornece diretamente ao utilizar nossos serviços, incluindo:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Nome e informações de contato</li>
              <li>Informações de perfil profissional</li>
              <li>Dados de uso e interação com nossos serviços</li>
              <li>Informações técnicas do dispositivo e navegador</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Como Utilizamos suas Informações</h2>
            <p className="mb-4">Utilizamos suas informações para:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Fornecer e melhorar nossos serviços</li>
              <li>Personalizar sua experiência</li>
              <li>Comunicar-nos com você sobre atualizações e ofertas</li>
              <li>Garantir a segurança de nossa plataforma</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Compartilhamento de Informações</h2>
            <p className="mb-4">Não vendemos suas informações pessoais. Compartilhamos informações apenas:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Com seu consentimento</li>
              <li>Com prestadores de serviços terceirizados</li>
              <li>Quando exigido por lei</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Seus Direitos</h2>
            <p className="mb-4">Você tem direito a:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Acessar seus dados pessoais</li>
              <li>Corrigir dados incorretos</li>
              <li>Solicitar a exclusão de seus dados</li>
              <li>Retirar seu consentimento</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Contato</h2>
            <p className="mb-4">Para questões sobre privacidade, entre em contato:</p>
            <p>Email: privacy@faceadsai.wvmkdigital.com.br</p>
            <p>Telefone: (71) 99147-6462</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
