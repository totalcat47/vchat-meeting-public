"use client";
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  CircleDollarSign,
  Home,
  Calendar1,
  Rocket
} from 'lucide-react';

export default function Benefits() {
  return (
    <section className="py-16 px-4 bg-white/50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl text-center mb-12 text-indigo-800">
          Переваги роботи
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-gray-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <CircleDollarSign className="w-8 h-8 text-teal-500 mx-auto mb-3" />
              <h3 className="text-base mb-1 text-indigo-800">Стабільний дохід — від 30 000 грн/місяць + бонуси</h3>
            </CardContent>
          </Card>
          
          <Card className="border-gray-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <Home className="w-8 h-8 text-teal-500 mx-auto mb-3" />
              <h3 className="text-base mb-1 text-indigo-800">Робота дистанційна — все, що потрібно, це ноутбук</h3>
            </CardContent>
          </Card>
          
          <Card className="border-gray-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <Calendar1 className="w-8 h-8 text-teal-500 mx-auto mb-3" />
              <h3 className="text-base mb-1 text-indigo-800">Зручний графік — обирай, коли зручно виходити онлайн</h3>
            </CardContent>
          </Card>
          
          <Card className="border-gray-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <Rocket className="w-8 h-8 text-teal-500 mx-auto mb-3" />
              <h3 className="text-base mb-1 text-indigo-800">Швидкий старт — навчання і підтримка з першого дня</h3>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
} 