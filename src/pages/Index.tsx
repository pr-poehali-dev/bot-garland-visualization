import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

export default function Index() {
  const [formData, setFormData] = useState({
    name: "",
    telegram: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Новое обращение:\nИмя: ${formData.name}\nTelegram: ${formData.telegram}\nСообщение: ${formData.message}`;
    window.open(`https://t.me/YOUR_SUPPORT_BOT?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary via-secondary/95 to-secondary/90 text-white font-body">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Icon name="Sparkles" size={28} className="text-primary" />
          <span className="font-heading font-bold text-xl">LightsAI</span>
        </div>
        <Button
          variant="ghost"
          className="text-white hover:text-primary"
          onClick={() => window.open('https://t.me/YOUR_CHANNEL', '_blank')}
        >
          <Icon name="Send" size={20} className="mr-2" />
          Telegram канал
        </Button>
      </header>

      <section className="container mx-auto px-4 py-16 md:py-24 text-center animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading font-extrabold text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
            ИИ-визуализация гирлянд <br />
            <span className="text-primary">за 25₽</span> вместо 3000₽
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Telegram-бот для профессиональных монтажников. Генерирует визуализации декоративного освещения по фото объекта за секунды.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="text-lg px-8 py-6 font-semibold hover-scale bg-primary hover:bg-primary/90"
              onClick={() => window.open('https://t.me/YOUR_BOT', '_blank')}
            >
              <Icon name="Bot" size={24} className="mr-2" />
              Открыть бота
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 font-semibold border-2 border-white/20 text-white hover:bg-white/10"
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Попробовать бесплатно
            </Button>
          </div>
          <div className="flex items-center justify-center gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Icon name="Zap" size={16} className="text-primary" />
              <span>Результат за 30 сек</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Gift" size={16} className="text-primary" />
              <span>15 генераций бесплатно</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16" id="benefits">
        <h2 className="font-heading font-bold text-3xl md:text-5xl text-center mb-12">
          Преимущества для профи
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="bg-card/10 backdrop-blur-sm border-white/10 p-6 hover-scale animate-fade-in">
            <div className="bg-primary/20 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
              <Icon name="Wallet" size={28} className="text-primary" />
            </div>
            <h3 className="font-heading font-bold text-xl mb-3">Экономия 99%</h3>
            <p className="text-gray-300 mb-4">
              25₽ за визуализацию против 1000-3000₽ у дизайнера
            </p>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-primary">25₽</span>
              <span className="text-gray-500 line-through">3000₽</span>
            </div>
          </Card>

          <Card className="bg-card/10 backdrop-blur-sm border-white/10 p-6 hover-scale animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="bg-primary/20 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
              <Icon name="Timer" size={28} className="text-primary" />
            </div>
            <h3 className="font-heading font-bold text-xl mb-3">Мгновенный результат</h3>
            <p className="text-gray-300 mb-4">
              Генерация готова за 30 секунд. Показывайте варианты клиентам сразу на объекте
            </p>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-primary">30 сек</span>
              <span className="text-gray-500">vs 2-3 дня</span>
            </div>
          </Card>

          <Card className="bg-card/10 backdrop-blur-sm border-white/10 p-6 hover-scale animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="bg-primary/20 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
              <Icon name="Lightbulb" size={28} className="text-primary" />
            </div>
            <h3 className="font-heading font-bold text-xl mb-3">Шаблоны + кастом</h3>
            <p className="text-gray-300 mb-4">
              Готовые стили или свои промпты. Несколько вариантов декора одного объекта за минуту
            </p>
            <div className="flex items-center gap-2 text-primary font-semibold">
              <Icon name="CheckCircle" size={20} />
              <span>Неограниченные варианты</span>
            </div>
          </Card>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 bg-white/5 backdrop-blur-sm rounded-3xl my-16" id="pricing">
        <h2 className="font-heading font-bold text-3xl md:text-5xl text-center mb-4">
          Прозрачный прайсинг
        </h2>
        <p className="text-center text-gray-400 mb-12">Начните бесплатно, платите только за результат</p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="bg-card/10 backdrop-blur-sm border-white/10 p-8 relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
              СТАРТ
            </div>
            <h3 className="font-heading font-bold text-2xl mb-2">Бесплатный тариф</h3>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-5xl font-bold text-primary">0₽</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <Icon name="CheckCircle" size={20} className="text-primary mt-1 flex-shrink-0" />
                <span>15 генераций при регистрации</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="CheckCircle" size={20} className="text-primary mt-1 flex-shrink-0" />
                <span>Доступ ко всем шаблонам</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="CheckCircle" size={20} className="text-primary mt-1 flex-shrink-0" />
                <span>Свои промпты</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="CheckCircle" size={20} className="text-primary mt-1 flex-shrink-0" />
                <span>Без водяных знаков</span>
              </li>
            </ul>
            <Button
              className="w-full bg-primary hover:bg-primary/90 font-semibold"
              size="lg"
              onClick={() => window.open('https://t.me/YOUR_BOT', '_blank')}
            >
              Попробовать бесплатно
            </Button>
          </Card>

          <Card className="bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-sm border-primary/30 p-8 relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
              ПОПУЛЯРНО
            </div>
            <h3 className="font-heading font-bold text-2xl mb-2">Платный тариф</h3>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-5xl font-bold text-primary">25₽</span>
              <span className="text-gray-400">за рендер</span>
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <Icon name="CheckCircle" size={20} className="text-primary mt-1 flex-shrink-0" />
                <span>Безлимитные генерации</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="CheckCircle" size={20} className="text-primary mt-1 flex-shrink-0" />
                <span>Приоритетная обработка</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="CheckCircle" size={20} className="text-primary mt-1 flex-shrink-0" />
                <span>Высокое качество (4K)</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="CheckCircle" size={20} className="text-primary mt-1 flex-shrink-0" />
                <span>Приоритетная поддержка</span>
              </li>
            </ul>
            <Button
              className="w-full bg-primary hover:bg-primary/90 font-semibold"
              size="lg"
              onClick={() => window.open('https://t.me/YOUR_BOT', '_blank')}
            >
              Начать работу
            </Button>
          </Card>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16" id="support">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-center mb-4">
            Есть вопросы?
          </h2>
          <p className="text-center text-gray-400 mb-12">Напишите нам, ответим быстро</p>
          
          <Card className="bg-card/10 backdrop-blur-sm border-white/10 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Ваше имя</label>
                <Input
                  placeholder="Иван Петров"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Telegram</label>
                <Input
                  placeholder="@username"
                  value={formData.telegram}
                  onChange={(e) => setFormData({ ...formData, telegram: e.target.value })}
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Сообщение</label>
                <Textarea
                  placeholder="Опишите ваш вопрос..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={4}
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 resize-none"
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 font-semibold"
                size="lg"
              >
                <Icon name="Send" size={20} className="mr-2" />
                Отправить в поддержку
              </Button>
            </form>
          </Card>

          <div className="text-center mt-8">
            <Button
              variant="ghost"
              className="text-primary hover:text-primary/80"
              onClick={() => window.open('https://t.me/YOUR_SUPPORT_BOT', '_blank')}
            >
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Или напишите в бот поддержки
            </Button>
          </div>
        </div>
      </section>

      <footer className="container mx-auto px-4 py-12 border-t border-white/10 mt-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Icon name="Sparkles" size={24} className="text-primary" />
            <span className="font-heading font-bold text-lg">LightsAI</span>
          </div>
          
          <div className="flex gap-6">
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-400 hover:text-primary"
              onClick={() => window.open('https://t.me/YOUR_CHANNEL', '_blank')}
            >
              <Icon name="Send" size={18} className="mr-2" />
              Telegram канал
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-400 hover:text-primary"
              onClick={() => window.open('https://t.me/YOUR_SUPPORT_BOT', '_blank')}
            >
              <Icon name="MessageCircle" size={18} className="mr-2" />
              Поддержка
            </Button>
          </div>
        </div>
        
        <div className="text-center text-gray-500 text-sm mt-8">
          © 2024 LightsAI. Визуализация гирлянд для профессионалов
        </div>
      </footer>
    </div>
  );
}
