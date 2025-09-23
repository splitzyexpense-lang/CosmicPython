import { useState, useEffect } from "react";
import { useRoute } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Link } from "wouter";
import { getPostBySlug } from "@/lib/posts";

export default function NewsPost() {
  const [match, params] = useRoute("/news/:slug");
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (params?.slug) {
      try {
        const postData = getPostBySlug(params.slug);
        setPost(postData);
      } catch (err) {
        setError("Post not found");
      } finally {
        setLoading(false);
      }
    }
  }, [params?.slug]);

  if (loading) {
    return (
      <div className="min-h-screen py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-muted rounded w-3/4 mx-auto mb-4"></div>
              <div className="h-4 bg-muted rounded w-1/2 mx-auto"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardContent className="p-8 text-center">
              <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
              <p className="text-muted-foreground mb-6">
                The requested blog post could not be found.
              </p>
              <Link href="/news">
                <Button>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to News
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/news">
            <Button variant="ghost" className="pl-0" data-testid="back-to-news">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to News
            </Button>
          </Link>
        </div>

        {/* Article */}
        <article>
          <Card>
            <CardContent className="p-8 md:p-12">
              {/* Article Header */}
              <header className="mb-8">
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <Badge className={getCategoryColor(post.category)} data-testid="post-category">
                    {post.category}
                  </Badge>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Calendar className="mr-2 h-4 w-4" />
                    <time dateTime={post.date} data-testid="post-date">{post.date}</time>
                  </div>
                  {post.author && (
                    <div className="flex items-center text-muted-foreground text-sm">
                      <User className="mr-2 h-4 w-4" />
                      <span data-testid="post-author">{post.author}</span>
                    </div>
                  )}
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4" data-testid="post-title">
                  {post.title}
                </h1>
                
                {post.excerpt && (
                  <p className="text-xl text-muted-foreground leading-relaxed" data-testid="post-excerpt">
                    {post.excerpt}
                  </p>
                )}
              </header>

              {/* Article Content */}
              <div 
                className="prose prose-lg dark:prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
                data-testid="post-content"
              />
            </CardContent>
          </Card>
        </article>

        {/* Related Articles / Navigation */}
        <div className="mt-12">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4">Stay Updated</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/news">
                  <Button variant="outline" className="w-full sm:w-auto">
                    View All News
                  </Button>
                </Link>
                <a
                  href="https://discord.gg/astralux"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 bg-[#5865F2] hover:bg-[#4752C4] text-white rounded-lg font-medium transition-all"
                >
                  Join Discord
                </a>
                <a
                  href="https://twitter.com/astralux_aslx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 bg-[#1DA1F2] hover:bg-[#1991DA] text-white rounded-lg font-medium transition-all"
                >
                  Follow on X
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
