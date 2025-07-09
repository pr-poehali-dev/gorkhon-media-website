import { useState } from "react";
import Icon from "@/components/ui/icon";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const categories = [
    { id: "all", label: "Все проекты", icon: "Grid3X3" },
    { id: "video", label: "Видео", icon: "Video" },
    { id: "photo", label: "Фотопроекты", icon: "Camera" },
    { id: "podcast", label: "Подкасты", icon: "Mic" },
    { id: "social", label: "SMM", icon: "Share2" },
  ];

  const projects = [
    {
      id: 1,
      title: "Люди Горхона",
      category: "video",
      description:
        "Документальная серия о жителях нашего поселка, их историях и мечтах",
      fullDescription:
        'Проект "Люди Горхона" — это серия коротких документальных видео, в которых мы рассказываем истории обычных жителей нашего поселка. Каждый эпизод — это отдельная история о человеке, его работе, увлечениях и взглядах на жизнь.',
      duration: "15-20 мин",
      episodes: "12 эпизодов",
      views: "250K",
      image: "🎭",
      tags: ["Документалистика", "Интервью", "Люди"],
      achievements: [
        "Победитель регионального конкурса",
        "Более 250K просмотров",
        "Отзыв в местных СМИ",
      ],
    },
    {
      id: 2,
      title: "Горхон в кадре",
      category: "photo",
      description:
        "Фотопроект, показывающий красоту нашего поселка в разные времена года",
      fullDescription:
        "Долгосрочный фотопроект, в котором мы документируем жизнь Горхона через призму времен года. От снежных зим до ярких летних дней — каждый кадр рассказывает свою историю.",
      duration: "Весь год",
      episodes: "365 фото",
      views: "180K",
      image: "📷",
      tags: ["Фотография", "Природа", "Архитектура"],
      achievements: [
        "Выставка в местном музее",
        "Публикация в региональном журнале",
        "Календарь на 2024 год",
      ],
    },
    {
      id: 3,
      title: 'Подкаст "Горхон FM"',
      category: "podcast",
      description:
        "Еженедельный подкаст о новостях поселка и интересных событиях",
      fullDescription:
        "Еженедельный подкаст, в котором мы обсуждаем актуальные темы для жителей Горхона, приглашаем интересных гостей и рассказываем о предстоящих событиях.",
      duration: "45-60 мин",
      episodes: "48 выпусков",
      views: "95K",
      image: "🎙️",
      tags: ["Подкаст", "Новости", "Интервью"],
      achievements: [
        "Топ-10 подкастов региона",
        "Постоянная аудитория 2K+",
        "Партнерство с радиостанцией",
      ],
    },
    {
      id: 4,
      title: 'Фестиваль "Горхон Fest"',
      category: "video",
      description: "Организация и освещение ежегодного молодежного фестиваля",
      fullDescription:
        "Ежегодный молодежный фестиваль, который мы не только освещаем, но и активно участвуем в его организации. Три дня музыки, творчества и общения.",
      duration: "3 дня",
      episodes: "Прямые эфиры",
      views: "500K",
      image: "🎪",
      tags: ["Фестиваль", "Музыка", "Молодежь"],
      achievements: [
        "Более 1000 участников",
        "Освещение в федеральных СМИ",
        "Грантовая поддержка",
      ],
    },
    {
      id: 5,
      title: "История в лицах",
      category: "video",
      description: "Интервью с ветеранами и старожилами поселка",
      fullDescription:
        "Проект по сохранению исторической памяти. Мы записываем интервью с ветеранами войны и труда, старожилами поселка, которые помнят его историю.",
      duration: "30-40 мин",
      episodes: "8 интервью",
      views: "120K",
      image: "📚",
      tags: ["История", "Память", "Ветераны"],
      achievements: [
        "Архив в местном музее",
        "Благодарности от администрации",
        "Образовательный контент",
      ],
    },
    {
      id: 6,
      title: "SMM для бизнеса",
      category: "social",
      description: "Помогаем местному бизнесу развиваться в социальных сетях",
      fullDescription:
        "Образовательный проект, в рамках которого мы учим владельцев местного бизнеса эффективно использовать социальные сети для продвижения.",
      duration: "Постоянно",
      episodes: "20+ клиентов",
      views: "300K",
      image: "📈",
      tags: ["SMM", "Бизнес", "Обучение"],
      achievements: [
        "Рост продаж клиентов на 40%",
        "Мастер-классы для предпринимателей",
        "Кейсы в портфолио",
      ],
    },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

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
              Наши проекты
            </h1>
            <p className="text-xl text-gray-300 font-unbounded max-w-3xl mx-auto">
              Познакомьтесь с нашими работами — от документальных фильмов до
              образовательных программ
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-unbounded font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg"
                    : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white"
                }`}
              >
                <Icon name={category.icon as any} size={20} />
                <span>{category.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() =>
                  setSelectedProject(
                    selectedProject === project.id ? null : project.id,
                  )
                }
                className="group cursor-pointer bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                {/* Project Header */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-3xl">
                      {project.image}
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-unbounded font-bold text-white">
                        {project.views}
                      </div>
                      <div className="text-gray-400 font-unbounded text-sm">
                        просмотров
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-unbounded font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 font-unbounded text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 2).map((tag, index) => (
                      <span
                        key={index}
                        className="bg-white/10 text-gray-300 px-3 py-1 rounded-lg text-xs font-unbounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Project Stats */}
                  <div className="flex items-center justify-between text-sm font-unbounded text-gray-400">
                    <span>{project.duration}</span>
                    <span>{project.episodes}</span>
                  </div>

                  {/* Expand Indicator */}
                  <div className="flex items-center justify-center mt-4">
                    <Icon
                      name={
                        selectedProject === project.id
                          ? "ChevronUp"
                          : "ChevronDown"
                      }
                      size={20}
                      className="text-gray-400 group-hover:text-white transition-colors"
                    />
                  </div>
                </div>

                {/* Expanded Content */}
                {selectedProject === project.id && (
                  <div className="px-6 pb-6 animate-fade-in">
                    <div className="pt-4 border-t border-white/10">
                      <h4 className="text-white font-unbounded font-semibold mb-3">
                        Подробнее о проекте:
                      </h4>
                      <p className="text-gray-300 font-unbounded text-sm mb-4 leading-relaxed">
                        {project.fullDescription}
                      </p>

                      <h4 className="text-white font-unbounded font-semibold mb-3">
                        Достижения:
                      </h4>
                      <ul className="space-y-2 mb-4">
                        {project.achievements.map((achievement, index) => (
                          <li
                            key={index}
                            className="flex items-start space-x-2"
                          >
                            <Icon
                              name="Check"
                              size={16}
                              className="text-primary mt-0.5 flex-shrink-0"
                            />
                            <span className="text-gray-300 font-unbounded text-sm">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="bg-gradient-to-r from-primary/20 to-secondary/20 text-white px-3 py-1 rounded-lg text-xs font-unbounded border border-white/10"
                          >
                            {tag}
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

      {/* Stats Section */}
      <section className="py-16 bg-black/20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-unbounded font-bold text-white mb-4">
              Итоги нашей работы
            </h2>
            <p className="text-lg text-gray-300 font-unbounded">
              Цифры, которые говорят о результатах
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                number: "50+",
                label: "Завершенных проектов",
                icon: "CheckCircle",
              },
              { number: "1.5M+", label: "Общих просмотров", icon: "Eye" },
              { number: "15K+", label: "Подписчиков", icon: "Users" },
              { number: "98%", label: "Довольных клиентов", icon: "ThumbsUp" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name={stat.icon as any}
                    size={24}
                    className="text-white"
                  />
                </div>
                <div className="text-3xl font-unbounded font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 font-unbounded text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-sm border border-white/10 rounded-2xl p-12">
            <h2 className="text-4xl font-unbounded font-bold text-white mb-6">
              Есть идея для проекта?
            </h2>
            <p className="text-xl text-gray-300 font-unbounded mb-8 leading-relaxed">
              Мы всегда открыты для новых идей и сотрудничества. Если у вас есть
              интересная история или вы хотите заказать контент — давайте
              обсудим!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://vk.com/gorhon_media"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-xl font-unbounded font-semibold hover:scale-105 transition-all duration-200 shadow-lg shadow-primary/25"
              >
                <Icon name="ExternalLink" size={20} />
                <span>Обсудить проект</span>
              </a>
              <button className="inline-flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-unbounded font-semibold hover:bg-white/20 transition-all border border-white/20">
                <Icon name="Download" size={20} />
                <span>Скачать портфолио</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
