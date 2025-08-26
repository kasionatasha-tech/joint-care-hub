import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Activity, Zap, Clock } from "lucide-react";

const JointProblemsOverview = () => {
  const problems = [
    {
      icon: AlertTriangle,
      title: "Артрит та артроз",
      description: "Запальні та дегенеративні захворювання суглобів, що викликають біль та обмежують рухливість",
      prevalence: "Понад 20% дорослих"
    },
    {
      icon: Activity,
      title: "Травми та післяопераційний період",
      description: "Ушкодження м'язів, зв'язок та суглобів, що потребують професійної реабілітації",
      prevalence: "25% населення"
    },
    {
      icon: Zap,
      title: "Хронічний біль",
      description: "Постійні больові відчуття в суглобах, що впливають на якість повсякденного життя",
      prevalence: "12% дорослих"
    },
    {
      icon: Clock,
      title: "Вікові зміни",
      description: "Природне зношування суглобів з віком, що потребує особливого догляду та профілактики",
      prevalence: "50% людей 65+"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-16 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-left">
          Захворювання опорно-рухового апарату
        </h2>
        <p className="text-lg text-muted-foreground text-left">
          Розуміння основних захворювань опорно-рухового апарату допомагає краще підготуватися 
          до лікування, реабілітації та знайти найефективніші методи відновлення.
        </p>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            return (
              <Card key={index} className="bg-white shadow-card border-0 hover:shadow-gentle transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-healing rounded-xl flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-xl text-foreground">
                        {problem.title}
                      </CardTitle>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-primary">
                        {problem.prevalence}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        страждає
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {problem.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Global Statistics */}
        <div className="bg-gradient-healing rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Статистика в Україні та світі
            </h3>
            <p className="text-white/90 max-w-2xl mx-auto">
              Проблеми з суглобами торкаються мільйонів людей по всьому світу. 
              Важливо знати масштаб проблеми, щоб розуміти важливість профілактики та лікування.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">8 млн</div>
              <div className="text-white/90">Українців мають проблеми з суглобами</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">350 млн</div>
              <div className="text-white/90">Людей у світі страждають від артриту</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">№1</div>
              <div className="text-white/90">Причина інвалідності серед дорослих</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JointProblemsOverview;