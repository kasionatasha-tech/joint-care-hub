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
        {/* Intro Text */}
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
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-left">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-healing rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-3">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;