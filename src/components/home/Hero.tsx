import { Button } from "@/components/ui/button";
import { Calendar, Users, Clock } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] bg-gradient-soft flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Активне життя{" "}
                <span className="bg-gradient-healing bg-clip-text text-transparent">
                  без болю і обмежень
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                Покращуємо добробут людей із труднощами руху завдяки відкритій інформації, 
                навчальним ресурсам і просвітницьким ініціативам.
              </p>
            </div>

            {/* Next Meeting Banner */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-card border border-border">
              <div className="flex items-center mb-3">
                <Calendar className="w-5 h-5 text-primary mr-2" />
                <span className="text-sm font-medium text-primary">Найближча офлайн-зустріч</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                "Вправи для здоров'я колін: від болю до свободи руху"
              </h3>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  15 лютого, 19:00
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  45 учасників зареєстровано
                </div>
              </div>
              <Button size="lg" className="w-full md:w-auto">
                Зареєструватись безкоштовно
              </Button>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="outline">
                Дізнатись більше
              </Button>
              <Button size="lg" variant="secondary">
                Записатись на консультацію
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-gentle">
              <img
                src={heroImage}
                alt="Турбота про здоров'я суглобів"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-card border border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">1000+</div>
                <div className="text-sm text-muted-foreground">Людей отримали допомогу</div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-card border border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Підтримка</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;