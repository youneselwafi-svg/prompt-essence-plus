import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const promptExamples = {
  business: [
    {
      title: 'Email Marketing Sequence',
      prompt: 'Create a 7-email welcome sequence for new subscribers of a [INDUSTRY] business that sells [PRODUCT/SERVICE]. Include subject lines, personalization elements, and clear CTAs.',
      result: 'Generates complete email campaigns with high conversion rates'
    },
    {
      title: 'Sales Page Copy',
      prompt: 'Write compelling sales copy for [PRODUCT] targeting [AUDIENCE]. Include attention-grabbing headline, pain points, benefits, social proof, and urgency elements.',
      result: 'Creates high-converting sales pages that drive revenue'
    }
  ],
  creative: [
    {
      title: 'Blog Post Generator',
      prompt: 'Write a comprehensive 2000-word blog post about [TOPIC] for [TARGET AUDIENCE]. Include SEO keywords, subheadings, actionable tips, and a compelling conclusion.',
      result: 'Produces SEO-optimized, engaging blog content'
    },
    {
      title: 'Social Media Content',
      prompt: 'Create 30 days of social media content for [PLATFORM] about [NICHE]. Include captions, hashtags, and posting schedule for maximum engagement.',
      result: 'Generates a month of engaging social media content'
    }
  ],
  coding: [
    {
      title: 'Code Review Assistant',
      prompt: 'Review this [LANGUAGE] code for best practices, security issues, performance optimizations, and suggest improvements: [CODE]',
      result: 'Provides detailed code analysis and improvement suggestions'
    },
    {
      title: 'Documentation Generator',
      prompt: 'Generate comprehensive documentation for this [LANGUAGE] function/class including parameters, return values, examples, and edge cases: [CODE]',
      result: 'Creates professional, detailed code documentation'
    }
  ]
};

export const ExamplesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            See Our <span className="text-gradient">Prompts in Action</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Discover how our premium AI prompts can transform your workflow across different industries and use cases.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="business" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-card/50 backdrop-blur-sm">
              <TabsTrigger value="business" className="text-base">💼 Business</TabsTrigger>
              <TabsTrigger value="creative" className="text-base">✍️ Creative</TabsTrigger>
              <TabsTrigger value="coding" className="text-base">💻 Coding</TabsTrigger>
            </TabsList>

            <TabsContent value="business" className="space-y-6">
              {promptExamples.business.map((example, index) => (
                <Card key={index} className="bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-luxury transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-accent text-xl">{example.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">📝 Prompt Template:</h4>
                      <div className="bg-muted/50 p-4 rounded-lg border border-border/30">
                        <code className="text-sm text-foreground/90">{example.prompt}</code>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">✨ Expected Result:</h4>
                      <p className="text-foreground/80 bg-accent/10 p-3 rounded-lg border border-accent/20">
                        {example.result}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="creative" className="space-y-6">
              {promptExamples.creative.map((example, index) => (
                <Card key={index} className="bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-luxury transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-accent text-xl">{example.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">📝 Prompt Template:</h4>
                      <div className="bg-muted/50 p-4 rounded-lg border border-border/30">
                        <code className="text-sm text-foreground/90">{example.prompt}</code>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">✨ Expected Result:</h4>
                      <p className="text-foreground/80 bg-accent/10 p-3 rounded-lg border border-accent/20">
                        {example.result}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="coding" className="space-y-6">
              {promptExamples.coding.map((example, index) => (
                <Card key={index} className="bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-luxury transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-accent text-xl">{example.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">📝 Prompt Template:</h4>
                      <div className="bg-muted/50 p-4 rounded-lg border border-border/30">
                        <code className="text-sm text-foreground/90">{example.prompt}</code>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">✨ Expected Result:</h4>
                      <p className="text-foreground/80 bg-accent/10 p-3 rounded-lg border border-accent/20">
                        {example.result}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};