import { Card, CardContent } from "@/components/ui/card";

const trustBadges = [
  {
    icon: "⬢",
    title: "Polygon Network",
    description: "Built on secure, eco-friendly Polygon blockchain",
    color: "bg-[#8247E5]",
  },
  {
    icon: "🛡️",
    title: "Audited Contract",
    description: "Smart contracts professionally audited for security",
    color: "bg-accent",
  },
  {
    icon: "🔐",
    title: "Secure Self-Custody",
    description: "You control your keys, you control your tokens",
    color: "bg-primary",
  },
];

export default function TrustBadges() {
  return (
    <section className="bg-secondary/30 py-16" data-testid="trust-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4" data-testid="trust-title">
            Built for Trust & Security
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto" data-testid="trust-description">
            Astralux prioritizes user security and transparency with audited contracts and secure self-custody solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {trustBadges.map((badge, index) => (
            <Card key={badge.title} className="hover-lift" data-testid={`trust-badge-${index}`}>
              <CardContent className="text-center p-6">
                <div className={`w-16 h-16 ${badge.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-2xl">{badge.icon}</span>
                </div>
                <h3 className="font-semibold mb-2" data-testid={`trust-badge-title-${index}`}>
                  {badge.title}
                </h3>
                <p className="text-sm text-muted-foreground" data-testid={`trust-badge-description-${index}`}>
                  {badge.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
