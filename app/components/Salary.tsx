"use client";
import React from 'react';

export default function Salary() {
  return (
    <section id="salary" className="py-16 px-4 bg-gradient-to-r from-indigo-100 to-teal-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl mb-8 text-indigo-800">
          Умови оплати
        </h2>
        <div className='text-3xl md:text-4xl mb-2 text-gray-600'>Мінімум</div>
        <div className="text-4xl md:text-8xl mb-6 text-indigo-600 font-bold">
          30 000 грн
        </div>
        <div className="text-3xl md:text-4xl mb-8 text-gray-600">на місяць</div>
        
        <div className="max-w-2xl mx-auto space-y-4 text-lg text-gray-700">
          <p>💰 Виплати щотижня</p>
          <p>✨ Додаткові бонуси за активність і комунікабельність</p>
          <p>🎁 Чим більше часу й залученості — тим вищий дохід</p>
        </div>
      </div>
    </section>
  );
} 