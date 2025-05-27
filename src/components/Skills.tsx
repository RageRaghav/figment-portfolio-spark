
import { Card } from "@/components/ui/card";
import { Code } from "lucide-react";
import { SiMongodb } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";
import "@fortawesome/fontawesome-free/css/all.css";

export const Skills = () => {
  const skills = [
    { name: "Python", icon: Code, color: "#3776AB", fontAwesome: "fa-brands fa-python" },
    { name: "React.js", icon: Code, color: "#61DAFB", fontAwesome: "fa-brands fa-react" },
    { name: "GitHub", icon: Code, color: "#FFFFFF", fontAwesome: "fa-brands fa-github" },
    { name: "Flutter", icon: Code, color: "#02569B", fontAwesome: "fa-brands fa-flutter" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248", reactIcon: true },
    { name: "Node.js", icon: IoLogoNodejs, color: "#47A248", reactIcon: true },
  ];

  const frameworks = ["ReactJS", "Node.js", "Flutter"];
  const databases = ["Firebase", "SQL", "MongoDB"];
  const others = ["Git/GitHub", "Provider"];

  return (
    <section id="skills" className="py-20 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-24 h-1 bg-primary rounded-full mb-6"></div>
          <p className="text-white/80 max-w-2xl">
            I've worked with various technologies and frameworks, focusing on frontend development and application design.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="stagger-animation">
            <h3 className="text-xl font-semibold mb-8 text-center">Technologies</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {skills.map((skill) => (
                <Card key={skill.name} className="p-6 bg-background border-white/5 flex flex-col items-center justify-center card-hover">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 mb-4">
                    {skill.reactIcon ? (
                      <skill.icon className="w-10 h-10" style={{ color: skill.color }} />
                    ) : skill.fontAwesome ? (
                      <i className={`${skill.fontAwesome} text-3xl`} style={{ color: skill.color }}></i>
                    ) : (
                      <skill.icon className="w-10 h-10" style={{ color: skill.color }} />
                    )}
                  </div>
                  <p className="text-center text-sm font-medium">{skill.name}</p>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="space-y-8 stagger-animation">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-center">Frameworks</h3>
              <div className="bg-background rounded-lg p-6 border border-white/5">
                <div className="flex flex-wrap gap-3">
                  {frameworks.map((framework) => (
                    <span key={framework} className="px-4 py-2 bg-primary/10 rounded-full text-sm">
                      {framework}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6 text-center">Databases</h3>
              <div className="bg-background rounded-lg p-6 border border-white/5">
                <div className="flex flex-wrap gap-3">
                  {databases.map((db) => (
                    <span key={db} className="px-4 py-2 bg-primary/10 rounded-full text-sm">
                      {db}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6 text-center">Others</h3>
              <div className="bg-background rounded-lg p-6 border border-white/5">
                <div className="flex flex-wrap gap-3">
                  {others.map((item) => (
                    <span key={item} className="px-4 py-2 bg-primary/10 rounded-full text-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
