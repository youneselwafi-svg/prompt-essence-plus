import aiLogo from '@/assets/ai-brain-logo.png';

export const Footer = () => {
  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-border/50 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={aiLogo} alt="AI Prompts" className="w-8 h-8" />
              <span className="text-xl font-bold text-gradient">15K AI Prompts</span>
            </div>
            <p className="text-foreground/70 text-sm">
              The ultimate collection of professional AI prompts to boost your productivity and creativity.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground/60 hover:text-accent transition-colors">
                <span className="text-xl">📧</span>
              </a>
              <a href="#" className="text-foreground/60 hover:text-accent transition-colors">
                <span className="text-xl">💬</span>
              </a>
              <a href="#" className="text-foreground/60 hover:text-accent transition-colors">
                <span className="text-xl">🐦</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="text-foreground/70 hover:text-accent transition-colors">Features</a></li>
              <li><a href="#pricing" className="text-foreground/70 hover:text-accent transition-colors">Pricing</a></li>
              <li><a href="#reviews" className="text-foreground/70 hover:text-accent transition-colors">Reviews</a></li>
              <li><a href="#contact" className="text-foreground/70 hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-foreground/70 hover:text-accent transition-colors">Help Center</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-accent transition-colors">Documentation</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-accent transition-colors">Tutorials</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-accent transition-colors">Community</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-foreground/70 hover:text-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-accent transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-accent transition-colors">Refund Policy</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-accent transition-colors">License</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 text-center text-sm text-foreground/60">
          <p>&copy; 2024 15K AI Prompts. All rights reserved. Made with ❤️ for AI enthusiasts.</p>
        </div>
      </div>
    </footer>
  );
};