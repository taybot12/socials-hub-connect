
import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface SocialLinkCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  url: string;
  color: string;
  hoverColor: string;
}

export const SocialLinkCard = ({ 
  title, 
  description, 
  icon: Icon, 
  url, 
  color, 
  hoverColor 
}: SocialLinkCardProps) => {
  const handleClick = () => {
    if (title === "Resume") {
      // For resume, we'll open in a new tab to download
      window.open(url, '_blank');
    } else {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <Card 
      className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl border-0 bg-white/80 backdrop-blur-sm"
      onClick={handleClick}
    >
      <CardContent className="p-6">
        <div className="text-center">
          {/* Icon with gradient background */}
          <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${color} ${hoverColor} transition-all duration-300 flex items-center justify-center shadow-lg group-hover:shadow-xl`}>
            <Icon className="w-8 h-8 text-white" />
          </div>
          
          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
            {title}
          </h3>
          
          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed">
            {description}
          </p>
          
          {/* Hover indicator */}
          <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-xs text-gray-500 font-medium">
              Click to {title === "Resume" ? "download" : "visit"}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
