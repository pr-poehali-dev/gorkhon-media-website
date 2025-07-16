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
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden bg-primary">
        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-16 h-16 bg-secondary rounded-lg rotate-12 opacity-20"></div>
          <div className="absolute bottom-20 right-10 w-20 h-20 bg-secondary rounded-full opacity-15"></div>
          <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-white/10 rounded-lg rotate-45"></div>
          <div className="absolute bottom-1/3 left-1/4 w-14 h-14 bg-white/10 rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div
              className={`space-y-8 ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
            >
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-secondary text-white px-6 py-3 rounded-full text-sm font-unbounded font-medium shadow-lg shadow-secondary/30">
                  <Icon name="Users" size={18} />
                  <span>Медиакоманда поселка Горхон</span>
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-8xl font-unbounded font-bold text-white leading-tight">
                  Горхон
                </h1>
                <p className="text-xl md:text-2xl text-white/90 font-unbounded leading-relaxed">
                  Создаём качественный контент, который вдохновляет молодёжь нашего поселка.
                  Показываем красоту и уникальность Горхона.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
                <div className="text-center sm:text-left">
                  <div className="text-4xl md:text-5xl font-unbounded font-bold text-white">
                    1+
                  </div>
                  <div className="text-white/80 font-unbounded text-base">
                    Проектов
                  </div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-4xl md:text-5xl font-unbounded font-bold text-white">
                    873+
                  </div>
                  <div className="text-white/80 font-unbounded text-base">
                    Подписчиков
                  </div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-4xl md:text-5xl font-unbounded font-bold text-white">
                    3
                  </div>
                  <div className="text-white/80 font-unbounded text-base">
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
                <div className="relative w-72 h-72 md:w-80 md:h-80 mx-auto">
                  <div className="absolute inset-0 bg-secondary rounded-full shadow-2xl shadow-secondary/30"></div>
                  <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center p-6 md:p-8">
                    <div className="w-full h-full">
                      <img
                        src="https://cdn.poehali.dev/files/6ffd92ec-3432-4ca8-bb14-85125928e527.png"
                        alt="Горхон"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-14 h-14 md:w-16 md:h-16 bg-primary rounded-xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                    <Icon name="Camera" size={24} className="text-white" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-14 h-14 md:w-16 md:h-16 bg-secondary rounded-xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                    <Icon name="Video" size={24} className="text-white" />
                  </div>
                  <div className="absolute top-1/2 -left-6 md:-left-8 w-10 h-10 md:w-12 md:h-12 bg-primary rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                    <Icon name="Mic" size={16} className="text-white" />
                  </div>
                  <div className="absolute top-1/4 -right-6 md:-right-8 w-10 h-10 md:w-12 md:h-12 bg-secondary rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                    <Icon name="Edit" size={16} className="text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-unbounded font-bold text-white mb-6">
              Наши направления
            </h2>
            <p className="text-xl md:text-2xl text-white/90 font-unbounded max-w-3xl mx-auto">
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
                title: "Фотография",
                description: "Фиксируем яркие моменты и красивые кадры нашего поселка",
              },
              {
                icon: "Newspaper",
                title: "Журналистика",
                description: "Освещаем новости и рассказываем интересные истории",
              },
              {
                icon: "Share2",
                title: "Продвижение",
                description: "Ведём соцсети и продвигаем контент",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 md:p-8 hover:bg-primary transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl cursor-pointer"
              >
                <div className="w-16 h-16 bg-primary group-hover:bg-white rounded-xl flex items-center justify-center mb-6 transition-all">
                  <Icon
                    name={feature.icon as any}
                    size={28}
                    className="text-white group-hover:text-primary transition-colors"
                  />
                </div>
                <h3 className="text-2xl font-unbounded font-bold text-slate-900 group-hover:text-white mb-3 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-600 group-hover:text-white/90 font-unbounded text-base leading-relaxed transition-colors">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VK Widget Section */}
      <section className="py-16 md:py-24 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-unbounded font-bold text-white mb-6">
              Наша группа ВКонтакте
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 font-unbounded">
              Подписывайся и следи за новостями медиакоманды
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 md:p-10 flex justify-center shadow-2xl border-4 border-primary">
            <div id="vk_groups"></div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="">
            <h2 className="text-4xl md:text-5xl font-unbounded font-bold text-white mb-6">
              Присоединяйся к нам
            </h2>
            <p className="text-xl md:text-2xl text-white/90 font-unbounded mb-12 max-w-3xl mx-auto leading-relaxed">
              Если ты творческий и активный — мы всегда рады новым людям в команде.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://vk.com/im?entrypoint=community_page&media=&sel=-214224996"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-3 bg-secondary text-white px-8 py-4 rounded-2xl font-unbounded font-bold hover:bg-white hover:text-secondary transition-all duration-300 shadow-lg hover:shadow-2xl text-lg hover:scale-105"
              >
                <Icon name="MessageCircle" size={24} />
                <span>Написать в ВК</span>
              </a>
              <a
                href="https://vk.com/public214224996"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-3 bg-white text-primary px-8 py-4 rounded-2xl font-unbounded font-bold hover:bg-secondary hover:text-white transition-all duration-300 shadow-lg hover:shadow-2xl text-lg hover:scale-105"
              >
                <Icon name="Users" size={24} />
                <span>Подписаться</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;