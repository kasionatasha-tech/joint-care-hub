import { Button } from "@/components/ui/button";
import { Calendar, Users, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const banners = [
    {
      title: "Безкоштовні консультації",
      description: "Отримайте професійну допомогу від наших експертів з питань здоров'я суглобів",
      buttonText: "Записатись зараз",
      bgColor: "bg-gradient-healing",
      image: heroImage
    },
    {
      title: "Офлайн зустрічі",
      description: "Приєднуйтесь до нашої спільноти підтримки та діліться досвідом з іншими",
      buttonText: "Дивитись розклад",
      bgColor: "bg-gradient-to-br from-blue-600 to-blue-700",
      image: heroImage
    },
    {
      title: "Корисні матеріали",
      description: "Статті, відео та практичні поради від лікарів для покращення здоров'я",
      buttonText: "Переглянути блог",
      bgColor: "bg-gradient-to-br from-green-600 to-green-700",
      image: heroImage
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };
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

          {/* Banner Slider */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-gentle">
              <div className="relative h-[500px]">
                {banners.map((banner, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
                      index === currentSlide ? 'translate-x-0' : 
                      index < currentSlide ? '-translate-x-full' : 'translate-x-full'
                    }`}
                  >
                    <div className={`${banner.bgColor} h-full flex items-center justify-center relative overflow-hidden`}>
                      <img
                        src={banner.image}
                        alt={banner.title}
                        className="absolute inset-0 w-full h-full object-cover opacity-20"
                      />
                      <div className="relative z-10 text-center p-8 text-white">
                        <h3 className="text-3xl md:text-4xl font-bold mb-4">
                          {banner.title}
                        </h3>
                        <p className="text-lg md:text-xl text-white/90 mb-6 max-w-md mx-auto">
                          {banner.description}
                        </p>
                        <Button size="lg" variant="secondary" className="bg-white text-gray-900 hover:bg-gray-100">
                          {banner.buttonText}
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-colors shadow-lg"
              >
                <ChevronLeft className="w-5 h-5 text-gray-700" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-colors shadow-lg"
              >
                <ChevronRight className="w-5 h-5 text-gray-700" />
              </button>
              
              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {banners.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentSlide ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;