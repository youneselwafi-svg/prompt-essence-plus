import { Button } from '@/components/ui/button';
import aiLogo from '@/assets/ai-brain-logo.png';

export const Header = () => {
  return (
    <header className="fixed top-0 w-full z-40 glass border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-3 group">
            <img 
              src={aiLogo} 
              alt="AI Prompts" 
              className="w-10 h-10 animate-float group-hover:scale-110 transition-transform duration-300"
            />
            <span className="text-xl font-bold text-gradient">15K AI Prompts</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-foreground/80 hover:text-accent transition-colors duration-300 relative group">
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#pricing" className="text-foreground/80 hover:text-accent transition-colors duration-300 relative group">
              Pricing
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#reviews" className="text-foreground/80 hover:text-accent transition-colors duration-300 relative group">
              Reviews
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" className="text-foreground/80 hover:text-accent transition-colors duration-300 relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
          
          <Button 
            variant="default" 
            className="bg-gradient-to-r from-accent to-accent/80 text-accent-foreground hover:shadow-glow transition-all duration-300 hover:scale-105"
          >
            Get Started
          </Button>
        </nav>
      </div>
    </header>
  );
};