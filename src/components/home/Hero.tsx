import { Button } from "@/components/ui/button";
import { Calendar, Users, Clock } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Hero = () => {
  return (
    <section className="relative min-h-[60vh] bg-gradient-soft flex items-center pt-6">
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

          </div>

          {/* Hero Carousel */}
          <div className="relative">
            <Carousel className="w-full">
              <CarouselContent>
                <CarouselItem>
                  <div className="relative rounded-3xl overflow-hidden shadow-gentle">
                    <img
                      src={heroImage}
                      alt="Допомога при проблемах з суглобами"
                      className="w-full h-[500px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                      <div className="p-6 text-white">
                        <h3 className="text-2xl font-bold mb-2">Проблеми з суглобами?</h3>
                        <p className="text-lg mb-1">Отримайте кваліфіковану допомогу</p>
                        <p className="text-sm opacity-90">Діагностика • Лікування • Реабілітація</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="relative rounded-3xl overflow-hidden shadow-gentle bg-brand-teal-primary flex items-center justify-center h-[500px]">
                    <div className="text-center text-white p-8">
                      <h3 className="text-3xl font-bold mb-4">Безкоштовна консультація</h3>
                      <p className="text-lg mb-6">Отримайте персональні рекомендації</p>
                      <Button variant="secondary" size="lg">
                        Записатись онлайн
                      </Button>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="relative rounded-3xl overflow-hidden shadow-gentle bg-brand-teal-medium flex items-center justify-center h-[500px]">
                    <div className="text-center text-white p-8">
                      <h3 className="text-3xl font-bold mb-4">Навчальні ресурси</h3>
                      <p className="text-lg mb-6">Вправи та поради від експертів</p>
                      <Button variant="secondary" size="lg">
                        Переглянути
                      </Button>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="relative rounded-3xl overflow-hidden shadow-gentle bg-brand-teal-light flex items-center justify-center h-[500px]">
                    <div className="text-center text-white p-8">
                      <h3 className="text-3xl font-bold mb-4">Спільнота підтримки</h3>
                      <p className="text-lg mb-6">Приєднуйтесь до нашої спільноти</p>
                      <Button variant="secondary" size="lg">
                        Дізнатись більше
                      </Button>
                    </div>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;