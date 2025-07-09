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
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white font-unbounded">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/5 border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img
                src="/img/bf3bc6bd-a53c-473d-b723-894df5535965.jpg"
                alt="Медиакоманда Горхон"
                className="w-10 h-10 rounded-lg object-cover"
              />
              <span className="text-xl font-bold">Горхон Медиа</span>
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
              className="border-white/20 text-white hover:bg-white/10"
            >
              <Icon name="MessageCircle" size={16} className="mr-2" />
              ВКонтакте
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 animate-gradient-shift bg-[size:400%_400%]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Медиакоманда Горхон
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Создаем креативный контент для молодого поколения
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white"
              >
                <Icon name="Play" size={20} className="mr-2" />
                Смотреть проекты
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10"
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
              <Card className="bg-white/5 border-white/10 text-white">
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
              <Card className="bg-white/5 border-white/10 text-white">
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
      <section
        id="team"
        className="py-20 bg-gradient-to-r from-slate-800 to-slate-900"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Наша команда</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Анна Иванова", role: "Главный редактор", icon: "Edit" },
              { name: "Максим Петров", role: "Видеограф", icon: "Video" },
              { name: "София Сидорова", role: "SMM-менеджер", icon: "Share2" },
            ].map((member, index) => (
              <Card
                key={index}
                className="bg-white/5 border-white/10 text-white hover:bg-white/10 transition-colors animate-scale-in"
              >
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
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
              },
              {
                title: "Молодежные интервью",
                desc: "Истории успеха местных жителей",
                tag: "Интервью",
              },
              {
                title: "Культурные события",
                desc: "Освещение праздников и фестивалей",
                tag: "Культура",
              },
              {
                title: "Спортивные репортажи",
                desc: "Трансляции местных соревнований",
                tag: "Спорт",
              },
              {
                title: "Образовательный контент",
                desc: "Полезные материалы для учащихся",
                tag: "Образование",
              },
              {
                title: "Экологические проекты",
                desc: "Инициативы по защите природы",
                tag: "Экология",
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
                      className="border-primary text-primary"
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

      {/* Reviews Section */}
      <section
        id="reviews"
        className="py-20 bg-gradient-to-r from-slate-800 to-slate-900"
      >
        <div className="container mx-auto px-4">
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
                className="bg-white/5 border-white/10 text-white animate-fade-in"
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
                          className="text-yellow-400 fill-current"
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
                src="/img/bf3bc6bd-a53c-473d-b723-894df5535965.jpg"
                alt="Медиакоманда Горхон"
                className="w-8 h-8 rounded object-cover"
              />
              <span className="text-lg font-bold">Горхон Медиа</span>
            </div>
            <div className="flex items-center space-x-6">
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/10"
              >
                <Icon name="MessageCircle" size={16} className="mr-2" />
                ВКонтакте
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/10"
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
