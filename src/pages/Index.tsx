import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import JointProblemsOverview from "@/components/home/JointProblemsOverview";
import QuickLinks from "@/components/home/QuickLinks";
import ConsultationForm from "@/components/home/ConsultationForm";
import CTASection from "@/components/common/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <JointProblemsOverview />
        <QuickLinks />
        <ConsultationForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
