import { Card, CardContent } from "@/components/ui/card";
import { Heart, Shield, Users, Target } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Heart,
      title: "Професійність",
      description: "Надаємо перевірену інформацію від кваліфікованих медичних фахівців та експертів з реабілітації"
    },
    {
      icon: Shield,
      title: "Доступність",
      description: "Робимо освітні ресурси та підтримку доступними для всіх, хто потребує допомоги"
    },
    {
      icon: Users,
      title: "Спільнота",
      description: "Об'єднуємо пацієнтів, фахівців та всіх зацікавлених у здоровому способі життя"
    },
    {
      icon: Target,
      title: "Результативність",
      description: "Фокусуємося на практичних рішеннях для покращення якості життя наших учасників"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Intro Text */}
        <div className="mb-16 max-w-5xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed text-left">
            Ми — громадська організація, що об'єднує людей з захворюваннями опорно-рухового апарату, 
            пацієнтів на реабілітації, фахівців з відновлення та всіх, хто прагне здорового життя. 
            Покращуємо якість життя через доступну інформацію та освітні ресурси.
          </p>
        </div>

        {/* Our Goal */}
        <div className="mb-16 max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-left">
            Наша ціль
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-left">
            Покращувати якість життя людей із захворюваннями опорно-рухового апарату шляхом надання 
            доступної інформації, створення освітніх ресурсів, підтримки реабілітації та просвітницької 
            діяльності для здорового, активного та повноцінного життя.
          </p>
        </div>


      </div>
    </section>
  );
};

export default AboutSection;