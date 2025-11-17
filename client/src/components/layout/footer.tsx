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
      { name: "Telegram", href: "https://t.me/AstraluxOfficial", external: true },
      { name: "Twitter/X", href: "https://x.com/AstraluxSupport", external: true },
      { name: "News & Updates", href: "/news" },
      { name: "Support", href: "/support" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Delete Account", href: "/delete-account" },
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
          
          <div className="mt-6 p-6 bg-secondary/20 rounded-lg border border-border">
            <div className="text-xs text-muted-foreground leading-relaxed space-y-3" data-testid="footer-disclaimer">
              <div className="text-center">
                <strong className="text-foreground text-sm">Disclaimer</strong>
                <p className="text-xs mt-1">Last Updated: September 24, 2025</p>
              </div>
              
              <p>
                The information provided on this website is for informational purposes only and does not constitute financial, investment, or legal advice. The Astralux (ASLX) token is a utility token intended for use within the Astralux application ecosystem.
              </p>
              
              <p>
                Engaging with cryptocurrencies involves significant risk, including the risk of complete loss. The value of digital assets can be highly volatile. You should conduct your own research and consult with a qualified professional before making any financial decisions. The project team makes no warranties or representations about the future performance or value of the ASLX token. All features and plans, including those outlined in the project documentation, are subject to change.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
