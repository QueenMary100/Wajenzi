import { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
}

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const projects: Project[] = [
    {
      id: 1,
      title: 'AI-Powered Analytics Dashboard',
      description: 'Real-time data visualization platform with machine learning insights',
      longDescription: 'A comprehensive analytics dashboard that leverages artificial intelligence to provide real-time insights into business metrics. Features include predictive analytics, automated reporting, and customizable data visualizations. Built with React, Python, and TensorFlow.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop',
      tags: ['React', 'Python', 'TensorFlow', 'ML'],
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      id: 2,
      title: 'Blockchain Voting System',
      description: 'Secure and transparent voting platform using blockchain technology',
      longDescription: 'A decentralized voting system that ensures transparency, security, and immutability of votes using blockchain technology. Features include voter authentication, encrypted ballots, and real-time results. Built with Solidity, Web3.js, and Next.js.',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop',
      tags: ['Blockchain', 'Solidity', 'Web3', 'Next.js'],
      github: 'https://github.com',
    },
    {
      id: 3,
      title: 'IoT Smart Home Hub',
      description: 'Centralized control system for smart home devices',
      longDescription: 'An integrated IoT platform that connects and controls various smart home devices from a single interface. Features include voice control, automation rules, energy monitoring, and remote access. Built with Node.js, MQTT, and React Native.',
      image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=800&auto=format&fit=crop',
      tags: ['IoT', 'Node.js', 'MQTT', 'React Native'],
      demo: 'https://demo.com',
    },
    {
      id: 4,
      title: 'Cloud DevOps Toolkit',
      description: 'Automated deployment and monitoring suite for cloud infrastructure',
      longDescription: 'A comprehensive DevOps toolkit that streamlines deployment, monitoring, and scaling of cloud applications. Features include CI/CD pipelines, infrastructure as code, automated testing, and real-time monitoring. Built with Docker, Kubernetes, and Terraform.',
      image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&auto=format&fit=crop',
      tags: ['Docker', 'Kubernetes', 'Terraform', 'AWS'],
      github: 'https://github.com',
    },
    {
      id: 5,
      title: 'AR Learning Platform',
      description: 'Augmented reality educational experiences for interactive learning',
      longDescription: 'An innovative educational platform that uses augmented reality to create immersive learning experiences. Features include 3D models, interactive lessons, progress tracking, and collaborative spaces. Built with Unity, ARKit, and Firebase.',
      image: 'https://images.unsplash.com/photo-1617802690658-1173a812650d?w=800&auto=format&fit=crop',
      tags: ['AR', 'Unity', 'ARKit', 'Firebase'],
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      id: 6,
      title: 'Cybersecurity Scanner',
      description: 'Automated security audit tool for web applications',
      longDescription: 'A powerful security scanning tool that identifies vulnerabilities in web applications. Features include OWASP Top 10 checks, automated penetration testing, compliance reporting, and remediation suggestions. Built with Python, Nmap, and React.',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop',
      tags: ['Security', 'Python', 'Nmap', 'React'],
      github: 'https://github.com',
    },
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 sm:py-32 bg-secondary/30 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured <span className="text-accent">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Discover the innovative solutions our community has built
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-card rounded-xl overflow-hidden border border-border hover-lift cursor-pointer transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs bg-accent/10 text-accent rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">{selectedProject.title}</DialogTitle>
              </DialogHeader>
              
              <div className="space-y-6">
                {/* Project Image */}
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Description */}
                <div>
                  <h4 className="text-lg font-semibold mb-2">About This Project</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedProject.longDescription}
                  </p>
                </div>

                {/* Tags */}
                <div>
                  <h4 className="text-lg font-semibold mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm bg-accent/10 text-accent rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {selectedProject.github && (
                    <Button
                      variant="outline"
                      onClick={() => window.open(selectedProject.github, '_blank')}
                      className="flex-1"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </Button>
                  )}
                  {selectedProject.demo && (
                    <Button
                      onClick={() => window.open(selectedProject.demo, '_blank')}
                      className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
