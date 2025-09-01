"use client";
import React from 'react';
import { Button } from "@/components/ui/button";
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';

interface HeroProps {
  scrollToSection: (id: string) => void;
}

export default function Hero({ scrollToSection }: HeroProps) {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto text-center max-w-5xl">
        <h1 className="text-4xl md:text-5xl mb-2 text-indigo-800">
          Запрошуємо приєднатися до команди у сфері відеоспілкування!
        </h1>
        <h2 className="text-2xl md:text-3xl mb-6 text-indigo-600">
          Гнучкий графік, високий дохід та повна безпека. Працюй з дому.
        </h2>
        <div className="mb-12">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1645104787913-aeb889b0e190?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Працюю за ноутбуком"
            className="rounded-2xl shadow-lg mx-auto w-full max-w-2xl h-64 md:h-80 object-cover"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={() => scrollToSection('salary')}
            size="lg"
            variant="outline" 
            className="border-indigo-400 text-indigo-600 hover:bg-indigo-50 px-8 py-3 text-lg"
          >
            Дізнатися умови роботи 
          </Button>
 
          <Button 
            onClick={() => scrollToSection('contact')}
            size="lg"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 text-lg"
          >
            Подати заявку зараз
          </Button>
        </div>
      </div>
    </section>
  );
} 