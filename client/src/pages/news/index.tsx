import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { getAllPosts } from "@/lib/posts";

const newsUpdates = [
  {
    title: "Astralux Mobile App Beta Testing Begins",
    slug: "app-launch-beta",
    excerpt: "We're excited to announce the start of beta testing for the Astralux mobile app. Selected users can now experience our revolutionary ad-to-earn platform.",
    date: "December 15, 2024",
    category: "Product Update",
    featured: true
  },
  {
    title: "Smart Contract Audit Completed Successfully",
    slug: "audit-completed",
    excerpt: "Our smart contracts have passed comprehensive security audits with no critical issues found. Full audit report now available for public review.",
    date: "December 8, 2024",
    category: "Security",
    featured: true
  },
  {
    title: "Partnership Announcement: Major Ad Networks Integration",
    slug: "ad-network-partnerships",
    excerpt: "Astralux has secured partnerships with leading mobile ad networks to ensure a steady stream of high-quality rewarded advertisements for our users.",
    date: "November 28, 2024",
    category: "Partnership",
    featured: false
  },
  {
    title: "Tokenomics Finalized: 3.3M Fixed Supply Confirmed",
    slug: "tokenomics-final",
    excerpt: "We've finalized our tokenomics with a fixed supply of 3,300,000 ASLX tokens, ensuring scarcity and long-term value for early adopters.",
    date: "November 15, 2024",
    category: "Tokenomics",
    featured: false
  },
  {
    title: "Polygon Network Integration Complete",
    slug: "polygon-integration",
    excerpt: "ASLX smart contracts are now live on Polygon mainnet, enabling fast and cost-effective transactions for all users.",
    date: "October 30, 2024",
    category: "Technology",
    featured: false
  },
  {
    title: "Community Discord Server Launched",
    slug: "discord-launch",
    excerpt: "Join our growing community on Discord to connect with other Astralux users, get support, and stay updated on the latest developments.",
    date: "October 15, 2024",
    category: "Community",
    featured: false
  }
];

const categories = ["All", "Product Update", "Security", "Partnership", "Tokenomics", "Technology", "Community"];

export default function NewsIndex() {
  // In a real implementation, this would use the posts from getAllPosts()
  // For now, we'll use the static data above
  
  const featuredPosts = newsUpdates.filter(post => post.featured);
  const regularPosts = newsUpdates.filter(post => !post.featured);

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "Product Update": "bg-primary text-primary-foreground",
      "Security": "bg-astralux-success text-white",
      "Partnership": "bg-blue-600 text-white",
      "Tokenomics": "bg-purple-600 text-white",
      "Technology": "bg-indigo-600 text-white",
      "Community": "bg-pink-600 text-white",
    };
    return colors[category] || "bg-secondary text-secondary-foreground";
  };

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
            Latest News & Updates
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay informed about Astralux developments, partnerships, and ecosystem updates.
          </p>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Featured Stories</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Card key={post.slug} className="hover-lift overflow-hidden" data-testid={`featured-post-${post.slug}`}>
                  <CardContent className="p-0">
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <Badge className={getCategoryColor(post.category)}>
                          {post.category}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{post.date}</span>
                      </div>
                      
                      <Link href={`/news/${post.slug}`}>
                        <h3 className="text-xl font-bold mb-3 hover:text-primary transition-colors cursor-pointer">
                          {post.title}
                        </h3>
                      </Link>
                      
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>
                      
                      <Link href={`/news/${post.slug}`}>
                        <span className="text-primary hover:text-primary/80 font-semibold cursor-pointer">
                          Read More →
                        </span>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* All Posts */}
        <div>
          <h2 className="text-2xl font-bold mb-8">All Updates</h2>
          <div className="space-y-6">
            {regularPosts.map((post) => (
              <Card key={post.slug} className="hover-lift" data-testid={`post-${post.slug}`}>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div className="flex items-center space-x-3 mb-2 md:mb-0">
                      <Badge className={getCategoryColor(post.category)}>
                        {post.category}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{post.date}</span>
                    </div>
                  </div>
                  
                  <Link href={`/news/${post.slug}`}>
                    <h3 className="text-xl font-bold mb-3 hover:text-primary transition-colors cursor-pointer">
                      {post.title}
                    </h3>
                  </Link>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <Link href={`/news/${post.slug}`}>
                    <span className="text-primary hover:text-primary/80 font-semibold cursor-pointer">
                      Read More →
                    </span>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 p-8 bg-card border border-border rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Follow our official channels to never miss important announcements and updates about the Astralux ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://discord.gg/astralux"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#5865F2] hover:bg-[#4752C4] text-white rounded-lg font-semibold transition-all"
              data-testid="button-join-discord"
            >
              Join Discord
            </a>
            <a
              href="https://twitter.com/astralux_aslx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#1DA1F2] hover:bg-[#1991DA] text-white rounded-lg font-semibold transition-all"
              data-testid="button-follow-twitter"
            >
              Follow on X
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
