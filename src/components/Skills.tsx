
import { Card } from "@/components/ui/card";
import { Python, Javascript, Html, Css, React as ReactIcon, Database, Github } from "lucide-react";

export const Skills = () => {
  const skills = [
    { name: "Python", icon: Python },
    { name: "JavaScript", icon: Javascript },
    { name: "HTML", icon: Html },
    { name: "CSS", icon: Css },
    { name: "React.js", icon: ReactIcon },
    { name: "Firebase", icon: Database },
    { name: "Git/GitHub", icon: Github },
  ];

  const frameworks = ["ReactJS", "Node.js", "Flutter"];
  const databases = ["Firebase", "SQL", "MongoDB"];
  const others = ["Git/GitHub", "Provider"];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6">Technologies</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {skills.map((skill) => (
                <Card key={skill.name} className="p-4 bg-primary/10 border-primary/20 hover:bg-primary/20 transition-colors">
                  <div className="text-center">
                    <skill.icon className="w-8 h-8 mx-auto mb-2" />
                    <p className="text-sm text-white/80">{skill.name}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                {frameworks.map((framework) => (
                  <span key={framework} className="px-3 py-1 bg-primary/10 rounded-full text-sm">
                    {framework}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Databases</h3>
              <div className="flex flex-wrap gap-2">
                {databases.map((db) => (
                  <span key={db} className="px-3 py-1 bg-primary/10 rounded-full text-sm">
                    {db}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Others</h3>
              <div className="flex flex-wrap gap-2">
                {others.map((item) => (
                  <span key={item} className="px-3 py-1 bg-primary/10 rounded-full text-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
