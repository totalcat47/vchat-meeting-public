"use client";
import React from 'react';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-8 px-4">
      <div className="container mx-auto text-center">
        <div className="flex justify-center items-center space-x-2 mb-4">
          <Heart className="w-6 h-6 text-indigo-500" />
          <span className="text-gray-700">@VideoChat Meeting. Всі права захищені</span>
        </div>
      </div>
    </footer>
  );
} 