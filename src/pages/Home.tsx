import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl animate-spin"
            style={{ animationDuration: "20s" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div
              className={`space-y-8 ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
            >
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full text-sm font-unbounded font-medium">
                  <Icon name="Zap" size={16} />
                  <span>Медиакоманда поселка Горхон</span>
                </div>
                <h1 className="text-5xl lg:text-7xl font-unbounded font-bold text-white leading-tight">
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Горхон
                  </span>
                  <br />
                  <span className="text-white">Медиа</span>
                </h1>
                <p className="text-xl text-gray-300 font-unbounded leading-relaxed">
                  Мы создаем контент, который вдохновляет и объединяет молодежь
                  нашего поселка. Наша миссия — показать красоту и уникальность
                  Горхона всему миру.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-xl font-unbounded font-semibold hover:scale-105 transition-all duration-200 shadow-lg shadow-primary/25"
                >
                  <Icon name="Play" size={20} />
                  <span>Наши проекты</span>
                </Link>
                <Link
                  to="/team"
                  className="inline-flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-unbounded font-semibold hover:bg-white/20 transition-all border border-white/20"
                >
                  <Icon name="Users" size={20} />
                  <span>Познакомиться с командой</span>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-unbounded font-bold text-white">
                    50+
                  </div>
                  <div className="text-gray-400 font-unbounded text-sm">
                    Проектов
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-unbounded font-bold text-white">
                    10K+
                  </div>
                  <div className="text-gray-400 font-unbounded text-sm">
                    Подписчиков
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-unbounded font-bold text-white">
                    3
                  </div>
                  <div className="text-gray-400 font-unbounded text-sm">
                    Года опыта
                  </div>
                </div>
              </div>
            </div>

            {/* Logo/Visual */}
            <div
              className={`relative ${isLoaded ? "animate-scale-in" : "opacity-0"}`}
              style={{ animationDelay: "0.3s" }}
            >
              <div className="relative w-full max-w-md mx-auto">
                {/* Main Logo Circle */}
                <div className="relative w-80 h-80 mx-auto">
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary rounded-full animate-spin"
                    style={{ animationDuration: "10s" }}
                  ></div>
                  <div className="absolute inset-4 bg-slate-900 rounded-full flex items-center justify-center p-8">
                    <div className="w-full h-full">
                      <img
                        src="https://cdn.poehali.dev/files/6ffd92ec-3432-4ca8-bb14-85125928e527.png"
                        alt="Горхон"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center animate-bounce">
                    <Icon name="Camera" size={24} className="text-white" />
                  </div>
                  <div
                    className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-lg flex items-center justify-center animate-bounce"
                    style={{ animationDelay: "0.5s" }}
                  >
                    <Icon name="Video" size={24} className="text-white" />
                  </div>
                  <div
                    className="absolute top-1/2 -left-8 w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center animate-bounce"
                    style={{ animationDelay: "1s" }}
                  >
                    <Icon name="Mic" size={16} className="text-white" />
                  </div>
                  <div
                    className="absolute top-1/4 -right-8 w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center animate-bounce"
                    style={{ animationDelay: "1.5s" }}
                  >
                    <Icon name="Edit" size={16} className="text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-unbounded font-bold text-white mb-4">
              Что мы делаем
            </h2>
            <p className="text-xl text-gray-300 font-unbounded">
              Наши направления деятельности
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "Video",
                title: "Видеопроизводство",
                description: "Создаем качественные видео о жизни поселка",
              },
              {
                icon: "Camera",
                title: "Фотосъемка",
                description: "Запечатлеваем важные моменты и события",
              },
              {
                icon: "Newspaper",
                title: "Журналистика",
                description: "Освещаем новости и интересные истории",
              },
              {
                icon: "Share2",
                title: "SMM",
                description: "Ведем социальные сети и продвигаем контент",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon
                    name={feature.icon as any}
                    size={24}
                    className="text-white"
                  />
                </div>
                <h3 className="text-xl font-unbounded font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400 font-unbounded text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-sm border border-white/10 rounded-2xl p-12">
            <h2 className="text-4xl font-unbounded font-bold text-white mb-4">
              Присоединяйся к нам!
            </h2>
            <p className="text-xl text-gray-300 font-unbounded mb-8">
              Хочешь стать частью нашей медиакоманды? У нас всегда есть место
              для творческих и активных людей!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://vk.com/gorhon_media"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-xl font-unbounded font-semibold hover:scale-105 transition-all duration-200 shadow-lg shadow-primary/25"
              >
                <Icon name="ExternalLink" size={20} />
                <span>Написать в ВК</span>
              </a>
              <Link
                to="/team"
                className="inline-flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-unbounded font-semibold hover:bg-white/20 transition-all border border-white/20"
              >
                <Icon name="Users" size={20} />
                <span>Узнать больше о команде</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
