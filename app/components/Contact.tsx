"use client";
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import emailjs from "emailjs-com";

interface ContactProps {
  scrollToSection: (id: string) => void;
}

export default function Contact({ scrollToSection }: ContactProps) {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      "service_vsj23cb",
      "template_gqhswra",
      {
        name: formData.name,
        phone: formData.phone,
        message: formData.message,
      },
      "L_fWC6OXPQO-CNhoV"
    )
    .then(() => {
      alert("✅ Заявку надіслано! Ми з вами зв'яжемося.");
      setFormData({ name: "", phone: "", message: "" });
    })
    .catch(() => {
      alert("❌ Сталася помилка. Перевір консоль.");
    })
    .finally(() => setLoading(false));
  };

  return (
    <section id="contact" className="py-16 px-4 bg-gradient-to-r from-indigo-100 to-teal-100">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl text-center mb-12 text-indigo-800">
          Зв&apos;яжіться з нами
        </h2>

        <div className="max-w-2xl mx-auto">
          <Card className="border-gray-200">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="mb-2 block text-gray-700">Ім&apos;я</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Ваше ім'я"
                    required
                    className="border-gray-300 focus:border-indigo-400"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="mb-2 block text-gray-700">Телефон</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="+380 XX XXX XX XX"
                    required
                    className="border-gray-300 focus:border-indigo-400"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="mb-2 block text-gray-700">Повідомлення (необов&apos;язково)</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Ваше повідомлення..."
                    className="border-gray-300 focus:border-indigo-400"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3"
                >
                  {loading ? "Надсилаю..." : "Відправити заявку"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
} 