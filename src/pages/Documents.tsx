import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, Calendar, Eye } from "lucide-react";

const Documents = () => {
  const documents = [
    {
      id: 1,
      title: "Статут Громадської організації «Osnova Care»",
      description: "Основний установчий документ організації, що визначає мету, завдання та порядок діяльності",
      type: "Статут",
      date: "15 січня 2024",
      size: "2.3 МБ",
      url: "#"
    },
    {
      id: 2,
      title: "Свідоцтво про державну реєстрацію",
      description: "Офіційний документ про реєстрацію організації в державних органах",
      type: "Свідоцтво",
      date: "20 січня 2024",
      size: "1.1 МБ",
      url: "#"
    },
    {
      id: 3,
      title: "Положення про діяльність організації",
      description: "Детальний опис принципів роботи, структури та процедур організації",
      type: "Положення",
      date: "25 січня 2024",
      size: "3.7 МБ",
      url: "#"
    },
    {
      id: 4,
      title: "Кодекс етики та професійної поведінки",
      description: "Етичні стандарти та принципи поведінки для членів організації",
      type: "Кодекс",
      date: "1 лютого 2024",
      size: "1.8 МБ",
      url: "#"
    },
    {
      id: 5,
      title: "Звіт про діяльність за 2024 рік",
      description: "Детальний звіт про досягнення, проекти та фінансову діяльність організації",
      type: "Звіт",
      date: "10 лютого 2024",
      size: "5.2 МБ",
      url: "#"
    },
    {
      id: 6,
      title: "Фінансова звітність",
      description: "Прозора фінансова звітність про використання коштів та джерела фінансування",
      type: "Звітність",
      date: "15 лютого 2024",
      size: "2.9 МБ",
      url: "#"
    }
  ];

  const documentTypes = ["Всі", "Статут", "Свідоцтво", "Положення", "Кодекс", "Звіт", "Звітність"];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-12 bg-gradient-soft">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Наші документи
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Офіційні документи, установчі акти та звітність Громадської організації «Osnova Care». 
              Ми забезпечуємо повну прозорість нашої діяльності.
            </p>
          </div>
        </section>

        {/* Document Types Filter */}
        <section className="py-8 bg-white border-y border-border">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 overflow-x-auto pb-2">
              <FileText className="w-4 h-4 text-muted-foreground flex-shrink-0" />
              <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">Тип документу:</span>
              {documentTypes.map((type, index) => (
                <Button
                  key={type}
                  variant={index === 0 ? "default" : "outline"}
                  size="sm"
                  className="whitespace-nowrap"
                >
                  {type}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Documents Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-2">
                Офіційні документи
              </h2>
              <p className="text-muted-foreground">
                Повний перелік установчих та звітних документів організації
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {documents.map((document) => (
                <Card key={document.id} className="shadow-card border-0 bg-white hover:shadow-gentle transition-all duration-300">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between mb-2">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <FileText className="w-6 h-6 text-primary" />
                      </div>
                      <span className="text-xs bg-secondary/50 px-2 py-1 rounded-full text-muted-foreground">
                        {document.type}
                      </span>
                    </div>
                    <CardTitle className="text-lg line-clamp-2">
                      {document.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {document.description}
                    </p>

                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {document.date}
                      </div>
                      <span>{document.size}</span>
                    </div>

                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Eye className="w-4 h-4 mr-2" />
                        Переглянути
                      </Button>
                      <Button size="sm" className="flex-1">
                        <Download className="w-4 h-4 mr-2" />
                        Завантажити
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-24 bg-gradient-healing text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Потрібні додаткові документи?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Якщо вам потрібні інші офіційні документи або довідки, 
              будь ласка, зв'яжіться з нами
            </p>
            <Button variant="secondary" size="lg">
              Зв'язатися з нами
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Documents;