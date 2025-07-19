import { useState } from "react";
import Icon from "@/components/ui/icon";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const categories = [
    { id: "all", label: "Все проекты", icon: "Grid3X3" },
    { id: "photo", label: "Фотопроекты", icon: "Camera" },
  ];

  const projects = [
    {
      id: 1,
      title: "По волнам школьной памяти",
      category: "photo",
      description:
        "Перелистываем страницы школьных воспоминаний с выпускных и последних звонков",
      fullDescription:
        "Этот фотопроект близок нашему сердцу! Мы собрали самые яркие и трогательные моменты выпускных и последних звонков. Каждый кадр — это целая история, которую хочется сохранить навсегда!",
      duration: "Июнь 2025",
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
    <div className="min-h-screen bg-gray-50 pt-24">
      {/* Hero Section */}
      <section className="relative py-16 bg-white">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-8 w-3 h-20 bg-primary transform rotate-12 opacity-20"></div>
          <div className="absolute bottom-20 right-8 w-3 h-24 bg-secondary transform -rotate-12 opacity-20"></div>
          <div className="absolute top-1/2 right-1/4 text-8xl text-primary/5 font-unbounded font-black transform rotate-12">П</div>
        </div>

        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative">
          <div className="text-center">
            <div className="inline-block mb-6">
              <div className="flex items-center space-x-2 text-sm font-unbounded font-bold text-secondary uppercase tracking-wider">
                <div className="w-8 h-0.5 bg-secondary"></div>
                <span>Портфолио наших работ</span>
                <div className="w-8 h-0.5 bg-secondary"></div>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-unbounded font-black text-gray-900 mb-8">
              Наши проекты
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 font-unbounded max-w-4xl mx-auto leading-relaxed">
              Познакомьтесь с нашими работами — от фотопроектов до образовательных программ. 
              <span className="text-primary font-bold"> Каждый проект рассказывает свою историю</span>
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-4 rounded-2xl font-unbounded font-bold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-primary text-white shadow-lg scale-105"
                    : "bg-white text-gray-700 hover:bg-primary/10 hover:text-primary hover:scale-105 shadow-sm"
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
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg border-2 border-gray-100 hover:border-primary/20 hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  
                  {/* Views Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-2xl px-3 py-2">
                    <div className="text-gray-900 font-unbounded font-black text-sm">
                      {project.views}
                    </div>
                    <div className="text-gray-600 font-unbounded text-xs -mt-1">
                      просмотров
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-primary text-white rounded-2xl p-3">
                    <Icon name="Camera" size={20} />
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-unbounded font-black text-gray-900">
                      {project.title}
                    </h3>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center space-x-2 bg-secondary text-white px-4 py-2 rounded-xl font-unbounded font-bold text-sm hover:scale-105 transition-all shadow-lg"
                    >
                      <Icon name="ExternalLink" size={16} />
                      <span>Смотреть</span>
                    </a>
                  </div>

                  <p className="text-gray-700 font-unbounded text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 2).map((tag, index) => (
                      <span
                        key={index}
                        className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-unbounded font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 2 && (
                      <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-xs font-unbounded font-medium">
                        +{project.tags.length - 2}
                      </span>
                    )}
                  </div>

                  {/* Project Stats */}
                  <div className="flex items-center justify-between text-sm font-unbounded text-gray-500 mb-4">
                    <span className="font-medium">{project.duration}</span>
                    <span className="font-medium">{project.episodes}</span>
                  </div>

                  {/* Expand Indicator */}
                  <div
                    className="flex items-center justify-center cursor-pointer"
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
                      className="text-gray-400 group-hover:text-primary transition-colors"
                    />
                  </div>
                </div>

                {/* Expanded Content */}
                {selectedProject === project.id && (
                  <div className="px-6 pb-6 animate-fade-in">
                    <div className="pt-4 border-t-2 border-primary/10">
                      <h4 className="text-gray-900 font-unbounded font-black mb-3">
                        Подробнее о проекте:
                      </h4>
                      <p className="text-gray-700 font-unbounded text-sm mb-4 leading-relaxed">
                        {project.fullDescription}
                      </p>

                      <h4 className="text-gray-900 font-unbounded font-black mb-3">
                        Достижения:
                      </h4>
                      <ul className="space-y-2 mb-4">
                        {project.achievements.map((achievement, index) => (
                          <li
                            key={index}
                            className="flex items-start space-x-3"
                          >
                            <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Icon
                                name="Check"
                                size={14}
                                className="text-white"
                              />
                            </div>
                            <span className="text-gray-700 font-unbounded text-sm">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="bg-primary/5 text-primary px-3 py-2 rounded-2xl text-xs font-unbounded font-medium border border-primary/10"
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

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="mb-8">
            <div className="inline-block bg-white/10 px-6 py-3 rounded-full mb-6">
              <span className="text-white font-unbounded font-bold">Есть идея?</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-unbounded font-black text-white mb-6">
              Давайте создадим что-то вместе!
            </h2>
            
            <p className="text-xl text-white/90 font-unbounded max-w-4xl mx-auto leading-relaxed mb-12">
              Мы всегда открыты для новых идей и сотрудничества. Если у вас есть интересная история или вы хотите заказать контент — давайте обсудим! 
              <span className="block mt-2 font-bold">Каждый проект начинается с простого разговора</span>
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
              <span>Обсудить проект</span>
            </a>
            
            <a
              href="https://vk.com/public214224996"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-3 bg-secondary text-white px-8 py-4 rounded-2xl font-unbounded font-bold hover:bg-white hover:text-secondary transition-all duration-300 shadow-lg text-lg group"
            >
              <Icon name="Users" size={24} className="group-hover:animate-pulse" />
              <span>Смотреть ещё работы</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;