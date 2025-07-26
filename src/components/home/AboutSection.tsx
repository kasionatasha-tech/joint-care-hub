import { Card, CardContent } from "@/components/ui/card";
import { Heart, Shield, Users, Target } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Heart,
      title: "Турбота",
      description: "Ми дбаємо про кожного учасника нашої спільноти з розумінням та співчуттям"
    },
    {
      icon: Shield,
      title: "Довіра",
      description: "Надаємо перевірену інформацію від кваліфікованих медичних фахівців"
    },
    {
      icon: Users,
      title: "Спільнота",
      description: "Створюємо простір для взаємної підтримки та обміну досвідом"
    },
    {
      icon: Target,
      title: "Результат",
      description: "Допомагаємо покращити якість життя та подолати болі в суглобах"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Про нашу організацію
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ми — громадська організація, що об'єднує людей з захворюваннями опорно-рухового апарату. 
            Наша місія — покращувати якість життя людей із захворюваннями опорно-рухового апарату шляхом 
            надання доступної інформації, створення доступних освітніх ресурсів, підтримки реабілітації 
            та просвітницької діяльності для здорового, активного та повноцінного життя.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-soft rounded-3xl p-8 md:p-12 mb-16 text-center">
          <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Наша місія
          </h3>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            Наша ціль — стати провідною організацією в Україні з підтримки людей із захворюваннями 
            опорно-рухового апарату, забезпечуючи комплексний підхід до реабілітації, освіти та створення 
            спільноти взаємної підтримки для досягнення активного та повноцінного життя.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <Card key={index} className="border-0 shadow-card bg-white/80 backdrop-blur-sm hover:shadow-gentle transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-healing rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">1,200+</div>
            <div className="text-muted-foreground">Активних учасників</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">85%</div>
            <div className="text-muted-foreground">Покращили стан здоров'я</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">Проведених зустрічей</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;