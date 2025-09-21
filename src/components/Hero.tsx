import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CountdownTimer } from './CountdownTimer';
import heroBackground from '@/assets/hero-background.png';

export const Hero = () => {
  const [showOldPrice, setShowOldPrice] = useState(false);

  const handleTimerExpire = () => {
    setShowOldPrice(true);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full animate-float" style={{ animationDelay: '0s' }} />
      <div className="absolute top-40 right-20 w-16 h-16 bg-primary/30 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-20 left-20 w-12 h-12 bg-accent/30 rounded-full animate-float" style={{ animationDelay: '4s' }} />
      
      <div className="container mx-auto px-6 text-center z-10">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gradient">15,000 Premium</span>
            <br />
            <span className="text-foreground">AI Prompts Collection</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto">
            The ultimate library of professionally crafted AI prompts for ChatGPT, Claude, Gemini, and more. 
            Boost your productivity by 10x with our premium prompt collection.
          </p>
          
          {/* Pricing with Timer */}
          <div className="mb-8 space-y-4">
            {!showOldPrice && <CountdownTimer onExpire={handleTimerExpire} />}
            
            <div className="flex items-center justify-center space-x-6">
              {showOldPrice ? (
                <div className="text-center">
                  <div className="text-6xl font-bold text-foreground">$199</div>
                  <div className="text-lg text-foreground/60">Regular Price</div>
                </div>
              ) : (
                <>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-destructive line-through opacity-60">$199</div>
                    <div className="text-sm text-destructive/60">Regular Price</div>
                  </div>
                  <div className="text-center">
                    <div className="text-6xl font-bold text-success animate-glow">$99</div>
                    <div className="text-lg text-success">Limited Time Only!</div>
                  </div>
                </>
              )}
            </div>
          </div>
          
          <div className="space-y-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-accent to-accent/80 text-accent-foreground text-xl px-12 py-6 hover:shadow-glow transition-all duration-300 hover:scale-105 animate-glow"
            >
              🚀 Get Instant Access Now
            </Button>
            
            <div className="flex items-center justify-center space-x-6 text-sm text-foreground/60">
              <span>✅ Instant Download</span>
              <span>✅ 30-Day Money Back</span>
              <span>✅ Commercial License</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};