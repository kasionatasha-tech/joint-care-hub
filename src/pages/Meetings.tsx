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
    participants: 45,
    maxParticipants: 50,
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
      participants: 38,
      duration: "1 год 45 хв",
      rating: 4.8
    },
    {
      title: "Харчування для здоров'я суглобів",
      date: "18 січня 2024",
      participants: 42,
      duration: "1 год 30 хв",
      rating: 4.9
    },
    {
      title: "Фізіотерапія в домашніх умовах",
      date: "11 січня 2024",
      participants: 35,
      duration: "2 год",
      rating: 4.7
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
                Онлайн зустрічі
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Приєднуйтесь до наших регулярних онлайн-сесій, де експерти діляться знаннями, 
                а учасники — досвідом у боротьбі з проблемами суглобів.
              </p>
            </div>
          </div>
        </section>

        {/* Upcoming Meeting */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Найближча зустріч
              </h2>
              <p className="text-lg text-muted-foreground">
                Не пропустіть можливість дізнатися щось нове про здоров'я ваших суглобів
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Meeting Info */}
              <div className="lg:col-span-2">
                <Card className="shadow-card border-0 bg-white">
                  <CardHeader className="bg-gradient-healing text-white rounded-t-lg">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="bg-white/20 text-white border-0">
                        НАЙБЛИЖЧА ЗУСТРІЧ
                      </Badge>
                      <div className="text-white/90 text-sm">
                        {upcomingMeeting.participants}/{upcomingMeeting.maxParticipants} місць зайнято
                      </div>
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
                          <div className="font-medium">Онлайн (Zoom)</div>
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

              {/* Registration Benefits */}
              <div className="space-y-6">
                <Card className="shadow-card border-0 bg-white">
                  <CardHeader>
                    <CardTitle className="text-lg">Що ви отримаєте</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground">Експертні поради від лікарів</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground">Практичні вправи та демонстрації</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground">Можливість поставити запитання</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground">Запис зустрічі для перегляду</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground">Додаткові матеріали</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-card border-0 bg-gradient-soft">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
                      <h4 className="font-semibold text-foreground mb-2">Онлайн формат</h4>
                      <p className="text-sm text-muted-foreground">
                        Приєднуйтесь з будь-якого місця. Посилання на зустріч надсилається після реєстрації.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Past Meetings */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Попередні зустрічі
              </h2>
              <p className="text-lg text-muted-foreground">
                Переглянути записи наших попередніх сесій можна в розділі "Живі знання"
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pastMeetings.map((meeting, index) => (
                <Card key={index} className="shadow-card border-0 bg-white">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      {meeting.title}
                    </h3>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm">
                        <Calendar className="w-4 h-4 text-primary mr-2" />
                        <span className="text-muted-foreground">{meeting.date}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Clock className="w-4 h-4 text-primary mr-2" />
                        <span className="text-muted-foreground">{meeting.duration}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Users className="w-4 h-4 text-primary mr-2" />
                        <span className="text-muted-foreground">{meeting.participants} учасників</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm">
                        <span className="text-muted-foreground">Рейтинг: </span>
                        <span className="font-medium text-primary">{meeting.rating}/5.0</span>
                      </div>
                      <Button variant="outline" size="sm">
                        Переглянути запис
                      </Button>
                    </div>
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