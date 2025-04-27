
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const Projects = () => {
  const projects = [
    {
      title: "UTX Portfolio Website",
      description: "Design and Development",
      image: "/placeholder.svg"
    },
    {
      title: "LOZAN Ecommerce Web",
      description: "Web Development",
      image: "/placeholder.svg"
    },
    {
      title: "HOMEY Furniture App",
      description: "App Development",
      image: "/placeholder.svg"
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-secondary/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">My Projects</h2>
        <p className="text-lg mb-8 text-white/80">Some things I've built so far</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden bg-primary/10 border-primary/20">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-white/80 mb-4">{project.description}</p>
                <Button variant="secondary" className="w-full">View Code</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
