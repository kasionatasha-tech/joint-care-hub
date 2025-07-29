import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Play, Users, Video, BookOpen } from "lucide-react";

const VideosPlaceholder = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-soft">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Живі знання
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Тут з'являться відеозаписи наших практикумів та освітніх зустрічей. 
              Слідкуйте за оновленнями!
            </p>
          </div>
        </section>

        {/* Coming Soon Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="w-32 h-32 bg-gradient-healing rounded-full mx-auto mb-6 flex items-center justify-center">
                <Video className="w-16 h-16 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Відеозаписи з'являться тут після наших практикумів
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Ми готуємо для вас цінний контент: записи зустрічей з експертами, 
                навчальні матеріали та практичні поради від провідних фахівців.
              </p>
            </div>

            {/* Preview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card className="shadow-card border-0 bg-white">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-soft rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <Play className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Записи зустрічей
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Повні записи наших офлайн та онлайн зустрічей з можливістю перегляду у зручний час
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-card border-0 bg-white">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-soft rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <BookOpen className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Навчальні матеріали
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Освітні відео про вправи, харчування, лікування та профілактику захворювань суглобів
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-card border-0 bg-white">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-soft rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Експертні поради
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Відповіді фахівців на найпоширеніші питання та індивідуальні рекомендації
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Placeholder Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-gentle mb-12">
              <img
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1200&h=400&fit=crop"
                alt="Готуємо відеоконтент"
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <Video className="w-16 h-16 mx-auto mb-4 opacity-80" />
                  <h3 className="text-2xl font-bold mb-2">Незабаром тут будуть відео</h3>
                  <p className="text-white/90">Слідкуйте за анонсами зустрічей</p>
                </div>
              </div>
            </div>

            {/* Next Meeting Info */}
            <div className="bg-white rounded-3xl p-8 shadow-card border border-border text-center">
              <div className="flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-primary mr-2" />
                <span className="text-primary font-medium">Найближча зустріч</span>
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                "Вправи для здоров'я колін: від болю до свободи руху"
              </h3>
              <p className="text-muted-foreground mb-6">
                15 лютого, 19:00 • Офлайн зустріч
              </p>
              <Button size="lg">
                Зареєструватись на зустріч
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-healing text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Будьте першими!
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Підпишіться на сповіщення, щоб не пропустити появу нових відеозаписів 
              та анонси майбутніх зустрічей
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Приєднатись до спільноти
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                Переглянути зустрічі
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default VideosPlaceholder;