import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Have questions about our AI prompts? Need custom solutions? We're here to help you maximize your AI productivity.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-luxury transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-accent">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="bg-input/50 border-border/50 focus:border-accent focus:ring-accent/20"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="bg-input/50 border-border/50 focus:border-accent focus:ring-accent/20"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-foreground">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    className="bg-input/50 border-border/50 focus:border-accent focus:ring-accent/20"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project or questions..."
                    rows={6}
                    className="bg-input/50 border-border/50 focus:border-accent focus:ring-accent/20"
                    required
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-accent to-accent/80 text-accent-foreground hover:shadow-glow transition-all duration-300 hover:scale-105"
                >
                  Send Message 📧
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-luxury transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-3xl">⚡</span>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Quick Response</h3>
                    <p className="text-foreground/70">We respond within 24 hours</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-luxury transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-3xl">💬</span>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Live Chat</h3>
                    <p className="text-foreground/70">Available 9 AM - 6 PM EST</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-luxury transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-3xl">🛠️</span>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Custom Solutions</h3>
                    <p className="text-foreground/70">Tailored prompts for your business</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-accent/10 backdrop-blur-sm border-accent/20">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold text-accent mb-3">Need Immediate Help?</h3>
                <p className="text-foreground/80 mb-4">
                  Join our community of 15,000+ AI prompt users and get instant support.
                </p>
                <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                  Join Discord Community 🚀
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};