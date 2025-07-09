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
      title: "По волнам школьной памяти",
      category: "photo",
      description:
        "А теперь можно и перелистнуть страницы школьных воспоминаний с выпускных и последних звонков.",
      fullDescription:
        "Фотопроект, посвященный школьным воспоминаниям выпускников. Собрали самые яркие и трогательные моменты выпускных вечеров и последних звонков, чтобы сохранить эти важные моменты жизни навсегда.",
      duration: "Июнь 2024",
      episodes: "Фотоальбом",
      views: "560",
      image:
        "https://cdn.poehali.dev/files/a863a0f2-70cf-4a7e-8b96-561c13a9bc1e.png",
      url: "https://vk.com/wall-214224996_1109",
      tags: ["Школа", "Выпускной", "Память"],
      achievements: [
        "Более 560 просмотров",
        "Благодарности от выпускников",
        "Сохранение памяти о школьных годах",
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
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                {/* Project Image Background */}
                <div
                  className="h-48 bg-cover bg-center relative"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${project.image})`,
                  }}
                >
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-2">
                    <div className="text-white font-unbounded font-bold text-sm">
                      {project.views}
                    </div>
                    <div className="text-gray-300 font-unbounded text-xs">
                      просмотров
                    </div>
                  </div>
                </div>

                {/* Project Header */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                      <Icon name="Camera" size={20} className="text-white" />
                    </div>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-lg font-unbounded font-medium text-sm hover:scale-105 transition-all"
                    >
                      <Icon name="ExternalLink" size={16} />
                      <span>Открыть пост</span>
                    </a>
                  </div>

                  <h3
                    className="text-xl font-unbounded font-bold text-white mb-2 cursor-pointer"
                    onClick={() =>
                      setSelectedProject(
                        selectedProject === project.id ? null : project.id,
                      )
                    }
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-gray-300 font-unbounded text-sm mb-4 leading-relaxed cursor-pointer"
                    onClick={() =>
                      setSelectedProject(
                        selectedProject === project.id ? null : project.id,
                      )
                    }
                  >
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
                  <div
                    className="flex items-center justify-center mt-4 cursor-pointer"
                    onClick={() =>
                      setSelectedProject(
                        selectedProject === project.id ? null : project.id,
                      )
                    }
                  >
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
