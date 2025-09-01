"use client";
import React from 'react';
import { Button } from "@/components/ui/button";
import { Heart } from 'lucide-react';

interface HeaderProps {
  scrollToSection: (id: string) => void;
}

export default function Header({ scrollToSection }: HeaderProps) {
  return (
    <header className="sticky top-0 bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Heart className="w-6 h-6 text-indigo-500" />
          <span className="text-indigo-800 font-medium">VideoChat | Meeting</span>
        </div>
        <div className="flex gap-4">
          <Button 
            onClick={() => scrollToSection('contact')} 
            className="bg-indigo-600 hover:bg-indigo-700 text-white"
          >
            Зв&apos;язатися з нами
          </Button>
        </div>
      </div>
    </header>
  );
} 