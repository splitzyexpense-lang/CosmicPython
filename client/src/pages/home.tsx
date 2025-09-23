import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import StarfieldAnimation from "@/components/starfield-animation";
import StatsWidget from "@/components/stats-widget";
import TrustBadges from "@/components/trust-badges";
import AppDownload from "@/components/app-download";
import { Link } from "wouter";
import { trackEvent } from "@/lib/analytics";
import astraluxMainLogo from "@assets/logo_1758663230814.png";

export default function Home() {
  const handleDownloadClick = () => {
    trackEvent('download_app', 'engagement', 'hero_download_button');
  };

  const handleTokenomicsClick = () => {
    trackEvent('explore_tokenomics', 'engagement', 'hero_tokenomics_button');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-gradient-to-br from-background to-card overflow-hidden">
        <StarfieldAnimation />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            {/* Large Main Logo */}
            <div className="mb-8 flex justify-center">
              <img 
                src={astraluxMainLogo} 
                alt="Astralux ASLX Logo" 
                className="w-48 h-48 md:w-64 md:h-64 object-contain animate-float cosmic-glow"
                data-testid="astralux-main-logo"
              />
            </div>
            
            <h1 
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent animate-float"
              data-testid="hero-title"
            >
              Get Started with Astralux
            </h1>
            <p 
              className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed"
              data-testid="hero-description"
            >
              The Easiest Way to Earn Crypto. No Hardware, No Battery Drain. Earn ASLX tokens on the Polygon network simply by watching rewarded ads. Fixed supply of{" "}
              <span className="text-primary font-mono font-semibold">3,300,000</span>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <AppDownload 
                onDownload={handleDownloadClick}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 cosmic-glow"
                data-testid="button-download-hero"
              />
              <Link href="/tokenomics">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105"
                  onClick={handleTokenomicsClick}
                  data-testid="button-tokenomics-hero"
                >
                  Explore Tokenomics
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Download Block */}
          <Card className="hover-lift" data-testid="card-download">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <span className="mr-3 text-primary">📱</span>
                Download
              </h2>
              <p className="text-muted-foreground mb-6">
                Astralux mobile app is available for download on all major platforms!
              </p>
              <div className="space-y-3">
                <div className="text-sm">
                  Latest: <span className="font-semibold text-primary">Astralux v2.1.0</span>
                </div>
                <AppDownload variant="full" data-testid="download-buttons-card" />
              </div>
            </CardContent>
          </Card>

          {/* Tokenomics Block */}
          <Card className="hover-lift" data-testid="card-tokenomics">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <span className="mr-3 text-primary">💎</span>
                Tokenomics
              </h2>
              <p className="text-muted-foreground mb-6">
                Transparent, fixed supply tokenomics with audited smart contracts on Polygon.
              </p>
              <div className="space-y-3">
                <div className="text-sm font-mono">
                  Total Supply: <span className="font-semibold text-accent">3,300,000 ASLX</span>
                </div>
                <div className="text-sm">
                  Distribution: 75% Airdrop, 15% Ecosystem, 5% Liquidity, 5% Team
                </div>
                <Link href="/tokenomics">
                  <Button 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded text-sm transition-all hover:scale-105"
                    data-testid="button-tokenomics-details"
                  >
                    View Details →
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* How to Earn Block */}
          <Card className="hover-lift" data-testid="card-earn">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <span className="mr-3 text-primary">⚡</span>
                How to Earn
              </h2>
              <p className="text-muted-foreground mb-6">
                Multiple ways to earn ASLX tokens through our mobile-first ecosystem.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                  Watch Rewarded Ads
                </div>
                <div className="flex items-center text-sm">
                  <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                  Referral Program
                </div>
                <div className="flex items-center text-sm">
                  <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                  Daily Streak Bonuses
                </div>
                <Link href="/how-to-earn">
                  <Button 
                    className="bg-accent hover:bg-accent/90 text-accent-foreground px-4 py-2 rounded text-sm transition-all hover:scale-105"
                    data-testid="button-earn-learn-more"
                  >
                    Learn More →
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Roadmap Preview */}
          <Card className="hover-lift" data-testid="card-roadmap">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <span className="mr-3 text-primary">🚀</span>
                Roadmap 2025
              </h2>
              <p className="text-muted-foreground mb-6">
                Upcoming milestones and ecosystem developments for mass adoption.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Q4 2025: App Launch
                </div>
                <div className="flex items-center text-sm">
                  <span className="w-2 h-2 bg-muted rounded-full mr-2"></span>
                  Q1 2026: Staking Program
                </div>
                <div className="flex items-center text-sm">
                  <span className="w-2 h-2 bg-muted rounded-full mr-2"></span>
                  Q2 2026: DEX Listings
                </div>
                <Link href="/roadmap">
                  <Button 
                    variant="secondary" 
                    className="px-4 py-2 rounded text-sm transition-all"
                    data-testid="button-roadmap-full"
                  >
                    Full Roadmap →
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Real-time Stats & Community */}
          <Card className="hover-lift stats-pulse" data-testid="card-community">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <span className="mr-3 text-primary">🌟</span>
                Join Our Universe
              </h2>
              <p className="text-muted-foreground mb-6">
                Real-time ecosystem statistics and vibrant community channels.
              </p>
              <div className="space-y-4">
                <StatsWidget data-testid="stats-widget-home" />
                <div className="flex gap-2 justify-center">
                  <Button 
                    className="bg-[#5865F2] hover:bg-[#4752C4] px-3 py-1 rounded text-sm transition-all"
                    data-testid="button-discord"
                  >
                    Discord
                  </Button>
                  <Button 
                    className="bg-[#1DA1F2] hover:bg-[#1991DA] px-3 py-1 rounded text-sm transition-all"
                    data-testid="button-twitter"
                  >
                    Twitter/X
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Latest News */}
          <Card className="hover-lift" data-testid="card-news">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <span className="mr-3 text-primary">📰</span>
                Latest News
              </h2>
              <p className="text-muted-foreground mb-6">
                Stay updated with official announcements and ecosystem developments.
              </p>
              <div className="space-y-3">
                <article className="border-b border-border pb-2">
                  <h3 className="text-sm font-semibold hover:text-primary cursor-pointer">
                    <Link href="/news/app-launch-beta">
                      Astralux Mobile App Beta Testing Begins
                    </Link>
                  </h3>
                  <p className="text-xs text-muted-foreground">December 15, 2024</p>
                </article>
                <article className="border-b border-border pb-2">
                  <h3 className="text-sm font-semibold hover:text-primary cursor-pointer">
                    <Link href="/news/audit-completed">
                      Smart Contract Audit Completed Successfully
                    </Link>
                  </h3>
                  <p className="text-xs text-muted-foreground">December 8, 2024</p>
                </article>
                <Link href="/news">
                  <Button 
                    variant="secondary" 
                    className="w-full px-4 py-2 rounded text-sm transition-all"
                    data-testid="button-news-more"
                  >
                    More News →
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Trust Section */}
      <TrustBadges />

      {/* Astralux Foundation */}
      <section className="py-16 bg-gradient-to-b from-background to-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border border-border">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">
                  <span className="text-primary">{'>>> '}</span>Astralux Foundation
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    The mission of the Astralux Foundation is to promote, protect, and advance the Astralux ecosystem, and to support and facilitate the growth of a diverse and international community of crypto earners through accessible, mobile-first solutions.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105"
                      data-testid="button-foundation-learn-more"
                    >
                      Learn More
                    </Button>
                    <Button 
                      className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 rounded-lg font-semibold transition-all hover:scale-105"
                      data-testid="button-foundation-join"
                    >
                      Join Community
                    </Button>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="inline-block p-8 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full cosmic-glow">
                    <span className="text-6xl">✦</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
