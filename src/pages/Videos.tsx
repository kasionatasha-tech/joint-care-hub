import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Play, Clock, Calendar, Users, Search, Filter } from "lucide-react";
import { useState } from "react";

const Videos = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "Всі відео" },
    { id: "exercises", name: "Вправи" },
    { id: "nutrition", name: "Харчування" },
    { id: "treatment", name: "Лікування" },
    { id: "prevention", name: "Профілактика" }
  ];

  const videos = [
    {
      id: 1,
      title: "Вправи для здоров'я колін: від болю до свободи руху",
      description: "Детальний розгляд ефективних вправ для зміцнення колін та техніки їх виконання",
      duration: "1 год 30 хв",
      date: "15 лютого 2024",
      views: 1248,
      category: "exercises",
      speaker: "Др. Олександр Іваненко",
      thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=225&fit=crop",
      isNew: true
    },
    {
      id: 2,
      title: "Артрит: сучасні методи лікування",
      description: "Огляд найновіших підходів до лікування артриту та управління симптомами",
      duration: "1 год 45 хв",
      date: "25 січня 2024",
      views: 892,
      category: "treatment",
      speaker: "Др. Марія Петренко",
      thumbnail: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=225&fit=crop"
    },
    {
      id: 3,
      title: "Харчування для здоров'я суглобів",
      description: "Як правильне харчування може допомогти зменшити запалення та біль в суглобах",
      duration: "1 год 30 хв",
      date: "18 січня 2024",
      views: 1456,
      category: "nutrition",
      speaker: "Нутриціолог Олена Коваль",
      thumbnail: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=225&fit=crop"
    },
    {
      id: 4,
      title: "Фізіотерапія в домашніх умовах",
      description: "Практичні поради щодо виконання фізіотерапевтичних процедур вдома",
      duration: "2 год",
      date: "11 січня 2024",
      views: 734,
      category: "exercises",
      speaker: "Анна Коваленко",
      thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=225&fit=crop"
    },
    {
      id: 5,
      title: "Профілактика травм суглобів у спорті",
      description: "Як уникнути травм під час занять спортом та активного способу життя",
      duration: "1 год 15 хв",
      date: "4 січня 2024",
      views: 623,
      category: "prevention",
      speaker: "Спортивний лікар Ігор Мельник",
      thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=225&fit=crop"
    },
    {
      id: 6,
      title: "Масаж та самомасаж для суглобів",
      description: "Техніки масажу, які можна використовувати для полегшення болю та напруги",
      duration: "1 год",
      date: "28 грудня 2023",
      views: 987,
      category: "treatment",
      speaker: "Масажист Валентина Петрова",
      thumbnail: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=225&fit=crop"
    }
  ];

  const filteredVideos = videos.filter(video => {
    const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         video.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || video.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
              Перегляньте записи наших попередніх зустрічей, навчальні матеріали та 
              корисні відео про здоров'я суглобів від провідних експертів.
            </p>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8 bg-white border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Пошук відео..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Categories */}
              <div className="flex items-center gap-2 flex-wrap">
                <Filter className="w-4 h-4 text-muted-foreground" />
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    {category.name}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Videos Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Відеозаписи зустрічей
              </h2>
              <p className="text-muted-foreground">
                Знайдено {filteredVideos.length} відео
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredVideos.map((video) => (
                <Card key={video.id} className="group shadow-card border-0 bg-white overflow-hidden hover:shadow-gentle transition-all duration-300">
                  <div className="relative">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
                    
                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Button
                        size="lg"
                        className="rounded-full w-16 h-16 group-hover:scale-110 transition-transform duration-300"
                      >
                        <Play className="w-6 h-6 ml-1" />
                      </Button>
                    </div>

                    {/* Duration */}
                    <div className="absolute bottom-4 right-4 bg-black/80 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>

                    {/* New Badge */}
                    {video.isNew && (
                      <Badge className="absolute top-4 left-4 bg-primary text-white border-0">
                        НОВЕ
                      </Badge>
                    )}
                  </div>

                  <CardHeader className="pb-3">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">
                      {video.title}
                    </h3>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {video.description}
                    </p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3 mr-1" />
                        {video.date}
                      </div>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Users className="w-3 h-3 mr-1" />
                        {video.views} переглядів
                      </div>
                      <div className="text-xs font-medium text-primary">
                        {video.speaker}
                      </div>
                    </div>

                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300">
                      Переглянути відео
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredVideos.length === 0 && (
              <div className="text-center py-16">
                <div className="text-muted-foreground mb-4">
                  Відео за вашим запитом не знайдено
                </div>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("all");
                  }}
                >
                  Скинути фільтри
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-healing text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Хочете отримувати нові відео першими?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Підпишіться на наші сповіщення і не пропускайте корисні матеріали
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input
                placeholder="Ваш email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
              />
              <Button variant="secondary" size="lg">
                Підписатись
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Videos;