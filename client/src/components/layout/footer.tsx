import { Link } from "wouter";

const footerSections = [
  {
    title: "About",
    links: [
      { name: "About Astralux", href: "/about" },
      { name: "Whitepaper", href: "/whitepaper" },
      { name: "Roadmap", href: "/roadmap" },
      { name: "Team", href: "/team" },
    ],
  },
  {
    title: "Documentation",
    links: [
      { name: "Tokenomics", href: "/tokenomics" },
      { name: "How to Earn", href: "/how-to-earn" },
      { name: "Comparisons", href: "/comparisons" },
      { name: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Community",
    links: [
      { name: "Discord", href: "https://discord.gg/astralux", external: true },
      { name: "Twitter/X", href: "https://twitter.com/astralux_aslx", external: true },
      { name: "News & Updates", href: "/news" },
      { name: "Support", href: "/support" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Disclaimer", href: "/disclaimer" },
      { name: "Contact", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-20" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-4 text-foreground" data-testid={`footer-section-${section.title.toLowerCase()}`}>
                {section.title}
              </h3>
              <ul className="space-y-2 text-sm">
                {section.links.map((link) => (
                  <li key={link.name}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        data-testid={`footer-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link href={link.href}>
                        <span 
                          className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                          data-testid={`footer-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          {link.name}
                        </span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Copyright & Disclaimer */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground" data-testid="footer-copyright">
              © 2024 Astralux Foundation. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-primary font-bold">✦ Astralux</span>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-secondary/20 rounded-lg border border-border">
            <p className="text-xs text-muted-foreground text-center leading-relaxed" data-testid="footer-disclaimer">
              <strong className="text-foreground">Important Disclaimer:</strong> Astralux (ASLX) is a utility token for ecosystem participation. 
              Content on this website is for informational purposes only and does not constitute financial advice. 
              Cryptocurrency investments carry inherent risks. Always Do Your Own Research (DYOR) before making any financial decisions.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
