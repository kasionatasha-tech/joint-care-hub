import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import JointProblemsOverview from "@/components/home/JointProblemsOverview";
import CTASection from "@/components/common/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-inter">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <JointProblemsOverview />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
