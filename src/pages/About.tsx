import { useState } from "react";
import Icon from "@/components/ui/icon";

const About = () => {
  const [activeTab, setActiveTab] = useState("mission");

  const tabs = [
    { id: "mission", label: "Миссия", icon: "Target" },
    { id: "history", label: "История", icon: "Clock" },
    { id: "values", label: "Ценности", icon: "Heart" },
    { id: "future", label: "Планы", icon: "Rocket" },
  ];

  const content = {
    mission: {
      title: "Наша миссия",
      text: `Мы создаем медиакоманду, которая объединяет молодежь поселка Горхон через творчество и человеческие истории. 
      Наша цель — показать красоту нашего родного края, рассказать истории местных жителей и создать позитивный образ нашего поселка.
      
      Мы верим, что каждый человек уникален и имеет что рассказать миру. Через наши проекты мы даем голос каждому жителю Горхона.`,
      highlights: [
        "Объединение молодежи через медиа",
        "Продвижение культуры поселка",
        "Создание качественного контента",
        "Развитие медиаграмотности",
      ],
    },
    history: {
      title: "Как все начиналось",
      text: `Горхон.Медиа появилась в 2021 году как инициатива группы молодых энтузиастов, которые хотели изменить представление о жизни в небольших поселках.
      
      Все началось с простого желания — показать, что интересная и насыщенная жизнь возможна не только в больших городах. Первые проекты мы снимали на телефоны, монтировали дома, но уже тогда наш контент получал отклик.`,
      highlights: [
        "Первые видео сняли на телефоны",
        "Начали с простых идей",
        "Быстро нашли свою аудиторию",
        "Выросли вместе с поселком",
      ],
    },
    values: {
      title: "Наши ценности",
      text: `В основе нашей работы лежат принципы, которые помогают нам создавать честный и качественный контент.
      
      Мы не просто делаем красивые видео — мы рассказываем настоящие истории, поддерживаем местное сообщество и вдохновляем других на творчество.`,
      highlights: [
        "Честность и открытость",
        "Качество превыше количества",
        "Поддержка местного сообщества",
        "Творческий подход к решениям",
      ],
    },
    future: {
      title: "Планы на будущее",
      text: `Мы не останавливаемся на достигнутом и постоянно развиваемся. В наших планах — новые форматы контента, расширение географии съемок и создание образовательных программ.
      
      Мы хотим стать примером того, как молодежь может менять свои территории к лучшему через медиа и творчество.`,
      highlights: [
        "Запуск подкаста о жизни поселка",
        "Создание медиашколы для детей",
        "Сотрудничество с другими регионами",
        "Документальный фильм о Горхоне",
      ],
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      {/* Hero Section */}
      <section className="relative py-16 bg-white">
        {/* Simple decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-8 w-3 h-20 bg-primary transform rotate-12 opacity-20"></div>
          <div className="absolute bottom-20 right-8 w-3 h-24 bg-secondary transform -rotate-12 opacity-20"></div>
          <div className="absolute top-1/2 right-1/4 text-8xl text-primary/5 font-unbounded font-black transform rotate-12">О</div>
        </div>

        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative">
          <div className="text-center">
            <div className="inline-block mb-6">
              <div className="flex items-center space-x-2 text-sm font-unbounded font-bold text-secondary uppercase tracking-wider">
                <div className="w-8 h-0.5 bg-secondary"></div>
                <span>Узнайте нас лучше</span>
                <div className="w-8 h-0.5 bg-secondary"></div>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-unbounded font-black text-gray-900 mb-8">
              О нашей команде
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 font-unbounded max-w-4xl mx-auto leading-relaxed">
              Узнайте больше о том, кто мы, откуда пришли и куда идем. 
              <span className="text-primary font-bold"> История простых людей с большими мечтами</span>
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-4 rounded-2xl font-unbounded font-bold transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-primary text-white shadow-lg scale-105"
                    : "bg-white text-gray-700 hover:bg-primary/10 hover:text-primary hover:scale-105 shadow-sm"
                }`}
              >
                <Icon name={tab.icon as any} size={20} />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border-2 border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              
              {/* Main Content */}
              <div>
                <h2 className="text-3xl md:text-4xl font-unbounded font-black text-gray-900 mb-6">
                  {content[activeTab as keyof typeof content].title}
                </h2>
                <div className="text-gray-700 font-unbounded leading-relaxed space-y-4 text-lg">
                  {content[activeTab as keyof typeof content].text
                    .split("\n\n")
                    .map((paragraph, index) => (
                      <p key={index}>{paragraph.trim()}</p>
                    ))}
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-6">
                <h3 className="text-xl font-unbounded font-black text-gray-900">
                  Ключевые моменты
                </h3>
                <div className="space-y-4">
                  {content[activeTab as keyof typeof content].highlights.map(
                    (highlight, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-4 p-4 bg-primary/5 rounded-2xl border-l-4 border-primary"
                      >
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <Icon name="Check" size={16} className="text-white" />
                        </div>
                        <span className="text-gray-800 font-unbounded font-medium text-base">
                          {highlight}
                        </span>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="mb-8">
            <div className="inline-block bg-white/10 px-6 py-3 rounded-full mb-6">
              <span className="text-white font-unbounded font-bold">Остались вопросы?</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-unbounded font-black text-white mb-6">
              Давайте поговорим!
            </h2>
            
            <p className="text-xl text-white/90 font-unbounded max-w-3xl mx-auto leading-relaxed mb-12">
              Свяжитесь с нами в социальных сетях или напишите напрямую. 
              <span className="block mt-2 font-bold">Мы всегда рады новым знакомствам и идеям</span>
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
              <Icon name="Users" size={24} className="group-hover:animate-pulse" />
              <span>Наша группа</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;