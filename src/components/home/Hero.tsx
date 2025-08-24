import heroImage from "@/assets/hero-image.jpg";
import Banner from "@/components/common/Banner";

interface BannerData {
  title: string;
  description: string;
  buttonText: string;
  bgColor?: string;
  href?: string;
}

interface HeroProps {
  banners?: BannerData[];
}

const Hero = ({ banners = [] }: HeroProps) => {
  return (
    <section className="relative min-h-[80vh] bg-gradient-soft flex items-center pt-12">
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

            {/* Dynamic Banners */}
            {banners.length > 0 && (
              <div className="space-y-4">
                {banners.map((banner, index) => (
                  <Banner 
                    key={index}
                    title={banner.title}
                    description={banner.description}
                    buttonText={banner.buttonText}
                    bgColor={banner.bgColor}
                    href={banner.href}
                  />
                ))}
              </div>
            )}

          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-gentle">
              <img
                src={heroImage}
                alt="Здорові суглоби"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;