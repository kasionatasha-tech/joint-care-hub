import { Heart, Users, Calendar, FileText } from "lucide-react";

const SimpleTemplate = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 bg-white shadow-sm border-b z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Heart className="h-8 w-8 text-primary mr-2" />
              <span className="text-xl font-bold text-foreground">Здорові Суглоби</span>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-muted-foreground hover:text-primary">Про нас</a>
              <a href="#meetings" className="text-muted-foreground hover:text-primary">Зустрічі</a>
              <a href="#blog" className="text-muted-foreground hover:text-primary">Блог</a>
              <a href="#documents" className="text-muted-foreground hover:text-primary">Документи</a>
              <a href="#contact" className="text-muted-foreground hover:text-primary">Контакти</a>
            </nav>
            
            <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90">
              Записатися
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                Здорові Суглоби
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Активне життя без болю і обмежень.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Ми прагнемо зробити життя людей із труднощами руху більш незалежним і повноцінним.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90">
                  Записатися на консультацію
                </button>
                <button className="border border-input bg-background hover:bg-accent text-accent-foreground px-6 py-3 rounded-md">
                  Дивитися відео
                </button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="/src/assets/hero-image.jpg" 
                alt="Здорові люди" 
                className="rounded-lg shadow-xl"
              />
              
              {/* Floating stats */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="text-2xl font-bold text-primary">150+</div>
                <div className="text-sm text-muted-foreground">Людей отримали допомогу</div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Підтримка</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Про нашу організацію</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Наша місія - зробити життя людей із труднощами руху більш незалежним і повноцінним через освіту та підтримку спільноти.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg border">
              <Heart className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-card-foreground mb-2">Турбота</h3>
              <p className="text-muted-foreground">Ми піклуємося про кожного учасника нашої спільноти</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-card-foreground mb-2">Спільнота</h3>
              <p className="text-muted-foreground">Разом ми сильніші і можемо подолати будь-які виклики</p>
            </div>
            
            <div className="bg-card p-6 rounded-lg border">
              <Calendar className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-card-foreground mb-2">Регулярність</h3>
              <p className="text-muted-foreground">Постійна підтримка та регулярні зустрічі</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Корисні розділи</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card p-6 rounded-lg border hover:shadow-lg transition-shadow">
              <Calendar className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-card-foreground mb-2">Зустрічі</h3>
              <p className="text-muted-foreground mb-4">Онлайн та офлайн заходи</p>
              <button className="text-primary hover:underline">Перейти →</button>
            </div>
            
            <div className="bg-card p-6 rounded-lg border hover:shadow-lg transition-shadow">
              <FileText className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-card-foreground mb-2">Блог</h3>
              <p className="text-muted-foreground mb-4">Корисні статті та поради</p>
              <button className="text-primary hover:underline">Перейти →</button>
            </div>
            
            <div className="bg-card p-6 rounded-lg border hover:shadow-lg transition-shadow">
              <Users className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-card-foreground mb-2">Відео</h3>
              <p className="text-muted-foreground mb-4">Записи практикумів</p>
              <button className="text-primary hover:underline">Перейти →</button>
            </div>
            
            <div className="bg-card p-6 rounded-lg border hover:shadow-lg transition-shadow">
              <Heart className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-card-foreground mb-2">Документи</h3>
              <p className="text-muted-foreground mb-4">Установчі документи</p>
              <button className="text-primary hover:underline">Перейти →</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <Heart className="h-6 w-6 text-primary mr-2" />
                <span className="text-lg font-semibold text-card-foreground">Здорові Суглоби</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Громадська організація, яка допомагає людям з проблемами суглобів жити повноцінним життям.
              </p>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-card-foreground mb-4">Навігація</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-muted-foreground hover:text-primary">Про нас</a></li>
                <li><a href="#meetings" className="text-muted-foreground hover:text-primary">Зустрічі</a></li>
                <li><a href="#blog" className="text-muted-foreground hover:text-primary">Блог</a></li>
                <li><a href="#contact" className="text-muted-foreground hover:text-primary">Контакти</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-card-foreground mb-4">Правова інформація</h4>
              <ul className="space-y-2">
                <li><a href="#privacy" className="text-muted-foreground hover:text-primary">Політика конфіденційності</a></li>
                <li><a href="#documents" className="text-muted-foreground hover:text-primary">Документи</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border pt-8 mt-8 text-center">
            <p className="text-muted-foreground">
              © 2024 Здорові Суглоби. Всі права захищені.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SimpleTemplate;