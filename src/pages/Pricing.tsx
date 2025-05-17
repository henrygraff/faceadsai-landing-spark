
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Planos e Preços</h1>
            <p className="text-xl text-gray-600">Escolha o plano ideal para o seu negócio</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Plano Básico */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold mb-4">Básico</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">R$497</span>
                <span className="text-gray-600">/mês</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-2">
                  <Check className="text-brand-blue h-5 w-5" />
                  <span>Gestão de 2 redes sociais</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-brand-blue h-5 w-5" />
                  <span>15 posts por mês</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-brand-blue h-5 w-5" />
                  <span>Relatório mensal</span>
                </li>
              </ul>
              <Button className="w-full">Começar Agora</Button>
            </div>

            {/* Plano Profissional */}
            <div className="bg-brand-blue text-white p-8 rounded-xl shadow-lg transform scale-105">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-brand-pink text-white px-4 py-1 rounded-full text-sm">Mais Popular</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Profissional</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">R$997</span>
                <span className="opacity-90">/mês</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-2">
                  <Check className="text-white h-5 w-5" />
                  <span>Gestão de 4 redes sociais</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-white h-5 w-5" />
                  <span>30 posts por mês</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-white h-5 w-5" />
                  <span>Relatório semanal</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-white h-5 w-5" />
                  <span>Suporte prioritário</span>
                </li>
              </ul>
              <Button className="w-full bg-white text-brand-blue hover:bg-gray-100">
                Começar Agora
              </Button>
            </div>

            {/* Plano Enterprise */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">R$1997</span>
                <span className="text-gray-600">/mês</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-2">
                  <Check className="text-brand-blue h-5 w-5" />
                  <span>Gestão de 6 redes sociais</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-brand-blue h-5 w-5" />
                  <span>Posts ilimitados</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-brand-blue h-5 w-5" />
                  <span>Relatório em tempo real</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-brand-blue h-5 w-5" />
                  <span>Gerente dedicado</span>
                </li>
              </ul>
              <Button className="w-full">Começar Agora</Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
