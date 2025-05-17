import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();
  
  const scrollToSection = (sectionId: string) => {
    if (window.location.pathname !== '/') {
      navigate('/#' + sectionId);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <span className="text-xl font-bold bg-gradient-to-r from-brand-blue to-brand-deepBlue text-transparent bg-clip-text">
              FaceAdsAI
            </span>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-brand-blue font-medium transition-colors">Home</button>
          <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-brand-blue font-medium transition-colors">Serviços</button>
          <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-brand-blue font-medium transition-colors">Sobre</button>
          <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-brand-blue font-medium transition-colors">Depoimentos</button>
          <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-brand-blue font-medium transition-colors">Contato</button>
        </div>

        <div className="hidden md:block">
          <Button className="btn-primary">Fale Conosco</Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden py-4 px-4 bg-white border-t">
          <div className="flex flex-col space-y-3">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-brand-blue font-medium py-2 transition-colors">Home</button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-brand-blue font-medium py-2 transition-colors">Serviços</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-brand-blue font-medium py-2 transition-colors">Sobre</button>
            <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-brand-blue font-medium py-2 transition-colors">Depoimentos</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-brand-blue font-medium py-2 transition-colors">Contato</button>
            <Button className="btn-primary w-full mt-2" onClick={() => setIsMenuOpen(false)}>Fale Conosco</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;