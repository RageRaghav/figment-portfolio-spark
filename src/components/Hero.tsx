
import { GithubIcon, LinkedinIcon, ArrowDownCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
export const Hero = () => {
  return <section id="home" className="min-h-screen pt-28 pb-20 px-6 gradient-bg">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col space-y-6 stagger-animation">
          <div className="flex items-center gap-2">
            <div className="h-1 w-12 bg-primary rounded-full"></div>
            <p className="text-primary font-medium">Raghav Jindal</p>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold leading-tight font-display">
            Computer Science Student
            <br />
            <span className="enhanced-gradient-text">
              & App Developer
            </span>
          </h1>
          
          <p className="text-lg text-white/80 max-w-lg">
            Creating intuitive and responsive web applications with modern technologies and clean design principles.
          </p>
          
          <div className="flex items-center gap-8 pt-4">
            <div className="flex items-center gap-2">
              <span className="text-4xl font-bold text-primary">3</span>
              <span className="text-sm opacity-80">PROJECTS<br />COMPLETED</span>
            </div>
            <div className="w-px h-12 bg-white/10" />
            <div className="flex items-center gap-2">
              <span className="text-4xl font-bold text-primary">2+</span>
              <span className="text-sm opacity-80">YEARS<br />EXPERIENCE</span>
            </div>
          </div>
          
          <div className="flex gap-6 pt-4">
            <a href="#about">
              <Button variant="primaryGradient" className="rounded-full flex gap-2 items-center">
                <span>About Me</span>
                <ArrowDownCircle className="w-4 h-4" />
              </Button>
            </a>
            <div className="flex items-center gap-4">
              <a href="https://github.com/RageRaghav" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-primary/20 transition-colors gradient-animation">
                <GithubIcon className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/rjindal2112/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-primary/20 transition-colors gradient-animation">
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="relative flex justify-center lg:justify-end animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full bg-primary/20 purple-glow flex items-center justify-center overflow-hidden">
            <div className="absolute inset-2 rounded-full overflow-hidden bg-background flex items-center justify-center">
              <img alt="Raghav Jindal" onError={e => {
              e.currentTarget.src = 'https://via.placeholder.com/400x400?text=Raghav+Jindal';
            }} className="w-full h-full rounded-full object-cover" src="/lovable-uploads/0e9ad0a4-20d4-427a-959e-71a91fb9056e.jpg" />
            </div>
          </div>
          {/* Fixed positioning of the "Available for work" badge */}
          <div className="absolute -bottom-8 lg:-bottom-4 right-0 lg:right-8 bg-card p-4 rounded-lg purple-glow">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
              <span className="text-sm font-medium">Available for work</span>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
