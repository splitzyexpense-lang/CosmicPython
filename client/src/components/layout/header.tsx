import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link, useLocation } from "wouter";
import AppDownload from "@/components/app-download";
import astraluxLogo from "@assets/Gemini_Generated_Image_gyglfjgyglfjgygl_1758656370567.png";

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

  return (
    <header className="bg-card border-b border-border sticky top-0 z-50" data-testid="header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
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
          
          {/* Navigation (Desktop) */}
          <nav className="hidden md:flex items-center space-x-8" data-testid="desktop-nav">
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
