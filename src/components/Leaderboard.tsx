import { useState, useEffect } from 'react';
import { Trophy, Star, GitFork, Code2, TrendingUp } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface Contributor {
  rank: number;
  username: string;
  avatar: string;
  contributions: number;
  repositories: number;
  stars: number;
  badge: string;
}

const Leaderboard = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Mock data - In production, fetch from GitHub API
  const contributors: Contributor[] = [
    {
      rank: 1,
      username: '2880-rocky',
      avatar: 'https://github.com/2880-rocky.png',
      contributions: 1247,
      repositories: 12,
      stars: 89,
      badge: 'Champion',
    },
    {
      rank: 2,
      username: 'code-sid',
      avatar: 'https://github.com/code-sid.png',
      contributions: 1089,
      repositories: 8,
      stars: 67,
      badge: 'Elite',
    },
    {
      rank: 3,
      username: 'andrew-kim-joseph',
      avatar: 'https://github.com/andrew-kim-joseph.png',
      contributions: 956,
      repositories: 10,
      stars: 54,
      badge: 'Elite',
    },
    {
      rank: 4,
      username: 'Eugenius',
      avatar: 'https://github.com/Eugenius.png',
      contributions: 832,
      repositories: 7,
      stars: 43,
      badge: 'Pro',
    },
    {
      rank: 5,
      username: 'MrNarman',
      avatar: 'https://github.com/MrNarman.png',
      contributions: 745,
      repositories: 9,
      stars: 38,
      badge: 'Pro',
    },
    {
      rank: 6,
      username: 'Fazaldeen',
      avatar: 'https://github.com/Fazaldeen.png',
      contributions: 689,
      repositories: 6,
      stars: 32,
      badge: 'Rising Star',
    },
    {
      rank: 7,
      username: 'Randie20',
      avatar: 'https://github.com/Randie20.png',
      contributions: 567,
      repositories: 5,
      stars: 28,
      badge: 'Rising Star',
    },
    {
      rank: 8,
      username: 'maxwell',
      avatar: 'https://github.com/maxwell.png',
      contributions: 512,
      repositories: 4,
      stars: 24,
      badge: 'Contributor',
    },
  ];

  const getBadgeColor = (badge: string) => {
    const colors = {
      Champion: 'bg-accent/20 text-accent border-accent/40',
      Elite: 'bg-purple-500/20 text-purple-400 border-purple-500/40',
      Pro: 'bg-blue-500/20 text-blue-400 border-blue-500/40',
      'Rising Star': 'bg-green-500/20 text-green-400 border-green-500/40',
      Contributor: 'bg-gray-500/20 text-gray-400 border-gray-500/40',
    };
    return colors[badge as keyof typeof colors] || colors.Contributor;
  };

  const getRankIcon = (rank: number) => {
    if (rank === 1) return '🥇';
    if (rank === 2) return '🥈';
    if (rank === 3) return '🥉';
    return `#${rank}`;
  };

  return (
    <section id="leaderboard" className="py-20 sm:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <Trophy className="w-8 h-8 text-accent" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
              GitHub <span className="text-accent">Leaderboard</span>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Top contributors making an impact in the Salamander community
          </p>
        </div>

        {/* Stats Overview */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Card className="p-6 text-center bg-gradient-card border-border">
            <div className="text-3xl font-bold text-accent mb-2">1,247</div>
            <div className="text-sm text-muted-foreground">Total Commits</div>
          </Card>
          <Card className="p-6 text-center bg-gradient-card border-border">
            <div className="text-3xl font-bold text-accent mb-2">67</div>
            <div className="text-sm text-muted-foreground">Active Repos</div>
          </Card>
          <Card className="p-6 text-center bg-gradient-card border-border">
            <div className="text-3xl font-bold text-accent mb-2">408</div>
            <div className="text-sm text-muted-foreground">Total Stars</div>
          </Card>
          <Card className="p-6 text-center bg-gradient-card border-border">
            <div className="text-3xl font-bold text-accent mb-2">28</div>
            <div className="text-sm text-muted-foreground">Contributors</div>
          </Card>
        </div>

        {/* Leaderboard */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {contributors.map((contributor, index) => (
              <a
                key={contributor.username}
                href={`https://github.com/${contributor.username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card
                  className={`p-6 hover-lift cursor-pointer transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <div className="flex items-center gap-4">
                    {/* Rank */}
                    <div className="text-3xl font-bold w-16 text-center">
                      {getRankIcon(contributor.rank)}
                    </div>

                    {/* Avatar */}
                    <Avatar className="w-16 h-16 border-2 border-accent/20">
                      <AvatarImage src={contributor.avatar} alt={contributor.username} />
                      <AvatarFallback>{contributor.username[0].toUpperCase()}</AvatarFallback>
                    </Avatar>

                    {/* Info */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-foreground">{contributor.username}</h3>
                        <Badge className={`${getBadgeColor(contributor.badge)} border text-xs`}>
                          {contributor.badge}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-6 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Code2 className="w-4 h-4" />
                          <span>{contributor.contributions} commits</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <GitFork className="w-4 h-4" />
                          <span>{contributor.repositories} repos</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4" />
                          <span>{contributor.stars} stars</span>
                        </div>
                      </div>
                    </div>

                    {/* Trend */}
                    <div className="hidden md:flex items-center gap-2 text-green-400">
                      <TrendingUp className="w-5 h-5" />
                      <span className="text-sm font-medium">+{Math.floor(Math.random() * 50 + 10)}%</span>
                    </div>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className={`text-center mt-12 transition-all duration-700 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-muted-foreground mb-4">Want to see your name here?</p>
          <a
            href="https://github.com/salamander-tech-hub"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-colors"
          >
            Start Contributing
            <TrendingUp className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Leaderboard;
