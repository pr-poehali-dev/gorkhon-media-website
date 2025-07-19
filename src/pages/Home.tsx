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
    <div className="min-h-screen bg-white">
      {/* Hero Section - Clean Blog Style */}
      <section className="relative py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Hero Content */}
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              Медиакоманда поселка Горхон
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Горхон.<span className="text-primary">Медиа</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
              Рассказываем истории нашего поселка простыми словами. 
              Потому что каждая история важна, каждый момент достоин внимания.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <a
                href="https://vk.com/public214224996"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                <Icon name="Users" size={20} />
                Наша группа
              </a>
              <Link
                to="/projects"
                className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-primary hover:text-primary transition-colors"
              >
                <Icon name="Folder" size={20} />
                Наши проекты
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">1+</div>
                <div className="text-sm text-gray-600">проекта</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">873+</div>
                <div className="text-sm text-gray-600">подписчика</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">3</div>
                <div className="text-sm text-gray-600">года</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Чем мы занимаемся
            </h2>
            <p className="text-xl text-gray-600">
              Каждое направление — это способ рассказать историю нашего поселка
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "Video",
                title: "Видеосъемка",
                description: "Снимаем документальные ролики о людях и событиях. Каждое видео — это маленький фильм о большой жизни."
              },
              {
                icon: "Camera", 
                title: "Фотография",
                description: "Ловим моменты, которые завтра станут воспоминаниями. От семейных праздников до природных красот."
              },
              {
                icon: "Newspaper",
                title: "Журналистика", 
                description: "Рассказываем новости и истории языком, понятным каждому. Без сложных терминов и канцеляризмов."
              },
              {
                icon: "Share2",
                title: "Соцсети",
                description: "Ведем группы в ВК и других платформах. Общаемся с подписчиками как с друзьями."
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Icon name={service.icon as any} size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Content Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Наши последние работы
            </h2>
            <p className="text-xl text-gray-600">
              Познакомьтесь с нашими проектами и историями
            </p>
          </div>

          {/* Featured Project */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <img
                  src="https://cdn.poehali.dev/files/a863a0f2-70cf-4a7e-8b96-561c13a9bc1e.png"
                  alt="По волнам школьной памяти"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                  Фотопроект
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  По волнам школьной памяти
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Перелистываем страницы школьных воспоминаний с выпускных и последних звонков. 
                  Каждый кадр — это целая история, которую хочется сохранить навсегда!
                </p>
                <div className="flex items-center justify-between mb-6">
                  <div className="text-sm text-gray-500">Июнь 2025</div>
                  <div className="text-sm text-gray-500">560+ просмотров</div>
                </div>
                <a
                  href="https://vk.com/wall-214224996_1109"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors"
                >
                  Смотреть проект
                  <Icon name="ArrowRight" size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* View All Projects Link */}
          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              Все проекты
              <Icon name="ArrowRight" size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* VK Community Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Мы в ВКонтакте
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              В группе всегда что-то происходит: новые видео, фотоотчеты с мероприятий, 
              обсуждения и просто хорошее настроение
            </p>
          </div>

          {/* VK Widget Container */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="flex justify-center">
              <div id="vk_groups" className="w-full max-w-md"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Познакомьтесь с командой
            </h2>
            <p className="text-xl text-gray-600">
              Талантливые люди, которые создают контент для Горхон.Медиа
            </p>
          </div>

          {/* Team Preview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { emoji: "🎬", role: "Режиссер" },
              { emoji: "📹", role: "Оператор" },
              { emoji: "✂️", role: "Монтажер" },
              { emoji: "📱", role: "SMM" }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{member.emoji}</span>
                </div>
                <div className="text-sm font-medium text-gray-600">{member.role}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/team"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Узнать больше о команде
              <Icon name="ArrowRight" size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Присоединяйтесь к нам
          </h2>
          
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
            Если вы творческий, активный и хочете рассказывать истории — 
            мы всегда рады новым людям в команде
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://vk.com/im?entrypoint=community_page&media=&sel=-214224996"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <Icon name="MessageCircle" size={20} />
              Написать нам
            </a>
            
            <a
              href="https://vk.com/public214224996"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-secondary text-white px-8 py-4 rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
            >
              <Icon name="Heart" size={20} />
              Подписаться
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;