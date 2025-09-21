import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: '🧠',
    title: 'AI-Powered Prompts',
    description: 'Professionally crafted prompts that unlock the full potential of any AI model',
    count: '2,500+'
  },
  {
    icon: '💼',
    title: 'Business & Marketing',
    description: 'Sales copy, email sequences, social media content, and marketing strategies',
    count: '3,000+'
  },
  {
    icon: '✍️',
    title: 'Creative Writing',
    description: 'Stories, poems, scripts, blog posts, and creative content generation',
    count: '2,000+'
  },
  {
    icon: '📊',
    title: 'Data & Analysis',
    description: 'Research, data analysis, reporting, and business intelligence prompts',
    count: '1,500+'
  },
  {
    icon: '💻',
    title: 'Coding & Development',
    description: 'Programming help, code review, debugging, and technical documentation',
    count: '2,500+'
  },
  {
    icon: '🎓',
    title: 'Education & Learning',
    description: 'Teaching materials, lesson plans, quizzes, and educational content',
    count: '1,500+'
  },
  {
    icon: '🎨',
    title: 'Design & Visual',
    description: 'UI/UX design guidance, visual concepts, and creative direction prompts',
    count: '1,000+'
  },
  {
    icon: '⚡',
    title: 'Productivity Hacks',
    description: 'Time management, workflow optimization, and efficiency boosting prompts',
    count: '1,000+'
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Premium AI Prompt</span> Categories
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Discover our comprehensive collection of 15,000+ professionally crafted AI prompts 
            across 8 major categories, designed to maximize your AI productivity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-luxury transition-all duration-500 hover:scale-105 hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300">
                  {feature.icon}
                </div>
                <div className="text-2xl font-bold text-accent mb-2">
                  {feature.count}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 bg-accent/10 rounded-xl px-8 py-4 border border-accent/20">
            <span className="text-3xl">🎯</span>
            <div className="text-left">
              <div className="font-semibold text-accent">Total Value: $2,997</div>
              <div className="text-sm text-foreground/70">Individual category pricing</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};