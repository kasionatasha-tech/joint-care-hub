import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface BannerProps {
  title: string;
  description: string;
  buttonText: string;
  bgColor?: string;
  href?: string;
}

const Banner = ({ title, description, buttonText, bgColor = "bg-gradient-healing", href = "#" }: BannerProps) => {
  return (
    <Card className={`${bgColor} border-0 text-white shadow-card`}>
      <CardContent className="p-6 md:p-8">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h3 className="text-xl md:text-2xl font-bold mb-2">
              {title}
            </h3>
            <p className="text-white/90 mb-4">
              {description}
            </p>
            <Button variant="secondary" size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
              {buttonText}
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Banner;