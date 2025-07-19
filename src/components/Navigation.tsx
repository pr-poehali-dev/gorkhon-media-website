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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              {/* Blue background for white logo */}
              <div className="bg-primary rounded-lg p-2 group-hover:scale-105 transition-transform">
                <div className="h-8 w-8 bg-white rounded flex items-center justify-center">
                  <img
                    src="https://cdn.poehali.dev/files/6ffd92ec-3432-4ca8-bb14-85125928e527.png"
                    alt="Горхон Медиа"
                    className="h-6 w-6 object-contain"
                  />
                </div>
              </div>
            </div>
            <div className="hidden sm:block">
              <span className="text-gray-900 font-bold text-xl">
                Горхон.<span className="text-primary">Медиа</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-primary text-white"
                      : "text-gray-700 hover:text-primary hover:bg-gray-100"
                  }`}
                >
                  <Icon name={item.icon as any} size={16} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
            
            {/* Contact CTA */}
            <a
              href="https://vk.com/im?entrypoint=community_page&media=&sel=-214224996"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 bg-secondary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-secondary/90 transition-colors flex items-center space-x-2"
            >
              <Icon name="MessageCircle" size={16} />
              <span>Связаться</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-primary transition-colors"
          >
            <Icon name={isOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      isActive
                        ? "bg-primary text-white"
                        : "text-gray-700 hover:text-primary hover:bg-gray-100"
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
                className="flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium bg-secondary text-white mt-4"
              >
                <Icon name="MessageCircle" size={20} />
                <span>Связаться</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;