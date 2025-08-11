import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Повідомлення відправлено!",
      description: "Дякуємо за ваше звернення. Ми відповімо найближчим часом.",
    });
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "info@zdravisuglobs.org",
      description: "Напишіть нам в будь-який час"
    },
    {
      icon: Phone,
      title: "Телефон",
      content: "+380 (44) 123-45-67",
      description: "Пн-Пт: 9:00-18:00"
    },
    {
      icon: MapPin,
      title: "Адреса",
      content: "м. Київ, вул. Здоров'я, 15",
      description: "Офіс громадської організації"
    },
    {
      icon: Clock,
      title: "Час роботи",
      content: "Пн-Пт: 9:00-18:00",
      description: "Вихідні: за домовленістю"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 py-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Головна</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Контакти</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      
      <main>

        {/* Contact Form and Info */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    Написати нам
                  </h2>
                  <p className="text-muted-foreground">
                    Заповніть форму нижче, і ми зв'яжемося з вами найближчим часом. 
                    Усі звернення розглядаються індивідуально.
                  </p>
                </div>

                <Card className="shadow-card border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MessageCircle className="w-5 h-5 mr-2 text-primary" />
                      Форма зв'язку
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Ім'я *</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Ваше ім'я"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="example@email.com"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="subject">Тема звернення *</Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="Коротко опишіть суть вашого питання"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="message">Повідомлення *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Детально опишіть ваше питання або проблему..."
                          rows={6}
                          required
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full">
                        <Send className="w-4 h-4 mr-2" />
                        Відправити повідомлення
                      </Button>

                      <p className="text-sm text-muted-foreground text-center">
                        * Обов'язкові поля. Ваші дані захищені і використовуються лише для зв'язку з вами.
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    Контактна інформація
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Оберіть найзручніший для вас спосіб зв'язку. 
                    Ми відповідаємо на всі звернення протягом 24 годин.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <Card key={index} className="shadow-card border-0 bg-white">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-gradient-healing rounded-xl flex items-center justify-center flex-shrink-0">
                              <IconComponent className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-foreground mb-1">
                                {info.title}
                              </h4>
                              <div className="text-lg font-medium text-primary mb-1">
                                {info.content}
                              </div>
                              <p className="text-sm text-muted-foreground">
                                {info.description}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-gradient-soft">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Часті запитання
                </h2>
                <p className="text-muted-foreground">
                  Знайдіть відповіді на найпоширеніші питання про нашу організацію та послуги
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="shadow-card border-0 bg-white">
                  <CardContent className="p-6">
                    <h5 className="font-medium text-foreground mb-2">
                      Як швидко ви відповідаєте на повідомлення?
                    </h5>
                    <p className="text-sm text-muted-foreground">
                      Зазвичай ми відповідаємо протягом 24 годин у робочі дні.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="shadow-card border-0 bg-white">
                  <CardContent className="p-6">
                    <h5 className="font-medium text-foreground mb-2">
                      Чи безкоштовні ваші консультації?
                    </h5>
                    <p className="text-sm text-muted-foreground">
                      Так, усі базові консультації та участь у зустрічах безкоштовні.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="shadow-card border-0 bg-white">
                  <CardContent className="p-6">
                    <h5 className="font-medium text-foreground mb-2">
                      Чи можу я залишитися анонімним?
                    </h5>
                    <p className="text-sm text-muted-foreground">
                      Звичайно, ми поважаємо вашу приватність та конфіденційність.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="shadow-card border-0 bg-white">
                  <CardContent className="p-6">
                    <h5 className="font-medium text-foreground mb-2">
                      Як проходять офлайн зустрічі?
                    </h5>
                    <p className="text-sm text-muted-foreground">
                      Зустрічі проходять в комфортній атмосфері, де кожен може поділитися досвідом та отримати підтримку.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="shadow-card border-0 bg-white md:col-span-2">
                  <CardContent className="p-6">
                    <h5 className="font-medium text-foreground mb-2">
                      Чи потрібна попередня реєстрація на зустрічі?
                    </h5>
                    <p className="text-sm text-muted-foreground">
                      Так, рекомендуємо зареєструватися заздалегідь для планування місця та матеріалів.
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="text-center mt-8">
                <Button variant="outline">
                  Показати всі запитання
                </Button>
              </div>
            </div>
          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;