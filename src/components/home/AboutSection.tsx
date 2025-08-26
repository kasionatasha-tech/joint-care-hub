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
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Ми — громадська організація, що об'єднує людей з захворюваннями опорно-рухового апарату, 
            пацієнтів на реабілітації, фахівців з відновлення та всіх, хто прагне здорового життя. 
            Покращуємо якість життя через доступну інформацію та освітні ресурси.
          </p>
        </div>

        {/* Our Goal */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Наша ціль
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Покращувати якість життя людей із захворюваннями опорно-рухового апарату шляхом надання 
            доступної інформації, створення освітніх ресурсів, підтримки реабілітації та просвітницької 
            діяльності для здорового, активного та повноцінного життя.
          </p>
        </div>
        
        {/* Our Team */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Наша команда
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Др. Олександр Петренко",
                position: "Головний лікар-ортопед",
                image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face"
              },
              {
                name: "Марія Іваненко",
                position: "Фізіотерапевт",
                image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face"
              },
              {
                name: "Андрій Коваленко",
                position: "Реабілітолог",
                image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=300&fit=crop&crop=face"
              },
              {
                name: "Анна Сидоренко",
                position: "Координатор програм",
                image: "https://images.unsplash.com/photo-1594824020597-d7c2e106aba6?w=300&h=300&fit=crop&crop=face"
              }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-primary/20"
                  />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">
                  {member.name}
                </h3>
                <p className="text-muted-foreground mb-3">
                  {member.position}
                </p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                  aria-label={`LinkedIn профіль ${member.name}`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>

      

      </div>
    </section>
  );
};

export default AboutSection;