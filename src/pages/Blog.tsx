import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, User, ArrowRight, Tag, Search, Video } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Всі");
  const [selectedDisease, setSelectedDisease] = useState("Всі захворювання");

  const articles = [
    {
      id: 1,
      title: "10 простих вправ для здоров'я колін",
      excerpt: "Дізнайтесь про найефективніші вправи, які допоможуть зміцнити коліна та зменшити біль",
      content: "Здоров'я колін є критично важливим для підтримання активного способу життя...",
      author: "Др. Олександр Іваненко",
      date: "20 лютого 2024",
      readTime: "5 хв",
      category: "Вправи",
      disease: "Артроз колін",
      featured: true,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Харчування при артриті: що їсти, а чого уникати",
      excerpt: "Комплексний гід по продуктах, які допомагають боротися з запаленням суглобів",
      content: "Правильне харчування може значно впливати на симптоми артриту...",
      author: "Нутриціолог Олена Коваль",
      date: "18 лютого 2024",
      readTime: "8 хв",
      category: "Харчування",
      disease: "Ревматоїдний артрит",
      featured: false,
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Як розпізнати ранні ознаки артрозу",
      excerpt: "Важливі симптоми, на які варто звернути увагу для раннього виявлення проблем",
      content: "Раннє виявлення артрозу може значно покращити прогноз лікування...",
      author: "Др. Марія Петренко",
      date: "15 лютого 2024",
      readTime: "6 хв",
      category: "Діагностика",
      disease: "Остеоартроз",
      featured: false,
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=300&fit=crop"
    },
    {
      id: 4,
      title: "Фізіотерапія вдома: основні принципи",
      excerpt: "Як правильно організувати фізіотерапевтичні процедури в домашніх умовах",
      content: "Домашня фізіотерапія може бути ефективним доповненням до основного лікування...",
      author: "Анна Коваленко",
      date: "12 лютого 2024",
      readTime: "7 хв",
      category: "Фізіотерапія",
      disease: "Спондилоартрит",
      featured: false,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=300&fit=crop"
    },
    {
      id: 5,
      title: "Профілактика травм під час занять спортом",
      excerpt: "Поради щодо безпечних тренувань та захисту суглобів від травм",
      content: "Правильна підготовка до тренувань може запобігти серйозним травмам...",
      author: "Спортивний лікар Ігор Мельник",
      date: "10 лютого 2024",
      readTime: "5 хв",
      category: "Профілактика",
      disease: "Артроз колін",
      featured: false,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=300&fit=crop"
    },
    {
      id: 6,
      title: "Психологічний аспект хронічного болю",
      excerpt: "Як справлятися з емоційними викликами при хронічних проблемах суглобів",
      content: "Хронічний біль впливає не лише на фізичне, але й на психічне здоров'я...",
      author: "Психолог Людмила Сергієнко",
      date: "8 лютого 2024",
      readTime: "10 хв",
      category: "Психологія",
      disease: "Фіброміалгія",
      featured: false,
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=300&fit=crop"
    }
  ];

  const categories = ["Всі", "Вправи", "Харчування", "Діагностика", "Фізіотерапія", "Профілактика", "Психологія"];
  const diseases = ["Всі захворювання", "Артроз колін", "Ревматоїдний артрит", "Остеоартроз", "Спондилоартрит", "Фіброміалгія"];

  // Filter articles based on search term, category, and disease
  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Всі" || article.category === selectedCategory;
    const matchesDisease = selectedDisease === "Всі захворювання" || article.disease === selectedDisease;
    
    return matchesSearch && matchesCategory && matchesDisease;
  });

  const regularArticles = filteredArticles;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 py-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Головна</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Блог</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      
      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-soft">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Корисний блог
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Дізнавайтесь найсвіжішу інформацію про здоров'я суглобів, 
              профілактику захворювань та ефективні методи лікування від наших експертів.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative mb-8">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Пошук статей..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white shadow-sm"
              />
            </div>

            {/* Filters */}
            <div className="space-y-4 max-w-4xl mx-auto">
              {/* Categories */}
              <div className="flex items-center justify-center gap-2 flex-wrap">
                <Tag className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">Категорії:</span>
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    className="whitespace-nowrap"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
              
              {/* Disease Filters */}
              <div className="flex items-center justify-center gap-2 flex-wrap">
                <Tag className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">Захворювання:</span>
                {diseases.map((disease) => (
                  <Button
                    key={disease}
                    variant={selectedDisease === disease ? "default" : "outline"}
                    size="sm"
                    className="whitespace-nowrap"
                    onClick={() => setSelectedDisease(disease)}
                  >
                    {disease}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>



        {/* Articles Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-2">
                Останні статті
              </h2>
              <p className="text-muted-foreground">
                Свіжі матеріали від наших експертів
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularArticles.map((article) => (
                <Card key={article.id} className="group shadow-card border-0 bg-white overflow-hidden hover:shadow-gentle transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 space-y-2">
                      <Badge 
                        variant="outline" 
                        className="bg-white/90 backdrop-blur-sm border-0 block"
                      >
                        {article.category}
                      </Badge>
                      <Badge 
                        variant="secondary" 
                        className="bg-primary/90 text-white border-0 block"
                      >
                        {article.disease}
                      </Badge>
                      {article.id === 1 && (
                        <Badge 
                          variant="secondary" 
                          className="bg-red-500/90 text-white border-0 flex items-center"
                        >
                          <Video className="w-3 h-3 mr-1" />
                          Відео
                        </Badge>
                      )}
                    </div>
                  </div>

                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300 line-clamp-2">
                      {article.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                      <div className="flex items-center">
                        <User className="w-3 h-3 mr-1" />
                        {article.author.split(' ')[0]} {article.author.split(' ')[1]}
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {article.date}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {article.readTime}
                        </div>
                      </div>
                    </div>

                    <Link to={`/article/${article.id}`}>
                      <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300">
                        Читати далі
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Завантажити більше статей
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter Subscription */}
        <section className="py-16 md:py-24 bg-gradient-healing text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Не пропускайте корисні матеріали
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Підпишіться на нашу розсилку і отримуйте найсвіжіші статті 
              про здоров'я суглобів прямо на свою електронну пошту
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Ваш email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
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

export default Blog;