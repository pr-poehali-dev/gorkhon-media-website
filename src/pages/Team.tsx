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
    <div className="min-h-screen bg-gray-50 pt-24">
      {/* Hero Section */}
      <section className="relative py-16 bg-white">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-8 w-3 h-20 bg-primary transform rotate-12 opacity-20"></div>
          <div className="absolute bottom-20 right-8 w-3 h-24 bg-secondary transform -rotate-12 opacity-20"></div>
          <div className="absolute top-1/2 right-1/4 text-8xl text-primary/5 font-unbounded font-black transform rotate-12">К</div>
        </div>

        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative">
          <div className="text-center">
            <div className="inline-block mb-6">
              <div className="flex items-center space-x-2 text-sm font-unbounded font-bold text-secondary uppercase tracking-wider">
                <div className="w-8 h-0.5 bg-secondary"></div>
                <span>Познакомьтесь с нами</span>
                <div className="w-8 h-0.5 bg-secondary"></div>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-unbounded font-black text-gray-900 mb-8">
              Наша команда
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 font-unbounded max-w-4xl mx-auto leading-relaxed">
              Познакомьтесь с талантливыми людьми, которые создают контент для Горхон.Медиа. 
              <span className="text-primary font-bold"> Каждый из нас вносит свой уникальный вклад</span>
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                onClick={() =>
                  setSelectedMember(selectedMember === index ? null : index)
                }
                className="group cursor-pointer bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-100 hover:border-primary/20 hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                {/* Avatar */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                    <span className="text-3xl">{member.image}</span>
                  </div>
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-secondary text-white px-4 py-2 rounded-full text-xs font-unbounded font-bold shadow-lg">
                    {member.role}
                  </div>
                </div>

                {/* Info */}
                <div className="text-center pt-4">
                  <h3 className="text-xl font-unbounded font-black text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary font-unbounded text-sm mb-4 font-medium">
                    {member.social}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 justify-center mb-4">
                    {member.skills.slice(0, 2).map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-unbounded font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                    {member.skills.length > 2 && (
                      <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-xs font-unbounded font-medium">
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
                  <div className="mt-6 pt-6 border-t-2 border-primary/10 animate-fade-in">
                    <p className="text-gray-700 font-unbounded text-sm mb-4 leading-relaxed">
                      {member.bio}
                    </p>
                    <div className="space-y-3">
                      <h4 className="text-gray-900 font-unbounded font-black text-sm">
                        Навыки:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {member.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="bg-primary/5 text-primary px-3 py-2 rounded-2xl text-xs font-unbounded font-medium border border-primary/10"
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
      <section className="py-16 bg-primary">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="mb-8">
            <div className="inline-block bg-white/10 px-6 py-3 rounded-full mb-6">
              <span className="text-white font-unbounded font-bold">Хочешь к нам?</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-unbounded font-black text-white mb-6">
              Присоединяйся к команде!
            </h2>
            
            <p className="text-xl text-white/90 font-unbounded max-w-4xl mx-auto leading-relaxed mb-12">
              Мы всегда ищем талантливых и мотивированных людей, готовых создавать крутой контент вместе с нами. 
              <span className="block mt-2 font-bold">Если у тебя есть опыт в медиасфере или просто горящие глаза — напиши нам!</span>
            </p>
          </div>

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
              <div key={index} className="bg-white/10 rounded-3xl p-8 backdrop-blur-sm">
                <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name={benefit.icon as any}
                    size={28}
                    className="text-white"
                  />
                </div>
                <h3 className="text-white font-unbounded font-black text-lg mb-3">
                  {benefit.title}
                </h3>
                <p className="text-white/80 font-unbounded text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8">
            <a
              href="https://vk.com/im?entrypoint=community_page&media=&sel=-214224996"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-3 bg-white text-primary px-8 py-4 rounded-2xl font-unbounded font-bold hover:bg-secondary hover:text-white transition-all duration-300 shadow-lg text-lg group"
            >
              <Icon name="MessageCircle" size={24} className="group-hover:animate-bounce" />
              <span>Связаться с нами</span>
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

          {/* Friendly note */}
          <p className="text-white/80 font-unbounded text-sm italic">
            "Мы всегда рады новым лицам и свежим идеям! 🎬"
          </p>
        </div>
      </section>
    </div>
  );
};

export default Team;