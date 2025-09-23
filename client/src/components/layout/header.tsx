import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Activity, FileText } from "lucide-react";
import { Link, useLocation } from "wouter";
import AppDownload from "@/components/app-download";
import { useLiveStats } from "@/hooks/use-live-stats";
import astraluxLogo from "@assets/logo_1758657603350.png";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Tokenomics", href: "/tokenomics" },
  { name: "Roadmap", href: "/roadmap" },
  { name: "How to Earn", href: "/how-to-earn" },
  { name: "Comparisons", href: "/comparisons" },
  { name: "FAQ", href: "/faq" },
  { name: "News", href: "/news" },
];

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { data: liveStats } = useLiveStats();

  return (
    <header className="bg-card border-b border-border sticky top-0 z-50" data-testid="header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-[auto,1fr,auto] items-center h-16 gap-2 md:gap-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" data-testid="logo-link">
              <div className="flex-shrink-0">
                <img 
                  src={astraluxLogo} 
                  alt="Astralux Logo" 
                  className="h-10 w-10 object-contain hover:scale-105 transition-transform duration-200"
                  data-testid="astralux-logo"
                />
              </div>
            </Link>
          </div>
          
          {/* Navigation (Desktop) - Centered */}
          <nav className="hidden lg:flex items-center justify-center space-x-4 justify-self-center" data-testid="desktop-nav">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                <Button
                  variant="ghost"
                  className={`transition-colors font-medium hover:bg-primary/10 ${
                    location === item.href
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  data-testid={`nav-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {item.name}
                </Button>
              </Link>
            ))}
          </nav>
          
          {/* Right Side Cluster - Contains both desktop cluster and mobile menu */}
          <div className="flex items-center justify-end">
            {/* Desktop Right Side Cluster */}
            <div className="hidden md:flex items-center space-x-2">
              {/* Live Stats Pill - Only show on large screens */}
              {liveStats && (
                <div className="hidden xl:flex items-center space-x-1.5 bg-secondary/30 text-muted-foreground px-2.5 py-1 rounded-full text-xs border border-border/50" data-testid="live-stats-pill">
                  <Activity className="h-3 w-3 text-primary" />
                  <span className="font-mono">{(liveStats.totalMiners / 1000).toFixed(1)}k</span>
                </div>
              )}
              
              {/* Whitepaper Button - Hide on smaller screens */}
              <Link href="/whitepaper" className="hidden lg:block">
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-primary/20 text-muted-foreground hover:text-foreground hover:bg-primary/5 transition-all px-3"
                  data-testid="button-whitepaper-header"
                >
                  <FileText className="h-3 w-3 mr-1" />
                  <span className="hidden lg:inline">Whitepaper</span>
                </Button>
              </Link>
              
              {/* Primary CTA - Always visible on desktop */}
              <AppDownload 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-3 py-2 rounded-md text-sm font-medium transition-all hover:scale-105 cosmic-glow"
                data-testid="download-app-header"
              />
            </div>
            
            {/* Mobile menu button */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="lg:hidden" data-testid="mobile-menu-trigger">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
            <SheetContent side="right" className="w-80" data-testid="mobile-menu">
              <div className="flex flex-col space-y-4 mt-8">
                {/* Mobile Navigation */}
                <nav className="flex flex-col space-y-2" data-testid="mobile-nav">
                  {navigation.map((item) => (
                    <Link key={item.name} href={item.href}>
                      <Button
                        variant="ghost"
                        className={`w-full justify-start text-left hover:bg-primary/10 ${
                          location === item.href
                            ? "text-foreground bg-secondary"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                        data-testid={`mobile-nav-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {item.name}
                      </Button>
                    </Link>
                  ))}
                </nav>
                
                {/* Mobile CTA & Additional Links */}
                <div className="pt-4 border-t border-border space-y-3">
                  <Link href="/whitepaper">
                    <Button 
                      variant="outline" 
                      className="w-full justify-start text-left border-primary/20 text-muted-foreground hover:text-foreground hover:bg-primary/5"
                      onClick={() => setMobileMenuOpen(false)}
                      data-testid="button-whitepaper-mobile"
                    >
                      <FileText className="h-4 w-4 mr-2" />
                      Whitepaper
                    </Button>
                  </Link>
                  
                  <AppDownload 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-md font-medium transition-all"
                    data-testid="download-app-mobile"
                  />
                </div>
              </div>
            </SheetContent>
          </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
