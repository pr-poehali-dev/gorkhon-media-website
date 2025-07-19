import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Главная", icon: "Home" },
    { path: "/about", label: "О нас", icon: "Users" },
    { path: "/team", label: "Команда", icon: "UserCheck" },
    { path: "/projects", label: "Наши проекты", icon: "FolderOpen" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b-2 border-primary/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo - proper display for white logo with blue background */}
          <Link to="/" className="flex items-center space-x-4 group">
            <div className="relative">
              {/* Blue background for white logo */}
              <div className="bg-primary rounded-2xl p-3 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                <div className="h-8 md:h-10 bg-white rounded-lg p-1.5 flex items-center justify-center">
                  <img
                    src="https://cdn.poehali.dev/files/6ffd92ec-3432-4ca8-bb14-85125928e527.png"
                    alt="Горхон Медиа"
                    className="h-full object-contain"
                  />
                </div>
              </div>
              {/* Small accent */}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-secondary rounded-full"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-900 font-unbounded font-black text-xl md:text-2xl group-hover:text-primary transition-colors leading-tight">
                Горхон
              </span>
              <span className="text-gray-600 font-unbounded font-bold text-xs md:text-sm -mt-1">
                Медиа
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-2xl font-unbounded text-sm font-bold transition-all duration-300 ${
                    isActive
                      ? "bg-primary text-white shadow-lg scale-105"
                      : "text-gray-700 hover:bg-primary/10 hover:text-primary hover:scale-105"
                  }`}
                >
                  <Icon name={item.icon as any} size={18} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
            
            {/* Contact CTA */}
            <a
              href="https://vk.com/im?entrypoint=community_page&media=&sel=-214224996"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 bg-secondary text-white px-5 py-3 rounded-2xl font-unbounded font-bold text-sm hover:bg-primary transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center space-x-2"
            >
              <Icon name="MessageCircle" size={16} />
              <span>Написать</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-3 text-gray-700 hover:text-primary transition-colors bg-gray-100 rounded-2xl hover:bg-primary/10"
          >
            <Icon name={isOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-4 pt-4 pb-6 space-y-3 bg-gray-50/95 backdrop-blur-sm rounded-3xl mt-4 mb-4 border-2 border-primary/10 shadow-xl">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-2xl font-unbounded text-base font-bold transition-all ${
                      isActive
                        ? "bg-primary text-white shadow-lg"
                        : "text-gray-700 hover:bg-primary/10 hover:text-primary"
                    }`}
                  >
                    <Icon name={item.icon as any} size={20} />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
              
              {/* Mobile Contact CTA */}
              <a
                href="https://vk.com/im?entrypoint=community_page&media=&sel=-214224996"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center space-x-3 px-4 py-3 rounded-2xl font-unbounded font-bold text-base bg-secondary text-white shadow-lg mt-4"
              >
                <Icon name="MessageCircle" size={20} />
                <span>Написать нам</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;