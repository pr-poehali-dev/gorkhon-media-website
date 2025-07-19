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
      text: "Мы создаем медиакоманду, которая объединяет молодежь поселка Горхон через творчество и человеческие истории. Наша цель — показать красоту нашего родного края, рассказать истории местных жителей и создать позитивный образ нашего поселка.\n\nМы верим, что каждый человек уникален и имеет что рассказать миру. Через наши проекты мы даем голос каждому жителю Горхона.",
      highlights: [
        "Объединение молодежи через медиа",
        "Продвижение культуры поселка",
        "Создание качественного контента",
        "Развитие медиаграмотности",
      ],
    },
    history: {
      title: "Как все начиналось",
      text: "Горхон.Медиа появилась в 2021 году как инициатива группы молодых энтузиастов, которые хотели изменить представление о жизни в небольших поселках.\n\nВсе началось с простого желания — показать, что интересная и насыщенная жизнь возможна не только в больших городах. Первые проекты мы снимали на телефоны, монтировали дома, но уже тогда наш контент получал отклик.",
      highlights: [
        "Первые видео сняли на телефоны",
        "Начали с простых идей",
        "Быстро нашли свою аудиторию",
        "Выросли вместе с поселком",
      ],
    },
    values: {
      title: "Наши ценности",
      text: "В основе нашей работы лежат принципы, которые помогают нам создавать честный и качественный контент.\n\nМы не просто делаем красивые видео — мы рассказываем настоящие истории, поддерживаем местное сообщество и вдохновляем других на творчество.",
      highlights: [
        "Честность и открытость",
        "Качество превыше количества",
        "Поддержка местного сообщества",
        "Творческий подход к решениям",
      ],
    },
    future: {
      title: "Планы на будущее",
      text: "Мы не останавливаемся на достигнутом и постоянно развиваемся. В наших планах — новые форматы контента, расширение географии съемок и создание образовательных программ.\n\nМы хотим стать примером того, как молодежь может менять свои территории к лучшему через медиа и творчество.",
      highlights: [
        "Запуск подкаста о жизни поселка",
        "Создание медиашколы для детей",
        "Сотрудничество с другими регионами",
        "Документальный фильм о Горхоне",
      ],
    },
  };

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            О медиакоманде
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            О нашей команде
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed">
            Узнайте больше о том, кто мы, откуда пришли и куда идем. 
            История простых людей с большими мечтами.
          </p>
        </div>
      </section>

      {/* Content Section with Tabs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-16">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeTab === tab.id
                    ? "bg-primary text-white"
                    : "bg-white text-gray-700 hover:text-primary hover:bg-gray-100"
                }`}
              >
                <Icon name={tab.icon as any} size={18} />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-gray-200">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              
              {/* Main Content */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  {content[activeTab as keyof typeof content].title}
                </h2>
                <div className="text-gray-600 leading-relaxed space-y-4">
                  {content[activeTab as keyof typeof content].text
                    .split("\n\n")
                    .map((paragraph, index) => (
                      <p key={index}>{paragraph.trim()}</p>
                    ))}
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900">
                  Ключевые моменты
                </h3>
                <div className="space-y-4">
                  {content[activeTab as keyof typeof content].highlights.map(
                    (highlight, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl"
                      >
                        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icon name="Check" size={14} className="text-white" />
                        </div>
                        <span className="text-gray-700 font-medium">
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
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Давайте поговорим!
          </h2>
          
          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            Свяжитесь с нами в социальных сетях или напишите напрямую. 
            Мы всегда рады новым знакомствам и идеям.
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
              <Icon name="Users" size={20} />
              Наша группа
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;