import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon, Code, GithubIcon } from "lucide-react";
export const Hero = () => {
  return <section id="home" className="min-h-screen pt-20 px-6 gradient-bg">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-6xl font-bold">
            Hello 👋
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-200">
              I'm Raghav Jindal
            </span>
          </h1>
          <p className="text-xl opacity-90">Computer Science Student & App Developer </p>
          <div className="flex items-center gap-8 bg-white/5 backdrop-blur-sm rounded-xl p-6">
            <div className="flex items-center gap-2">
              <span className="text-4xl font-bold text-purple-400">3</span>
              <span className="text-sm opacity-80">PROJECTS<br />COMPLETED</span>
            </div>
            <div className="w-px h-12 bg-white/10" />
            <div className="flex items-center gap-2">
              <Code className="w-8 h-8 text-purple-400" />
              <span className="text-sm opacity-80">FRONTEND<br />DEVELOPER</span>
            </div>
          </div>
          <div className="flex gap-4 pt-4 bg-white/5 backdrop-blur-sm rounded-xl p-4">
            <a href="https://github.com/RagoRaghav" target="_blank" rel="noopener noreferrer">
              <GithubIcon className="w-6 h-6 cursor-pointer hover:text-primary transition-colors" />
            </a>
            <a href="https://linkedin.com/jindal5112" target="_blank" rel="noopener noreferrer">
              <LinkedinIcon className="w-6 h-6 cursor-pointer hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
        <div className="relative">
          {/* Add your profile image here */}
        </div>
      </div>
    </section>;
};