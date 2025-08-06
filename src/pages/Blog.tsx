import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, User, ArrowRight, Tag, Search, Video } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Всі");
  const [selectedDisease, setSelectedDisease] = useState("Всі захворювання");
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  // Fetch articles from Supabase
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const { data, error } = await supabase.rpc('get_blog_posts') as { data: any[] | null, error: any };

        if (error) {
          throw error;
        }

        // Transform Supabase data to match component format
        const transformedArticles = data?.map((post: any, index: number) => ({
          id: post.id,
          title: post.title || "Без назви",
          excerpt: post.content?.substring(0, 200) + "..." || "Опис недоступний",
          content: post.content || "",
          author: "Наш експерт",
          date: new Date(post.created_at).toLocaleDateString('uk-UA', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          }),
          readTime: Math.ceil((post.content?.length || 0) / 1000) + " хв",
          category: "Здоров'я",
          disease: "Загальне",
          featured: index === 0,
          image: post.image_url || "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=300&fit=crop"
        })) || [];

        setArticles(transformedArticles);
      } catch (error) {
        console.error('Error fetching articles:', error);
        toast({
          title: "Помилка завантаження",
          description: "Не вдалося завантажити статті. Спробуйте пізніше.",
          variant: "destructive",
        });
        
        // Fallback to default articles if Supabase fails
        setArticles([
          {
            id: 1,
            title: "Приклад статті",
            excerpt: "Це приклад статті з бази даних...",
            content: "Повний текст статті тут",
            author: "Наш експерт",
            date: new Date().toLocaleDateString('uk-UA'),
            readTime: "5 хв",
            category: "Здоров'я",
            disease: "Загальне",
            featured: true,
            image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=300&fit=crop"
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [toast]);

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

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Завантаження статей...</p>
        </div>
        <Footer />
      </div>
    );
  }

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