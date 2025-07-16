import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

// Type declaration for VK API
declare global {
  interface Window {
    VK: {
      Widgets: {
        Group: (elementId: string, options: any, groupId: number) => void;
      };
    };
  }
}

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    // Initialize VK Widget after component mounts
    if (window.VK) {
      window.VK.Widgets.Group(
        "vk_groups",
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
    <div className="min-h-screen bg-brand-dark">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/30 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/30 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/3 right-1/3 w-48 h-48 bg-brand-light/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
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
                <div className="inline-flex items-center space-x-2 bg-primary text-white px-4 py-2 rounded-full text-sm font-unbounded font-medium shadow-lg shadow-primary/50">
                  <Icon name="Zap" size={16} />
                  <span>Медиакоманда поселка Горхон</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-unbounded font-bold text-white leading-tight">
                  <span className="text-primary">
                    Горхон
                  </span>
                </h1>
                <p className="text-xl text-gray-300 font-unbounded leading-relaxed">
                  Мы создаём качественный контент, который вдохновляет молодёжь нашего поселка.
                  Наша цель — показать красоту и уникальность Горхона.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-unbounded font-bold text-white">
                    1+
                  </div>
                  <div className="text-gray-400 font-unbounded text-sm">
                    Проектов
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-unbounded font-bold text-white">
                    873+
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
                    className="absolute inset-0 bg-primary rounded-full animate-spin shadow-2xl shadow-primary/50"
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
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-secondary rounded-lg flex items-center justify-center animate-bounce shadow-lg shadow-secondary/50">
                    <Icon name="Camera" size={24} className="text-white" />
                  </div>
                  <div
                    className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent-orange rounded-lg flex items-center justify-center animate-bounce shadow-lg shadow-accent-orange/50"
                    style={{ animationDelay: "0.5s" }}
                  >
                    <Icon name="Video" size={24} className="text-white" />
                  </div>
                  <div
                    className="absolute top-1/2 -left-8 w-12 h-12 bg-accent-green rounded-full flex items-center justify-center animate-bounce shadow-lg shadow-accent-green/50"
                    style={{ animationDelay: "1s" }}
                  >
                    <Icon name="Mic" size={16} className="text-white" />
                  </div>
                  <div
                    className="absolute top-1/4 -right-8 w-12 h-12 bg-brand-light rounded-full flex items-center justify-center animate-bounce shadow-lg shadow-brand-light/50"
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
      <section className="py-20 bg-brand-dark/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-unbounded font-bold text-white mb-4">
              Наши направления
            </h2>
            <p className="text-lg md:text-xl text-gray-300 font-unbounded">
              Основные виды деятельности нашей команды
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                icon: "Video",
                title: "Видео",
                description: "Создаём качественные видеоролики о жизни поселка",
              },
              {
                icon: "Camera",
                title: "Фото 📸",
                description: "Ловим самые яркие моменты и красивые кадры нашего поселка",
              },
              {
                icon: "Newspaper",
                title: "Журналистика",
                description: "Освещаем новости и рассказываем интересные истории",
              },
              {
                icon: "Share2",
                title: "SMM",
                description: "Ведём социальные сети и продвигаем контент",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 md:p-6 hover:bg-primary/10 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/30 hover:border-primary/30"
              >
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-secondary transition-all shadow-lg shadow-primary/30">
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

      {/* VK Widget Section */}
      <section className="py-20 bg-brand-dark/90">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-unbounded font-bold text-white mb-4">
              Наша группа ВКонтакте
            </h2>
            <p className="text-lg md:text-xl text-gray-300 font-unbounded">
              Подписывайся и следи за новостями медиакоманды
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg border border-primary/30 rounded-2xl p-4 md:p-8 flex justify-center shadow-2xl shadow-primary/20">
            <div id="vk_groups"></div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-primary/20 backdrop-blur-lg border border-primary/40 rounded-2xl p-6 md:p-12 shadow-2xl shadow-primary/30">
            <h2 className="text-3xl md:text-4xl font-unbounded font-bold text-white mb-4">
              Присоединяйся к нам
            </h2>
            <p className="text-lg md:text-xl text-gray-300 font-unbounded mb-8">
              Если ты творческий и активный — мы всегда рады новым людям в команде.
            </p>
            <div className="flex justify-center">
              <a
                href="https://vk.com/im?entrypoint=community_page&media=&sel=-214224996"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 bg-secondary text-white px-8 py-4 rounded-xl font-unbounded font-semibold hover:scale-105 hover:bg-accent-orange transition-all duration-200 shadow-xl shadow-secondary/50 hover:shadow-2xl hover:shadow-accent-orange/70"
              >
                <Icon name="ExternalLink" size={20} />
                <span>Написать в ВК</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;