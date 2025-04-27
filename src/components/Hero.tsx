import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon, Code } from "lucide-react";
export const Hero = () => {
  return <section id="home" className="min-h-screen pt-20 px-6 gradient-bg">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-6xl font-bold">
            Hello 👋
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-200">
              I'm a Web Developer
            </span>
          </h1>
          <p className="text-xl opacity-90">I build things for web</p>
          <div className="flex items-center gap-8 bg-white/5 backdrop-blur-sm rounded-xl p-6">
            <div className="flex items-center gap-2">
              <span className="text-4xl font-bold text-purple-400">3</span>
              <span className="text-sm opacity-80">YEARS OF<br />EXPERIENCE</span>
            </div>
            <div className="w-px h-12 bg-white/10" />
            <div className="flex items-center gap-2">
              <span className="text-4xl font-bold text-purple-400">12</span>
              <span className="text-sm opacity-80">PROJECTS<br />COMPLETED</span>
            </div>
          </div>
          <div className="flex gap-4 pt-4 bg-white/5 backdrop-blur-sm rounded-xl p-4">
            <FacebookIcon className="w-6 h-6 cursor-pointer hover:text-primary transition-colors" />
            <TwitterIcon className="w-6 h-6 cursor-pointer hover:text-primary transition-colors" />
            <InstagramIcon className="w-6 h-6 cursor-pointer hover:text-primary transition-colors" />
            <LinkedinIcon className="w-6 h-6 cursor-pointer hover:text-primary transition-colors" />
            
          </div>
        </div>
        <div className="relative">
          
        </div>
      </div>
    </section>;
};