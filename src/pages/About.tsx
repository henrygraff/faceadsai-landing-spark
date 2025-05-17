
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MapPin, Phone, Mail } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Sobre Nós</h1>
        
        <div className="prose max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Quem somos</h2>
            <p className="text-lg text-gray-700 mb-8">
              A faceads.wvmkdigital é uma agência especializada em marketing digital e desenvolvimento 
              de soluções tecnológicas para empresas que buscam expandir sua presença online. Nossa 
              equipe multidisciplinar trabalha com foco em resultados mensuráveis, aplicando as melhores 
              práticas de mercado para garantir o sucesso dos nossos clientes.
            </p>
          </section>

          <section className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-md">
              <div className="p-3 bg-brand-blue/10 text-brand-blue rounded-full">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Endereço</h3>
                <p className="text-gray-600">
                  Rua Pedro Francisco Teles, 53<br />
                  São Roque, São Sebastião do Passé - BA<br />
                  CEP: 43850-000
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-md">
              <div className="p-3 bg-brand-blue/10 text-brand-blue rounded-full">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Telefone</h3>
                <p className="text-gray-600">(71) 99147-6462</p>
                <p className="text-gray-600">(71) 99103-9427</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-md">
              <div className="p-3 bg-brand-blue/10 text-brand-blue rounded-full">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">E-mail</h3>
                <p className="text-gray-600">contato@faceads.wvmkdigital.com.br</p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
