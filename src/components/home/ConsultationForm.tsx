import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Calendar, Clock, Phone, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    problem: "",
    preferredTime: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Запит відправлено!",
      description: "Ми зв'яжемося з вами найближчим часом для підтвердження консультації.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      problem: "",
      preferredTime: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <div>
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Безкоштовна консультація
              </h2>
              <p className="text-lg text-muted-foreground">
                Отримайте персональну консультацію від наших експертів. 
                Заповніть форму, і ми зв'яжемося з вами найближчим часом.
              </p>
            </div>

            <Card className="shadow-card border-0">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-primary" />
                  Записатися на консультацію
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
                    <Label htmlFor="phone">Телефон</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+380 (XX) XXX-XX-XX"
                    />
                  </div>

                  <div>
                    <Label htmlFor="preferredTime">Бажаний час консультації</Label>
                    <Input
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      placeholder="Наприклад: вівторок, 15:00"
                    />
                  </div>

                  <div>
                    <Label htmlFor="problem">Опишіть вашу проблему *</Label>
                    <Textarea
                      id="problem"
                      name="problem"
                      value={formData.problem}
                      onChange={handleChange}
                      placeholder="Розкажіть про ваші симптоми, біль або проблеми з суглобами..."
                      rows={4}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Записатися на безкоштовну консультацію
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    * Обов'язкові поля. Ваші дані захищені і не передаються третім особам.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Info Section */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <Card className="shadow-card border-0 bg-gradient-soft">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  Інші способи зв'язку
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-primary mr-3" />
                    <div>
                      <div className="font-medium text-foreground">Телефон</div>
                      <div className="text-muted-foreground">+380 (44) 123-45-67</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-primary mr-3" />
                    <div>
                      <div className="font-medium text-foreground">Email</div>
                      <div className="text-muted-foreground">consultation@zdravisuglobs.org</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-primary mr-3" />
                    <div>
                      <div className="font-medium text-foreground">Час роботи</div>
                      <div className="text-muted-foreground">Пн-Пт: 9:00-18:00</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card className="shadow-card border-0">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  Що ви отримаєте:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Персональну оцінку вашого стану</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Рекомендації щодо лікування</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">План вправ та профілактики</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-muted-foreground">Доступ до корисних матеріалів</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationForm;