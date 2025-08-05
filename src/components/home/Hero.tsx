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
              </div>
              <Button size="lg" className="w-full md:w-auto">
                Зареєструватись безкоштовно
              </Button>
            </div>

          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-gentle">
              <img
                src={heroImage}
                alt="Здорові суглоби"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-healing/80 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">
                    Ваше здоров'я - наш пріоритет
                  </h3>
                  <p className="text-lg md:text-xl text-white/90 mb-6 max-w-md mx-auto">
                    Професійна допомога та підтримка на шляху до здорових суглобів
                  </p>
                  <Button size="lg" variant="secondary" className="bg-white text-gray-900 hover:bg-gray-100">
                    Дізнатись більше
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;