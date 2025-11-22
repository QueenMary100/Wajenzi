import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Book, Video, Code2, FileText, ExternalLink, Download } from 'lucide-react';

const Resources = () => {
  const categories = [
    {
      title: 'Documentation',
      icon: FileText,
      resources: [
        { name: 'Getting Started Guide', type: 'PDF', size: '2.4 MB' },
        { name: 'API Reference', type: 'Web', size: 'Online' },
        { name: 'Best Practices', type: 'PDF', size: '1.8 MB' },
      ],
    },
    {
      title: 'Video Tutorials',
      icon: Video,
      resources: [
        { name: 'Web Development Crash Course', type: 'Video', size: '2h 30m' },
        { name: 'React Fundamentals', type: 'Video', size: '1h 45m' },
        { name: 'Node.js Backend Development', type: 'Video', size: '3h 15m' },
      ],
    },
    {
      title: 'Code Examples',
      icon: Code2,
      resources: [
        { name: 'React Component Library', type: 'GitHub', size: 'Repo' },
        { name: 'Full-Stack Project Templates', type: 'GitHub', size: 'Repo' },
        { name: 'Design Patterns Collection', type: 'GitHub', size: 'Repo' },
      ],
    },
    {
      title: 'Learning Paths',
      icon: Book,
      resources: [
        { name: 'Frontend Developer Roadmap', type: 'PDF', size: '3.2 MB' },
        { name: 'Backend Developer Path', type: 'PDF', size: '2.9 MB' },
        { name: 'DevOps Engineer Guide', type: 'PDF', size: '4.1 MB' },
      ],
    },
  ];

  const quickLinks = [
    { name: 'GitHub Repository', url: 'https://github.com/salamander-tech-hub', icon: Code2 },
    { name: 'Community Discord', url: '#', icon: ExternalLink },
    { name: 'YouTube Channel', url: '#', icon: Video },
    { name: 'Blog Articles', url: '/blog', icon: Book },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4">
              Learning <span className="text-accent">Resources</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to learn, build, and grow as a developer
            </p>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-4xl mx-auto">
            {quickLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card className="p-6 text-center hover-lift cursor-pointer group">
                  <link.icon className="w-8 h-8 text-accent mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <p className="text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                    {link.name}
                  </p>
                </Card>
              </a>
            ))}
          </div>

          {/* Resource Categories */}
          <div className="space-y-12">
            {categories.map((category, index) => (
              <div key={index}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">{category.title}</h2>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.resources.map((resource, idx) => (
                    <Card key={idx} className="p-6 hover-lift group cursor-pointer">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                            {resource.name}
                          </h3>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span className="px-2 py-1 bg-accent/10 text-accent rounded text-xs">
                              {resource.type}
                            </span>
                            <span>{resource.size}</span>
                          </div>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full gap-2 border-border hover:bg-secondary"
                      >
                        {resource.type === 'PDF' ? (
                          <>
                            <Download className="w-4 h-4" />
                            Download
                          </>
                        ) : (
                          <>
                            <ExternalLink className="w-4 h-4" />
                            View
                          </>
                        )}
                      </Button>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Card className="mt-16 p-12 text-center bg-gradient-hero max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Need More Help?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our community to ask questions, share knowledge, and connect with fellow developers.
            </p>
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              Join Community
            </Button>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Resources;
