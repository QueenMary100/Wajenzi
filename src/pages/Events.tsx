import { useState } from 'react';
import { Calendar, MapPin, Users, Clock, Search, Filter, ExternalLink } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  type: 'workshop' | 'meetup' | 'hackathon' | 'webinar';
  capacity: number;
  registered: number;
  description: string;
  image: string;
  tags: string[];
}

const Events = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string>('all');

  const events: Event[] = [
    {
      id: '1',
      title: 'Full-Stack Web Development Workshop',
      date: '2025-12-15',
      time: '10:00 AM - 4:00 PM',
      location: 'Tech Hub London, UK',
      type: 'workshop',
      capacity: 50,
      registered: 32,
      description: 'Learn modern web development with React, Node.js, and MongoDB. Hands-on project included.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop',
      tags: ['React', 'Node.js', 'MongoDB'],
    },
    {
      id: '2',
      title: 'AI/ML Community Meetup',
      date: '2025-12-20',
      time: '6:00 PM - 9:00 PM',
      location: 'Virtual Event',
      type: 'meetup',
      capacity: 200,
      registered: 145,
      description: 'Monthly gathering of AI enthusiasts. Network, share projects, and learn from industry experts.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop',
      tags: ['AI', 'Machine Learning', 'Networking'],
    },
    {
      id: '3',
      title: '48-Hour Hackathon: Build for Good',
      date: '2026-01-10',
      time: 'Friday 5:00 PM - Sunday 5:00 PM',
      location: 'Innovation Campus, London',
      type: 'hackathon',
      capacity: 100,
      registered: 78,
      description: 'Create tech solutions for social impact. Prizes, mentorship, and networking opportunities.',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=400&fit=crop',
      tags: ['Hackathon', 'Social Impact', 'Innovation'],
    },
    {
      id: '4',
      title: 'Introduction to Blockchain Development',
      date: '2026-01-18',
      time: '2:00 PM - 5:00 PM',
      location: 'Online Webinar',
      type: 'webinar',
      capacity: 500,
      registered: 312,
      description: 'Beginner-friendly introduction to blockchain technology, smart contracts, and Web3 development.',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=400&fit=crop',
      tags: ['Blockchain', 'Web3', 'Smart Contracts'],
    },
    {
      id: '5',
      title: 'Design Systems Workshop',
      date: '2026-01-25',
      time: '10:00 AM - 1:00 PM',
      location: 'Design Studio, London',
      type: 'workshop',
      capacity: 30,
      registered: 24,
      description: 'Learn to build scalable design systems using Figma and component libraries.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=400&fit=crop',
      tags: ['Design', 'UI/UX', 'Figma'],
    },
    {
      id: '6',
      title: 'Open Source Contribution Sprint',
      date: '2026-02-01',
      time: '9:00 AM - 6:00 PM',
      location: 'Tech Hub London, UK',
      type: 'meetup',
      capacity: 40,
      registered: 18,
      description: 'Contribute to open source projects with guidance from maintainers. All skill levels welcome.',
      image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&h=400&fit=crop',
      tags: ['Open Source', 'Git', 'Collaboration'],
    },
  ];

  const eventTypes = [
    { value: 'all', label: 'All Events' },
    { value: 'workshop', label: 'Workshops' },
    { value: 'meetup', label: 'Meetups' },
    { value: 'hackathon', label: 'Hackathons' },
    { value: 'webinar', label: 'Webinars' },
  ];

  const filteredEvents = events.filter((event) => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType === 'all' || event.type === selectedType;
    return matchesSearch && matchesType;
  });

  const getTypeColor = (type: string) => {
    const colors = {
      workshop: 'bg-accent/20 text-accent border-accent/30',
      meetup: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      hackathon: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
      webinar: 'bg-green-500/20 text-green-400 border-green-500/30',
    };
    return colors[type as keyof typeof colors] || colors.workshop;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4">
              Upcoming <span className="text-accent">Events</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join workshops, meetups, and hackathons to learn, build, and connect with the community
            </p>
          </div>

          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search events..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline" className="gap-2">
                <Filter className="w-4 h-4" />
                Filters
              </Button>
            </div>

            <div className="flex flex-wrap gap-2">
              {eventTypes.map((type) => (
                <button
                  key={type.value}
                  onClick={() => setSelectedType(type.value)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedType === type.value
                      ? 'bg-accent text-accent-foreground'
                      : 'bg-secondary text-foreground hover:bg-secondary/80'
                  }`}
                >
                  {type.label}
                </button>
              ))}
            </div>
          </div>

          {/* Events Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {filteredEvents.map((event) => (
              <Card
                key={event.id}
                className="overflow-hidden hover-lift cursor-pointer group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <Badge className={`absolute top-4 left-4 ${getTypeColor(event.type)} border`}>
                    {event.type}
                  </Badge>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {event.title}
                  </h3>
                  
                  <div className="space-y-2 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(event.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>{event.registered}/{event.capacity} registered</span>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {event.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {event.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                    Register Now
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">No events found matching your criteria</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Events;
