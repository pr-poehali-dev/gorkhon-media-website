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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary backdrop-blur-lg border-b border-brand-light/30 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="h-10 md:h-12 group-hover:scale-110 transition-transform">
              <img
                src="https://cdn.poehali.dev/files/6ffd92ec-3432-4ca8-bb14-85125928e527.png"
                alt="Горхон Медиа"
                className="h-full object-contain"
              />
            </div>
            <span className="text-white font-unbounded font-bold text-lg md:text-xl group-hover:text-brand-light transition-colors">
              Медиа
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
                      ? "bg-white text-primary shadow-md"
                      : "text-white hover:bg-secondary hover:scale-105 hover:shadow-md"
                  }`}
                >
                  <Icon name={item.icon as any} size={16} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
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
            <div className="px-2 pt-2 pb-3 space-y-1 bg-brand-dark/90 backdrop-blur-sm rounded-lg mt-2 mb-4 border border-brand-light/20">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-lg font-unbounded text-sm font-medium transition-all ${
                      isActive
                        ? "bg-white text-primary shadow-md"
                        : "text-white hover:bg-secondary hover:shadow-md"
                    }`}
                  >
                    <Icon name={item.icon as any} size={16} />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;