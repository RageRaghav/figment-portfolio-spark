
import { Card } from "@/components/ui/card";

export const Skills = () => {
  const skills = [
    { name: "JavaScript", icon: "JS" },
    { name: "HTML", icon: "HTML" },
    { name: "CSS", icon: "CSS" },
    { name: "React", icon: "React" },
    { name: "Node.js", icon: "Node" },
    { name: "Python", icon: "Python" },
    { name: "VS Code", icon: "VS" },
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">My Skills</h2>
        <p className="text-lg mb-8 text-white/80">Technologies I've been working with recently</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill) => (
            <Card key={skill.name} className="p-4 bg-primary/10 border-primary/20 hover:bg-primary/20 transition-colors">
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">{skill.icon}</div>
                <p className="text-sm text-white/80">{skill.name}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
