import { useState } from "react";
import Icon from "@/components/ui/icon";

const Team = () => {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);

  const teamMembers = [
    {
      name: "Алексей Иванов",
      role: "Основатель и режиссер",
      bio: "Создатель команды, отвечает за общую концепцию проектов и режиссуру. Имеет опыт работы в телевидении более 5 лет.",
      skills: ["Режиссура", "Сценарное мастерство", "Управление проектами"],
      social: "@alex_director",
      image: "🎬",
    },
    {
      name: "Мария Петрова",
      role: "Видеооператор",
      bio: "Профессиональный оператор с художественным образованием. Создает визуально красивые и технически качественные кадры.",
      skills: ["Видеосъемка", "Операторское мастерство", "Работа со светом"],
      social: "@maria_camera",
      image: "📹",
    },
    {
      name: "Дмитрий Сидоров",
      role: "Монтажер",
      bio: "Магистр монтажа, который превращает отснятый материал в захватывающие истории. Знает все тонкости постпродакшена.",
      skills: ["Видеомонтаж", "Цветокоррекция", "Звуковая обработка"],
      social: "@dmitry_edit",
      image: "✂️",
    },
    {
      name: "Анна Козлова",
      role: "SMM-менеджер",
      bio: "Отвечает за продвижение контента в социальных сетях и взаимодействие с аудиторией. Знает все тренды и алгоритмы.",
      skills: ["SMM", "Контент-планирование", "Аналитика"],
      social: "@anna_smm",
      image: "📱",
    },
    {
      name: "Егор Волков",
      role: "Журналист",
      bio: "Находит интересные истории и берет интервью у местных жителей. Умеет расположить к себе любого собеседника.",
      skills: ["Журналистика", "Интервьюирование", "Написание текстов"],
      social: "@egor_news",
      image: "📝",
    },
    {
      name: "София Белова",
      role: "Фотограф",
      bio: "Создает атмосферные фотографии для проектов и социальных сетей. Специализируется на портретной и репортажной съемке.",
      skills: ["Фотография", "Обработка фото", "Портретная съемка"],
      social: "@sofia_photo",
      image: "📸",
    },
    {
      name: "Максим Орлов",
      role: "Звукорежиссер",
      bio: "Отвечает за качество звука в проектах. Записывает подкасты, обрабатывает аудио и создает звуковое оформление.",
      skills: ["Звукозапись", "Обработка аудио", "Создание подкастов"],
      social: "@max_sound",
      image: "🎵",
    },
    {
      name: "Виктория Лебедева",
      role: "Продюсер",
      bio: "Координирует работу команды, планирует съемки и следит за соблюдением сроков. Обеспечивает слаженную работу всех участников.",
      skills: ["Продюсирование", "Планирование", "Координация"],
      social: "@vika_producer",
      image: "🎯",
    },
  ];

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
              Наша команда
            </h1>
            <p className="text-xl text-gray-300 font-unbounded max-w-3xl mx-auto">
              Познакомьтесь с талантливыми людьми, которые создают контент для
              Горхон.Медиа
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                onClick={() =>
                  setSelectedMember(selectedMember === index ? null : index)
                }
                className="group cursor-pointer bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                {/* Avatar */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-3xl">{member.image}</span>
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white px-3 py-1 rounded-full text-xs font-unbounded font-medium">
                    {member.role}
                  </div>
                </div>

                {/* Info */}
                <div className="text-center">
                  <h3 className="text-xl font-unbounded font-bold text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary font-unbounded text-sm mb-4">
                    {member.social}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 justify-center mb-4">
                    {member.skills.slice(0, 2).map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-white/10 text-gray-300 px-2 py-1 rounded-lg text-xs font-unbounded"
                      >
                        {skill}
                      </span>
                    ))}
                    {member.skills.length > 2 && (
                      <span className="bg-white/10 text-gray-300 px-2 py-1 rounded-lg text-xs font-unbounded">
                        +{member.skills.length - 2}
                      </span>
                    )}
                  </div>

                  {/* Expand Indicator */}
                  <div className="flex items-center justify-center">
                    <Icon
                      name={
                        selectedMember === index ? "ChevronUp" : "ChevronDown"
                      }
                      size={20}
                      className="text-gray-400 group-hover:text-white transition-colors"
                    />
                  </div>
                </div>

                {/* Expanded Content */}
                {selectedMember === index && (
                  <div className="mt-6 pt-6 border-t border-white/10 animate-fade-in">
                    <p className="text-gray-300 font-unbounded text-sm mb-4 leading-relaxed">
                      {member.bio}
                    </p>
                    <div className="space-y-2">
                      <h4 className="text-white font-unbounded font-semibold text-sm">
                        Навыки:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {member.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="bg-gradient-to-r from-primary/20 to-secondary/20 text-white px-3 py-1 rounded-lg text-xs font-unbounded border border-white/10"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team Section */}
      <section className="py-16 bg-black/20 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-sm border border-white/10 rounded-2xl p-12">
            <h2 className="text-4xl font-unbounded font-bold text-white mb-6">
              Хочешь присоединиться?
            </h2>
            <p className="text-xl text-gray-300 font-unbounded mb-8 leading-relaxed">
              Мы всегда ищем талантливых и мотивированных людей, готовых
              создавать крутой контент вместе с нами. Если у тебя есть опыт в
              медиасфере или просто горящие глаза — напиши нам!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                {
                  icon: "Users",
                  title: "Дружная команда",
                  description: "Работаем в атмосфере взаимопонимания",
                },
                {
                  icon: "TrendingUp",
                  title: "Развитие навыков",
                  description: "Постоянно учимся новому",
                },
                {
                  icon: "Award",
                  title: "Интересные проекты",
                  description: "Создаем контент, которым гордимся",
                },
              ].map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Icon
                      name={benefit.icon as any}
                      size={24}
                      className="text-white"
                    />
                  </div>
                  <h3 className="text-white font-unbounded font-semibold mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400 font-unbounded text-sm">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://vk.com/gorhon_media"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-xl font-unbounded font-semibold hover:scale-105 transition-all duration-200 shadow-lg shadow-primary/25"
              >
                <Icon name="ExternalLink" size={20} />
                <span>Связаться с нами</span>
              </a>
              <button className="inline-flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-unbounded font-semibold hover:bg-white/20 transition-all border border-white/20">
                <Icon name="FileText" size={20} />
                <span>Отправить резюме</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
