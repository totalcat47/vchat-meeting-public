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
  Globe, 
  Home, 
  DollarSign, 
  Clock, 
  Coffee, 
  Check,
  MessageCircle,
  Users,
  ArrowRight,
  Phone,
} from 'lucide-react';




export default function App() {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" })
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  console.log("🚀 handleSubmit викликано");
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
  .then((res) => {
    console.log("✅ EmailJS SUCCESS", res);
    alert("✅ Заявку надіслано! Ми з вами зв'яжемося.");
    // Можна очистити форму після успіху
    setFormData({ name: "", phone: "", message: "" });
  })
  .catch((error) => {
    console.error("❌ EmailJS ERROR", error);
    alert("❌ Сталася помилка. Перевір консоль.");
  })
  .finally(() => setLoading(false));
};

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50">
      {/* Header */}
      <header className="sticky top-0 bg-white/80 backdrop-blur-sm border-b border-pink-100 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Heart className="w-6 h-6 text-pink-500" />
              <span className="text-pink-800 font-medium">VideoChat | Meeting</span>
            </div>
            <Button 
              onClick={() => scrollToSection('contact')} 
              className="bg-pink-500 hover:bg-pink-600 text-white"
            >{`Зв'язатися з нами`}</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl mb-6 text-pink-800">
              🌸 Запрошуємо дівчат на роботу у відеочаті
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-700 max-w-3xl mx-auto">
              Спілкуйся з чоловіками у дружній формі та заробляй <br></br>від <span className="text-pink-600 font-large">25 000 до 35 000 грн</span> на місяць
            </p>
            
            <div className="mb-12">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop&q=80"
                alt="Дівчина працює за ноутбуком"
                className="rounded-2xl shadow-lg mx-auto w-full max-w-2xl h-64 md:h-80 object-cover"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => scrollToSection('contact')}
                size="lg"
                className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 text-lg"
              >
                Відгукнутися зараз
              </Button>
              <Button 
                onClick={() => scrollToSection('faq')}
                variant="outline" 
                size="lg"
                className="border-pink-300 text-pink-700 hover:bg-pink-50 px-8 py-3 text-lg"
              >
                Дізнатися деталі
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Salary */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-100 to-rose-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl mb-8 text-pink-800">
            Зарплата та бонуси
          </h2>
          <div className="text-4xl md:text-8xl mb-6 text-pink-600">
            25 000 – 35 000₴
          </div>
          <div className="text-3xl md:text-4xl mb-8 text-gray-700">на місяць</div>
          
          <div className="max-w-2xl mx-auto space-y-4 text-lg text-gray-600">
            <p>✨ Залежить від якості спілкування</p>
            <p>💰 Щомісячні виплати</p>
            <p>🎁 Можливість отримувати бонуси</p>
          </div>
        </div>
      </section>


      {/* Requirements */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-12 text-pink-800">
            Вимоги
          </h2>
          <div className="max-w-2xl mx-auto">
            <Card className="border-pink-100">
              <CardContent className="p-8">
                <div className="space-y-4">
                  {[
                    'Вік 18–40 років',
                    'Доглянута зовнішність',
                    'Приємна мова',
                    'Комунікабельність та доброзичливість',
                    "Обов'язково бути у кадрі під час спілкування"
                  ].map((requirement, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">{requirement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      {/* Why It's Interesting */}
      <section className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-12 text-pink-800">
            Чому це цікаво?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-pink-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Globe className="w-12 h-12 text-pink-500 mx-auto mb-4" />
                <h3 className="text-lg mb-2 text-pink-800">Проста робота</h3>
              </CardContent>
            </Card>
            
            <Card className="border-pink-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Home className="w-12 h-12 text-pink-500 mx-auto mb-4" />
                <h3 className="text-lg mb-2 text-pink-800">Зручні умови</h3>
              </CardContent>
            </Card>
            
            <Card className="border-pink-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <DollarSign className="w-12 h-12 text-pink-500 mx-auto mb-4" />
                <h3 className="text-lg mb-2 text-pink-800">Високий дохід</h3>
              </CardContent>
            </Card>
            
            <Card className="border-pink-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Heart className="w-12 h-12 text-pink-500 mx-auto mb-4" />
                <h3 className="text-lg mb-2 text-pink-800">Легка атмосфера</h3>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Work Schedule */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-12 text-pink-800">
            Графік роботи
          </h2>
          <div className="max-w-2xl mx-auto">
            <Card className="border-pink-100">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Clock className="w-8 h-8 text-pink-500" />
                    <div>
                      <h3 className="text-lg text-pink-800">Повний робочий день</h3>
                      <p className="text-gray-600">9:00 – 18:00</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Coffee className="w-8 h-8 text-pink-500" />
                    <div>
                      <h3 className="text-lg text-pink-800">Обідня перерва</h3>
                      <p className="text-gray-600">13:00 – 14:00</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>



{/* How It Works */}
<section className="py-16 px-4 bg-white/50">
  <div className="container mx-auto">
    <h2 className="text-3xl md:text-4xl text-center mb-12 text-pink-800">
      Як це працює?
    </h2>

    {/* Desktop версія (стрілки між айтемами) */}
    <div className="hidden lg:flex items-center justify-center gap-8">
      {[
        { icon: Users, title: 'Знайомство', desc: 'Приходиш в офіс, знайомимось, пояснюємо правила' },
        { icon: Home, title: 'Робоче місце', desc: 'Отримуєш робоче місце з ноутбуком і камерою' },
        { icon: MessageCircle, title: 'Спілкування', desc: 'Спілкуєшся з чоловіками у відеочаті' },
        { icon: DollarSign, title: 'Зарплата', desc: 'Отримуєш стабільну зарплату' }
      ].map((step, index, arr) => (
        <React.Fragment key={index}>
          {/* Крок */}
          <div className="text-center w-56">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <step.icon className="w-8 h-8 text-pink-600" />
            </div>
            <h3 className="text-lg mb-2 text-pink-800">{step.title}</h3>
            <p className="text-gray-600 text-sm">{step.desc}</p>
          </div>

          {/* Стрілка між айтемами */}
          {index < arr.length - 1 && (
            <ArrowRight className="w-8 h-8 text-pink-400 flex-shrink-0" />
          )}
        </React.Fragment>
      ))}
    </div>

    {/* Mobile/Tablet версія (без стрілок, просто grid) */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:hidden mt-6 max-w-4xl mx-auto">
      {[
        { icon: Users, title: 'Знайомство', desc: 'Приходиш в офіс, знайомимось, пояснюємо правила' },
        { icon: Home, title: 'Робоче місце', desc: 'Отримуєш робоче місце з ноутбуком і камерою' },
        { icon: MessageCircle, title: 'Спілкування', desc: 'Спілкуєшся з чоловіками у відеочаті' },
        { icon: DollarSign, title: 'Зарплата', desc: 'Отримуєш стабільну зарплату' }
      ].map((step, index) => (
        <div key={index} className="text-center">
          <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <step.icon className="w-8 h-8 text-pink-600" />
          </div>
          <h3 className="text-lg mb-2 text-pink-800">{step.title}</h3>
          <p className="text-gray-600 text-sm">{step.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

     
      {/* FAQ */}
      <section id="faq" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-12 text-pink-800">
            Поширені питання
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: 'Чи потрібно знати іноземні мови?',
                answer: 'Ні, у нас є автоматичний перекладач, який допоможе в спілкуванні.'
              },
              {
                question: 'Це безпечно?',
                answer: 'Так, усе спілкування проходить онлайн в офісі під наглядом адміністрації.'
              },
              {
                question: 'Чи є випробувальний термін?',
                answer: 'Детальні умови обговорюються на співбесіді.'
              },
              {
                question: 'Що потрібно для початку роботи?',
                answer: 'Просто прийди на співбесіду з документами та готовністю спілкуватися.'
              }
            ].map((faq, index) => (
              <Card key={index} className="border-pink-100">
                <CardContent className="p-6">
                  <h3 className="text-lg mb-2 text-pink-800">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

 {/* Contact */}
<section id="contact" className="py-16 px-4 bg-gradient-to-r from-pink-100 to-rose-100">
  <div className="container mx-auto">
    <h2 className="text-3xl md:text-4xl text-center mb-12 text-pink-800">
      {`Зв'яжіться з нами`}
    </h2>

    <div className="max-w-2xl mx-auto">
      <Card className="border-pink-100">
        <CardContent className="p-8">
          {/* Форма */}
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div>
              <Label htmlFor="name" className="mb-2 block">{`Ім'я`}</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="Ваше ім'я"
                required
                className="border-pink-200 focus:border-pink-400"
              />
            </div>
            
            <div>
              <Label htmlFor="phone" className="mb-2 block">Телефон</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                placeholder="+380 XX XXX XX XX"
                required
                className="border-pink-200 focus:border-pink-400"
              />
            </div>
            
            <div>
              <Label htmlFor="message" className="mb-2 block">{`Повідомлення (необов'язково)`}</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                placeholder="Ваше повідомлення..."
                className="border-pink-200 focus:border-pink-400"
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3"
            >
              {loading ? "Надсилаю..." : "Відправити заявку"}
            </Button>
          </form>
          
          {/* Контакти */}
          <div className="mt-8 pt-6 border-t border-pink-200 text-center">
            <p className="text-gray-600 mb-4">{`Або зв'яжіться з нами напряму:`}</p>

            {/* Адаптивний блок контактів */}
            <div className="flex flex-col sm:flex-row sm:justify-center sm:space-x-6 gap-4 sm:gap-0">
              
              {/* Телефон */}
              <a href="tel:+380733720760" className="flex items-center justify-center space-x-2 text-pink-600 hover:text-pink-700">
                <Phone className="w-4 h-4" />
                <span>+380 73 372 07 60</span>
              </a>

              {/* Телеграм */}
              <a 
                href="https://t.me/videochat_meeting" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 text-pink-600 hover:text-pink-700"
              >
                {/* Іконка Telegram */}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9.999 15.582 9.99 12.537l7.003-5.181-8.641 3.528-3.527-1.206c-.765-.263-.77-.763.17-1.126L19.54 3.46c.618-.236 1.158.144.958 1.037l-2.722 12.795c-.188.856-.728 1.062-1.474.662L12 15.207l-2.003 1.573c-.195.153-.358.278-.621.278Z"/>
                </svg>
                <span>@videochat_meeting</span>
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  </div>
</section>
 

      {/* Footer */}
      <footer className="bg-white border-t border-pink-100 py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <Heart className="w-6 h-6 text-pink-500" />
            <span className="text-pink-800">@VideoChat Meeting.  Всі права захищені</span>
          </div>
        </div>
      </footer>
    </div>
  )};