import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
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
        {/* About Section */}
        <section className="pt-0 pb-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
                Про Нас
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Знайомтесь з командою, яка ставить перед собою великі цілі і досягає їх! Ми щодня працюємо над тим, 
                щоб забезпечити найкращі умови для розвитку людей із захворюваннями опорно-рухового апарату, 
                сприяючи їхньому здоров'ю та активному способу життя. Ми існуємо не для формальностей, 
                а щоб змінювати життя на краще через реальні результати.
              </p>
            </div>

            {/* Our Mission */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                Наша місія
              </h2>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Наша місія — покращувати якість життя людей із захворюваннями опорно-рухового апарату шляхом 
                надання доступної інформації, створення доступних освітніх ресурсів, підтримки реабілітації 
                та просвітницької діяльності для здорового, активного та повноцінного життя.
              </p>
            </div>

            {/* Team Section */}
            <div className="mb-16">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Команда
                </h2>
                <div className="h-1 w-20 bg-primary/70 mx-auto mt-3 rounded-full"></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {team.map((member, index) => (
                  <Card key={index} className="bg-card shadow-card">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <Avatar className="h-28 w-28 md:h-40 md:w-40 mb-4 ring-2 ring-primary/20">
                        {/* <AvatarImage src={member.image} alt={`Фото ${member.name}`} /> */}
                        <AvatarFallback className="bg-brand-blue-light text-brand-gray-dark text-4xl md:text-5xl font-bold">
                          {member.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <h3 className="text-lg md:text-xl font-semibold text-foreground">
                        {member.name}
                      </h3>
                      <p className="text-primary font-medium mt-1">
                        {member.role}
                      </p>
                    </CardContent>
                  </Card>
                ))}
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