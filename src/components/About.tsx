
import { BookOpen, Briefcase, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

export const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary rounded-full mb-6"></div>
          <p className="text-white/80 max-w-2xl">
            I'm a passionate Computer Science student with a focus on frontend development 
            and app development, constantly learning and building projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-lg bg-primary/20">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">My Education</h3>
            </div>
            <div className="space-y-6 stagger-animation">
              <Card className="p-6 bg-card border border-white/10 card-hover">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-lg font-semibold">Bachelor of Technology in Computer Science</h4>
                    <p className="text-sm opacity-80 mt-1">ABES Engineering College</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">2022-26</span>
                </div>
                <p className="text-sm text-white/60">CGPA: 7.5/10</p>
              </Card>
              
              <Card className="p-6 bg-card border border-white/10 card-hover">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-lg font-semibold">Senior Secondary Education</h4>
                    <p className="text-sm opacity-80 mt-1">DPS Rajnagar Extension</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">2022</span>
                </div>
                <p className="text-sm text-white/60">GPA: 9.2/10</p>
              </Card>
              
              <Card className="p-6 bg-card border border-white/10 card-hover">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-lg font-semibold">High School</h4>
                    <p className="text-sm opacity-80 mt-1">DPS Rajnagar Extension</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">2020</span>
                </div>
                <p className="text-sm text-white/60">GPA: 9.2/10</p>
              </Card>
            </div>
          </div>
          
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-lg bg-primary/20">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">My Experience</h3>
            </div>
            <div className="space-y-6 stagger-animation">
              <Card className="p-6 bg-card border border-white/10 card-hover">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-lg font-semibold">Joint Secretary @ DataVerse</h4>
                    <p className="text-sm opacity-80 mt-1">ABES Engineering College</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">2022-Present</span>
                </div>
                <p className="text-sm text-white/60">Led a team of 50+ students at ABESEC's Data Science & AI Club. Successfully organized major events, including the frontend-based hackathon 'HackOVerse'.</p>
              </Card>
              
              <Card className="p-6 bg-card border border-white/10 card-hover">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-lg font-semibold">Events Lead @ AR/VR Club</h4>
                    <p className="text-sm opacity-80 mt-1">ABES Engineering College</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">2023-Present</span>
                </div>
                <p className="text-sm text-white/60">Spearheaded multiple engaging events for gaming and immersive tech enthusiasts, fostering a strong community around AR/VR innovation.</p>
              </Card>
              
              <Card className="p-6 bg-card border border-white/10 card-hover">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-lg font-semibold">Cultural Secretary</h4>
                    <p className="text-sm opacity-80 mt-1">DPS Rajnagar Extension</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">2021-2022</span>
                </div>
                <p className="text-sm text-white/60">Played a key role in organizing the Annual Function by coordinating with faculty and managing student participation.</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
