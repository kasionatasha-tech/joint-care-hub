import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import JointProblemsOverview from "@/components/home/JointProblemsOverview";
import QuickLinks from "@/components/home/QuickLinks";
import ConsultationForm from "@/components/home/ConsultationForm";
import CTASection from "@/components/common/CTASection";
import Banner from "@/components/common/Banner";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Header />
      <main>
        <Hero />
        
        {/* Banners Section */}
        <section className="py-16 md:py-24 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Banner 
                title="Безкоштовні консультації"
                description="Отримайте професійну допомогу від наших експертів"
                buttonText="Записатись зараз"
                bgColor="bg-gradient-healing"
              />
              <Banner 
                title="Офлайн зустрічі"
                description="Приєднуйтесь до нашої спільноти підтримки"
                buttonText="Дивитись розклад"
                bgColor="bg-gradient-to-r from-blue-600 to-blue-700"
              />
              <Banner 
                title="Корисні матеріали"
                description="Статті, відео та поради від лікарів"
                buttonText="Переглянути блог"
                bgColor="bg-gradient-to-r from-green-600 to-green-700"
              />
            </div>
          </div>
        </section>
        
        <AboutSection />
        <JointProblemsOverview />
        <QuickLinks />
        <ConsultationForm />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
