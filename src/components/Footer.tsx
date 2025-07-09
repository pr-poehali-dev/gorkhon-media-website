import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-black/40 backdrop-blur-sm border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <div className="text-gray-300 font-unbounded text-sm text-center md:text-left">
            © 2025 Медиакоманда Горхон. Все права защищены.
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://vk.com/gorhon_official"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg font-unbounded font-medium transition-all hover:scale-105"
            >
              <Icon name="ExternalLink" size={16} />
              <span>ВКонтакте</span>
            </a>

            <a
              href="https://t.me/gorhon_official"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg font-unbounded font-medium transition-all hover:scale-105"
            >
              <Icon name="MessageCircle" size={16} />
              <span>Телеграм</span>
            </a>

            <a
              href="mailto:admin@gorhon.ru"
              className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg font-unbounded font-medium transition-all hover:scale-105"
            >
              <Icon name="Mail" size={16} />
              <span>admin@gorhon.ru</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
