import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Target, Award, CheckCircle } from "lucide-react";
import CTASection from "@/components/common/CTASection";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

const About = () => {
  const team = [
    {
      name: "Др. Марія Петренко",
      role: "Ревматолог, засновниця",
      experience: "15+ років досвіду",
      description: "Спеціаліст з лікування артриту та автоімунних захворювань суглобів"
    },
    {
      name: "Др. Олександр Іваненко",
      role: "Ортопед-травматолог",
      experience: "12+ років досвіду",
      description: "Експерт з хірургічного лікування та реабілітації суглобів"
    },
    {
      name: "Анна Коваленко",
      role: "Фізіотерапевт",
      experience: "8+ років досвіду",
      description: "Фахівець з лікувальної фізкультури та відновлення рухливості"
    }
  ];

  const achievements = [
    "Створення спільноти взаємної підтримки",
    "Доступна медична інформація від експертів",
    "Безкоштовні зустрічі",
    "Партнерство з провідними медичними закладами України",
    "Освітні програми з фізичної реабілітації"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 pt-12 pb-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Головна</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Про нас</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      
      <main>
        {/* Intro Section */}
        <section className="pt-0 pb-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ми — громадська організація, що об'єднує людей з захворюваннями опорно-рухового апарату. 
                Допомагаємо створити спільноту взаємної підтримки та надаємо доступ до якісної інформації 
                від кваліфікованих медичних фахівців.
              </p>
            </div>

            {/* Our Goal */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                Наша ціль
              </h2>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Ми прагнемо зробити життя людей із труднощами руху більш незалежним і повноцінним. 
                Через відкриту освіту, просвітницькі ініціативи та розвиток спільноти ми підтримуємо тих, 
                хто стикається з фізичними викликами, і допомагаємо знайти нові можливості для участі в житті суспільства.
              </p>
            </div>

            {/* Why We Do This */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
                Чому ми це робимо?
              </h2>
              
              {/* Values Grid - 2x2 layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                <div className="text-left">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-healing rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-3">
                        Турбота
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Ми дбаємо про кожного учасника нашої спільноти з розумінням та співчуттям
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="text-left">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-healing rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-3">
                        Довіра
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Надаємо перевірену інформацію від кваліфікованих медичних фахівців
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="text-left">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-healing rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-3">
                        Спільнота
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Створюємо простір для взаємної підтримки та обміну досвідом
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="text-left">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-healing rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-3">
                        Результат
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Допомагаємо покращити якість життя та подолати болі в суглобах
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>


        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
};

export default About;