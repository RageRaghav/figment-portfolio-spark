import { Button } from "@/components/ui/button";
export const Navbar = () => {
  return <nav className="fixed top-0 left-0 right-0 z-50 py-4 px-6 backdrop-blur-md bg-violet-950">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold text-white">Hi.Dev</div>
        <div className="flex items-center gap-8">
          <a href="#home" className="text-white hover:text-primary transition-colors">Home</a>
          <a href="#about" className="text-white hover:text-primary transition-colors">About</a>
          <a href="#skills" className="text-white hover:text-primary transition-colors">Skills</a>
          <a href="#projects" className="text-white hover:text-primary transition-colors">Projects</a>
          <Button className="bg-white text-background hover:bg-white/90">Hire me</Button>
        </div>
      </div>
    </nav>;
};