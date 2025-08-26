import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import CTASection from "@/components/common/CTASection";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import { useEffect } from "react";

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
    },
    {
      name: "Др. Ірина Мельник",
      role: "Дієтолог-нутриціолог",
      experience: "10+ років досвіду",
      description: "Експерт з харчування для підтримки здоров'я суглобів"
    }
  ];


  useEffect(() => {
    document.title = "Про нас — Osnova Care";
    const desc = "Osnova Care — команда експертів з ревматології, ортопедії та реабілітації. Допомагаємо підтримувати здоров’я суглобів та активне життя.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `${window.location.origin}/about`);
  }, []);

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
            <div className="text-center mb-16 max-w-4xl mx-auto bg-card border rounded-2xl p-8 shadow">
              <p className="text-lg text-muted-foreground leading-relaxed">
                <span className="font-bold text-foreground">Про нас.</span> Знайомтесь з командою, яка ставить перед собою великі цілі і досягає їх! Ми щодня працюємо над тим, 
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

            {/* For Whom We Work */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                Для кого ми працюємо
              </h2>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Ми працюємо для людей, які стикаються з проблемами опорно-рухового апарату. Наші ресурси орієнтовані на офісних працівників, 
                спортсменів, активних людей та старших осіб з дегенеративними змінами в суглобах. Ми створюємо можливості для тих, 
                хто потребує постійного контролю за станом здоров'я, реабілітації та регулярних медичних перевірок для підтримки 
                здорового і активного способу життя.
              </p>
            </div>

            {/* Основні напрямки підтримки */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                Основні напрямки підтримки
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
                <div className="bg-card border rounded-xl p-6 text-center hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-foreground">Захворювання суглобів</h3>
                </div>
                <div className="bg-card border rounded-xl p-6 text-center hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-foreground">Захворювання хребта</h3>
                </div>
                <div className="bg-card border rounded-xl p-6 text-center hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-foreground">Больові синдроми</h3>
                </div>
                <div className="bg-card border rounded-xl p-6 text-center hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-foreground">Неврологічні захворювання</h3>
                </div>
                <div className="bg-card border rounded-xl p-6 text-center hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-foreground">Порушення ОРА у дітей</h3>
                </div>
                <div className="bg-card border rounded-xl p-6 text-center hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-foreground">Реабілітація та профілактика</h3>
                </div>
              </div>
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
                  <Card key={index} className="bg-card border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <Avatar className="h-32 w-32 md:h-44 md:w-44 mb-4 ring-2 ring-primary/20">
                        {/* <AvatarImage src={member.image} alt={`Фото ${member.name}`} /> */}
                        <AvatarFallback className="text-4xl md:text-5xl font-bold">
                          {member.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <h3 className="text-lg md:text-xl font-semibold text-foreground">
                        {member.name}
                      </h3>
                      <p className="text-primary font-medium mt-1">
                        {member.role}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">{member.experience}</p>
                      <p className="text-sm text-muted-foreground mt-2">{member.description}</p>
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