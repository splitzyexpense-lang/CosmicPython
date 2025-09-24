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
      <section className="relative min-h-[50vh] bg-gradient-to-br from-background to-card overflow-hidden">
        <StarfieldAnimation />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="text-center">
            {/* Large Main Logo */}
            <div className="mb-4 sm:mb-6 flex justify-center">
              <img 
                src={astraluxMainLogo} 
                alt="Astralux ASLX Logo" 
                className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-contain animate-float cosmic-glow"
                data-testid="astralux-main-logo"
              />
            </div>
            
            <h1 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent animate-float"
              data-testid="hero-title"
            >
              Get Started with Astralux
            </h1>
            
            <p 
              className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed"
              data-testid="hero-description"
            >
              Astralux is a mobile app where you watch rewarded ads to earn in-app "ASLX mini" tokens. These can then be converted into real ASLX cryptocurrency on the Polygon network and withdrawn to a personal wallet.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <AppDownload 
                onDownload={handleDownloadClick}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 rounded-lg font-semibold text-sm sm:text-base lg:text-lg transition-all hover:scale-105 cosmic-glow"
                data-testid="button-download-hero"
              />
              <Link href="/tokenomics">
                <Button 
                  variant="outline" 
                  className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 rounded-lg font-semibold text-sm sm:text-base lg:text-lg transition-all hover:scale-105"
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

          {/* Community Support */}
          <Card className="hover-lift" data-testid="card-community-support">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <span className="mr-3 text-primary">🤝</span>
                Community Support
              </h2>
              <p className="text-muted-foreground mb-6">
                Connect with our community and get help from fellow users and support team.
              </p>
              <div className="flex gap-2 justify-center">
                <a
                  href="https://x.com/AstraluxSupport"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-[#1DA1F2] hover:bg-[#1991DA] px-3 py-1 rounded text-sm transition-all text-white font-medium"
                  data-testid="button-twitter"
                >
                  Twitter/X
                </a>
                <a
                  href="https://t.me/AstraluxOfficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-[#229ED9] hover:bg-[#1E8BC3] px-3 py-1 rounded text-sm transition-all text-white font-medium"
                  data-testid="button-telegram"
                >
                  Telegram
                </a>
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

      {/* About Astralux */}
      <section className="py-16 bg-gradient-to-b from-background to-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border border-border">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">
                  <span className="text-primary">{'>>> '}</span>About Astralux
                </h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 items-start">
                <div className="md:col-span-2 space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-primary">Our Mission: Democratizing Cryptocurrency for Everyone</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      At Astralux, our mission is to dismantle the barriers to entry in the world of cryptocurrency. We believe that access to the future of digital finance should be open to all, not just a select few. We've designed the Astralux app from the ground up to be the simplest, most secure, and most rewarding gateway for anyone to begin their crypto journey, regardless of their technical expertise or financial standing.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-primary">What is Astralux?</h3>
                    <div className="space-y-3 text-muted-foreground leading-relaxed">
                      <p>
                        Astralux is a free-to-use mobile application that allows you to earn real cryptocurrency, the Astralux token (ASLX), through a simple and engaging process we call mobile mining.
                      </p>
                      <p>
                        By tapping a button in the app once an hour, you earn our in-app currency, ASLX mini. These ASLX mini tokens are your reward for contributing to the network. Once you've collected enough, you can convert them into real ASLX tokens, which are yours to hold, trade, or use on the Polygon blockchain.
                      </p>
                      <p>
                        The entire ecosystem is powered by ad revenue, meaning you never have to invest your own money to get started. Your time and engagement are what fuel the platform.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-primary">The Astralux Philosophy: Our Core Principles</h3>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        We are guided by a set of core principles that ensure our platform is fair, secure, and built for the long term.
                      </p>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Community-First Tokenomics:</h4>
                        <p>Our project is fundamentally centered around our users. An unprecedented 75% of the total token supply (2,475,000 ASLX) is allocated directly to the Airdrop Rewards wallet. This isn't just a platform; it's a community-owned economy where the vast majority of value is distributed to the users who build it.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Fair and Free Access:</h4>
                        <p>True accessibility means no financial barriers. The Astralux project's operational costs and revenue are covered exclusively by advertisements shown during the mining process. This ensures a level playing field where anyone with a smartphone can participate and earn without any upfront investment.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Unyielding Security:</h4>
                        <p>Your assets and trust are paramount. Astralux is built with institutional-grade security measures at every level, including on-device protection with encrypted storage and biometric authentication, server-side validation for all critical actions, and robust architecture built on proven technology.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Built on Proven Technology:</h4>
                        <p>Astralux (ASLX) is an ERC-20 token built on the Polygon network. We chose Polygon for its low transaction fees, high speed, and robust security, ensuring that when you withdraw your tokens, the process is both efficient and affordable.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
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
                  <img 
                    src="/attached_assets/logo_1758666981199.png" 
                    alt="Astralux Logo" 
                    className="w-48 h-48 mx-auto cosmic-glow"
                    data-testid="img-foundation-logo"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
