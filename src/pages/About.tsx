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
      text: `Мы создаем медиакоманду, которая объединяет молодежь поселка Горхон через творчество и современные технологии. 
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
      highlights: [],
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-24">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-unbounded font-bold text-white mb-6">
              О нашей команде
            </h1>
            <p className="text-xl text-gray-300 font-unbounded max-w-3xl mx-auto">
              Узнайте больше о том, кто мы, откуда пришли и куда идем
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-unbounded font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg"
                    : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white"
                }`}
              >
                <Icon name={tab.icon as any} size={20} />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl font-unbounded font-bold text-white mb-6">
                  {content[activeTab as keyof typeof content].title}
                </h2>
                <div className="text-gray-300 font-unbounded leading-relaxed space-y-4">
                  {content[activeTab as keyof typeof content].text
                    .split("\n\n")
                    .map((paragraph, index) => (
                      <p key={index}>{paragraph.trim()}</p>
                    ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-unbounded font-semibold text-white mb-4">
                  Ключевые моменты
                </h3>
                <div className="space-y-3">
                  {content[activeTab as keyof typeof content].highlights.map(
                    (highlight, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-3 p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg border border-white/10"
                      >
                        <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0">
                          <Icon name="Check" size={16} className="text-white" />
                        </div>
                        <span className="text-white font-unbounded">
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
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-sm border border-white/10 rounded-2xl p-12">
            <h2 className="text-3xl font-unbounded font-bold text-white mb-4">
              Есть вопросы?
            </h2>
            <p className="text-lg text-gray-300 font-unbounded mb-8">
              Свяжитесь с нами в социальных сетях или напишите напрямую
            </p>
            <a
              href="https://vk.com/gorhon_media"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-xl font-unbounded font-semibold hover:scale-105 transition-all duration-200 shadow-lg shadow-primary/25"
            >
              <Icon name="ExternalLink" size={20} />
              <span>Написать в ВКонтакте</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
