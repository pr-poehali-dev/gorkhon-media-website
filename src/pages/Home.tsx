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
      {/* Hero Section - Magazine Style */}
      <section className="relative py-12 md:py-20 bg-white">
        {/* Simple decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-4 w-2 h-16 bg-secondary transform rotate-12"></div>
          <div className="absolute bottom-10 right-4 w-2 h-20 bg-primary transform -rotate-12"></div>
          <div className="absolute top-1/3 right-8 text-6xl text-primary/5 font-unbounded font-black transform rotate-12">Г</div>
        </div>

        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative">
          
          {/* Header Tag */}
          <div className="text-center mb-12">
            <div className="inline-block">
              <div className="flex items-center space-x-2 text-sm font-unbounded font-bold text-secondary uppercase tracking-wider mb-4">
                <div className="w-8 h-0.5 bg-secondary"></div>
                <span>Медиакоманда поселка</span>
                <div className="w-8 h-0.5 bg-secondary"></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Main Content */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-unbounded font-black text-gray-900 leading-none mb-6">
                  Горхон
                </h1>
                
                {/* Subheading with handwritten feel */}
                <div className="relative mb-8">
                  <h2 className="text-2xl md:text-3xl font-unbounded font-bold text-primary transform -rotate-1 inline-block bg-yellow-100 px-4 py-2 rounded-lg shadow-sm">
                    Истории нашего дома
                  </h2>
                  <div className="absolute -bottom-2 -right-2 text-secondary">
                    <Icon name="Heart" size={24} />
                  </div>
                </div>

                <p className="text-xl md:text-2xl text-gray-700 font-unbounded leading-relaxed mb-8">
                  Мы рассказываем о жизни нашего поселка простыми словами. 
                  <span className="text-primary font-bold"> Потому что каждая история важна</span>, 
                  каждый момент достоин внимания.
                </p>
              </div>

              {/* Quote Block */}
              <div className="relative bg-primary/5 border-l-4 border-primary p-6 rounded-r-xl">
                <Icon name="Quote" size={32} className="text-primary/30 absolute top-2 left-2" />
                <p className="text-lg font-unbounded italic text-gray-800 pl-8">
                  "Наша цель — показать красоту обычной жизни и найти что-то особенное в каждом дне"
                </p>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-3 gap-4 mt-12">
                <div className="text-center bg-white border-2 border-primary/10 rounded-2xl p-6 transform rotate-1 shadow-sm hover:shadow-lg transition-all hover:rotate-0">
                  <div className="text-4xl font-unbounded font-black text-primary mb-2">1+</div>
                  <div className="text-gray-600 font-unbounded text-sm">проекта<br/>с душой</div>
                </div>
                <div className="text-center bg-white border-2 border-secondary/10 rounded-2xl p-6 transform -rotate-1 shadow-sm hover:shadow-lg transition-all hover:rotate-0">
                  <div className="text-4xl font-unbounded font-black text-secondary mb-2">873+</div>
                  <div className="text-gray-600 font-unbounded text-sm">друзей<br/>рядом</div>
                </div>
                <div className="text-center bg-white border-2 border-primary/10 rounded-2xl p-6 transform rotate-1 shadow-sm hover:shadow-lg transition-all hover:rotate-0">
                  <div className="text-4xl font-unbounded font-black text-primary mb-2">3</div>
                  <div className="text-gray-600 font-unbounded text-sm">года<br/>вместе</div>
                </div>
              </div>
            </div>

            {/* Visual Content */}
            <div className="lg:col-span-5">
              <div className="relative">
                {/* Main Image */}
                <div className="relative bg-white rounded-3xl p-4 shadow-lg transform rotate-2 hover:rotate-0 transition-transform duration-500">
                  <img
                    src="https://cdn.poehali.dev/files/6ffd92ec-3432-4ca8-bb14-85125928e527.png"
                    alt="Горхон"
                    className="w-full h-auto rounded-2xl"
                  />
                  
                  {/* Photo corner effect */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-secondary rounded-full shadow-lg"></div>
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-primary rounded-full shadow-lg"></div>
                </div>

                {/* Sticky Notes */}
                <div className="absolute -top-4 -left-8 bg-yellow-200 p-3 rounded-lg transform -rotate-12 shadow-lg z-10">
                  <Icon name="Camera" size={20} className="text-gray-700" />
                </div>
                
                <div className="absolute -bottom-6 -right-6 bg-blue-200 p-3 rounded-lg transform rotate-12 shadow-lg z-10">
                  <Icon name="Video" size={20} className="text-gray-700" />
                </div>

                <div className="absolute top-1/2 -left-6 bg-pink-200 p-2 rounded-full transform -rotate-45 shadow-lg z-10">
                  <Icon name="Mic" size={16} className="text-gray-700" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 md:py-24 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="bg-secondary text-white px-6 py-2 rounded-full font-unbounded font-bold text-sm uppercase tracking-wider">
                Чем занимаемся
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-unbounded font-black text-gray-900 mb-6">
              Делаем то, что любим
            </h2>
            <p className="text-xl text-gray-600 font-unbounded max-w-3xl mx-auto">
              Каждое направление — это способ рассказать историю нашего поселка
            </p>
          </div>

          {/* Activities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: "Video",
                title: "Видео",
                description: "Снимаем документальные ролики о людях и событиях. Каждое видео — это маленький фильм о большой жизни.",
                accent: "primary",
                number: "01"
              },
              {
                icon: "Camera", 
                title: "Фотография",
                description: "Ловим моменты, которые завтра станут воспоминаниями. От семейных праздников до природных красот.",
                accent: "secondary",
                number: "02"
              },
              {
                icon: "Newspaper",
                title: "Журналистика", 
                description: "Рассказываем новости и истории языком, понятным каждому. Без сложных терминов и канцеляризмов.",
                accent: "primary",
                number: "03"
              },
              {
                icon: "Share2",
                title: "Соцсети",
                description: "Ведем группы в ВК и других платформах. Общаемся с подписчиками как с друзьями.",
                accent: "secondary", 
                number: "04"
              }
            ].map((item, index) => (
              <div key={index} className="relative">
                {/* Card */}
                <div className="bg-white rounded-3xl p-8 shadow-sm border-2 border-gray-100 hover:shadow-lg transition-all hover:border-primary/20 group">
                  
                  {/* Number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center font-unbounded font-bold text-sm">
                    {item.number}
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 ${item.accent === 'primary' ? 'bg-primary' : 'bg-secondary'} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon name={item.icon as any} size={28} className="text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-unbounded font-black text-gray-900 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 font-unbounded leading-relaxed">
                    {item.description}
                  </p>

                  {/* Decorative element */}
                  <div className={`absolute bottom-4 right-4 w-2 h-2 ${item.accent === 'primary' ? 'bg-primary' : 'bg-secondary'} rounded-full opacity-50`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VK Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="text-center mb-12">
            <div className="inline-block mb-6">
              <div className="flex items-center space-x-3">
                <Icon name="Users" size={24} className="text-primary" />
                <span className="font-unbounded font-bold text-primary text-lg">Мы в ВКонтакте</span>
                <Icon name="Users" size={24} className="text-primary" />
              </div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-unbounded font-black text-gray-900 mb-6">
              Заходите к нам в гости
            </h2>
            
            <p className="text-xl text-gray-600 font-unbounded max-w-3xl mx-auto mb-8">
              В группе всегда что-то происходит: новые видео, фотоотчеты с мероприятий, 
              обсуждения и просто хорошее настроение
            </p>
          </div>

          {/* VK Widget Container */}
          <div className="relative">
            <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border-2 border-primary/10">
              <div className="flex justify-center">
                <div id="vk_groups" className="w-full max-w-md"></div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-secondary rounded-full opacity-70"></div>
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-primary rounded-full opacity-70"></div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          
          <div className="mb-8">
            <div className="inline-block bg-white/10 px-6 py-3 rounded-full mb-6">
              <span className="text-white font-unbounded font-bold">Хочешь стать частью команды?</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-unbounded font-black text-white mb-6 leading-tight">
              Присоединяйся!
            </h2>
            
            <p className="text-xl text-white/90 font-unbounded max-w-3xl mx-auto leading-relaxed mb-12">
              Если ты творческий, активный и хочешь рассказывать истории — 
              <span className="block mt-2 font-bold">мы всегда рады новым людям в команде</span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="https://vk.com/im?entrypoint=community_page&media=&sel=-214224996"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-3 bg-white text-primary px-8 py-4 rounded-2xl font-unbounded font-bold hover:bg-secondary hover:text-white transition-all duration-300 shadow-lg text-lg group"
            >
              <Icon name="MessageCircle" size={24} className="group-hover:animate-bounce" />
              <span>Написать нам</span>
            </a>
            
            <a
              href="https://vk.com/public214224996"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-3 bg-secondary text-white px-8 py-4 rounded-2xl font-unbounded font-bold hover:bg-white hover:text-secondary transition-all duration-300 shadow-lg text-lg group"
            >
              <Icon name="Heart" size={24} className="group-hover:animate-pulse" />
              <span>Подписаться</span>
            </a>
          </div>

          {/* Friendly note */}
          <p className="text-white/80 font-unbounded text-sm mt-8 italic">
            "Не стесняйтесь — мы не кусаемся 😊"
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;