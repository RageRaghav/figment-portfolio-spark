
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-lg shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold text-white">
          <span className="text-primary">R</span>aghav
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white"
          >
            <Menu />
          </Button>
        </div>
        
        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-white hover:text-primary transition-colors">Home</a>
          <a href="#about" className="text-white hover:text-primary transition-colors">About</a>
          <a href="#skills" className="text-white hover:text-primary transition-colors">Skills</a>
          <a href="#projects" className="text-white hover:text-primary transition-colors">Projects</a>
          <a href="#contact">
            <Button className="bg-primary text-white hover:bg-primary/80">Hire me</Button>
          </a>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg p-4 flex flex-col gap-4 shadow-lg">
            <a href="#home" className="text-white hover:text-primary p-2 transition-colors" onClick={() => setMobileMenuOpen(false)}>Home</a>
            <a href="#about" className="text-white hover:text-primary p-2 transition-colors" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#skills" className="text-white hover:text-primary p-2 transition-colors" onClick={() => setMobileMenuOpen(false)}>Skills</a>
            <a href="#projects" className="text-white hover:text-primary p-2 transition-colors" onClick={() => setMobileMenuOpen(false)}>Projects</a>
            <a href="#contact" className="w-full" onClick={() => setMobileMenuOpen(false)}>
              <Button className="bg-primary w-full text-white hover:bg-primary/80">Hire me</Button>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};
