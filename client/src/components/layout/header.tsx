import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Search, Menu } from "lucide-react";
import { Link, useLocation } from "wouter";
import AppDownload from "@/components/app-download";

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
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement search functionality
    console.log("Search query:", searchQuery);
  };

  return (
    <header className="bg-card border-b border-border sticky top-0 z-50" data-testid="header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" data-testid="logo-link">
              <div className="flex-shrink-0">
                <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  ✦ Astralux
                </span>
              </div>
            </Link>
          </div>
          
          {/* Search Bar (Desktop) */}
          <div className="hidden md:block flex-1 max-w-lg mx-8">
            <form onSubmit={handleSearch} className="relative">
              <Input
                type="search"
                placeholder="Search documentation..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 bg-input border border-border"
                data-testid="search-input"
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            </form>
          </div>
          
          {/* Navigation (Desktop) */}
          <nav className="hidden md:flex items-center space-x-8" data-testid="desktop-nav">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                <Button
                  variant="ghost"
                  className={`transition-colors font-medium ${
                    location === item.href
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                  data-testid={`nav-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {item.name}
                </Button>
              </Link>
            ))}
          </nav>
          
          {/* CTA Button (Desktop) */}
          <div className="hidden md:flex items-center ml-8">
            <AppDownload 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-md font-medium transition-all hover:scale-105 cosmic-glow"
              data-testid="download-app-header"
            />
          </div>
          
          {/* Mobile menu button */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="md:hidden" data-testid="mobile-menu-trigger">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80" data-testid="mobile-menu">
              <div className="flex flex-col space-y-4 mt-8">
                {/* Mobile Search */}
                <form onSubmit={handleSearch} className="relative">
                  <Input
                    type="search"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10"
                    data-testid="mobile-search-input"
                  />
                  <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                </form>
                
                {/* Mobile Navigation */}
                <nav className="flex flex-col space-y-2" data-testid="mobile-nav">
                  {navigation.map((item) => (
                    <Link key={item.name} href={item.href}>
                      <Button
                        variant="ghost"
                        className={`w-full justify-start text-left ${
                          location === item.href
                            ? "text-foreground bg-secondary"
                            : "text-muted-foreground hover:text-primary"
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                        data-testid={`mobile-nav-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {item.name}
                      </Button>
                    </Link>
                  ))}
                </nav>
                
                {/* Mobile CTA */}
                <div className="pt-4 border-t border-border">
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
    </header>
  );
}
