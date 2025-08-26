import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, Eye, UserCheck } from "lucide-react";

const Privacy = () => {
  const sections = [
    {
      icon: Shield,
      title: "Захист даних",
      content: "Ми використовуємо сучасні технології шифрування для захисту ваших персональних даних та забезпечуємо їх безпечне зберігання."
    },
    {
      icon: Lock,
      title: "Конфіденційність",
      content: "Ваші персональні дані не передаються третім особам без вашої згоди і використовуються виключно для надання наших послуг."
    },
    {
      icon: Eye,
      title: "Прозорість",
      content: "Ми чітко повідомляємо, яку інформацію збираємо, як її використовуємо і з ким можемо поділитися в рамках законодавства."
    },
    {
      icon: UserCheck,
      title: "Ваші права",
      content: "Ви маєте право на доступ, виправлення або видалення ваших персональних даних у будь-який час."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-12 bg-gradient-soft">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Політика конфіденційності
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ми серйозно ставимося до захисту ваших персональних даних і прозорості 
              щодо того, як ми їх збираємо та використовуємо.
            </p>
          </div>
        </section>

        {/* Principles Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-16 max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-left">
                Наші принципи
              </h2>
              <p className="text-lg text-muted-foreground text-left">
                Основні засади роботи з вашими персональними даними
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {sections.map((section, index) => {
                const IconComponent = section.icon;
                return (
                  <Card key={index} className="shadow-card border-0 bg-white text-center">
                    <CardHeader>
                      <div className="w-16 h-16 bg-gradient-healing rounded-xl flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-lg">{section.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">
                        {section.content}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Detailed Policy */}
        <section className="py-16 md:py-24 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8">
                Детальна політика конфіденційності
              </h2>
              
              <div className="space-y-8">
                <Card className="shadow-card border-0">
                  <CardHeader>
                    <CardTitle>1. Збір інформації</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Ми збираємо інформацію, яку ви добровільно надаєте нам при:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Реєстрації на зустрічі</li>
                      <li>Заповненні форм зворотного зв'язку</li>
                      <li>Підписці на розсилку</li>
                      <li>Зверненні за консультацією</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="shadow-card border-0">
                  <CardHeader>
                    <CardTitle>2. Використання інформації</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Ваші дані використовуються для:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Надання запитуваних послуг</li>
                      <li>Зв'язку з вами щодо зустрічей та подій</li>
                      <li>Покращення наших послуг</li>
                      <li>Надсилання корисної інформації (за вашою згодою)</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="shadow-card border-0">
                  <CardHeader>
                    <CardTitle>3. Захист даних</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Ми вживаємо відповідних заходів безпеки для захисту ваших персональних даних 
                      від несанкціонованого доступу, зміни, розкриття або знищення. Всі дані 
                      зберігаються на захищених серверах з використанням шифрування.
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-card border-0">
                  <CardHeader>
                    <CardTitle>4. Ваші права</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Відповідно до законодавства України, ви маєте право:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Отримати доступ до ваших персональних даних</li>
                      <li>Виправити неточні дані</li>
                      <li>Видалити ваші дані</li>
                      <li>Обмежити обробку ваших даних</li>
                      <li>Відкликати згоду на обробку даних</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="shadow-card border-0">
                  <CardHeader>
                    <CardTitle>5. Контактна інформація</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Якщо у вас є питання щодо цієї політики конфіденційності або ви хочете 
                      скористатися своїми правами, зв'яжіться з нами:
                    </p>
                    <div className="space-y-2">
                      <p className="text-muted-foreground">Email: privacy@zdravisuglobs.org</p>
                      <p className="text-muted-foreground">Телефон: +380 (44) 123-45-67</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8 text-center">
                <p className="text-sm text-muted-foreground">
                  Остання редакція: 1 лютого 2024 року
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Privacy;