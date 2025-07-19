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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative pt-16 pb-20 overflow-hidden bg-white">
        {/* Playful Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-8 w-24 h-24 bg-primary/10 rounded-3xl rotate-12 animate-pulse"></div>
          <div className="absolute bottom-32 right-12 w-32 h-32 bg-secondary/10 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute top-1/2 right-1/5 w-16 h-16 bg-primary/5 rounded-2xl rotate-45"></div>
          <div className="absolute bottom-1/4 left-1/5 w-20 h-20 bg-secondary/5 rounded-full"></div>
          {/* Organic shapes */}
          <div className="absolute top-40 left-1/3 w-40 h-40 bg-primary/5 rounded-full transform skew-x-12"></div>
          <div className="absolute bottom-40 right-1/3 w-36 h-36 bg-secondary/5 rounded-full transform skew-y-12"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div
              className={`space-y-8 ${isLoaded ? "animate-fade-in" : "opacity-0"}`}
            >
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-3 bg-primary/10 text-primary px-8 py-4 rounded-full text-base font-unbounded font-medium border-2 border-primary/20 backdrop-blur-sm">
                  <Icon name="Heart" size={20} className="text-secondary" />
                  <span>Медиакоманда поселка Горхон</span>
                </div>
                <h1 className="text-6xl sm:text-7xl lg:text-9xl font-unbounded font-black text-primary leading-none tracking-tight">
                  Горхон
                  <span className="block text-4xl sm:text-5xl lg:text-6xl text-secondary font-bold mt-2">в сердце</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-700 font-unbounded leading-relaxed font-medium">
                  Мы рассказываем истории нашего поселка языком, понятным каждому.
                  <span className="block mt-2 text-primary font-bold">Потому что каждый момент важен, каждая история достойна внимания.</span>
                </p>
              </div>

              {/* Stats with personality */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12">
                <div className="text-center sm:text-left bg-primary/5 rounded-3xl p-6 border-2 border-primary/10">
                  <div className="text-5xl md:text-6xl font-unbounded font-black text-primary mb-2">
                    1+
                  </div>
                  <div className="text-gray-700 font-unbounded text-lg font-semibold">
                    Проектов делаем с душой
                  </div>
                </div>
                <div className="text-center sm:text-left bg-secondary/5 rounded-3xl p-6 border-2 border-secondary/10">
                  <div className="text-5xl md:text-6xl font-unbounded font-black text-secondary mb-2">
                    873+
                  </div>
                  <div className="text-gray-700 font-unbounded text-lg font-semibold">
                    Человек нам доверяют
                  </div>
                </div>
                <div className="text-center sm:text-left bg-primary/5 rounded-3xl p-6 border-2 border-primary/10">
                  <div className="text-5xl md:text-6xl font-unbounded font-black text-primary mb-2">
                    3
                  </div>
                  <div className="text-gray-700 font-unbounded text-lg font-semibold">
                    Года растем вместе
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
                {/* Friendly Logo Design */}
                <div className="relative w-80 h-80 md:w-96 md:h-96 mx-auto">
                  {/* Organic background shape */}
                  <div className="absolute inset-0 bg-secondary rounded-full transform rotate-3 shadow-2xl"></div>
                  <div className="absolute inset-0 bg-primary rounded-full transform -rotate-2 shadow-xl opacity-90"></div>
                  <div className="absolute inset-6 bg-white rounded-full flex items-center justify-center p-8 md:p-10 border-4 border-gray-100">
                    <div className="w-full h-full">
                      <img
                        src="https://cdn.poehali.dev/files/6ffd92ec-3432-4ca8-bb14-85125928e527.png"
                        alt="Горхон"
                        className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>

                  {/* Playful Floating Elements */}
                  <div className="absolute -top-6 -right-6 w-18 h-18 md:w-20 md:h-20 bg-white border-4 border-primary rounded-3xl flex items-center justify-center shadow-xl hover:scale-110 transition-all duration-300 hover:rotate-12">
                    <Icon name="Camera" size={28} className="text-primary" />
                  </div>
                  <div className="absolute -bottom-6 -left-6 w-18 h-18 md:w-20 md:h-20 bg-white border-4 border-secondary rounded-3xl flex items-center justify-center shadow-xl hover:scale-110 transition-all duration-300 hover:-rotate-12">
                    <Icon name="Video" size={28} className="text-secondary" />
                  </div>
                  <div className="absolute top-1/2 -left-8 md:-left-10 w-14 h-14 md:w-16 md:h-16 bg-secondary rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 hover:rotate-180">
                    <Icon name="Mic" size={20} className="text-white" />
                  </div>
                  <div className="absolute top-1/4 -right-8 md:-right-10 w-14 h-14 md:w-16 md:h-16 bg-primary rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 hover:-rotate-180">
                    <Icon name="Edit" size={20} className="text-white" />
                  </div>

                  {/* Emotional touch elements */}
                  <div className="absolute top-12 left-12 w-6 h-6 bg-secondary rounded-full animate-pulse opacity-60 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div className="absolute bottom-12 right-12 w-6 h-6 bg-primary rounded-full animate-pulse opacity-60 flex items-center justify-center" style={{ animationDelay: "1s" }}>
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-28 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-20">
            <div className="inline-flex items-center space-x-3 bg-primary/10 px-8 py-4 rounded-full mb-8 border-2 border-primary/20">
              <Icon name="Sparkles" size={24} className="text-primary" />
              <span className="text-primary font-unbounded font-bold text-lg">Что мы делаем с любовью</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-unbounded font-black text-gray-900 mb-8 leading-tight">
              Каждый день создаём
              <span className="block text-secondary">что-то особенное</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 font-unbounded max-w-4xl mx-auto leading-relaxed">
              Мы не просто делаем контент — мы рассказываем истории, которые важны людям
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {[
              {
                icon: "Video",
                title: "Видео",
                description: "Создаём качественные видеоролики о жизни поселка",
                color: "primary"
              },
              {
                icon: "Camera",
                title: "Фотография",
                description: "Фиксируем яркие моменты и красивые кадры нашего поселка",
                color: "secondary"
              },
              {
                icon: "Newspaper",
                title: "Журналистика",
                description: "Освещаем новости и рассказываем интересные истории",
                color: "primary"
              },
              {
                icon: "Share2",
                title: "Продвижение",
                description: "Ведём соцсети и продвигаем контент",
                color: "secondary"
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`group bg-white rounded-3xl p-8 md:p-10 hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-2xl cursor-pointer border-4 ${
                  feature.color === 'primary' ? 'hover:border-primary border-primary/10' : 'hover:border-secondary border-secondary/10'
                }`}
              >
                <div className={`w-20 h-20 ${
                  feature.color === 'primary' ? 'bg-primary/10 group-hover:bg-primary' : 'bg-secondary/10 group-hover:bg-secondary'
                } rounded-2xl flex items-center justify-center mb-8 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                  <Icon
                    name={feature.icon as any}
                    size={32}
                    className={`${
                      feature.color === 'primary' ? 'text-primary group-hover:text-white' : 'text-secondary group-hover:text-white'
                    } transition-colors duration-300`}
                  />
                </div>
                <h3 className="text-2xl md:text-3xl font-unbounded font-black text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 font-unbounded text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VK Widget Section */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-3 bg-white/10 px-8 py-4 rounded-full mb-8 border-2 border-white/20">
              <Icon name="Users" size={24} className="text-white" />
              <span className="text-white font-unbounded font-bold text-lg">Мы здесь каждый день</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-unbounded font-black text-white mb-8 leading-tight">
              Заходи к нам
              <span className="block text-secondary">в гости</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/90 font-unbounded max-w-3xl mx-auto leading-relaxed">
              В нашей группе всегда что-то происходит — новые видео, фото и истории из жизни Горхона
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 flex justify-center shadow-2xl border-4 border-secondary transform hover:scale-105 transition-transform duration-300">
            <div id="vk_groups"></div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        {/* Organic background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full transform rotate-12"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/5 rounded-full transform -rotate-12"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-primary/3 rounded-full"></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center space-x-3 bg-secondary/10 px-8 py-4 rounded-full mb-8 border-2 border-secondary/20">
            <Icon name="HandHeart" size={24} className="text-secondary" />
            <span className="text-secondary font-unbounded font-bold text-lg">Стань частью команды</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-unbounded font-black text-gray-900 mb-8 leading-tight">
            Присоединяйся к нам
            <span className="block text-primary">просто напиши</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 font-unbounded mb-16 max-w-4xl mx-auto leading-relaxed">
            Если ты творческий и активный — мы всегда рады новым людям в команде. 
            <span className="block mt-2 text-secondary font-bold">Твои идеи могут изменить то, как люди видят наш поселок</span>
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="https://vk.com/im?entrypoint=community_page&media=&sel=-214224996"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center space-x-4 bg-primary text-white px-10 py-6 rounded-3xl font-unbounded font-black hover:bg-secondary transition-all duration-300 shadow-xl hover:shadow-2xl text-xl hover:scale-105 border-4 border-primary hover:border-secondary"
            >
              <Icon name="MessageCircle" size={28} className="group-hover:animate-bounce" />
              <span>Написать в ВК</span>
            </a>
            <a
              href="https://vk.com/public214224996"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center space-x-4 bg-white text-primary px-10 py-6 rounded-3xl font-unbounded font-black hover:bg-primary hover:text-white transition-all duration-300 shadow-xl hover:shadow-2xl text-xl hover:scale-105 border-4 border-primary"
            >
              <Icon name="Heart" size={28} className="group-hover:animate-pulse" />
              <span>Подписаться</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;