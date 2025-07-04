
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "UTX Portfolio Website",
      description: "A responsive portfolio website built with React and Tailwind CSS featuring a clean, modern design with smooth animations.",
      image: "/placeholder.svg",
      tags: ["React", "Tailwind CSS", "Vite"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "Shopnest",
      description: "A full-featured e-commerce platform with product listing, cart functionality, and admin dashboard for comprehensive store management.",
      image: "/lovable-uploads/0720668b-ff9a-4840-987d-f426325282e0.png",
      tags: ["Flutter", "NodeJS", "MongoDB"],
      demoLink: "https://drive.google.com/file/d/1Znt-3ZdSkN1T49by000y6jchNE-HqwMi/view?usp=sharing",
      codeLink: "https://github.com/RageRaghav/ShopNest"
    },
    {
      title: "Restaurant App",
      description: "A Flutter-based mobile application for restaurant management and ordering system built with REST APIs for seamless user experience.",
      image: "/lovable-uploads/6eee8ee0-5929-4a41-9f94-c7a3f8cdfa1d.png",
      tags: ["Flutter", "REST APIs", "Mobile"],
      demoLink: "https://drive.google.com/file/d/1075Do8MkqyMXkcBH02WftBy9vgBv91Zi/view?usp=sharing",
      codeLink: "https://github.com/RageRaghav/OneBlanc"
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Recent Work</h2>
          <div className="w-24 h-1 bg-primary rounded-full mb-6"></div>
          <p className="text-white/80 max-w-2xl">
            Here are some projects I've worked on, showcasing my skills in web and app development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animation">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden bg-card border-white/10 flex flex-col card-hover">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-sm text-white/70 mb-4 flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-primary/10 text-primary/90 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3 mt-auto">
                  <a href={project.demoLink} className="flex-1" target="_blank" rel="noopener noreferrer">
                    <Button variant="primaryGradient" className="w-full rounded-full flex gap-2 items-center justify-center">
                      <ExternalLink className="w-4 h-4" />
                      <span>Demo Video</span>
                    </Button>
                  </a>
                  <a href={project.codeLink} className="flex-1" target="_blank" rel="noopener noreferrer">
                    <Button variant="gradient" className="w-full rounded-full flex gap-2 items-center justify-center">
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </Button>
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
