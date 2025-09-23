import { Card, CardContent } from "@/components/ui/card";
import Timeline from "@/components/timeline";

const roadmapItems = [
  {
    quarter: "Q4 2025",
    title: "App Launch & Airdrop System Live",
    description: "Official mobile app launch with full airdrop system integration",
    status: "current" as const,
    features: [
      "iOS and Android app release",
      "Rewarded ad system implementation",
      "User registration and KYC",
      "Initial airdrop distribution"
    ]
  },
  {
    quarter: "Q1 2026",
    title: "Staking Program Launch",
    description: "Introduce token staking for additional rewards and governance participation",
    status: "upcoming" as const,
    features: [
      "Staking smart contract deployment",
      "Governance token mechanics",
      "Staking rewards distribution",
      "Community voting system"
    ]
  },
  {
    quarter: "Q2 2026",
    title: "DEX Listing & Liquidity Pools",
    description: "Major decentralized exchange listings and liquidity provision",
    status: "upcoming" as const,
    features: [
      "Uniswap and SushiSwap listings",
      "Liquidity pool creation",
      "Trading pair establishment",
      "Market maker partnerships"
    ]
  },
  {
    quarter: "Q3 2026",
    title: "Governance DAO Implementation",
    description: "Full decentralized autonomous organization for community governance",
    status: "upcoming" as const,
    features: [
      "DAO structure deployment",
      "Proposal submission system",
      "Community treasury management",
      "Decentralized decision making"
    ]
  },
  {
    quarter: "Q4 2026",
    title: "Ecosystem Expansion & Strategic Partnerships",
    description: "Expand the ecosystem with new features and strategic collaborations",
    status: "upcoming" as const,
    features: [
      "Partner integrations",
      "Cross-chain compatibility",
      "Advanced analytics dashboard",
      "Enterprise partnerships"
    ]
  }
];

const valueDrivers = [
  {
    icon: "📈",
    title: "User Growth",
    description: "Increasing user base drives demand for ASLX tokens through higher ad engagement and ecosystem participation."
  },
  {
    icon: "💎",
    title: "Token Scarcity",
    description: "Fixed supply of 3.3M tokens creates scarcity as more users join the ecosystem and compete for rewards."
  },
  {
    icon: "🔧",
    title: "Ecosystem Utility",
    description: "Growing utility through staking, governance, and in-app features increases token demand and value."
  },
  {
    icon: "🏢",
    title: "Market Listings",
    description: "DEX and CEX listings provide liquidity and price discovery, enabling broader token accessibility."
  }
];

export default function Roadmap() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
            Roadmap & Vision
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Astralux aims for mass adoption through an accessible, mobile-first entry point. The token's value is intrinsically linked to user base growth, ecosystem utility, and the scarcity created by its fixed supply.
          </p>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Development Timeline</h2>
          <Timeline items={roadmapItems} />
        </div>

        {/* Value Drivers */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Value Drivers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueDrivers.map((driver, index) => (
              <Card key={driver.title} className="hover-lift">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{driver.icon}</div>
                  <h3 className="font-semibold mb-3">{driver.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {driver.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Vision Statement */}
        <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
          <CardContent className="p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              We envision a world where earning cryptocurrency is as simple as using your smartphone. 
              Astralux represents the democratization of crypto earnings, making it accessible to everyone, 
              everywhere, without the technical barriers or significant investments typically required.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
