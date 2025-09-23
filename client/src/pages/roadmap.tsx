import { Card, CardContent } from "@/components/ui/card";
import Timeline from "@/components/timeline";

const roadmapItems = [
  {
    quarter: "Phase 0",
    title: "Foundation & Deployment ✅",
    description: "This foundational phase established the technical and strategic groundwork for the project. All objectives in this phase have been successfully met.",
    status: "completed" as const,
    features: [
      "Smart Contract Deployed: The official ASLX ERC-20 token contract is live on the Polygon network",
      "Tokenomics Established: Total supply of 3,300,000 ASLX distributed to project wallets (Airdrop, Treasury, Liquidity, Team)",
      "Core App Architecture: Flutter application with scalable, multi-platform architecture and Riverpod state management",
      "Backend Infrastructure: Secure Firebase Cloud Functions and Firestore rules for core app logic"
    ]
  },
  {
    quarter: "Phase 1",
    title: "Mainnet Launch - The Core Mining Experience",
    description: "This phase focuses on launching the app with all essential features for users to begin mining, track progress, and engage with the core loop.",
    status: "current" as const,
    features: [
      "Seamless Onboarding: Users sign up with Google account and receive 100 ASLX Mini welcome bonus",
      "Intuitive Mining Interface: Clean home screen showing balance, mining streak, and mining session initiation",
      "Secure Mining & Ad Integration: Core mining mechanism with hourly taps, rewarded ads, earning 1 ASLX Mini per session",
      "10-Day Streak Bonus: Loyalty system rewarding 100 ASLX Mini bonus for 10-day consecutive mining streaks"
    ]
  },
  {
    quarter: "Phase 2",
    title: "Growth & In-App Economy",
    description: "With the core experience established, this phase introduces features designed to drive user growth and build a robust in-app economy leading up to on-chain withdrawals.",
    status: "upcoming" as const,
    features: [
      "High-Value Referral Program: 250 ASLX Mini bonus when referrals mine their first 200 Mini-tokens",
      "Two-Step Wallet System: In-app wallet showing Mini balance and convertible ASLX balance (1,000 Mini = 1 ASLX)",
      "Withdrawal Requests: Users can withdraw ASLX to external wallet (10 ASLX minimum, phone verification required)",
      "Deep Linking & Universal Links: Seamless referral experience with automatic app opening and referral capture",
      "Reliable Push Notifications: Mining session reminders and referral activity notifications"
    ]
  },
  {
    quarter: "Phase 3",
    title: "Full On-Chain Integration",
    description: "This phase bridges the gap between the in-app economy and the Polygon blockchain, giving users full custody and utility of their ASLX tokens.",
    status: "upcoming" as const,
    features: [
      "In-App EVM Wallet: Create new or import existing Polygon wallet with biometric protection and secure storage",
      "Live On-Chain Balance: Real-time ASLX token balance displayed directly from Polygon network",
      "PolygonScan Integration: One-tap access to wallet address and transaction history on block explorer",
      "Automated Airdrops: Scheduled batch processing of withdrawal requests with automatic token distribution"
    ]
  },
  {
    quarter: "Phase 4",
    title: "Ecosystem Expansion & Listing",
    description: "This future-looking phase focuses on bringing the ASLX token to the broader market and expanding its utility.",
    status: "upcoming" as const,
    features: [
      "DEX Listing Target: Initiate listing process once community mines 1,800,000 ASLX through airdrop rewards",
      "Liquidity Provision: Deploy 165,000 ASLX (5%) from Liquidity Wallet to create stable trading pools",
      "Community Governance (Future): Explore governance model for ASLX token holder voting on key decisions",
      "Partnerships: Seek Web3 ecosystem partnerships to expand ASLX token utility"
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
            This roadmap outlines the key development phases for the Astralux application, from its initial launch to full on-chain integration and ecosystem growth.
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
