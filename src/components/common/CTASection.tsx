import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-healing text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Готові покращити якість свого життя?
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Приєднуйтесь до спільноти людей з захворюваннями опорно-рухового апарату та фахівців, 
          які підтримують один одного на шляху до здорового життя
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary">
            Записатись на програму реабілітації
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
            Переглянути освітні матеріали
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;