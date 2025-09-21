import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Digital Marketing Manager',
    company: 'TechStart Inc.',
    content: 'These AI prompts transformed my workflow completely! I\'ve increased my content production by 300% while maintaining premium quality.',
    rating: 5,
    avatar: '👩‍💼'
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Freelance Writer',
    company: 'Content Creator',
    content: 'Best investment I\'ve made for my business. The writing prompts alone have helped me land 5 new high-paying clients this month.',
    rating: 5,
    avatar: '👨‍✍️'
  },
  {
    name: 'Emily Watson',
    role: 'CEO',
    company: 'InnovateLab',
    content: 'Our entire team uses these prompts daily. The business strategy prompts have helped us secure $2M in funding.',
    rating: 5,
    avatar: '👩‍💻'
  },
  {
    name: 'David Kim',
    role: 'Software Developer',
    company: 'CodeCraft Solutions',
    content: 'The coding prompts are incredible! They\'ve saved me countless hours and improved my code quality significantly.',
    rating: 5,
    avatar: '👨‍💻'
  },
  {
    name: 'Lisa Thompson',
    role: 'Course Creator',
    company: 'EduMaster Online',
    content: 'Created an entire course curriculum in 2 days using these educational prompts. My students love the content!',
    rating: 5,
    avatar: '👩‍🏫'
  },
  {
    name: 'Alex Johnson',
    role: 'E-commerce Owner',
    company: 'ShopSmart',
    content: 'The marketing prompts boosted my conversion rate by 150%. ROI was immediate and substantial.',
    rating: 5,
    avatar: '👨‍💼'
  }
];

export const Testimonials = () => {
  return (
    <section id="reviews" className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our <span className="text-gradient">Customers Say</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Join thousands of professionals who have transformed their AI workflow with our premium prompt collection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="group hover:shadow-luxury transition-all duration-500 hover:scale-105 bg-card/80 backdrop-blur-sm border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3 group-hover:scale-110 transition-transform duration-300">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-foreground/60">{testimonial.role}</p>
                    <p className="text-xs text-accent font-medium">{testimonial.company}</p>
                  </div>
                </div>
                
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-accent text-lg">⭐</span>
                  ))}
                </div>
                
                <p className="text-foreground/80 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-6 bg-accent/10 rounded-xl px-8 py-6 border border-accent/20">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">4.9/5</div>
              <div className="text-sm text-foreground/70">Average Rating</div>
            </div>
            <div className="w-px h-12 bg-accent/20"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">15,000+</div>
              <div className="text-sm text-foreground/70">Happy Customers</div>
            </div>
            <div className="w-px h-12 bg-accent/20"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">98%</div>
              <div className="text-sm text-foreground/70">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};