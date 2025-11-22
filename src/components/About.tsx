import { Target, Lightbulb, Users, Zap } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const features = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To create an inclusive community where technology enthusiasts can learn, collaborate, and build innovative solutions that make a real impact.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'We foster creativity and encourage experimentation, providing the resources and mentorship needed to turn ideas into reality.',
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Built by developers, for developers. Our community is the heart of everything we do, supporting each other to grow and succeed.',
    },
    {
      icon: Zap,
      title: 'Future Ready',
      description: 'Staying ahead of the curve with cutting-edge technologies and practices that prepare our members for tomorrow\'s challenges.',
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 sm:py-32 bg-background relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            About <span className="text-accent">Salamander Tech Hub</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            A thriving community of innovators, creators, and technology enthusiasts building the future together
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Text Content */}
          <div className={`space-y-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
              Who We Are
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Salamander Tech Hub is more than just a community—it's a movement. Founded by passionate technologists who believe in the power of collaboration, we've built a space where ideas flourish and innovation thrives.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether you're a seasoned developer, a curious beginner, or somewhere in between, you'll find a welcoming environment with resources, mentorship, and opportunities to work on real-world projects that matter.
            </p>
            <div className="pt-4">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Est. 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Global Community</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Open Source</span>
                </div>
              </div>
            </div>
          </div>

          {/* Image/Visual Content */}
          <div className={`relative transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="aspect-square rounded-2xl bg-gradient-card overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-lg border border-border">
              <div className="text-4xl font-bold text-accent mb-1">500+</div>
              <div className="text-sm text-muted-foreground">Active Members</div>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-card p-6 rounded-xl border border-border hover-lift transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-accent" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Vision Section */}
        <div className={`mt-20 text-center max-w-3xl mx-auto transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">Our Vision</h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We envision a world where technology is accessible to everyone, where innovation knows no boundaries, and where passionate individuals come together to solve the world's most pressing challenges. Through education, collaboration, and unwavering support, we're building that future—one project, one member, one breakthrough at a time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
