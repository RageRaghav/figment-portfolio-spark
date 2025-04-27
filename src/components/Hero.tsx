
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-20 px-6 gradient-bg flex items-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h1 className="text-6xl font-bold">
            Hello 👋
            <br />
            I'm a Web Developer
          </h1>
          <p className="text-xl opacity-90">I build things for web</p>
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <span className="text-4xl font-bold">3</span>
              <span className="text-sm opacity-80">YEARS OF<br />EXPERIENCE</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-4xl font-bold">12</span>
              <span className="text-sm opacity-80">PROJECTS<br />COMPLETED</span>
            </div>
          </div>
          <div className="flex gap-4 pt-4">
            <FacebookIcon className="w-6 h-6 cursor-pointer hover:text-primary transition-colors" />
            <TwitterIcon className="w-6 h-6 cursor-pointer hover:text-primary transition-colors" />
            <InstagramIcon className="w-6 h-6 cursor-pointer hover:text-primary transition-colors" />
            <LinkedinIcon className="w-6 h-6 cursor-pointer hover:text-primary transition-colors" />
          </div>
        </div>
        <div className="relative">
          <img 
            src="/lovable-uploads/43aa69b2-9b50-47d8-8854-7d3677fd360a.png" 
            alt="Developer avatar"
            className="w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};
