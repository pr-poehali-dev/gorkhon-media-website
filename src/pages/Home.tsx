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
    <div className="min-h-screen bg-black font-unbounded overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-secondary/30 transform rotate-45 animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-primary/15 rounded-full animate-ping"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-secondary/25 transform rotate-12 animate-pulse"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0, 91, 255, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 91, 255, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}
          />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          
          {/* Floating Badge */}
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-full text-sm font-bold mb-8 animate-float">
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              МЕДИАКОМАНДА ПОСЕЛКА ГОРХОН
            </span>
          </div>

          {/* Main Heading with Creative Effects */}
          <div className="relative mb-8">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-none mb-4 transform hover:scale-105 transition-transform duration-500">
              ГОРХОН
            </h1>
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-secondary rounded-full animate-bounce"></div>
            <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-primary rounded-full animate-ping"></div>
          </div>

          {/* Subtitle with Gradient */}
          <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent mb-8 animate-gradient bg-300% ">
            ИСТОРИИ • ТВОРЧЕСТВО • ВДОХНОВЕНИЕ
          </h2>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto font-medium">
            Создаем контент, который <span className="text-primary font-bold">зажигает</span> и 
            <span className="text-secondary font-bold"> вдохновляет</span>. 
            Каждая история — это новый взгляд на мир вокруг нас.
          </p>

          {/* Creative CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <a
              href="https://vk.com/public214224996"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-2xl font-bold text-lg transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-primary/50 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <div className="relative flex items-center gap-3">
                <Icon name="Users" size={24} />
                <span>НАША ГРУППА</span>
              </div>
            </a>
            
            <Link
              to="/projects"
              className="group relative bg-transparent border-2 border-secondary text-secondary hover:bg-secondary hover:text-white px-8 py-4 rounded-2xl font-bold text-lg transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-secondary/50 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <div className="relative flex items-center gap-3">
                <Icon name="Folder" size={24} />
                <span>НАШИ ПРОЕКТЫ</span>
              </div>
            </Link>
          </div>

          {/* Stats with Creative Design */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            {[
              { number: "1+", label: "ПРОЕКТА", color: "primary" },
              { number: "873+", label: "ФОЛОВЕРОВ", color: "secondary" },
              { number: "3", label: "ГОДА", color: "primary" }
            ].map((stat, index) => (
              <div key={index} className="relative group">
                <div className="bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-6 transform hover:scale-110 transition-all duration-300 hover:bg-white/10">
                  <div className={`text-4xl font-black mb-2 ${stat.color === 'primary' ? 'text-primary' : 'text-secondary'}`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm font-bold tracking-wider">
                    {stat.label}
                  </div>
                </div>
                <div className={`absolute -top-2 -right-2 w-4 h-4 ${stat.color === 'primary' ? 'bg-primary' : 'bg-secondary'} rounded-full animate-pulse`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="relative py-20 z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block bg-secondary/20 border border-secondary/30 text-secondary px-6 py-3 rounded-full text-sm font-black mb-8 uppercase tracking-wider">
              ЧТО МЫ ДЕЛАЕМ
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              СОЗДАЕМ <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">МАГИЮ</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-medium">
              Каждое направление — это способ рассказать историю по-новому
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "Video",
                title: "ВИДЕО",
                description: "Снимаем крутые ролики, которые цепляют с первой секунды",
                color: "primary",
                number: "01"
              },
              {
                icon: "Camera", 
                title: "ФОТО",
                description: "Ловим моменты, которые становятся легендой",
                color: "secondary",
                number: "02"
              },
              {
                icon: "Newspaper",
                title: "МЕДИА", 
                description: "Рассказываем истории языком нового поколения",
                color: "primary",
                number: "03"
              },
              {
                icon: "Share2",
                title: "SMM",
                description: "Зажигаем в соцсетях и собираем вокруг сообщество",
                color: "secondary",
                number: "04"
              }
            ].map((service, index) => (
              <div key={index} className="group relative">
                {/* Background glow */}
                <div className={`absolute inset-0 bg-${service.color}/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300`}></div>
                
                {/* Card */}
                <div className="relative bg-white/5 backdrop-blur-md border border-white/20 rounded-3xl p-8 transform hover:scale-105 hover:-rotate-1 transition-all duration-300 hover:bg-white/10">
                  
                  {/* Number Badge */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-gray-800 to-black border-2 border-white/20 text-white rounded-2xl flex items-center justify-center font-black text-sm">
                    {service.number}
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 bg-${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-2xl`}>
                    <Icon name={service.icon as any} size={28} className="text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-black text-white mb-4 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed font-medium">
                    {service.description}
                  </p>

                  {/* Hover effect line */}
                  <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-${service.color} to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-3xl`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project Section */}
      <section className="relative py-20 z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              СВЕЖИЕ <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">РАБОТЫ</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-medium">
              Смотри, что мы создали недавно
            </p>
          </div>

          {/* Featured Project Card */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            
            <div className="relative bg-white/5 backdrop-blur-md border border-white/20 rounded-3xl overflow-hidden transform hover:scale-[1.02] transition-all duration-500">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <img
                    src="https://cdn.poehali.dev/files/a863a0f2-70cf-4a7e-8b96-561c13a9bc1e.png"
                    alt="По волнам школьной памяти"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent"></div>
                  
                  {/* Floating badge */}
                  <div className="absolute top-6 left-6 bg-primary text-white px-4 py-2 rounded-full text-sm font-bold animate-float">
                    ФОТОПРОЕКТ
                  </div>
                </div>
                
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <h3 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
                    ПО ВОЛНАМ ШКОЛЬНОЙ ПАМЯТИ
                  </h3>
                  <p className="text-gray-300 mb-8 leading-relaxed text-lg font-medium">
                    Захватили самые яркие моменты выпускных. Каждый кадр — это целая вселенная эмоций! 
                  </p>
                  
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                      <span className="text-gray-400 text-sm font-bold">ИЮНЬ 2025</span>
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span className="text-gray-400 text-sm font-bold">560+ ПРОСМОТРОВ</span>
                    </div>
                  </div>
                  
                  <a
                    href="https://vk.com/wall-214224996_1109"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center gap-3 bg-gradient-to-r from-secondary to-primary text-white px-6 py-3 rounded-2xl font-bold hover:scale-105 transition-all duration-300 shadow-2xl w-fit"
                  >
                    <span>СМОТРЕТЬ ПРОЕКТ</span>
                    <Icon name="ArrowRight" size={20} className="group-hover/btn:translate-x-2 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* View All Link */}
          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-all duration-300"
            >
              <span>ВСЕ ПРОЕКТЫ</span>
              <Icon name="ArrowRight" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* VK Section */}
      <section className="relative py-20 z-10">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              МЫ В <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">ВК</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-medium">
              Подписывайся и будь в курсе всех крутых штук!
            </p>
          </div>

          {/* VK Widget */}
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            
            <div className="relative bg-white/5 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-2xl">
              <div className="flex justify-center">
                <div id="vk_groups" className="w-full max-w-md"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="relative py-20 z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              НАША <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">БАНДА</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-medium">
              Знакомься с теми, кто создает всю эту красоту
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { emoji: "🎬", role: "РЕЖИССЕР", color: "primary" },
              { emoji: "📹", role: "ОПЕРАТОР", color: "secondary" },
              { emoji: "✂️", role: "МОНТАЖЕР", color: "primary" },
              { emoji: "📱", role: "SMM", color: "secondary" }
            ].map((member, index) => (
              <div key={index} className="group relative">
                <div className={`absolute inset-0 bg-${member.color}/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300`}></div>
                
                <div className="relative bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center transform hover:scale-105 hover:rotate-1 transition-all duration-300">
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {member.emoji}
                  </div>
                  <div className="text-sm font-black text-white tracking-wider">
                    {member.role}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/team"
              className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              <span>ПОЗНАКОМИТЬСЯ С КОМАНДОЙ</span>
              <Icon name="ArrowRight" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 z-10">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-3xl blur-2xl"></div>
            
            <div className="relative bg-white/5 backdrop-blur-md border border-white/20 rounded-3xl p-12">
              <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
                ПРИСОЕДИНЯЙСЯ К НАМ!
              </h2>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
                Если у тебя есть идеи, энергия и желание создавать крутой контент — 
                <span className="text-primary font-bold"> мы ждем именно тебя!</span>
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="https://vk.com/im?entrypoint=community_page&media=&sel=-214224996"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-2xl font-black text-lg transform hover:scale-105 transition-all duration-300 shadow-2xl overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <div className="relative flex items-center gap-3">
                    <Icon name="MessageCircle" size={24} />
                    <span>НАПИСАТЬ НАМ</span>
                  </div>
                </a>
                
                <a
                  href="https://vk.com/public214224996"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-secondary hover:bg-secondary/90 text-white px-8 py-4 rounded-2xl font-black text-lg transform hover:scale-105 transition-all duration-300 shadow-2xl overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <div className="relative flex items-center gap-3">
                    <Icon name="Heart" size={24} />
                    <span>ПОДПИСАТЬСЯ</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
        .bg-300\\% {
          background-size: 300% 300%;
        }
      `}</style>
    </div>
  );
};

export default Home;