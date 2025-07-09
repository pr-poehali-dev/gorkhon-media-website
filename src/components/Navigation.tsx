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
    { path: "/reviews", label: "Отзывы", icon: "MessageSquare" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-primary via-secondary to-primary backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-primary font-unbounded font-bold text-lg">
                Г
              </span>
            </div>
            <span className="text-white font-unbounded font-bold text-xl group-hover:text-white/80 transition-colors">
              Горхон.Медиа
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg font-unbounded text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-white text-primary"
                      : "text-white hover:bg-white/10 hover:scale-105"
                  }`}
                >
                  <Icon name={item.icon as any} size={16} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://vk.com/gorhon_media"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-white hover:text-white/80 hover:scale-110 transition-all"
            >
              <Icon name="ExternalLink" size={20} />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white hover:text-white/80 transition-colors"
          >
            <Icon name={isOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/20 backdrop-blur-sm rounded-lg mt-2 mb-4">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-lg font-unbounded text-sm font-medium transition-all ${
                      isActive
                        ? "bg-white text-primary"
                        : "text-white hover:bg-white/10"
                    }`}
                  >
                    <Icon name={item.icon as any} size={16} />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
              <div className="pt-3 border-t border-white/10">
                <a
                  href="https://vk.com/gorhon_media"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 px-3 py-2 text-white hover:text-white/80 font-unbounded text-sm"
                >
                  <Icon name="ExternalLink" size={16} />
                  <span>ВКонтакте</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
