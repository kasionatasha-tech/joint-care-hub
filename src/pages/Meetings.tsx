import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Users, Video, MapPin, CheckCircle } from "lucide-react";

const Meetings = () => {
  const upcomingMeeting = {
    title: "Вправи для здоров'я колін: від болю до свободи руху",
    date: "15 лютого 2024",
    time: "19:00 - 20:30",
    description: "Детальний розгляд ефективних вправ для зміцнення колін, техніки виконання та поради щодо профілактики травм. Ведучий: Др. Олександр Іваненко.",
    topics: [
      "Анатомія колінного суглоба",
      "Найпоширеніші проблеми з колінами",
      "Комплекс вправ для зміцнення",
      "Техніка безпечного виконання",
      "Поради з профілактики"
    ]
  };

  const pastMeetings = [
    {
      title: "Артрит: сучасні методи лікування",
      date: "25 січня 2024",
      duration: "1 год 45 хв"
    },
    {
      title: "Харчування для здоров'я суглобів",
      date: "18 січня 2024",
      duration: "1 год 30 хв"
    },
    {
      title: "Фізіотерапія в домашніх умовах",
      date: "11 січня 2024",
      duration: "2 год"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-soft">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Офлайн зустрічі
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Приєднуйтесь до наших регулярних офлайн-сесій, де ділимося доступною інформацією
                та підтримуємо реабілітацію для активного життя. На основі наших зустрічей ми також
                створюємо освітні ресурси для всієї спільноти.
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-6">
                <strong>Офлайн формат.</strong> Зустрічаємося особисто. Адреса та деталі надсилаються після реєстрації.
              </p>
            </div>
          </div>
        </section>

        {/* Upcoming Meeting */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Найближча зустріч
              </h2>
              <p className="text-lg text-muted-foreground">
                Не пропустіть можливість дізнатися щось нове про здоров'я ваших суглобів
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {/* Main Meeting Info */}
              <div>
                <Card className="shadow-card border-0 bg-white">
                  <CardHeader className="bg-gradient-healing text-white rounded-t-lg">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="bg-white/20 text-white border-0">
                        НАЙБЛИЖЧА ЗУСТРІЧ
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl mt-4 text-white">
                      {upcomingMeeting.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                      <div className="flex items-center">
                        <Calendar className="w-5 h-5 text-primary mr-3" />
                        <div>
                          <div className="text-sm text-muted-foreground">Дата</div>
                          <div className="font-medium">{upcomingMeeting.date}</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-5 h-5 text-primary mr-3" />
                        <div>
                          <div className="text-sm text-muted-foreground">Час</div>
                          <div className="font-medium">{upcomingMeeting.time}</div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Video className="w-5 h-5 text-primary mr-3" />
                        <div>
                          <div className="text-sm text-muted-foreground">Формат</div>
                          <div className="font-medium">Офлайн зустріч</div>
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-8">
                      {upcomingMeeting.description}
                    </p>

                    <div className="mb-8">
                      <h4 className="font-semibold text-foreground mb-4">Що ми розглянемо:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {upcomingMeeting.topics.map((topic, index) => (
                          <div key={index} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-primary mt-1 mr-2 flex-shrink-0" />
                            <span className="text-muted-foreground text-sm">{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button size="lg" className="w-full">
                      <Users className="w-5 h-5 mr-2" />
                      Зареєструватись безкоштовно
                    </Button>
                  </CardContent>
                </Card>
              </div>

            </div>
          </div>
        </section>

        {/* Past Meetings */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Попередні зустрічі
              </h2>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Записи офлайн зустрічей у нашому блозі
              </h3>
              <p className="text-muted-foreground mb-6">
                Всі записи наших попередніх офлайн зустрічей, презентації та додаткові матеріали 
                ви можете знайти в розділі "Корисний блог". Там зібрана вся найцінніша інформація 
                від наших експертів у зручному форматі для вивчення.
              </p>
              <Button size="lg" className="w-full md:w-auto">
                Перейти до блогу
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Meetings;