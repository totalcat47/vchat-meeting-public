"use client";
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import emailjs from "emailjs-com"
import { 
  Heart, 
  Home, 
  DollarSign, 
  Clock, 
  Coffee, 
  Check,
  MessageCircle,
  Users,
  ArrowRight,
  Phone,
  CircleDollarSign,
  Calendar1,
  Rocket
} from 'lucide-react';

export default function App() {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" })
  const [loading, setLoading] = useState(false)

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

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-gray-50 to-gray-100">
      {/* Header */}
      <header className="sticky top-0 bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Heart className="w-6 h-6 text-indigo-500" />
            <span className="text-indigo-800 font-medium">VideoChat | Meeting</span>
          </div>
          <Button 
            onClick={() => scrollToSection('contact')} 
            className="bg-indigo-600 hover:bg-indigo-700 text-white"
          >Зв'язатися з нами</Button>
        </div>
      </header>

      {/* Hero Section */}
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

      {/* Salary */}
      <section id="salary" className="py-16 px-4 bg-gradient-to-r from-indigo-100 to-teal-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl mb-8 text-indigo-800">
            Умови роботи
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

      {/* Why It's Interesting */}
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

      {/* Contact */}
      <section id="contact" className="py-16 px-4 bg-gradient-to-r from-indigo-100 to-teal-100">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-12 text-indigo-800">
            Зв'яжіться з нами
          </h2>

          <div className="max-w-2xl mx-auto">
            <Card className="border-gray-200">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="mb-2 block text-gray-700">Ім'я</Label>
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
                    <Label htmlFor="message" className="mb-2 block text-gray-700">Повідомлення (необов'язково)</Label>
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

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <Heart className="w-6 h-6 text-indigo-500" />
            <span className="text-gray-700">@VideoChat Meeting. Всі права захищені</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
