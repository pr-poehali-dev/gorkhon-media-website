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

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/80 border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img
                src="https://cdn.poehali.dev/files/1cd14853-4eeb-4f4d-b81d-914b71f383f6.png"
                alt="Медиакоманда Горхон"
                className="h-10 object-contain"
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
            <Button
              variant="outline"
              size="sm"
              className="border-primary text-primary hover:bg-primary hover:text-white"
              onClick={() =>
                window.open("https://vk.com/gorhon_official", "_blank")
              }
            >
              <Icon name="MessageCircle" size={16} className="mr-2" />
              ВКонтакте
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary">
              Медиакоманда Горхон
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Создаем креативный контент для молодого поколения
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white"
              >
                <Icon name="Play" size={20} className="mr-2" />
                Смотреть проекты
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-secondary text-secondary hover:bg-secondary hover:text-white"
              >
                <Icon name="Users" size={20} className="mr-2" />
                Наша команда
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">О нас</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white/5 border-white/10 text-white hover:border-primary/50 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon
                      name="Target"
                      size={24}
                      className="mr-3 text-primary"
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
              <Card className="bg-white/5 border-white/10 text-white hover:border-secondary/50 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon
                      name="Zap"
                      size={24}
                      className="mr-3 text-secondary"
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
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-slate-800 relative">
        <div className="absolute bottom-0 left-0 w-80 h-80 opacity-5 rotate-45 pointer-events-none">
          <img
            src="https://cdn.poehali.dev/files/0c15c6a3-a1cb-4a2b-b13f-1b1c5f0c8289.png"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-12">Наша команда</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Анна Иванова",
                role: "Главный редактор",
                icon: "Edit",
                color: "primary",
              },
              {
                name: "Максим Петров",
                role: "Видеограф",
                icon: "Video",
                color: "secondary",
              },
              {
                name: "София Сидорова",
                role: "SMM-менеджер",
                icon: "Share2",
                color: "primary",
              },
            ].map((member, index) => (
              <Card
                key={index}
                className="bg-white/5 border-white/10 text-white hover:bg-white/10 transition-colors animate-scale-in"
              >
                <CardHeader className="text-center">
                  <div
                    className={`w-20 h-20 ${member.color === "primary" ? "bg-primary" : "bg-secondary"} rounded-full flex items-center justify-center mx-auto mb-4`}
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
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Наши проекты</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Новости Горхон",
                desc: "Еженедельная сводка событий",
                tag: "Новости",
                color: "primary",
              },
              {
                title: "Молодежные интервью",
                desc: "Истории успеха местных жителей",
                tag: "Интервью",
                color: "secondary",
              },
              {
                title: "Культурные события",
                desc: "Освещение праздников и фестивалей",
                tag: "Культура",
                color: "primary",
              },
              {
                title: "Спортивные репортажи",
                desc: "Трансляции местных соревнований",
                tag: "Спорт",
                color: "secondary",
              },
              {
                title: "Образовательный контент",
                desc: "Полезные материалы для учащихся",
                tag: "Образование",
                color: "primary",
              },
              {
                title: "Экологические проекты",
                desc: "Инициативы по защите природы",
                tag: "Экология",
                color: "secondary",
              },
            ].map((project, index) => (
              <Card
                key={index}
                className="bg-white/5 border-white/10 text-white hover:bg-white/10 transition-all hover:scale-105"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge
                      variant="outline"
                      className={`${project.color === "primary" ? "border-primary text-primary" : "border-secondary text-secondary"}`}
                    >
                      {project.tag}
                    </Badge>
                    <Icon
                      name="ExternalLink"
                      size={16}
                      className="text-gray-400"
                    />
                  </div>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription className="text-gray-300">
                    {project.desc}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Новости</h2>

            {/* VK Group Widget - News */}
            <div className="flex justify-center mb-12">
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-primary mb-2">
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
                className="bg-primary hover:bg-primary/90 text-white"
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

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-slate-800 relative">
        <div className="absolute top-20 right-20 w-60 h-60 opacity-5 -rotate-12 pointer-events-none">
          <img
            src="https://cdn.poehali.dev/files/0c15c6a3-a1cb-4a2b-b13f-1b1c5f0c8289.png"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-12">
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
                text: "Качественная съемка и интересные сюжеты. Молодцы!",
                rating: 5,
              },
              {
                name: "Анастасия П.",
                text: "Спасибо за освещение культурных событий. Очень познавательно!",
                rating: 4,
              },
              {
                name: "Артем В.",
                text: "Крутые видео про спорт! Жду новых выпусков.",
                rating: 5,
              },
            ].map((review, index) => (
              <Card
                key={index}
                className="bg-white/5 border-white/10 text-white animate-fade-in hover:border-primary/30 transition-colors"
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
                          className="text-secondary fill-current"
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

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <img
                src="https://cdn.poehali.dev/files/1cd14853-4eeb-4f4d-b81d-914b71f383f6.png"
                alt="Медиакоманда Горхон"
                className="h-8 object-contain"
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
                className="text-secondary hover:bg-secondary/10"
              >
                <Icon name="Mail" size={16} className="mr-2" />
                Связаться
              </Button>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-400">
            <p>&copy; 2024 Медиакоманда Горхон. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
