import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, AlertTriangle, Users, Scale } from "lucide-react";

const Terms = () => {
  const highlights = [
    {
      icon: FileText,
      title: "Прозорі умови",
      content: "Всі наші послуги надаються безкоштовно і з метою підтримки спільноти."
    },
    {
      icon: Users,
      title: "Поважаємо права",
      content: "Ми поважаємо права всіх учасників і забезпечуємо безпечне середовище."
    },
    {
      icon: Scale,
      title: "Законність",
      content: "Всі наші дії відповідають законодавству України та міжнародним стандартам."
    },
    {
      icon: AlertTriangle,
      title: "Відповідальність",
      content: "Ми не несемо відповідальності за медичні рішення, прийняті на основі наших матеріалів."
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
              Умови використання
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ознайомтеся з умовами використання наших послуг та правилами 
              участі в спільноті.
            </p>
          </div>
        </section>

        {/* Highlights Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Основні принципи
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Найважливіші моменти, які варто знати
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {highlights.map((highlight, index) => {
                const IconComponent = highlight.icon;
                return (
                  <Card key={index} className="shadow-card border-0 bg-white text-center">
                    <CardHeader>
                      <div className="w-16 h-16 bg-gradient-healing rounded-xl flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-lg">{highlight.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">
                        {highlight.content}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Detailed Terms */}
        <section className="py-16 md:py-24 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8">
                Детальні умови використання
              </h2>
              
              <div className="space-y-8">
                <Card className="shadow-card border-0">
                  <CardHeader>
                    <CardTitle>1. Загальні положення</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Osnova Care - це громадська організація, що надає інформаційну підтримку 
                      людям з проблемами опорно-рухового апарату. Використовуючи наш сайт 
                      та послуги, ви погоджуєтесь з цими умовами.
                    </p>
                    <p className="text-muted-foreground">
                      Всі наші послуги надаються безкоштовно з метою освіти та підтримки спільноти.
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-card border-0">
                  <CardHeader>
                    <CardTitle>2. Медичні застереження</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
                      <p className="text-amber-800 font-medium mb-2">Важливо!</p>
                      <p className="text-amber-700 text-sm">
                        Інформація на нашому сайті носить освітній характер і не замінює 
                        професійної медичної консультації, діагностики або лікування.
                      </p>
                    </div>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Завжди консультуйтесь з лікарем перед початком будь-яких вправ</li>
                      <li>Не ігноруйте професійні медичні поради</li>
                      <li>При гострому болі негайно зверніться до лікаря</li>
                      <li>Ми не діагностуємо і не лікуємо захворювання</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="shadow-card border-0">
                  <CardHeader>
                    <CardTitle>3. Правила участі</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Для забезпечення безпечного та підтримуючого середовища, просимо дотримуватись:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Поважайте інших учасників</li>
                      <li>Не поширюйте неперевірену медичну інформацію</li>
                      <li>Дотримуйтесь конфіденційності</li>
                      <li>Не використовуйте платформу для реклами</li>
                      <li>Повідомляйте про неприйнятну поведінку</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="shadow-card border-0">
                  <CardHeader>
                    <CardTitle>4. Інтелектуальна власність</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Всі матеріали на сайті (тексти, зображення, відео) захищені авторським правом. 
                      Ви можете використовувати їх для особистих потреб, але комерційне використання 
                      без нашої згоди заборонено.
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-card border-0">
                  <CardHeader>
                    <CardTitle>5. Обмеження відповідальності</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Osnova Care не несе відповідальності за:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Результати самолікування на основі наших матеріалів</li>
                      <li>Технічні збої або недоступність сайту</li>
                      <li>Дії третіх осіб</li>
                      <li>Втрату даних або інформації</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="shadow-card border-0">
                  <CardHeader>
                    <CardTitle>6. Зміни умов</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Ми залишаємо за собою право змінювати ці умови в будь-який час. 
                      Про суттєві зміни ми повідомимо через сайт або email. 
                      Продовження використання послуг після змін означає вашу згоду з новими умовами.
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-card border-0">
                  <CardHeader>
                    <CardTitle>7. Контактна інформація</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      З питаннями щодо цих умов звертайтесь:
                    </p>
                    <div className="space-y-2">
                      <p className="text-muted-foreground">Email: legal@zdravisuglobs.org</p>
                      <p className="text-muted-foreground">Телефон: +380 (44) 123-45-67</p>
                      <p className="text-muted-foreground">Адреса: м. Київ, вул. Здоров'я, 15</p>
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

export default Terms;