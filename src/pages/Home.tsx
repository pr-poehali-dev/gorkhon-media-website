import Icon from '@/components/ui/icon';

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white font-unbounded overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-between px-8 lg:px-16">
        {/* Grid Background */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0, 91, 255, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 91, 255, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px'
            }}
          />
        </div>

        {/* Geometric Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Blue geometric shape */}
          <div className="absolute top-20 left-0 w-80 h-80 bg-brand-blue rounded-full transform -translate-x-1/2 opacity-80" />
          <div className="absolute top-40 left-20 w-60 h-40 bg-brand-pink transform rotate-45 opacity-60" />
          
          {/* Teal curved shape */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-teal transform translate-x-1/4 -translate-y-1/4 rounded-full opacity-70" />
          
          {/* Pink accent shapes */}
          <div className="absolute bottom-20 left-1/4 w-32 h-32 bg-brand-pink rounded-full opacity-50" />
          <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-brand-pink transform rotate-45" />
        </div>

        {/* Left Content */}
        <div className="relative z-10 max-w-2xl">
          <div className="mb-6">
            <span className="text-sm font-medium tracking-wider text-brand-blue uppercase">
              Горхон
            </span>
            <div className="text-xs text-gray-400 mt-1">
              Медиакоманда поселка возможностей
            </div>
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="text-white">«Горхон» — твой старт</span>
            <br />
            <span className="text-white">в мир медиавозможностей</span>
          </h1>

          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Пройди путь от начинающего автора
            <br />
            до лидера общественного мнения
          </p>

          <button className="bg-white text-black px-8 py-4 rounded-full font-medium text-lg hover:bg-gray-100 transition-colors">
            <span className="text-brand-pink font-bold">ПРИСОЕДИНИТЬСЯ К КОМАНДЕ</span>
          </button>
        </div>

        {/* Right Content - Photos */}
        <div className="relative z-10 hidden lg:block">
          <div className="relative">
            {/* Star decoration */}
            <div className="absolute -top-10 -right-10 text-white text-6xl">
              ✦
            </div>
            
            {/* Photo cards */}
            <div className="relative space-y-4">
              <div className="bg-white p-2 rounded-lg transform rotate-3 shadow-xl">
                <img 
                  src="https://cdn.poehali.dev/files/cee6492e-c2f4-42f9-9f0a-d4ce3c6b5e20.png" 
                  alt="Команда Горхон" 
                  className="w-64 h-40 object-cover rounded"
                />
              </div>
              <div className="bg-white p-2 rounded-lg transform -rotate-2 shadow-xl ml-8">
                <img 
                  src="https://cdn.poehali.dev/files/77d59907-f9df-4a26-9b4d-4a3bca732b61.png" 
                  alt="Медиа Горхон" 
                  className="w-64 h-40 object-cover rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Gorkhon Section */}
      <section className="relative py-20 px-8 lg:px-16">
        {/* Pink background with grid */}
        <div className="absolute inset-0 bg-brand-pink">
          <div 
            className="w-full h-full opacity-30"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '30px 30px'
            }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold mb-16 text-white">
            Почему «Горхон» — это ТОП?
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Feature cards */}
            <div className="space-y-6">
              <div className="bg-teal-dark text-white p-6 rounded-lg transform -rotate-1">
                <p className="text-lg">
                  Бесплатно обучаем созданию качественного,
                  модного и полезного контента
                </p>
              </div>
              
              <div className="bg-white text-black p-6 rounded-lg transform rotate-2 ml-8">
                <p className="text-lg">
                  Даем возможности карьерного роста,
                  продюсирования и продвижения
                </p>
              </div>

              <div className="bg-white text-black p-6 rounded-lg transform -rotate-1">
                <p className="text-lg">
                  Делаем из начинающих авторов лидеров
                  общественного мнения
                </p>
              </div>

              <div className="bg-teal-dark text-white p-6 rounded-lg transform rotate-1 ml-8">
                <p className="text-lg">
                  С нами — пять поколений блогеров
                  от 10 до 93 лет
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white text-black p-6 rounded-lg transform rotate-1">
                <p className="text-lg">
                  Лидеры медиа и популярные блогеры дают
                  менторскую поддержку
                </p>
              </div>

              <div className="bg-teal-dark text-white p-6 rounded-lg transform -rotate-2 ml-8">
                <p className="text-lg">
                  Более 50 компаний-партнеров помогают
                  участникам в профессиональном развитии
                </p>
              </div>

              <div className="bg-white text-black p-6 rounded-lg transform rotate-2">
                <p className="text-lg">
                  Объединили масштабное блогерское комьюнити
                  из 89 регионов России и более 50 стран мира
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative py-20 px-8 lg:px-16 bg-gray-100 text-black">
        {/* Mountain silhouette background */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-brand-pink">
          <svg 
            className="absolute bottom-0 w-full h-20" 
            viewBox="0 0 1200 120" 
            fill="none"
          >
            <path 
              d="M0,60 Q150,0 300,60 T600,60 T900,60 T1200,60 L1200,120 L0,120 Z" 
              fill="#f3f4f6"
            />
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto pt-20">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-teal-dark">
            Блогинг с миссией и смыслом!
          </h2>

          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Единственный в России проект, ставший отправной точкой
            для масштабирования и развития сотен тысяч блогов. Наша
            миссия — сделать социально значимый контент модным
            и популярным
          </p>

          <div className="relative inline-block">
            <div className="bg-brand-pink text-white px-8 py-4 rounded-full transform rotate-3">
              <span className="font-bold text-lg">+ 230 тыс. авторов</span>
              <br />
              <span className="text-sm">контента и блогеров</span>
              <br />
              <span className="text-sm">уже с нами</span>
              <br />
              <span className="font-bold">Ждем тебя в команды!</span>
            </div>
          </div>
        </div>

        {/* Large text decoration */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
          <div className="text-teal-dark text-[20rem] font-bold opacity-10 whitespace-nowrap transform -translate-y-1/2">
            ГОРХОН
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="relative py-20 px-8 lg:px-16 bg-brand-blue">
        {/* Grid background */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px'
            }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-white">
            Место встречи — «Горхон»!
          </h2>

          <p className="text-xl text-blue-100 mb-12 max-w-3xl">
            В 2025 году «Горхон» станет пространством для встреч, обмена опытом
            и совместной работы над важными задачами
          </p>

          {/* Film strip with photos */}
          <div className="relative">
            <div className="bg-black p-4 rounded-lg">
              <div className="flex space-x-4 overflow-x-auto">
                {/* Film holes */}
                <div className="flex-shrink-0 w-8 bg-black">
                  <div className="space-y-2 py-2">
                    {[...Array(8)].map((_, i) => (
                      <div key={i} className="w-4 h-4 bg-gray-800 rounded-full mx-auto" />
                    ))}
                  </div>
                </div>

                {/* Photos */}
                <div className="flex space-x-2">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <div key={num} className="flex-shrink-0 w-48 h-32 bg-gray-700 rounded overflow-hidden">
                      <img 
                        src={`https://cdn.poehali.dev/files/a8e5ef85-89bd-40b5-b4df-885c034de6cd.png`}
                        alt={`Команда ${num}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>

                {/* Film holes */}
                <div className="flex-shrink-0 w-8 bg-black">
                  <div className="space-y-2 py-2">
                    {[...Array(8)].map((_, i) => (
                      <div key={i} className="w-4 h-4 bg-gray-800 rounded-full mx-auto" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Film frame numbers */}
              <div className="flex justify-between text-yellow-400 text-sm font-mono mt-2 px-12">
                <span>21</span>
                <span>21</span>
                <span>21</span>
                <span>21</span>
                <span>21</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;