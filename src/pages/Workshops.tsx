import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, Users, Calendar, CheckCircle } from 'lucide-react';

const Workshops = () => {
  const workshops = [
    {
      title: 'Web Development Fundamentals',
      level: 'Beginner',
      duration: '6 weeks',
      participants: 150,
      description: 'Learn HTML, CSS, and JavaScript from scratch. Build real projects and deploy them.',
      topics: ['HTML5 & CSS3', 'JavaScript ES6+', 'Responsive Design', 'Git & GitHub'],
      nextSession: '2026-01-15',
    },
    {
      title: 'React Mastery',
      level: 'Intermediate',
      duration: '8 weeks',
      participants: 120,
      description: 'Deep dive into React ecosystem. Hooks, Context, Redux, and modern patterns.',
      topics: ['React Hooks', 'State Management', 'React Router', 'Performance Optimization'],
      nextSession: '2026-02-01',
    },
    {
      title: 'Full-Stack Development',
      level: 'Advanced',
      duration: '12 weeks',
      participants: 80,
      description: 'Build complete web applications with MERN stack. Authentication, APIs, and deployment.',
      topics: ['Node.js & Express', 'MongoDB', 'REST APIs', 'Authentication & Security'],
      nextSession: '2026-02-20',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4">
              Tech <span className="text-accent">Workshops</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hands-on learning experiences designed to level up your skills
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {workshops.map((workshop, index) => (
              <Card key={index} className="p-8 hover-lift">
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      workshop.level === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                      workshop.level === 'Intermediate' ? 'bg-accent/20 text-accent' :
                      'bg-purple-500/20 text-purple-400'
                    }`}>
                      {workshop.level}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{workshop.title}</h3>
                  <p className="text-muted-foreground mb-6">{workshop.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{workshop.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>{workshop.participants}+ enrolled</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>Next session: {new Date(workshop.nextSession).toLocaleDateString()}</span>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    <p className="text-sm font-medium text-foreground mb-2">What you'll learn:</p>
                    {workshop.topics.map((topic, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-accent" />
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  Enroll Now
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Workshops;
