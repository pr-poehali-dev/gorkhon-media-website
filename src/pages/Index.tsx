import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  // Инициализация VK виджетов после загрузки компонента
  React.useEffect(() => {
    if (typeof window !== "undefined" && window.VK) {
      window.VK.Widgets.Group(
        "vk_groups_news",
        {
          mode: 4,
          no_cover: 1,
          wide: 1,
          height: 400,
          color1: "FFFFFF",
          color2: "000000",
          color3: "2382ef",
        },
        214224996,
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white font-unbounded relative overflow-hidden">
      {/* Декоративная графика */}
      <div className="absolute top-10 right-10 w-96 h-96 opacity-10 pointer-events-none">
        <img
          src="https://cdn.poehali.dev/files/0c15c6a3-a1cb-4a2b-b13f-1b1c5f0c8289.png"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      {/* Hot News Running Line - Left to Right */}
      <div className="bg-gradient-to-r from-red-600 via-orange-500 to-red-600 border-y border-orange-400 py-2 overflow-hidden animate-pulse shadow-lg shadow-red-500/20">
        <div className="whitespace-nowrap animate-marquee-reverse">
          <span className="text-white font-bold text-lg mx-8 animate-hot-glow">
            🔥 Горячие новости только у нас! 🔥
          </span>
          <span className="text-white font-bold text-lg mx-8 animate-hot-glow">
            🔥 Горячие новости только у нас! 🔥
          </span>
          <span className="text-white font-bold text-lg mx-8 animate-hot-glow">
            🔥 Горячие новости только у нас! 🔥
          </span>
          <span className="text-white font-bold text-lg mx-8 animate-hot-glow">
            🔥 Горячие новости только у нас! 🔥
          </span>
          <span className="text-white font-bold text-lg mx-8 animate-hot-glow">
            🔥 Горячие новости только у нас! 🔥
          </span>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/80 border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img
                src="https://cdn.poehali.dev/files/1cd14853-4eeb-4f4d-b81d-914b71f383f6.png"
                alt="Медиакоманда Горхон"
                className="h-14 object-contain"
              />
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#home" className="hover:text-primary transition-colors">
                Главная
              </a>
              <a href="#about" className="hover:text-primary transition-colors">
                О нас
              </a>
              <a href="#team" className="hover:text-primary transition-colors">
                Команда
              </a>
              <a
                href="#projects"
                className="hover:text-primary transition-colors"
              >
                Проекты
              </a>
              <a href="#news" className="hover:text-primary transition-colors">
                Новости
              </a>
              <a
                href="#reviews"
                className="hover:text-primary transition-colors"
              >
                Отзывы
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Running Line */}
      <div className="bg-primary/20 border-y border-primary/30 py-2 overflow-hidden">
        <div className="whitespace-nowrap animate-marquee">
          <span className="text-primary font-bold text-lg mx-8">
            Горхон - место встречи! 🚀
          </span>
          <span className="text-primary font-bold text-lg mx-8">
            Горхон - место встречи! 🚀
          </span>
          <span className="text-primary font-bold text-lg mx-8">
            Горхон - место встречи! 🚀
          </span>
          <span className="text-primary font-bold text-lg mx-8">
            Горхон - место встречи! 🚀
          </span>
          <span className="text-primary font-bold text-lg mx-8">
            Горхон - место встречи! 🚀
          </span>
          <span className="text-primary font-bold text-lg mx-8">
            Горхон - место встречи! 🚀
          </span>
        </div>
      </div>

      {/* Hero Section */}
      <section
        id="home"
        className="relative py-20 overflow-hidden animate-pulse-bg liquid-glass"
      >
        {/* Liquid Glass Effects */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Animated Bubbles */}
          <div
            className="liquid-bubble w-32 h-32 top-20 left-20 animate-bubble"
            style={{ animationDelay: "0s" }}
          ></div>
          <div
            className="liquid-bubble w-24 h-24 top-40 right-32 animate-bubble"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="liquid-bubble w-20 h-20 bottom-32 left-40 animate-bubble"
            style={{ animationDelay: "4s" }}
          ></div>
          <div
            className="liquid-bubble w-28 h-28 bottom-20 right-20 animate-bubble"
            style={{ animationDelay: "1s" }}
          ></div>

          {/* Liquid Waves */}
          <div
            className="liquid-wave w-64 h-16 top-32 left-1/4 animate-wave"
            style={{ animationDelay: "0s" }}
          ></div>
          <div
            className="liquid-wave w-48 h-12 bottom-40 right-1/4 animate-wave"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="liquid-wave w-56 h-14 top-1/2 left-10 animate-wave"
            style={{ animationDelay: "1s" }}
          ></div>

          {/* Floating Liquid Shapes */}
          <div className="absolute w-40 h-40 top-16 right-16 animate-liquid">
            <div className="w-full h-full bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full backdrop-blur-sm border border-white/10"></div>
          </div>
          <div
            className="absolute w-32 h-32 bottom-24 left-24 animate-liquid"
            style={{ animationDelay: "3s" }}
          >
            <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-pink-500/20 rounded-full backdrop-blur-sm border border-white/10"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text animate-float">
              Медиакоманда Горхон
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Создаем креативный контент для молодого поколения ✨
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 liquid-glass relative">
        {/* Liquid Glass Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="liquid-bubble w-28 h-28 top-16 left-16 animate-bubble"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="liquid-bubble w-20 h-20 top-32 right-24 animate-bubble"
            style={{ animationDelay: "3s" }}
          ></div>
          <div
            className="liquid-wave w-72 h-18 bottom-32 left-1/3 animate-wave"
            style={{ animationDelay: "0.5s" }}
          ></div>
          <div
            className="absolute w-36 h-36 top-24 right-32 animate-liquid"
            style={{ animationDelay: "2s" }}
          >
            <div className="w-full h-full bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-full backdrop-blur-sm border border-white/10"></div>
          </div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
              О нас
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="glass-effect text-white hover:animate-glow transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon
                      name="Target"
                      size={24}
                      className="mr-3 text-primary animate-float"
                    />
                    Наша миссия
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Мы создаем качественный медиаконтент для жителей поселка
                    Горхон, освещаем важные события и развиваем местное
                    сообщество через цифровые технологии.
                  </p>
                </CardContent>
              </Card>
              <Card className="glass-effect text-white hover:animate-glow transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon
                      name="Zap"
                      size={24}
                      className="mr-3 text-secondary animate-float"
                    />
                    Наши принципы
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Креативность, качество и актуальность - основа нашей работы.
                    Мы следим за трендами и создаем контент, который вдохновляет
                    молодежь.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Team Member Highlight */}
            <div className="mt-16 flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <img
                  src="https://cdn.poehali.dev/files/757447b1-f2ef-424b-a08f-743f36a0141d.png"
                  alt="Член команды Горхон Медиа"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                />
              </div>
              <div className="lg:w-1/2 text-center lg:text-left">
                <h3 className="text-3xl font-bold gradient-text mb-4">
                  Наша команда
                </h3>
                <p className="text-gray-300 text-lg mb-6">
                  Молодые, креативные и полные энтузиазма профессионалы, которые
                  создают качественный медиаконтент для жителей поселка Горхон.
                  Мы работаем с современными технологиями и следим за трендами,
                  чтобы наш контент был актуальным и интересным.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-slate-800 liquid-glass relative">
        {/* Liquid Glass Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="liquid-bubble w-24 h-24 top-20 left-32 animate-bubble"
            style={{ animationDelay: "0.5s" }}
          ></div>
          <div
            className="liquid-bubble w-32 h-32 bottom-24 right-16 animate-bubble"
            style={{ animationDelay: "2.5s" }}
          ></div>
          <div
            className="liquid-wave w-80 h-20 top-1/2 right-1/4 animate-wave"
            style={{ animationDelay: "1.5s" }}
          ></div>
          <div
            className="absolute w-44 h-44 bottom-32 left-16 animate-liquid"
            style={{ animationDelay: "3.5s" }}
          >
            <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full backdrop-blur-sm border border-white/10"></div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-80 h-80 opacity-5 rotate-45 pointer-events-none">
          <img
            src="https://cdn.poehali.dev/files/0c15c6a3-a1cb-4a2b-b13f-1b1c5f0c8289.png"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            Наша команда
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Скоро",
                role: "Главный редактор",
                icon: "Edit",
                color: "primary",
              },
              {
                name: "Скоро",
                role: "Видеограф",
                icon: "Video",
                color: "secondary",
              },
              {
                name: "Скоро",
                role: "SMM-менеджер",
                icon: "Share2",
                color: "primary",
              },
              {
                name: "Скоро",
                role: "Менеджер по рекламе",
                icon: "Megaphone",
                color: "secondary",
              },
            ].map((member, index) => (
              <Card
                key={index}
                className="glass-effect text-white hover:animate-glow transition-all duration-300 hover:scale-105 animate-scale-in"
              >
                <CardHeader className="text-center">
                  <div
                    className={`w-20 h-20 ${member.color === "primary" ? "bg-primary" : "bg-secondary"} rounded-full flex items-center justify-center mx-auto mb-4 animate-float`}
                  >
                    <Icon
                      name={member.icon as any}
                      size={32}
                      className="text-white"
                    />
                  </div>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription className="text-gray-300">
                    {member.role}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 liquid-glass relative">
        {/* Liquid Glass Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="liquid-bubble w-36 h-36 top-24 right-24 animate-bubble"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="liquid-bubble w-22 h-22 bottom-20 left-20 animate-bubble"
            style={{ animationDelay: "4s" }}
          ></div>
          <div
            className="liquid-wave w-64 h-16 top-40 left-1/4 animate-wave"
            style={{ animationDelay: "3s" }}
          ></div>
          <div
            className="absolute w-48 h-48 top-32 left-32 animate-liquid"
            style={{ animationDelay: "1s" }}
          >
            <div className="w-full h-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full backdrop-blur-sm border border-white/10"></div>
          </div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            Наши проекты
          </h2>
          <div className="flex justify-center">
            <div className="max-w-2xl w-full">
              <Card
                className="glass-effect text-white hover:animate-glow transition-all duration-300 hover:scale-110 overflow-hidden cursor-pointer neon-border"
                onClick={() =>
                  window.open("https://vk.com/wall-214224996_1109", "_blank")
                }
              >
                <div className="relative">
                  <img
                    src="https://cdn.poehali.dev/files/f2a81f21-5f1e-47e2-bdb9-4ca4cde573b6.png"
                    alt="По волнам школьной памяти"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge
                      variant="outline"
                      className="border-primary text-primary bg-black/50 backdrop-blur-sm"
                    >
                      Проект
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-2xl">
                      По волнам школьной памяти
                    </CardTitle>
                    <Icon
                      name="ExternalLink"
                      size={20}
                      className="text-gray-400"
                    />
                  </div>
                  <CardDescription className="text-gray-300 text-lg">
                    А теперь можно и перелистнуть страницы школьных воспоминаний
                    с выпускных и последних звонков.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-20 liquid-glass relative">
        {/* Liquid Glass Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="liquid-bubble w-30 h-30 top-16 left-24 animate-bubble"
            style={{ animationDelay: "1.5s" }}
          ></div>
          <div
            className="liquid-bubble w-26 h-26 bottom-32 right-32 animate-bubble"
            style={{ animationDelay: "3.5s" }}
          ></div>
          <div
            className="liquid-wave w-68 h-18 top-1/2 left-1/2 animate-wave"
            style={{ animationDelay: "2.5s" }}
          ></div>
          <div
            className="absolute w-40 h-40 bottom-24 left-1/4 animate-liquid"
            style={{ animationDelay: "4s" }}
          >
            <div className="w-full h-full bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-full backdrop-blur-sm border border-white/10"></div>
          </div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
              Новости
            </h2>

            {/* VK Group Widget - News */}
            <div className="flex justify-center mb-12">
              <div className="glass-effect rounded-lg p-6 hover:animate-glow transition-all duration-300">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold gradient-text mb-2">
                    Последние новости
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Актуальные посты из нашего сообщества
                  </p>
                </div>
                <div id="vk_groups_news" className="flex justify-center"></div>
              </div>
            </div>

            <div className="text-center">
              <Button
                className="bg-primary hover:bg-primary/90 text-white neon-border hover:animate-shake transition-all duration-300"
                onClick={() =>
                  window.open("https://vk.com/gorhon_official", "_blank")
                }
              >
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Больше новостей в сообществе
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Hot News Running Line - Right to Left */}
      <div className="bg-gradient-to-l from-purple-600 via-pink-500 to-purple-600 border-y border-pink-400 py-2 overflow-hidden animate-pulse shadow-lg shadow-purple-500/20">
        <div className="whitespace-nowrap animate-marquee">
          <span className="text-white font-bold text-lg mx-8 animate-hot-glow">
            🔥 Горячие новости только у нас! 🔥
          </span>
          <span className="text-white font-bold text-lg mx-8 animate-hot-glow">
            🔥 Горячие новости только у нас! 🔥
          </span>
          <span className="text-white font-bold text-lg mx-8 animate-hot-glow">
            🔥 Горячие новости только у нас! 🔥
          </span>
          <span className="text-white font-bold text-lg mx-8 animate-hot-glow">
            🔥 Горячие новости только у нас! 🔥
          </span>
          <span className="text-white font-bold text-lg mx-8 animate-hot-glow">
            🔥 Горячие новости только у нас! 🔥
          </span>
        </div>
      </div>

      {/* Reviews Section */}
      <section
        id="reviews"
        className="py-20 bg-slate-800 liquid-glass relative"
      >
        {/* Liquid Glass Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="liquid-bubble w-34 h-34 top-20 left-16 animate-bubble"
            style={{ animationDelay: "2.5s" }}
          ></div>
          <div
            className="liquid-bubble w-28 h-28 bottom-16 right-20 animate-bubble"
            style={{ animationDelay: "4.5s" }}
          ></div>
          <div
            className="liquid-wave w-76 h-20 bottom-1/2 right-1/3 animate-wave"
            style={{ animationDelay: "3.5s" }}
          ></div>
          <div
            className="absolute w-42 h-42 top-1/3 right-1/4 animate-liquid"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="w-full h-full bg-gradient-to-br from-violet-500/20 to-rose-500/20 rounded-full backdrop-blur-sm border border-white/10"></div>
          </div>
        </div>
        <div className="absolute top-20 right-20 w-60 h-60 opacity-5 -rotate-12 pointer-events-none">
          <img
            src="https://cdn.poehali.dev/files/0c15c6a3-a1cb-4a2b-b13f-1b1c5f0c8289.png"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            Отзывы подписчиков
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Елена К.",
                text: "Отличный контент! Всегда в курсе событий нашего поселка.",
                rating: 5,
              },
              {
                name: "Дмитрий М.",
                text: "Качественный контент и интересные материалы. Молодцы!",
                rating: 5,
              },
              {
                name: "Анастасия П.",
                text: "Спасибо за освещение культурных событий. Очень познавательно!",
                rating: 4,
              },
              {
                name: "Артем В.",
                text: "Крутые материалы! Жду новых публикаций.",
                rating: 5,
              },
            ].map((review, index) => (
              <Card
                key={index}
                className="glass-effect text-white animate-fade-in hover:animate-glow transition-all duration-300 hover:scale-105"
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{review.name}</CardTitle>
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon
                          key={i}
                          name="Star"
                          size={16}
                          className="text-secondary fill-current animate-float"
                        />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Hot News Running Line - Right to Left (Before Footer) */}
      <div className="bg-gradient-to-l from-yellow-600 via-orange-500 to-yellow-600 border-y border-yellow-400 py-2 overflow-hidden animate-pulse shadow-lg shadow-yellow-500/20">
        <div className="whitespace-nowrap animate-marquee">
          <span className="text-white font-bold text-lg mx-8 animate-hot-glow">
            🔥 Горячие новости только у нас! 🔥
          </span>
          <span className="text-white font-bold text-lg mx-8 animate-hot-glow">
            🔥 Горячие новости только у нас! 🔥
          </span>
          <span className="text-white font-bold text-lg mx-8 animate-hot-glow">
            🔥 Горячие новости только у нас! 🔥
          </span>
          <span className="text-white font-bold text-lg mx-8 animate-hot-glow">
            🔥 Горячие новости только у нас! 🔥
          </span>
          <span className="text-white font-bold text-lg mx-8 animate-hot-glow">
            🔥 Горячие новости только у нас! 🔥
          </span>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 liquid-glass relative">
        {/* Liquid Glass Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="liquid-bubble w-24 h-24 top-8 left-24 animate-bubble"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="liquid-bubble w-20 h-20 bottom-8 right-32 animate-bubble"
            style={{ animationDelay: "3s" }}
          ></div>
          <div
            className="liquid-wave w-60 h-12 top-1/2 left-1/2 animate-wave"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute w-32 h-32 top-4 right-16 animate-liquid"
            style={{ animationDelay: "4s" }}
          >
            <div className="w-full h-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full backdrop-blur-sm border border-white/10"></div>
          </div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <img
                src="https://cdn.poehali.dev/files/1cd14853-4eeb-4f4d-b81d-914b71f383f6.png"
                alt="Медиакоманда Горхон"
                className="h-16 object-contain"
              />
            </div>
            <div className="flex items-center space-x-6">
              <Button
                variant="ghost"
                size="sm"
                className="text-primary hover:bg-primary/10"
                onClick={() =>
                  window.open("https://vk.com/gorhon_official", "_blank")
                }
              >
                <Icon name="MessageCircle" size={16} className="mr-2" />
                ВКонтакте
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-blue-400 hover:bg-blue-400/10"
                onClick={() =>
                  window.open("https://t.me/gorhon_official", "_blank")
                }
              >
                <Icon name="Send" size={16} className="mr-2" />
                Telegram
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-secondary hover:bg-secondary/10"
                onClick={() => window.open("mailto:admin@gorhon.ru", "_blank")}
              >
                <Icon name="Mail" size={16} className="mr-2" />
                admin@gorhon.ru
              </Button>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-400">
            <p>&copy; 2025 Медиакоманда Горхон. Все права защищены.</p>
          </div>
        </div>
      </footer>

      {/* Hot News Running Line - Left to Right (Bottom) */}
      <div className="bg-gradient-to-r from-green-600 via-cyan-500 to-green-600 border-y border-cyan-400 py-2 overflow-hidden animate-pulse shadow-lg shadow-green-500/20">
        <div className="whitespace-nowrap animate-marquee-reverse">
          <span className="text-white font-bold text-lg mx-8 animate-hot-glow">
            🔥 Горячие новости только у нас! 🔥
          </span>
          <span className="text-white font-bold text-lg mx-8 animate-hot-glow">
            🔥 Горячие новости только у нас! 🔥
          </span>
          <span className="text-white font-bold text-lg mx-8 animate-hot-glow">
            🔥 Горячие новости только у нас! 🔥
          </span>
          <span className="text-white font-bold text-lg mx-8 animate-hot-glow">
            🔥 Горячие новости только у нас! 🔥
          </span>
          <span className="text-white font-bold text-lg mx-8 animate-hot-glow">
            🔥 Горячие новости только у нас! 🔥
          </span>
        </div>
      </div>

      {/* Floating Chat Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <div className="relative">
          {/* Pulsing Ring */}
          <div className="absolute inset-0 animate-ping">
            <div className="w-16 h-16 bg-primary/30 rounded-full"></div>
          </div>

          {/* Chat Button */}
          <Button
            className="relative w-16 h-16 bg-gradient-to-br from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white rounded-full shadow-2xl animate-float hover:animate-glow transition-all duration-300 hover:scale-110"
            onClick={() =>
              window.open(
                "https://vk.com/im/convo/-214224996?entrypoint=community_page",
                "_blank",
              )
            }
          >
            <Icon name="MessageCircle" size={24} />
          </Button>

          {/* Floating Particles */}
          <div
            className="absolute -top-2 -right-2 w-3 h-3 bg-secondary rounded-full animate-bounce"
            style={{ animationDelay: "0.5s" }}
          ></div>
          <div
            className="absolute -bottom-2 -left-2 w-2 h-2 bg-primary rounded-full animate-bounce"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Index;
