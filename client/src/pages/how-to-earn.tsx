import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import EarnCalculator from "@/components/earn-calculator";

const earnMethods = [
  {
    icon: "📺",
    title: "Watch Rewarded Ads",
    description: "Earn mini-tokens by watching short video advertisements",
    details: [
      "Watch 15-30 second video ads",
      "Earn 10-50 mini-tokens per ad",
      "Daily limit of 20 ads per user",
      "Higher rewards for longer engagement"
    ],
    potential: "Up to 1,000 mini-tokens daily"
  },
  {
    icon: "👥",
    title: "Referral Program",
    description: "Invite friends and earn bonus rewards for their activity",
    details: [
      "Earn 10% of referred user's earnings",
      "Bonus 500 mini-tokens per successful referral",
      "No limit on number of referrals",
      "Lifetime earnings from referrals"
    ],
    potential: "Unlimited earning potential"
  },
  {
    icon: "🔥",
    title: "Daily Streak Bonuses",
    description: "Maintain daily activity to unlock progressive bonuses",
    details: [
      "Day 1-7: 1x multiplier",
      "Day 8-30: 1.5x multiplier",
      "Day 31+: 2x multiplier",
      "Weekly bonus chest rewards"
    ],
    potential: "Up to 2x earnings multiplier"
  },
  {
    icon: "🏆",
    title: "Future Staking (Q1 2026)",
    description: "Stake your ASLX tokens to earn additional rewards",
    details: [
      "Annual percentage yield (APY) rewards",
      "Governance token benefits",
      "Early access to new features",
      "Reduced transaction fees"
    ],
    potential: "5-15% APY (estimated)"
  }
];

const conversionSteps = [
  {
    step: 1,
    title: "Earn Mini-Tokens",
    description: "Watch ads and complete activities to accumulate mini-tokens in your app wallet."
  },
  {
    step: 2,
    title: "Reach Conversion Threshold",
    description: "Collect 1,000 mini-tokens to convert them into 1 ASLX token."
  },
  {
    step: 3,
    title: "Request Airdrop",
    description: "Submit an airdrop request through the app when you're ready to claim your ASLX."
  },
  {
    step: 4,
    title: "Receive ASLX Tokens",
    description: "ASLX tokens are sent to your self-custody wallet on the Polygon network."
  }
];

export default function HowToEarn() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
            How to Earn ASLX
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Multiple pathways to earn ASLX tokens through our mobile-first ecosystem. Start earning today with just your smartphone.
          </p>
        </div>

        {/* Earning Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {earnMethods.map((method, index) => (
            <Card key={method.title} className="hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span className="text-3xl mr-3">{method.icon}</span>
                  {method.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{method.description}</p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">How it works:</h4>
                  <ul className="space-y-1">
                    {method.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2 mt-2 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="p-3 bg-primary/10 rounded-lg border border-primary/20">
                  <div className="text-sm font-semibold text-primary">Earning Potential</div>
                  <div className="text-sm text-muted-foreground">{method.potential}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Conversion Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">From Mini-Tokens to ASLX</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {conversionSteps.map((step) => (
              <Card key={step.step} className="text-center hover-lift">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary-foreground font-bold">{step.step}</span>
                  </div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Calculator */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Earnings Calculator</h2>
          <div className="max-w-2xl mx-auto">
            <EarnCalculator />
          </div>
        </div>

        {/* Important Notes */}
        <Card className="bg-secondary/20 border-border">
          <CardHeader>
            <CardTitle>Important Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2 text-accent">Airdrop Batching</h4>
                <p className="text-sm text-muted-foreground">
                  Airdrops are processed in batches to optimize gas costs. Typical processing time is 24-48 hours 
                  after your request is submitted.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-accent">Self-Custody Wallet</h4>
                <p className="text-sm text-muted-foreground">
                  You maintain full control of your ASLX tokens in your own wallet. We recommend using MetaMask 
                  or Trust Wallet for Polygon network compatibility.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-accent">Fair Usage Policy</h4>
                <p className="text-sm text-muted-foreground">
                  Daily earning limits prevent abuse and ensure fair distribution. Suspicious activity may result 
                  in account review or suspension.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-accent">Token Utility</h4>
                <p className="text-sm text-muted-foreground">
                  ASLX tokens can be used for staking, governance participation, in-app purchases, and trading 
                  on supported exchanges.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
