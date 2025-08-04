import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, Share2, BookOpen, ArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const Article = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // Mock article data - в реальному проекті це буде приходити з API або CMS
  const article = {
    title: "Вправи для здоров'я колін: комплексний підхід до реабілітації",
    excerpt: "Дізнайтеся про найефективніші методи зміцнення колінних суглобів та профілактики травм",
    author: "Др. Олександр Іваненко",
    publishDate: "15 лютого 2024",
    readTime: "8 хв читання",
    category: "Реабілітація",
    bannerImage: "/public/lovable-uploads/6978bb6d-593a-4a72-8c73-17f68ebfa2a6.png",
    content: [
      {
        type: "text",
        content: "Колінні суглоби - одні з найбільш навантажених у нашому організмі. Щодня вони витримують вагу нашого тіла та забезпечують мобільність. Тому підтримання їх здоров'я має бути пріоритетом для кожного."
      },
      {
        type: "heading",
        content: "Анатомія колінного суглоба"
      },
      {
        type: "text",
        content: "Колінний суглоб складається з трьох основних кісток: стегнової кістки (femur), великогомілкової кістки (tibia) та наколінка (patella). Ці структури з'єднані зв'язками, які забезпечують стабільність суглоба."
      },
      {
        type: "image",
        src: "/placeholder.svg",
        alt: "Анатомія колінного суглоба",
        caption: "Схематичне зображення будови колінного суглоба"
      },
      {
        type: "heading",
        content: "Основні проблеми з колінами"
      },
      {
        type: "text",
        content: "Найпоширеніші проблеми включають артрит, травми зв'язок, проблеми з хрящами та перенавантаження. Кожна з цих проблем вимагає індивідуального підходу до лікування та реабілітації."
      },
      {
        type: "video",
        src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        title: "Демонстрація правильної техніки вправ для колін"
      },
      {
        type: "heading",
        content: "Комплекс вправ для зміцнення"
      },
      {
        type: "text",
        content: "Регулярні вправи допомагають зміцнити м'язи навколо коліна, покращити гнучкість та знизити ризик травм. Ось основні види вправ, які рекомендують фахівці:"
      },
      {
        type: "list",
        items: [
          "Вправи на зміцнення чотириголового м'яза стегна",
          "Розтяжка підколінних сухожиль",
          "Вправи на баланс та координацію",
          "Аеробні навантаження з низьким впливом",
          "Вправи на зміцнення м'язів кора"
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Article Header */}
        <article className="py-8 md:py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Back Button */}
            <div className="mb-8">
              <Button
                variant="ghost"
                onClick={() => navigate('/blog')}
                className="text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Повернутись до блогу
              </Button>
            </div>

            {/* Article Meta */}
            <div className="mb-8">
              <Badge variant="secondary" className="mb-4">
                {article.category}
              </Badge>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                {article.title}
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                {article.excerpt}
              </p>

              {/* Author and Meta Info */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground border-b border-border pb-6">
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{article.publishDate}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{article.readTime}</span>
                </div>
                <Button variant="ghost" size="sm" className="ml-auto">
                  <Share2 className="w-4 h-4 mr-2" />
                  Поділитися
                </Button>
              </div>
            </div>

            {/* Banner Image */}
            {article.bannerImage && (
              <div className="mb-12">
                <img
                  src={article.bannerImage}
                  alt={article.title}
                  className="w-full h-64 md:h-96 object-cover rounded-lg shadow-card"
                />
              </div>
            )}

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              {article.content.map((block, index) => {
                switch (block.type) {
                  case 'heading':
                    return (
                      <h2 key={index} className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-6">
                        {block.content}
                      </h2>
                    );
                  
                  case 'text':
                    return (
                      <p key={index} className="text-muted-foreground mb-6 leading-relaxed text-lg">
                        {block.content}
                      </p>
                    );
                  
                  case 'image':
                    return (
                      <figure key={index} className="my-12">
                        <img
                          src={block.src}
                          alt={block.alt}
                          className="w-full h-64 md:h-80 object-cover rounded-lg shadow-card"
                        />
                        {block.caption && (
                          <figcaption className="text-center text-sm text-muted-foreground mt-4">
                            {block.caption}
                          </figcaption>
                        )}
                      </figure>
                    );
                  
                  case 'video':
                    return (
                      <div key={index} className="my-12">
                        <div className="aspect-video rounded-lg overflow-hidden shadow-card">
                          <iframe
                            src={block.src}
                            title={block.title}
                            className="w-full h-full"
                            allowFullScreen
                          />
                        </div>
                        {block.title && (
                          <p className="text-center text-sm text-muted-foreground mt-4">
                            {block.title}
                          </p>
                        )}
                      </div>
                    );
                  
                  case 'list':
                    return (
                      <ul key={index} className="mb-8 space-y-3">
                        {block.items?.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                            <span className="text-muted-foreground text-lg">{item}</span>
                          </li>
                        ))}
                      </ul>
                    );
                  
                  default:
                    return null;
                }
              })}
            </div>

            {/* Article Footer */}
            <div className="mt-16 pt-8 border-t border-border">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center text-sm text-muted-foreground">
                  <BookOpen className="w-4 h-4 mr-2" />
                  <span>Стаття була корисною? Поділіться з друзями</span>
                </div>
                <Button>
                  <Share2 className="w-4 h-4 mr-2" />
                  Поділитися статтею
                </Button>
              </div>
            </div>
          </div>
        </article>

        {/* Related Articles */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
              Схожі статті
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2].map((item) => (
                <div key={item} className="bg-white rounded-lg shadow-card overflow-hidden">
                  <img
                    src="/placeholder.svg"
                    alt="Related article"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <Badge variant="secondary" className="mb-2">
                      Реабілітація
                    </Badge>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      Фізіотерапія в домашніх умовах: ефективні методи
                    </h4>
                    <p className="text-muted-foreground text-sm mb-4">
                      Дізнайтеся, як проводити якісну фізіотерапію вдома без спеціального обладнання.
                    </p>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3 mr-1" />
                      <span>8 лютого 2024</span>
                      <Clock className="w-3 h-3 ml-4 mr-1" />
                      <span>6 хв читання</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Article;