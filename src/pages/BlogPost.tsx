import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

// Sample blog posts data (in a real app, this would come from an API or database)
const blogPosts = [
  {
    id: 1,
    title: 'The Future of AI in Web Development',
    excerpt: 'Exploring how artificial intelligence is revolutionizing the way we build and interact with web applications.',
    content: `
      <h2>Introduction</h2>
      <p>Artificial intelligence is rapidly transforming the landscape of web development. From automated code generation to intelligent user interfaces, AI is becoming an integral part of how we build and interact with web applications.</p>
      
      <h2>AI-Powered Development Tools</h2>
      <p>Modern AI tools like GitHub Copilot and ChatGPT are revolutionizing how developers write code. These tools can suggest entire functions, help debug complex issues, and even explain code in natural language.</p>
      
      <h2>Personalized User Experiences</h2>
      <p>AI enables websites to provide highly personalized experiences by analyzing user behavior, preferences, and patterns. This leads to more engaging and relevant content for each visitor.</p>
      
      <h2>The Road Ahead</h2>
      <p>As AI technology continues to evolve, we can expect even more sophisticated applications in web development. From autonomous websites that adapt in real-time to predictive interfaces that anticipate user needs, the future is incredibly exciting.</p>
      
      <h2>Conclusion</h2>
      <p>The integration of AI in web development is not just a trend—it's a fundamental shift in how we approach building digital experiences. Developers who embrace these tools and understand their potential will be well-positioned for success in the coming years.</p>
    `,
    author: 'Sarah Chen',
    date: '2024-11-15',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&auto=format&fit=crop',
    category: 'AI & ML',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'Building Scalable Microservices Architecture',
    excerpt: 'A comprehensive guide to designing and implementing microservices that can handle millions of requests.',
    content: `
      <h2>Understanding Microservices</h2>
      <p>Microservices architecture has become the go-to solution for building scalable applications. By breaking down monolithic applications into smaller, independent services, teams can develop, deploy, and scale components independently.</p>
      
      <h2>Key Principles</h2>
      <p>Successful microservices architectures follow several key principles: single responsibility, loose coupling, high cohesion, and independent deployment. Each service should do one thing well and communicate with others through well-defined APIs.</p>
      
      <h2>Implementation Strategies</h2>
      <p>When implementing microservices, consider using containerization with Docker, orchestration with Kubernetes, and service meshes for communication management. These tools provide the infrastructure needed for reliable, scalable deployments.</p>
      
      <h2>Challenges and Solutions</h2>
      <p>While microservices offer many benefits, they also introduce complexity in areas like distributed transactions, service discovery, and monitoring. Implementing proper logging, tracing, and monitoring solutions is crucial for maintaining system health.</p>
    `,
    author: 'Marcus Rodriguez',
    date: '2024-11-12',
    image: 'https://images.unsplash.com/photo-1667372393086-9d4001d51cf1?w=1200&auto=format&fit=crop',
    category: 'Architecture',
    readTime: '8 min read',
  },
  // Add more blog posts as needed...
];

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const post = blogPosts.find(p => p.id === Number(id));

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Button onClick={() => navigate('/')}>Go Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Image */}
      <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
      </div>

      {/* Content */}
      <article className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Back Button */}
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="mb-8 text-primary-foreground hover:text-accent"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>

          {/* Article Card */}
          <div className="bg-card rounded-2xl p-8 sm:p-12 shadow-lg border border-border">
            {/* Category Badge */}
            <span className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium mb-6">
              {post.category}
            </span>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8 pb-8 border-b border-border">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Content */}
            <div
              className="prose prose-lg max-w-none
                prose-headings:font-bold prose-headings:text-foreground prose-headings:mt-8 prose-headings:mb-4
                prose-h2:text-2xl prose-h3:text-xl
                prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
                prose-a:text-accent prose-a:no-underline hover:prose-a:underline
                prose-strong:text-foreground prose-strong:font-semibold
                prose-ul:text-muted-foreground prose-ol:text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Author Bio */}
            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <div className="font-semibold text-foreground mb-1">{post.author}</div>
                  <div className="text-sm text-muted-foreground">
                    Technology enthusiast and developer advocate
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Related Posts CTA */}
          <div className="mt-12 text-center">
            <Button
              onClick={() => {
                navigate('/');
                setTimeout(() => {
                  const blogSection = document.getElementById('blog');
                  if (blogSection) {
                    blogSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }, 100);
              }}
              variant="outline"
              size="lg"
            >
              Read More Articles
            </Button>
          </div>
        </div>
      </article>

      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default BlogPost;
