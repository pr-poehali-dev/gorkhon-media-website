import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-brand-dark border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <div className="text-gray-300 font-unbounded text-xs md:text-sm text-center md:text-left">
            © 2025 Медиакоманда Горхон. Все права защищены.
          </div>

          {/* Social Links */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
            <a
              href="https://vk.com/gorhon_official"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-primary/20 hover:bg-primary text-white px-3 md:px-4 py-2 rounded-lg font-unbounded font-medium text-sm transition-all hover:scale-105"
            >
              <Icon name="ExternalLink" size={16} />
              <span>ВКонтакте</span>
            </a>

            <a
              href="https://t.me/gorhon_official"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-primary/20 hover:bg-primary text-white px-3 md:px-4 py-2 rounded-lg font-unbounded font-medium text-sm transition-all hover:scale-105"
            >
              <Icon name="MessageCircle" size={16} />
              <span>Телеграм</span>
            </a>

            <a
              href="mailto:admin@gorhon.ru"
              className="flex items-center space-x-2 bg-primary/20 hover:bg-primary text-white px-3 md:px-4 py-2 rounded-lg font-unbounded font-medium text-sm transition-all hover:scale-105"
            >
              <Icon name="Mail" size={16} />
              <span className="hidden sm:inline">admin@gorhon.ru</span>
              <span className="sm:hidden">E-mail</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;