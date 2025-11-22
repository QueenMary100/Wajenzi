import { useState, useEffect, useRef } from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  category: string;
  readTime: string;
}

const Blog = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();

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

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'The Future of AI in Web Development',
      excerpt: 'Exploring how artificial intelligence is revolutionizing the way we build and interact with web applications.',
      content: 'Artificial intelligence is rapidly transforming the landscape of web development...',
      author: 'Sarah Chen',
      date: '2024-11-15',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop',
      category: 'AI & ML',
      readTime: '5 min read',
    },
    {
      id: 2,
      title: 'Building Scalable Microservices Architecture',
      excerpt: 'A comprehensive guide to designing and implementing microservices that can handle millions of requests.',
      content: 'Microservices architecture has become the go-to solution for building scalable applications...',
      author: 'Marcus Rodriguez',
      date: '2024-11-12',
      image: 'https://images.unsplash.com/photo-1667372393086-9d4001d51cf1?w=800&auto=format&fit=crop',
      category: 'Architecture',
      readTime: '8 min read',
    },
    {
      id: 3,
      title: 'Blockchain Beyond Cryptocurrency',
      excerpt: 'Discovering practical applications of blockchain technology in everyday business operations.',
      content: 'While cryptocurrency gets most of the attention, blockchain technology has far-reaching applications...',
      author: 'Emily Watson',
      date: '2024-11-10',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop',
      category: 'Blockchain',
      readTime: '6 min read',
    },
    {
      id: 4,
      title: 'DevOps Best Practices for 2024',
      excerpt: 'Essential DevOps strategies and tools that every modern development team should adopt.',
      content: 'As we navigate through 2024, DevOps practices continue to evolve...',
      author: 'James Kim',
      date: '2024-11-08',
      image: 'https://images.unsplash.com/photo-1667372393096-9c864313a47d?w=800&auto=format&fit=crop',
      category: 'DevOps',
      readTime: '7 min read',
    },
    {
      id: 5,
      title: 'Mastering React Server Components',
      excerpt: 'Deep dive into React Server Components and how they\'re changing the frontend development paradigm.',
      content: 'React Server Components represent a fundamental shift in how we think about React applications...',
      author: 'Lisa Park',
      date: '2024-11-05',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop',
      category: 'React',
      readTime: '10 min read',
    },
    {
      id: 6,
      title: 'Cybersecurity Essentials for Developers',
      excerpt: 'Critical security practices every developer needs to implement to protect applications and user data.',
      content: 'In an era of increasing cyber threats, security can no longer be an afterthought...',
      author: 'Alex Thompson',
      date: '2024-11-03',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop',
      category: 'Security',
      readTime: '9 min read',
    },
  ];

  const handleReadMore = (postId: number) => {
    navigate(`/blog/${postId}`);
  };

  return (
    <section
      id="blog"
      ref={sectionRef}
      className="py-20 sm:py-32 bg-background relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Latest <span className="text-accent">Insights</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Stay updated with the latest trends, tutorials, and insights from our community
          </p>
        </div>

        {/* Featured Post */}
        <div className={`mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid md:grid-cols-2 gap-8 bg-card rounded-xl overflow-hidden border border-border hover-lift">
            <div className="relative h-64 md:h-auto">
              <img
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full">
                  Featured
                </span>
              </div>
            </div>
            <div className="p-8 flex flex-col justify-center">
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <span className="px-2 py-1 bg-accent/10 text-accent rounded-md text-xs font-medium">
                  {blogPosts[0].category}
                </span>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {new Date(blogPosts[0].date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </div>
                <span>{blogPosts[0].readTime}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                {blogPosts[0].title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {blogPosts[0].excerpt}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm">
                  <User className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground">{blogPosts[0].author}</span>
                </div>
                <Button
                  onClick={() => handleReadMore(blogPosts[0].id)}
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post, index) => (
            <div
              key={post.id}
              className={`bg-card rounded-xl overflow-hidden border border-border hover-lift cursor-pointer transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              onClick={() => handleReadMore(post.id)}
            >
              {/* Post Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-2 py-1 bg-accent/90 text-accent-foreground text-xs font-medium rounded-md">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Post Info */}
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                  </div>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2 hover:text-accent transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs">
                    <User className="w-3 h-3 text-muted-foreground" />
                    <span className="text-muted-foreground">{post.author}</span>
                  </div>
                  <button className="text-sm text-accent hover:underline font-medium">
                    Read More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
