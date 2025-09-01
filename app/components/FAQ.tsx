"use client";
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Чи потрібно знати англійську?",
    answer: "Знання англійської буде перевагою, але не є обов'язковим. Більшість співрозмовників — з-за кордону, проте в чаті працює ШІ-перекладач, який знімає мовний бар'єр."
  },
  {
    question: "Чи безпечно працювати у відеочаті?",
    answer: "Так. Ми гарантуємо повну конфіденційність та безпеку. Адміністрація контролює процес і стежить за дотриманням правил. Ваші особисті дані залишаються закритими."
  },
  {
    question: "Чи потрібен офіс?",
    answer: "Ні, робота повністю дистанційна. Ви можете працювати з дому або з будь-якого зручного місця."
  },
  {
    question: "Коли я отримаю першу зарплату?",
    answer: "Вже після першого тижня роботи. Виплати здійснюються щотижня."
  },
  {
    question: "Чи є випробувальний період?",
    answer: "Так, перші 2 тижні ми допомагаємо вам адаптуватися: навчання, поради та підтримка для швидкого старту. Але головне — підтримка та консультації доступні протягом усього часу співпраці. Ви завжди можете звернутися до нашої команди."
  }
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="faq" className="py-16 px-4 bg-white/50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl text-center mb-12 text-indigo-800">
          Часті питання
        </h2>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((item, index) => (
            <Card 
              key={index} 
              className="border-gray-200 hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => toggleItem(index)}
            >
              <CardContent className="p-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium text-indigo-800 pr-4">
                    {item.question}
                  </h3>
                  {openItems.includes(index) ? (
                    <ChevronUp className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                  )}
                </div>
                
                {openItems.includes(index) && (
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-gray-700 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 