import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="fixed inset-0 opacity-20">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#334155" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Geometric Shapes */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-teal-dark rounded-full opacity-30"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-primary/40 rotate-45"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-secondary/20 clip-polygon-triangle"></div>
        
        {/* Color Shapes like TopBlog */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-teal-dark via-primary to-transparent rounded-full opacity-20 -translate-x-20 -translate-y-20"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-secondary via-primary to-transparent rounded-full opacity-15 translate-x-20 translate-y-20"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="relative z-10">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-8">
              <div className="text-white font-bold text-2xl tracking-tight">
                ТОП<span className="text-primary">БЛОГ</span>
              </div>
              <div className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded">
                РОССИЯ — СТРАНА ВОЗМОЖНОСТЕЙ
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              «ТопБЛОГ» — твой старт<br />
              в мир медиавозможностей
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-2xl">
              Пройди путь от начинающего автора<br />
              до лидера общественного мнения
            </p>

            {/* CTA Button */}
            <Button 
              className="bg-white text-secondary px-8 py-6 text-lg font-bold rounded-full hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              ЗАРЕГИСТРИРОВАТЬСЯ В 5 СЕЗОН
            </Button>
          </div>

          {/* Hero Images */}
          <div className="relative z-10">
            {/* Star decoration */}
            <div className="absolute -top-10 -right-10 w-24 h-24">
              <svg viewBox="0 0 100 100" className="w-full h-full text-white">
                <path d="M50,10 L60,40 L90,40 L68,58 L78,88 L50,70 L22,88 L32,58 L10,40 L40,40 Z" fill="currentColor"/>
              </svg>
            </div>
            
            {/* Polaroid-style images */}
            <div className="relative">
              <div className="absolute top-0 right-20 transform rotate-12 bg-white p-4 rounded-lg shadow-xl z-20">
                <img 
                  src="https://cdn.poehali.dev/files/4b3e09ed-a04a-4215-96ff-07db50eba718.png"
                  alt="TopBlog участники" 
                  className="w-48 h-32 object-cover rounded"
                />
              </div>
              <div className="absolute top-20 left-10 transform -rotate-6 bg-white p-4 rounded-lg shadow-xl z-10">
                <img 
                  src="https://cdn.poehali.dev/files/4b3e09ed-a04a-4215-96ff-07db50eba718.png"
                  alt="TopBlog команда" 
                  className="w-56 h-36 object-cover rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why TopBlog Section */}
      <section className="py-20 bg-secondary relative overflow-hidden">
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-30">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid2" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ffffff" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid2)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Почему «ТопБЛОГ» — это ТОП?
            </h2>
          </div>

          {/* Diagonal Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Бесплатно обучаем созданию качественного, модного и полезного контента",
              "Лидеры медиа и популярные блогеры дают менторскую поддержку",
              "Дарим возможности карьерного роста, Продюсирования и продвижения",
              "Делаем из начинающих авторов лидеров общественного мнения",
              "С нами — пять поколений блогеров от 10 до 93 лет",
              "Более 50 компаний-партнеров помогают участникам в профессиональном развитии",
              "Объединили масштабное блогерское комьюнити из 89 регионов России и более 50 стран мира"
            ].map((text, index) => (
              <div 
                key={index} 
                className={`bg-white text-black p-6 rounded-lg transform ${
                  index % 2 === 0 ? 'rotate-2' : '-rotate-2'
                } hover:rotate-0 transition-transform duration-300 shadow-lg`}
              >
                <p className="font-medium">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-100 text-black relative overflow-hidden">
        {/* Wavy decoration */}
        <div className="absolute top-0 left-0 w-full h-32 bg-secondary">
          <svg viewBox="0 0 1200 120" className="absolute bottom-0 w-full h-full">
            <path d="M0,120 C300,60 600,60 900,120 C1050,150 1150,90 1200,120 L1200,0 L0,0 Z" fill="#F5F5F5"/>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-teal-dark mb-8">
                Блогинг с миссией и смыслом!
              </h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Единственный в России проект, ставший отправной точкой 
                для масштабирования и развития сотен тысяч блогов. Наша 
                миссия — сделать социально значимый контент модным 
                и популярным
              </p>
              
              {/* Highlighted text bubble */}
              <div className="inline-block bg-secondary text-white px-6 py-3 rounded-full text-lg font-bold transform rotate-3">
                + 230 тыс. авторов контента и блогеров
                <br />
                Уже с нами!
                <br />
                Ждем тебя в команде!
              </div>
            </div>

            {/* Large decorative text */}
            <div className="relative">
              <div className="text-9xl font-bold text-teal-dark/20 leading-none">
                ТОПБЛОГ
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meeting Section */}
      <section className="py-20 bg-primary relative overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid3" width="30" height="30" patternUnits="userSpaceOnUse">
                <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#ffffff" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid3)" />
          </svg>
        </div>

        {/* Wavy top decoration */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gray-100">
          <svg viewBox="0 0 1200 120" className="absolute bottom-0 w-full h-full">
            <path d="M0,0 C300,60 600,60 900,0 C1050,-30 1150,30 1200,0 L1200,120 L0,120 Z" fill="#005BFF"/>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 pt-20">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Место встречи — «ТопБЛОГ»!
            </h2>
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              В 2025 году «ТопБЛОГ» станет пространством для встреч, обмена опытом
              и совместной работы над важными задачами
            </p>
          </div>

          {/* Film strip decoration */}
          <div className="mt-16 relative">
            <div className="bg-black h-32 rounded-lg overflow-hidden relative">
              <div className="absolute inset-0 flex items-center">
                {/* Film frames */}
                {[1,2,3,4,5,6].map((frame) => (
                  <div key={frame} className="flex-shrink-0 w-24 h-16 bg-gray-800 border-2 border-yellow-400 mx-1 rounded flex items-center justify-center text-yellow-400 font-bold">
                    {frame}
                  </div>
                ))}
              </div>
              
              {/* Film holes */}
              <div className="absolute top-2 left-0 right-0 flex justify-between">
                {Array.from({length: 20}).map((_, i) => (
                  <div key={i} className="w-3 h-3 bg-black rounded-full"></div>
                ))}
              </div>
              <div className="absolute bottom-2 left-0 right-0 flex justify-between">
                {Array.from({length: 20}).map((_, i) => (
                  <div key={i} className="w-3 h-3 bg-black rounded-full"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .clip-polygon-triangle {
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        }
      `}</style>
    </div>
  );
};

export default Home;