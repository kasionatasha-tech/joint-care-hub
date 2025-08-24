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
      
      <main className="space-y-8">
        {/* Hero Section */}
        <section className="py-4 bg-gradient-to-br from-primary/5 via-background to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Приєднуйтесь до наших регулярних офлайн-сесій, де ділимося доступною інформацією та підтримуємо реабілітацію для активного життя
              </p>
              <div className="bg-card/60 backdrop-blur-sm rounded-lg p-6 border border-border/50">
                <p className="text-lg text-muted-foreground">
                  <MapPin className="inline w-5 h-5 mr-2 text-primary" />
                  <strong>Офлайн формат.</strong> Зустрічаємося особисто. Адреса надсилається після реєстрації.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Meeting */}
        <section className="py-10">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <Card className="overflow-hidden shadow-lg border-0">
                <CardHeader className="bg-gradient-healing text-white p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <Badge variant="secondary" className="bg-white/20 text-white border-0 mb-4">
                        НАЙБЛИЖЧА ЗУСТРІЧ
                      </Badge>
                      <CardTitle className="text-2xl lg:text-3xl text-white leading-tight">
                        {upcomingMeeting.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="flex items-center space-x-3 p-4 bg-secondary/30 rounded-lg">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Calendar className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Дата</div>
                        <div className="font-semibold">{upcomingMeeting.date}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-4 bg-secondary/30 rounded-lg">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Clock className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Час</div>
                        <div className="font-semibold">{upcomingMeeting.time}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-4 bg-secondary/30 rounded-lg">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Video className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Формат</div>
                        <div className="font-semibold">Офлайн зустріч</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-secondary/20 p-6 rounded-lg mb-8">
                    <p className="text-muted-foreground leading-relaxed">
                      {upcomingMeeting.description}
                    </p>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-semibold text-foreground mb-6 text-lg">Програма зустрічі:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {upcomingMeeting.topics.map((topic, index) => (
                        <div key={index} className="flex items-start p-3 bg-secondary/10 rounded-lg">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                          <span className="text-muted-foreground">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="text-center">
                    <Button size="lg" className="px-8 py-4 text-lg">
                      <Users className="w-5 h-5 mr-2" />
                      Зареєструватись безкоштовно
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Past Meeting Videos */}
        <section className="py-10 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Відео попередніх зустрічей
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Перегляньте записи наших попередніх офлайн зустрічей з експертами
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {pastMeetings.map((meeting, index) => (
                <Card key={index} className="overflow-hidden shadow-lg border-0 bg-card hover:shadow-xl transition-all duration-300 group">
                  <div className="aspect-video bg-gradient-healing relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      <div className="bg-white/20 rounded-full p-4 group-hover:bg-white/30 transition-colors">
                        <Video className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <Badge variant="secondary" className="absolute top-4 right-4 bg-black/40 text-white border-0 backdrop-blur-sm">
                      {meeting.duration}
                    </Badge>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-3 text-lg leading-tight group-hover:text-primary transition-colors">
                      {meeting.title}
                    </h3>
                    <div className="flex items-center text-sm text-muted-foreground mb-6">
                      <Calendar className="w-4 h-4 mr-2" />
                      {meeting.date}
                    </div>
                    <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Video className="w-4 h-4 mr-2" />
                      Переглянути відео
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Meetings;