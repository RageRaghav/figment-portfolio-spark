
import { GithubIcon, LinkedinIcon } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-white/60">
              © {new Date().getFullYear()} Raghav Jindal. All rights reserved.
            </p>
          </div>
          
          <div className="flex gap-4">
            <a 
              href="https://github.com/RageRaghav" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-primary/20 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a 
              href="https://www.linkedin.com/in/rjindal2112/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-primary/20 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
