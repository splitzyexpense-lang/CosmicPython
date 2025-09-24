import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { getAllPosts } from "@/lib/posts";

const categories = ["All", "Product Update", "Technology", "Security"];

export default function NewsIndex() {
  // Use the actual posts from the posts library
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.filter(post => post.featured);
  const regularPosts = allPosts.filter(post => !post.featured);

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
            Latest News & Announcements
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
        </div>
      </div>
    </div>
  );
}
