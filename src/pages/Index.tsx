
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import ServiceSection from '@/components/ServiceSection';
import ProcessSection from '@/components/ProcessSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import { Toaster } from "@/components/ui/sonner";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Toaster />
      <Navbar />
      <HeroSection />
      <StatsSection />
      <ServiceSection />
      <ProcessSection />
      <TestimonialsSection />
      <CTASection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
