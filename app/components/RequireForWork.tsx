"use client";
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  User,
  MessageCircle,
  Heart
} from 'lucide-react';

export default function RequireForWork() {
  return (
    <section id="requirements" className="py-16 px-4 bg-gradient-to-r from-indigo-100 to-teal-100">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl text-center mb-12 text-indigo-800">
          Вимоги до кандидатів
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="border-gray-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <User className="w-8 h-8 text-teal-500 mx-auto mb-3" />
              <h3 className="text-lg font-medium mb-2 text-indigo-800">Вік</h3>
              <p className="text-gray-700">від 18 до 45 років</p>
            </CardContent>
          </Card>
          
          <Card className="border-gray-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <Heart className="w-8 h-8 text-teal-500 mx-auto mb-3" />
              <h3 className="text-lg font-medium mb-2 text-indigo-800">Зовнішність</h3>
              <p className="text-gray-700">Презентабельний вигляд, приємна мова</p>
            </CardContent>
          </Card>
          
          <Card className="border-gray-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <MessageCircle className="w-8 h-8 text-teal-500 mx-auto mb-3" />
              <h3 className="text-lg font-medium mb-2 text-indigo-800">Комунікація</h3>
              <p className="text-gray-700">Вміння підтримати розмову та створювати позитивну атмосферу</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
