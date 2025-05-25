
import { SocialLinkCard } from "@/components/SocialLinkCard";
import { Github, Linkedin, FileText, User } from "lucide-react";

const Index = () => {
  const socialLinks = [
    {
      title: "LinkedIn",
      description: "Connect with me professionally",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/morielmauni/",
      color: "from-blue-500 to-blue-600",
      hoverColor: "hover:from-blue-600 hover:to-blue-700"
    },
    {
      title: "GitHub", 
      description: "Check out my code repositories",
      icon: Github,
      url: "https://github.com/MorielMauni",
      color: "from-gray-700 to-gray-800",
      hoverColor: "hover:from-gray-800 hover:to-gray-900"
    },
    {
      title: "Portfolio",
      description: "View my work and projects",
      icon: User,
      url: "https://morielmauni.com/",
      color: "from-purple-500 to-purple-600", 
      hoverColor: "hover:from-purple-600 hover:to-purple-700"
    },
    {
      title: "Resume",
      description: "Download my latest resume",
      icon: FileText,
      url: "https://drive.google.com/file/d/1eG-AERcq3NMxlvG9px6G7RzSWsgZLDAb/view?usp=drive_link",
      color: "from-green-500 to-green-600",
      hoverColor: "hover:from-green-600 hover:to-green-700"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-in slide-in-from-top duration-1000">
          <div className="mb-6">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-6 shadow-2xl">
              <User className="w-16 h-16 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-4">
            Moriel Mauni
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-2">
            Software Developer
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Welcome to my digital space. Connect with me through the links below.
          </p>
        </div>

        {/* Social Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {socialLinks.map((link, index) => (
            <div
              key={link.title}
              className="animate-in slide-in-from-bottom duration-1000"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <SocialLinkCard {...link} />
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-16 animate-in fade-in duration-1000 delay-700">
          <p className="text-gray-500">
            © 2024 Moriel Mauni. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
