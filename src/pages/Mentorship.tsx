import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Target, Lightbulb, Heart, MessageCircle, Calendar } from 'lucide-react';

const Mentorship = () => {
  const benefits = [
    {
      icon: Target,
      title: 'Personalized Guidance',
      description: 'Get one-on-one mentorship tailored to your goals and learning style.',
    },
    {
      icon: Lightbulb,
      title: 'Industry Insights',
      description: 'Learn from experienced professionals working in leading tech companies.',
    },
    {
      icon: Users,
      title: 'Network Building',
      description: 'Connect with mentors and peers who can support your career growth.',
    },
    {
      icon: Heart,
      title: 'Community Support',
      description: 'Join a supportive community that celebrates your progress and achievements.',
    },
  ];

  const programs = [
    {
      name: 'Career Mentorship',
      description: 'Navigate your tech career with guidance from industry veterans.',
      duration: '3 months',
      commitment: '2 hours/week',
    },
    {
      name: 'Project Mentorship',
      description: 'Get help building your portfolio projects with expert feedback.',
      duration: '6 weeks',
      commitment: '1 hour/week',
    },
    {
      name: 'Interview Prep',
      description: 'Prepare for technical interviews with mock sessions and feedback.',
      duration: '4 weeks',
      commitment: '3 hours/week',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4">
              Mentorship <span className="text-accent">Program</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Connect with experienced mentors who are invested in your success. Whether you're starting your journey or leveling up, we're here to guide you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                Become a Mentee
              </Button>
              <Button variant="outline" className="border-border hover:bg-secondary">
                Become a Mentor
              </Button>
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Why Join Our <span className="text-accent">Mentorship Program?</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="p-6 text-center hover-lift">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Programs */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Mentorship <span className="text-accent">Programs</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {programs.map((program, index) => (
                <Card key={index} className="p-8 hover-lift">
                  <h3 className="text-2xl font-bold text-foreground mb-3">{program.name}</h3>
                  <p className="text-muted-foreground mb-6">{program.description}</p>
                  <div className="space-y-2 mb-6 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>Duration: {program.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MessageCircle className="w-4 h-4" />
                      <span>Time: {program.commitment}</span>
                    </div>
                  </div>
                  <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                    Apply Now
                  </Button>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA */}
          <Card className="p-12 text-center bg-gradient-hero max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you're looking for guidance or want to give back to the community, our mentorship program is the perfect place to grow together.
            </p>
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              Get Started Today
            </Button>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Mentorship;
