import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, Clock, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiryType: "",
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
      inquiryType: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (value: string) => {
    setFormData({
      ...formData,
      inquiryType: value
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Контакти
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Зв'яжіться з нами для отримання консультації або відповідей на ваші питання
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8">
                  Наші контакти
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Електронна пошта</h4>
                      <p className="text-primary font-medium">info@maisternia-ecom.org</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Телефон</h4>
                      <p className="text-primary font-medium">+380 (XX) XXX-XX-XX</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Час роботи</h4>
                      <p className="text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
                      <p className="text-muted-foreground">Сб-Нд: Вихідні</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Локація</h4>
                      <p className="text-muted-foreground">Україна, онлайн навчання</p>
                    </div>
                  </div>
                </div>

                {/* FAQ Section */}
                <div className="mt-12">
                  <h3 className="text-2xl font-bold text-foreground mb-6">
                    Часті питання
                  </h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h5 className="font-semibold text-foreground mb-2">
                        Як швидко ви відповідаєте на повідомлення?
                      </h5>
                      <p className="text-muted-foreground">
                        Зазвичай ми відповідаємо протягом 24 годин у робочі дні.
                      </p>
                    </div>

                    <div>
                      <h5 className="font-semibold text-foreground mb-2">
                        Чи безкоштовні ваші консультації?
                      </h5>
                      <p className="text-muted-foreground">
                        Так, усі базові консультації та участь у зустрічах безкоштовні.
                      </p>
                    </div>

                    <div>
                      <h5 className="font-semibold text-foreground mb-2">
                        Чи можу я залишитися анонімним?
                      </h5>
                      <p className="text-muted-foreground">
                        Звичайно, ми поважаємо вашу приватність та конфіденційність.
                      </p>
                    </div>

                    <div>
                      <h5 className="font-semibold text-foreground mb-2">
                        Як проходять офлайн зустрічі?
                      </h5>
                      <p className="text-muted-foreground">
                        Зустрічі проходять в комфортній атмосфері, де кожен може поділитися досвідом та отримати підтримку.
                      </p>
                    </div>

                    <div>
                      <h5 className="font-semibold text-foreground mb-2">
                        Чи потрібна попередня реєстрація на зустрічі?
                      </h5>
                      <p className="text-muted-foreground">
                        Так, рекомендуємо зареєструватися заздалегідь для планування місця та матеріалів.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8">
                  Форма зворотного зв'язку
                </h2>
                <p className="text-muted-foreground mb-8">
                  Залиште свої контакти, і ми зв'яжемося з вами
                </p>

                <Card>
                  <CardContent className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <Label htmlFor="name">Ім'я *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Введіть ваше ім'я"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="email">Електронна пошта *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="email@example.com"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="inquiryType">Тип запиту *</Label>
                        <Select value={formData.inquiryType} onValueChange={handleSelectChange}>
                          <SelectTrigger>
                            <SelectValue placeholder="Оберіть тип запиту" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="consultation">Консультація</SelectItem>
                            <SelectItem value="course-info">Інформація про курси</SelectItem>
                            <SelectItem value="technical-support">Технічна підтримка</SelectItem>
                            <SelectItem value="partnership">Партнерство</SelectItem>
                            <SelectItem value="other">Інше</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="message">Коментар або питання</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Опишіть ваш запит детальніше..."
                          rows={6}
                        />
                      </div>

                      <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                        Надіслати
                      </Button>
                    </form>
                  </CardContent>
                </Card>
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