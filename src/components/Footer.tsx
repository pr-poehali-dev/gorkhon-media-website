import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="bg-primary rounded-2xl p-3 shadow-lg">
                  <div className="h-8 bg-white rounded-lg p-1.5 flex items-center justify-center">
                    <img
                      src="https://cdn.poehali.dev/files/6ffd92ec-3432-4ca8-bb14-85125928e527.png"
                      alt="Горхон Медиа"
                      className="h-full object-contain"
                    />
                  </div>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-secondary rounded-full"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-unbounded font-black text-xl leading-tight">
                  Горхон
                </span>
                <span className="text-gray-400 font-unbounded font-bold text-sm -mt-1">
                  Медиа
                </span>
              </div>
            </div>
            <p className="text-gray-300 font-unbounded text-sm leading-relaxed">
              Рассказываем истории нашего поселка простыми словами. 
              Каждый момент важен, каждая история достойна внимания.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-unbounded font-bold text-lg">Навигация</h3>
            <div className="space-y-2">
              {[
                { href: "/", label: "Главная" },
                { href: "/about", label: "О нас" },
                { href: "/team", label: "Команда" },
                { href: "/projects", label: "Наши проекты" }
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-gray-300 hover:text-primary font-unbounded text-sm transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white font-unbounded font-bold text-lg">Связь с нами</h3>
            <div className="space-y-3">
              <a
                href="https://vk.com/public214224996"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-primary transition-colors group"
              >
                <div className="bg-primary/20 group-hover:bg-primary p-2 rounded-lg transition-colors">
                  <Icon name="Users" size={16} className="text-primary group-hover:text-white" />
                </div>
                <span className="font-unbounded text-sm">Наша группа ВК</span>
              </a>
              
              <a
                href="https://vk.com/im?entrypoint=community_page&media=&sel=-214224996"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-secondary transition-colors group"
              >
                <div className="bg-secondary/20 group-hover:bg-secondary p-2 rounded-lg transition-colors">
                  <Icon name="MessageCircle" size={16} className="text-secondary group-hover:text-white" />
                </div>
                <span className="font-unbounded text-sm">Написать нам</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Copyright */}
            <div className="text-gray-400 font-unbounded text-sm text-center md:text-left">
              © 2025 Медиакоманда Горхон. Сделано с ❤️ для нашего поселка.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a
                href="https://vk.com/public214224996"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-secondary text-white p-3 rounded-2xl transition-all hover:scale-110 shadow-lg"
                title="ВКонтакте"
              >
                <Icon name="Users" size={20} />
              </a>
              
              <a
                href="https://vk.com/im?entrypoint=community_page&media=&sel=-214224996"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary hover:bg-primary text-white p-3 rounded-2xl transition-all hover:scale-110 shadow-lg"
                title="Написать"
              >
                <Icon name="MessageCircle" size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;