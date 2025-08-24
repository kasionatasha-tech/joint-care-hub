import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import JointProblemsOverview from "@/components/home/JointProblemsOverview";
import CTASection from "@/components/common/CTASection";

const Index = () => {
  const heroBanners = [
    {
      title: "Найближча офлайн-зустріч",
      description: '"Вправи для здоров\'я колін: від болю до свободи руху" • 15 лютого, 19:00',
      buttonText: "Зареєструватись безкоштовно",
      bgColor: "bg-brand-teal-primary"
    },
    {
      title: "Безкоштовна консультація",
      description: "Отримайте персональні рекомендації від наших спеціалістів",
      buttonText: "Записатись онлайн",
      bgColor: "bg-brand-teal-medium"
    }
  ];

  return (
    <div className="min-h-screen bg-background font-inter">
      <Header />
      <main>
        <Hero banners={heroBanners} />
        <AboutSection />
        <JointProblemsOverview />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
