import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Target, Award, CheckCircle } from "lucide-react";

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
    "Безкоштовні консультації та зустрічі",
    "Партнерство з провідними медичними закладами України",
    "Інноваційні підходи до реабілітації та освіти"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-soft">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Про нашу організацію
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ми прагнемо зробити життя людей із труднощами руху більш незалежним і повноцінним. 
              Через відкриту освіту, просвітницькі ініціативи та розвиток спільноти ми підтримуємо тих, 
              хто стикається з фізичними викликами, і допомагаємо знайти нові можливості для участі в житті суспільства.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Наша місія та цінності
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Ми прагнемо зробити життя людей із труднощами руху більш незалежним і повноцінним. 
                  Через відкриту освіту, просвітницькі ініціативи та розвиток спільноти ми підтримуємо тих, 
                  хто стикається з фізичними викликами, і допомагаємо знайти нові можливості для участі в житті суспільства.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <Heart className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Турбота</h4>
                      <p className="text-sm text-muted-foreground">Індивідуальний підхід до кожного</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Спільнота</h4>
                      <p className="text-sm text-muted-foreground">Взаємна підтримка та розуміння</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Target className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Ефективність</h4>
                      <p className="text-sm text-muted-foreground">Доведені методи лікування</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Award className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Якість</h4>
                      <p className="text-sm text-muted-foreground">Професійність у всьому</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-3xl p-8 shadow-card">
                <h3 className="text-2xl font-semibold text-foreground mb-6">Наші досягнення</h3>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Наша команда
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Професіонали з багаторічним досвідом, які присвятили своє життя допомозі людям
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="text-center shadow-card border-0 bg-white">
                  <CardContent className="p-8">
                    <div className="w-24 h-24 bg-gradient-healing rounded-full mx-auto mb-6 flex items-center justify-center">
                      <span className="text-white text-2xl font-bold">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {member.name}
                    </h3>
                    <div className="text-primary font-medium mb-2">
                      {member.role}
                    </div>
                    <div className="text-sm text-muted-foreground mb-4">
                      {member.experience}
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 md:py-24 bg-gradient-healing text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Готові приєднатися до нашої спільноти?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Разом ми сильніші. Долучайтесь до нас і отримайте підтримку, 
              якої ви заслуговуєте на шляху до здоров'я.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Записатись на консультацію
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors">
                Переглянути зустрічі
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;