import { Link } from "react-router-dom";
import { Heart, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Mission */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/lovable-uploads/6978bb6d-593a-4a72-8c73-17f68ebfa2a6.png" 
                alt="Osnova Care" 
                className="h-8 w-auto"
              />
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Покращуємо добробут людей із труднощами руху завдяки відкритій інформації, 
              навчальним ресурсам і просвітницьким ініціативам.
            </p>
            <div className="flex items-center text-sm text-muted-foreground">
              <Heart className="w-4 h-4 mr-2 text-primary" />
              Зроблено з турботою для вашого здоров'я
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Швидкі посилання</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  Про нас
                </Link>
              </li>
              <li>
                <Link to="/meetings" className="text-muted-foreground hover:text-primary transition-colors">
                  Офлайн зустрічі
                </Link>
              </li>
              <li>
                <Link to="/videos" className="text-muted-foreground hover:text-primary transition-colors">
                  Відеозаписи
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Корисні статті
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Контакти</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-primary" />
                <span className="text-muted-foreground text-sm">info@zdravisuglobs.org</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-primary" />
                <span className="text-muted-foreground text-sm">+380 (44) 123-45-67</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-3 text-primary" />
                <span className="text-muted-foreground text-sm">м. Київ, Україна</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Osnova Care. Всі права захищені.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Політика конфіденційності
            </Link>
            <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Умови використання
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;