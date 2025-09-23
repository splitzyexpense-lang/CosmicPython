import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import EarnCalculator from "@/components/earn-calculator";

const earnMethods = [
  {
    icon: "⛏️",
    title: "Daily Mining",
    description: "This is the core way to earn. Simply tap the Mine button every hour",
    details: [
      "Tap the 'Mine' button in the app every hour",
      "Watch a short ad after tapping mine",
      "Earn 1 ASLX mini token per mining session",
      "Timer shows when you can mine again"
    ],
    potential: "24 mini-tokens daily"
  },
  {
    icon: "🎁",
    title: "Welcome Bonus",
    description: "Get a head start on your earnings with a one-time signup bonus",
    details: [
      "Available to every new user",
      "Received immediately after account creation",
      "One-time bonus of 100 ASLX mini tokens",
      "No additional requirements needed"
    ],
    potential: "100 mini-tokens (one-time)"
  },
  {
    icon: "🔥",
    title: "Daily Streak Bonus",
    description: "Consistency is key. Reward for mining every day consecutively",
    details: [
      "Mine every day to maintain your streak",
      "Bonus awarded for every 10 consecutive days",
      "Receive 100 ASLX mini tokens per milestone",
      "Rewards your dedication to daily mining"
    ],
    potential: "100 mini-tokens every 10 days"
  },
  {
    icon: "👥",
    title: "Referral Program",
    description: "Invite friends to join the Astralux network and earn generous bonuses",
    details: [
      "Share your unique referral link with friends",
      "Friend must mine their first 200 ASLX mini tokens",
      "You receive 250 ASLX mini tokens bonus",
      "No limit on number of successful referrals"
    ],
    potential: "250 mini-tokens per referral"
  }
];

const conversionSteps = [
  {
    step: 1,
    title: "Accumulate Mini-Tokens",
    description: "Mine hourly, maintain streaks, and refer friends to build your mini-token balance."
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
            In the Astralux app, you accumulate ASLX mini tokens through various in-app activities. These mini tokens are your key to earning real ASLX crypto, which can be withdrawn to your personal wallet.
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
