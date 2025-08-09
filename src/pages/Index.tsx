import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const sportsCategories = [
    { name: "Футбол", icon: "Target", matches: 124, color: "bg-sports-accent" },
    { name: "Баскетбол", icon: "Circle", matches: 87, color: "bg-sports-gold" },
    { name: "Теннис", icon: "Zap", matches: 65, color: "bg-sports-success" },
    { name: "Хоккей", icon: "Snowflake", matches: 43, color: "bg-sports-warning" },
    { name: "Бокс", icon: "Shield", matches: 28, color: "bg-sports-accent" },
    { name: "Киберспорт", icon: "Gamepad2", matches: 156, color: "bg-purple-600" },
  ];

  const predictions = [
    {
      match: "Реал Мадрид vs Барселона",
      prediction: "Победа Реала",
      odds: "2.35",
      confidence: "92%",
      time: "Сегодня 21:00",
    },
    {
      match: "Лейкерс vs Голден Стэйт",
      prediction: "Тотал больше 215.5",
      odds: "1.87",
      confidence: "85%",
      time: "Завтра 03:30",
    },
    {
      match: "Джокович vs Медведев",
      prediction: "Победа в 3 сетах",
      odds: "3.12",
      confidence: "78%",
      time: "15 авг 18:00",
    },
  ];

  const news = [
    {
      title: "Месси забил решающий гол в финале Кубка Америки",
      category: "Футбол",
      time: "2 часа назад",
      reads: "12.5K",
    },
    {
      title: "НБА объявила о новых правилах сезона 2024-25",
      category: "Баскетбол", 
      time: "4 часа назад",
      reads: "8.2K",
    },
    {
      title: "Российский боксер завоевал титул чемпиона мира",
      category: "Бокс",
      time: "6 часов назад",
      reads: "15.7K",
    },
  ];

  return (
    <div className="min-h-screen bg-navy text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-sports-primary">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold font-heading text-white">SPORTS BETTING</h1>
              <nav className="hidden md:flex space-x-6">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Линия</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Live</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Прогнозы</a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">Новости</a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Icon name="User" size={16} className="mr-2" />
                Войти
              </Button>
              <Button size="sm" className="bg-sports-accent hover:bg-red-600">
                Регистрация
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        {/* Hero Section */}
        <section className="mb-12 text-center">
          <h2 className="text-5xl font-bold font-heading mb-4 gradient-text">
            Премиальные ставки на спорт
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Эксклюзивные прогнозы, высокие коэффициенты и мгновенные выплаты. 
            Ваш путь к успешным ставкам начинается здесь.
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" className="bg-sports-accent hover:bg-red-600 px-8">
              <Icon name="TrendingUp" size={20} className="mr-2" />
              Начать ставить
            </Button>
            <Button variant="outline" size="lg" className="border-gray-600 hover:bg-gray-800">
              <Icon name="Play" size={20} className="mr-2" />
              Смотреть demo
            </Button>
          </div>
        </section>

        {/* Sports Categories */}
        <section className="mb-12">
          <h3 className="text-3xl font-bold font-heading mb-8 text-center">Виды спорта</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {sportsCategories.map((sport, index) => (
              <Card key={index} className="bg-deep-blue border-gray-700 hover:bg-gray-800 transition-all duration-300 cursor-pointer hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className={`w-12 h-12 rounded-full ${sport.color} flex items-center justify-center mx-auto mb-3`}>
                    <Icon name={sport.icon as any} size={24} className="text-white" />
                  </div>
                  <h4 className="font-semibold text-white mb-1">{sport.name}</h4>
                  <p className="text-sm text-gray-400">{sport.matches} матчей</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Predictions */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-bold font-heading">Экспертные прогнозы</h3>
            <Button variant="outline" className="border-gray-600 hover:bg-gray-800">
              Все прогнозы
              <Icon name="ArrowRight" size={16} className="ml-2" />
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {predictions.map((prediction, index) => (
              <Card key={index} className="bg-deep-blue border-gray-700 hover:border-sports-accent transition-colors">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="bg-sports-success/20 text-sports-success border-sports-success">
                      {prediction.confidence} уверенность
                    </Badge>
                    <span className="text-sm text-gray-400">{prediction.time}</span>
                  </div>
                  <CardTitle className="text-white text-lg">{prediction.match}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-gray-300 text-sm mb-1">Прогноз</p>
                      <p className="font-semibold text-white">{prediction.prediction}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-300 text-sm mb-1">Коэффициент</p>
                      <p className="font-bold text-sports-gold text-xl">{prediction.odds}</p>
                    </div>
                  </div>
                  <Button className="w-full bg-sports-accent hover:bg-red-600">
                    <Icon name="Target" size={16} className="mr-2" />
                    Поставить
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* News */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-bold font-heading">Новости спорта</h3>
            <Button variant="outline" className="border-gray-600 hover:bg-gray-800">
              Все новости
              <Icon name="ArrowRight" size={16} className="ml-2" />
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((article, index) => (
              <Card key={index} className="bg-deep-blue border-gray-700 hover:border-gray-600 transition-colors cursor-pointer">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-sports-accent/20 text-sports-accent">
                      {article.category}
                    </Badge>
                    <span className="text-sm text-gray-400">{article.time}</span>
                  </div>
                  <CardTitle className="text-white text-lg leading-tight hover:text-sports-accent transition-colors">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-gray-400">
                    <Icon name="Eye" size={14} className="mr-2" />
                    {article.reads} просмотров
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-12 bg-deep-blue rounded-xl p-8 border border-gray-700">
          <h3 className="text-3xl font-bold font-heading mb-8 text-center">Наша статистика</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-sports-accent mb-2">94%</div>
              <div className="text-gray-300">Точность прогнозов</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-sports-gold mb-2">2.8x</div>
              <div className="text-gray-300">Средний коэффициент</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-sports-success mb-2">50K+</div>
              <div className="text-gray-300">Активных игроков</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-300">Поддержка</div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-sports-primary border-t border-gray-800 py-8">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold font-heading text-white mb-4">SPORTS BETTING</h4>
              <p className="text-gray-400 text-sm">
                Премиальная платформа для спортивных ставок с высокими стандартами безопасности.
              </p>
            </div>
            <div>
              <h5 className="font-semibold text-white mb-4">Ставки</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Футбол</a></li>
                <li><a href="#" className="hover:text-white">Баскетбол</a></li>
                <li><a href="#" className="hover:text-white">Теннис</a></li>
                <li><a href="#" className="hover:text-white">Live ставки</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-white mb-4">Поддержка</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">FAQ</a></li>
                <li><a href="#" className="hover:text-white">Контакты</a></li>
                <li><a href="#" className="hover:text-white">Правила</a></li>
                <li><a href="#" className="hover:text-white">Ответственная игра</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-white mb-4">Связь</h5>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Icon name="MessageCircle" size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Icon name="Mail" size={20} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Icon name="Phone" size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
            <p>&copy; 2024 Sports Betting. Все права защищены. Играйте ответственно 18+</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .gradient-text {
          background: linear-gradient(135deg, #E94560, #FFD700);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
    </div>
  );
};

export default Index;