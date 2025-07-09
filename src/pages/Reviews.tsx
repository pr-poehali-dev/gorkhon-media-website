import { useState } from "react";
import Icon from "@/components/ui/icon";

const Reviews = () => {
  const [selectedReview, setSelectedReview] = useState<number | null>(null);

  const reviews = [
    {
      id: 1,
      name: "Елена Смирнова",
      role: "Подписчик с первого дня",
      review:
        "Горхон.Медиа изменили мое представление о нашем поселке! Раньше думала, что здесь ничего интересного не происходит, но благодаря их проектам увидела столько удивительных историй и людей.",
      fullReview:
        'Следую за командой уже три года и не перестаю удивляться качеству контента. Особенно понравился проект "Люди Горхона" — узнала столько нового о соседях! Видео всегда качественные, а истории трогают до глубины души. Спасибо за то, что показываете красоту нашего дома!',
      platform: "ВКонтакте",
      date: "15 ноября 2024",
      avatar: "👩‍💼",
      rating: 5,
      likes: 42,
    },
    {
      id: 2,
      name: "Михаил Волков",
      role: "Местный предприниматель",
      review:
        "Сотрудничаю с командой по продвижению своего бизнеса. Результат превзошел ожидания — продажи выросли на 60%! Профессиональный подход и понимание местной специфики.",
      fullReview:
        "Когда решил развивать свое дело в интернете, обратился к ребятам из Горхон.Медиа. Они не только сделали классный контент для моих соцсетей, но и научили меня работать с аудиторией. Теперь мой магазин знают не только в Горхоне, но и в соседних поселках!",
      platform: "Телеграм",
      date: "8 ноября 2024",
      avatar: "👨‍💼",
      rating: 5,
      likes: 38,
    },
    {
      id: 3,
      name: "Анастасия Козлова",
      role: "Молодая мама",
      review:
        "Обожаю их подкасты! Слушаю каждую неделю, пока гуляю с коляской. Узнаю много нового о событиях в поселке и планах на будущее.",
      fullReview:
        'Подкаст "Горхон FM" стал моим любимым способом быть в курсе всех событий. Ведущие очень приятные, гости интересные, а темы всегда актуальные. Особенно понравился выпуск с главой администрации — наконец-то услышала ответы на все волнующие вопросы!',
      platform: "Яндекс.Музыка",
      date: "3 ноября 2024",
      avatar: "👩‍🍼",
      rating: 5,
      likes: 29,
    },
    {
      id: 4,
      name: "Дмитрий Петров",
      role: "Учитель местной школы",
      review:
        "Использую их материалы на уроках истории и обществознания. Дети с интересом смотрят интервью с ветеранами и узнают историю родного края.",
      fullReview:
        'Проект "История в лицах" — настоящая находка для педагогов! Качественные интервью с местными ветеранами и старожилами помогают детям лучше понять историю своего поселка. Планирую пригласить команду для съемки документального фильма о нашей школе.',
      platform: "YouTube",
      date: "28 октября 2024",
      avatar: "👨‍🏫",
      rating: 5,
      likes: 51,
    },
    {
      id: 5,
      name: "Светлана Иванова",
      role: "Пенсионерка",
      review:
        "Внучка показала ваши видео — не могла оторваться! Так приятно видеть, что молодежь интересуется историей и людьми. Узнала много нового даже о знакомых мне людях.",
      fullReview:
        "В свои 68 лет открыла для себя интернет благодаря внучке, и первое, что она мне показала — канал Горхон.Медиа. Смотрю теперь все их ролики. Особенно тронуло интервью с Иваном Семеновичем — мы были соседями 40 лет, но не знала такие подробности его жизни. Спасибо вам за память!",
      platform: "ВКонтакте",
      date: "22 октября 2024",
      avatar: "👵",
      rating: 5,
      likes: 67,
    },
    {
      id: 6,
      name: "Артем Сидоров",
      role: "Студент",
      review:
        "Вдохновляют заниматься творчеством! После просмотра их контента тоже начал снимать видео. Команда всегда готова поделиться опытом и дать совет.",
      fullReview:
        "Учусь в областном центре, но благодаря Горхон.Медиа всегда знаю, что происходит дома. Их контент мотивирует меня заниматься видеопроизводством. Даже консультировался с ними по техническим вопросам — очень отзывчивые ребята! Планирую после учебы вернуться и присоединиться к команде.",
      platform: "Телеграм",
      date: "18 октября 2024",
      avatar: "👨‍🎓",
      rating: 5,
      likes: 33,
    },
  ];

  const averageRating =
    reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;
  const totalLikes = reviews.reduce((acc, review) => acc + review.likes, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-24">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-unbounded font-bold text-white mb-6">
              Отзывы подписчиков
            </h1>
            <p className="text-xl text-gray-300 font-unbounded max-w-3xl mx-auto">
              Что говорят наши зрители и подписчики о наших проектах
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="Star" size={24} className="text-white" />
              </div>
              <div className="text-3xl font-unbounded font-bold text-white mb-2">
                {averageRating.toFixed(1)}
              </div>
              <div className="text-gray-400 font-unbounded text-sm">
                Средняя оценка
              </div>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="Heart" size={24} className="text-white" />
              </div>
              <div className="text-3xl font-unbounded font-bold text-white mb-2">
                {totalLikes}
              </div>
              <div className="text-gray-400 font-unbounded text-sm">
                Лайков получено
              </div>
            </div>
            <div className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="MessageSquare" size={24} className="text-white" />
              </div>
              <div className="text-3xl font-unbounded font-bold text-white mb-2">
                {reviews.length}
              </div>
              <div className="text-gray-400 font-unbounded text-sm">
                Отзывов
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviews.map((review) => (
              <div
                key={review.id}
                onClick={() =>
                  setSelectedReview(
                    selectedReview === review.id ? null : review.id,
                  )
                }
                className="group cursor-pointer bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                {/* Review Header */}
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-xl flex-shrink-0">
                    {review.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-unbounded font-semibold text-white">
                        {review.name}
                      </h3>
                      <div className="flex items-center space-x-1">
                        {[...Array(review.rating)].map((_, index) => (
                          <Icon
                            key={index}
                            name="Star"
                            size={16}
                            className="text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-400 font-unbounded text-sm">
                      {review.role}
                    </p>
                  </div>
                </div>

                {/* Review Content */}
                <p className="text-gray-300 font-unbounded text-sm leading-relaxed mb-4">
                  {selectedReview === review.id
                    ? review.fullReview
                    : review.review}
                </p>

                {/* Review Footer */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-gray-400 font-unbounded text-xs">
                    <span>{review.platform}</span>
                    <span>{review.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Heart" size={16} className="text-secondary" />
                    <span className="text-gray-400 font-unbounded text-sm">
                      {review.likes}
                    </span>
                  </div>
                </div>

                {/* Expand Indicator */}
                <div className="flex items-center justify-center mt-4 pt-4 border-t border-white/10">
                  <Icon
                    name={
                      selectedReview === review.id ? "ChevronUp" : "ChevronDown"
                    }
                    size={20}
                    className="text-gray-400 group-hover:text-white transition-colors"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Stats */}
      <section className="py-16 bg-black/20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-unbounded font-bold text-white mb-4">
              Мы в социальных сетях
            </h2>
            <p className="text-lg text-gray-300 font-unbounded">
              Следите за нами на разных платформах
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                platform: "ВКонтакте",
                followers: "8.5K",
                engagement: "12%",
                icon: "Users",
                color: "from-blue-500 to-blue-600",
              },
              {
                platform: "YouTube",
                followers: "3.2K",
                engagement: "8%",
                icon: "Play",
                color: "from-red-500 to-red-600",
              },
              {
                platform: "Телеграм",
                followers: "2.1K",
                engagement: "15%",
                icon: "Send",
                color: "from-blue-400 to-blue-500",
              },
              {
                platform: "Подкасты",
                followers: "1.8K",
                engagement: "25%",
                icon: "Mic",
                color: "from-purple-500 to-purple-600",
              },
            ].map((platform, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${platform.color} rounded-lg flex items-center justify-center mx-auto mb-4`}
                >
                  <Icon
                    name={platform.icon as any}
                    size={24}
                    className="text-white"
                  />
                </div>
                <h3 className="font-unbounded font-semibold text-white mb-2">
                  {platform.platform}
                </h3>
                <div className="text-2xl font-unbounded font-bold text-white mb-1">
                  {platform.followers}
                </div>
                <div className="text-gray-400 font-unbounded text-sm mb-2">
                  подписчиков
                </div>
                <div className="text-primary font-unbounded text-sm font-medium">
                  {platform.engagement} вовлеченность
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feedback Form CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-sm border border-white/10 rounded-2xl p-12">
            <h2 className="text-4xl font-unbounded font-bold text-white mb-6">
              Оставьте свой отзыв!
            </h2>
            <p className="text-xl text-gray-300 font-unbounded mb-8 leading-relaxed">
              Ваше мнение очень важно для нас. Поделитесь впечатлениями о наших
              проектах и помогите нам стать еще лучше!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                {
                  icon: "MessageSquare",
                  title: "Напишите отзыв",
                  description: "В комментариях к нашим постам",
                },
                {
                  icon: "Star",
                  title: "Поставьте оценку",
                  description: "На наших платформах",
                },
                {
                  icon: "Share2",
                  title: "Поделитесь",
                  description: "Расскажите друзьям о нас",
                },
              ].map((action, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Icon
                      name={action.icon as any}
                      size={24}
                      className="text-white"
                    />
                  </div>
                  <h3 className="text-white font-unbounded font-semibold mb-2">
                    {action.title}
                  </h3>
                  <p className="text-gray-400 font-unbounded text-sm">
                    {action.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://vk.com/gorhon_media"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-xl font-unbounded font-semibold hover:scale-105 transition-all duration-200 shadow-lg shadow-primary/25"
              >
                <Icon name="ExternalLink" size={20} />
                <span>Написать отзыв</span>
              </a>
              <button className="inline-flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-unbounded font-semibold hover:bg-white/20 transition-all border border-white/20">
                <Icon name="Mail" size={20} />
                <span>Связаться напрямую</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
