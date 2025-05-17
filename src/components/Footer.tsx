
import React from 'react';
import { Instagram, Facebook, Linkedin, Twitter } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-deepBlue text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">FaceAdsAI</h3>
            <p className="text-gray-300 mb-4">
              Transformando negócios através de soluções inovadoras de marketing digital potencializadas por IA.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-brand-pink transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-brand-pink transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-brand-pink transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-brand-pink transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Gestão de Redes Sociais</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Facebook Ads</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Marketing de Influência</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">SEO</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Análise de Dados</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">Sobre</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Depoimentos</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">
                Rua Pedro Francisco Teles, 53, São Roque
                <br />Bahia - BA, CEP: 43850-500
              </li>
              <li className="text-gray-300">(71) 99147-6462</li>
              <li className="text-gray-300">contato@faceadsai.wvmkdigital.com.br</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} FaceAdsAI - WVMK Digital. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Termos de Serviço</a>
              <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Política de Privacidade</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
