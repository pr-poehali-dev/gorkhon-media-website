import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "ГЛАВНАЯ", icon: "Home" },
    { path: "/about", label: "О НАС", icon: "Users" },
    { path: "/team", label: "КОМАНДА", icon: "UserCheck" },
    { path: "/projects", label: "ПРОЕКТЫ", icon: "FolderOpen" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/20 shadow-2xl font-unbounded">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-4 group">
            <div className="relative">
              {/* Futuristic logo container */}
              <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-3 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-2xl">
                <div className="h-10 w-10 bg-white rounded-lg p-2 flex items-center justify-center relative overflow-hidden">
                  <img
                    src="https://cdn.poehali.dev/files/6ffd92ec-3432-4ca8-bb14-85125928e527.png"
                    alt="Горхон Медиа"
                    className="h-6 w-6 object-contain"
                  />
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              </div>
              
              {/* Floating accent dots */}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
              <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-primary rounded-full animate-ping"></div>
            </div>
            
            <div className="hidden sm:block">
              <span className="text-white font-black text-xl tracking-tight">
                ГОРХОН<span className="text-primary">.</span><span className="text-secondary">МЕДИА</span>
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
                  className={`group relative flex items-center space-x-2 px-6 py-3 rounded-2xl text-sm font-black transition-all duration-300 transform hover:scale-105 ${
                    isActive
                      ? "bg-gradient-to-r from-primary to-secondary text-white shadow-2xl"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {/* Background glow for active item */}
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-lg opacity-50"></div>
                  )}
                  
                  <div className="relative flex items-center space-x-2">
                    <Icon 
                      name={item.icon as any} 
                      size={18} 
                      className={`${isActive ? 'animate-pulse' : 'group-hover:scale-110 transition-transform duration-300'}`} 
                    />
                    <span className="tracking-wider">{item.label}</span>
                  </div>
                  
                  {/* Hover effect line */}
                  {!isActive && (
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                  )}
                </Link>
              );
            })}
            
            {/* CTA Button */}
            <a
              href="https://vk.com/im?entrypoint=community_page&media=&sel=-214224996"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative ml-6 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-3 rounded-2xl text-sm font-black transition-all duration-300 transform hover:scale-105 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center space-x-2">
                <Icon name="MessageCircle" size={16} className="group-hover:animate-bounce" />
                <span className="tracking-wider">СВЯЗАТЬСЯ</span>
              </div>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative group p-3 bg-white/10 rounded-2xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
          >
            <Icon 
              name={isOpen ? "X" : "Menu"} 
              size={24} 
              className="text-white group-hover:rotate-180 transition-transform duration-300" 
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-4 pt-6 pb-8 space-y-4 bg-black/90 backdrop-blur-xl rounded-3xl mt-4 mb-4 border border-white/20 shadow-2xl">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`group relative flex items-center space-x-4 px-6 py-4 rounded-2xl text-base font-black transition-all duration-300 transform hover:scale-105 ${
                      isActive
                        ? "bg-gradient-to-r from-primary to-secondary text-white shadow-2xl"
                        : "text-gray-300 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {/* Background glow for active item */}
                    {isActive && (
                      <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-lg opacity-50"></div>
                    )}
                    
                    <div className="relative flex items-center space-x-4">
                      <Icon 
                        name={item.icon as any} 
                        size={22} 
                        className={`${isActive ? 'animate-pulse' : 'group-hover:scale-110 transition-transform duration-300'}`} 
                      />
                      <span className="tracking-wider">{item.label}</span>
                    </div>
                  </Link>
                );
              })}
              
              {/* Mobile CTA */}
              <a
                href="https://vk.com/im?entrypoint=community_page&media=&sel=-214224996"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="group relative flex items-center space-x-4 px-6 py-4 rounded-2xl text-base font-black bg-gradient-to-r from-secondary to-primary text-white shadow-2xl mt-6 transform hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center space-x-4">
                  <Icon name="MessageCircle" size={22} className="group-hover:animate-bounce" />
                  <span className="tracking-wider">СВЯЗАТЬСЯ С НАМИ</span>
                </div>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;