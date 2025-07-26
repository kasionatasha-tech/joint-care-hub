import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar, Video, BookOpen, Users } from "lucide-react";
import { Link } from "react-router-dom";

const QuickLinks = () => {
  const sections = [
    {
      icon: Calendar,
      title: "Офлайн зустрічі",
      description: "Приєднуйтесь до наших регулярних офлайн-сесій з експертами та іншими учасниками",
      link: "/meetings",
      color: "bg-gradient-to-br from-green-500 to-blue-500"
    },
    {
      icon: Video,
      title: "Відеозаписи",
      description: "Перегляньте записи попередніх зустрічей та корисні відео про здоров'я суглобів",
      link: "/videos",
      color: "bg-gradient-to-br from-blue-500 to-purple-500"
    },
    {
      icon: BookOpen,
      title: "Корисний блог",
      description: "Читайте статті про профілактику, лікування та поради від медичних фахівців",
      link: "/blog",
      color: "bg-gradient-to-br from-purple-500 to-pink-500"
    },
    {
      icon: Users,
      title: "Про нас",
      description: "Дізнайтесь більше про нашу місію, цінності та команду професіоналів",
      link: "/about",
      color: "bg-gradient-to-br from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Досліджуйте наші ресурси
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Знайдіть все необхідне для покращення здоров'я ваших суглобів у одному місці
          </p>
        </div>

        {/* Quick Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sections.map((section, index) => {
            const IconComponent = section.icon;
            return (
              <Card key={index} className="group hover:shadow-gentle transition-all duration-300 border-0 shadow-card bg-white overflow-hidden">
                <CardContent className="p-0">
                  <div className={`h-32 ${section.color} flex items-center justify-center relative overflow-hidden`}>
                    <IconComponent className="w-12 h-12 text-white z-10" />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {section.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-6">
                      {section.description}
                    </p>
                    
                    <Link to={section.link}>
                      <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300">
                        Перейти
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-healing rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Готові розпочати свій шлях до здоров'я?
            </h3>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Приєднуйтесь до тисяч людей, які вже покращили своє життя завдяки нашій підтримці та знанням
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Записатись на консультацію
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                Переглянути наступну зустріч
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;