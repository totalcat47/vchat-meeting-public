"use client";
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Salary from './components/Salary';
import Benefits from './components/Benefits';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-gray-50 to-gray-100">
      <Header scrollToSection={scrollToSection} />
      <Hero scrollToSection={scrollToSection} />
      <Salary />
      <Benefits />
      <FAQ />
      <Contact scrollToSection={scrollToSection} />
      <Footer />
    </div>
  );
}
