import { useState } from "react";
import Icon from "@/components/ui/icon";

const Team = () => {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);

  const teamMembers = [
    {
      name: "Скоро",
      role: "Режиссер",
      bio: "Скоро здесь появится информация о нашей команде. Мы работаем над тем, чтобы представить вам всех участников медиакоманды.",
      skills: ["Видеосъемка", "Режиссура", "Сценарий"],
      social: "@soon",
      image: "🎬",
    },
    {
      name: "Скоро",
      role: "Оператор",
      bio: "Следите за обновлениями — скоро мы расскажем о каждом члене нашей дружной команды!",
      skills: ["Операторская работа", "Монтаж"],
      social: "@soon",
      image: "📹",
    },
    {
      name: "Скоро",
      role: "Монтажер",
      bio: "Информация появится в ближайшее время. Мы готовим подробные рассказы о каждом участнике.",
      skills: ["Adobe Premiere", "DaVinci Resolve"],
      social: "@soon",
      image: "✂️",
    },
    {
      name: "Скоро",
      role: "SMM-специалист",
      bio: "Совсем скоро здесь будут представлены все наши талантливые ребята!",
      skills: ["Контент-план", "Дизайн"],
      social: "@soon",
      image: "📱",
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            Познакомьтесь с нами
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            Наша команда
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed">
            Познакомьтесь с талантливыми людьми, которые создают контент для Горхон.Медиа. 
            Каждый из нас вносит свой уникальный вклад.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                onClick={() =>
                  setSelectedMember(selectedMember === index ? null : index)
                }
                className="group cursor-pointer bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                {/* Avatar */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-3xl">{member.image}</span>
                  </div>
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-2 rounded-full text-xs font-medium">
                    {member.role}
                  </div>
                </div>

                {/* Info */}
                <div className="text-center pt-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary text-sm mb-4 font-medium">
                    {member.social}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 justify-center mb-4">
                    {member.skills.slice(0, 2).map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                    {member.skills.length > 2 && (
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
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
                      className="text-gray-400 group-hover:text-primary transition-colors"
                    />
                  </div>
                </div>

                {/* Expanded Content */}
                {selectedMember === index && (
                  <div className="mt-6 pt-6 border-t border-gray-200 animate-fade-in">
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {member.bio}
                    </p>
                    <div className="space-y-3">
                      <h4 className="text-gray-900 font-bold text-sm">
                        Навыки:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {member.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="bg-primary/10 text-primary px-3 py-2 rounded-lg text-xs font-medium"
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
      <section className="py-20 bg-primary">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Присоединяйтесь к команде!
          </h2>
          
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
            Мы всегда ищем талантливых и мотивированных людей, готовых создавать крутой контент вместе с нами. 
            Если у тебя есть опыт в медиасфере или просто горящие глаза — напиши нам!
          </p>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: "Users",
                title: "Дружная команда",
                description: "Работаем в атмосфере взаимопонимания и поддержки",
              },
              {
                icon: "TrendingUp",
                title: "Развитие навыков",
                description: "Постоянно учимся новому и растем профессионально",
              },
              {
                icon: "Award",
                title: "Интересные проекты",
                description: "Создаем контент, которым действительно гордимся",
              },
            ].map((benefit, index) => (
              <div key={index} className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name={benefit.icon as any}
                    size={28}
                    className="text-white"
                  />
                </div>
                <h3 className="text-white font-bold text-lg mb-3">
                  {benefit.title}
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://vk.com/im?entrypoint=community_page&media=&sel=-214224996"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <Icon name="MessageCircle" size={20} />
              Связаться с нами
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

          {/* Friendly note */}
          <p className="text-white/80 text-sm mt-8 italic">
            "Мы всегда рады новым лицам и свежим идеям! 🎬"
          </p>
        </div>
      </section>
    </div>
  );
};

export default Team;