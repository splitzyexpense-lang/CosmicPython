import ComparisonTable from "@/components/comparison-table";

const cryptoComparisons = [
  {
    name: "Astralux",
    symbol: "ASLX",
    miningMethod: "Watch Ads",
    supply: "3.3M (Fixed)",
    uniqueness: "Mobile-first, eco-friendly, instant rewards",
    tradeoffs: "New project, limited initial liquidity",
    network: "Polygon",
    launched: "2024",
    marketCap: "TBD"
  },
  {
    name: "Bitcoin",
    symbol: "BTC",
    miningMethod: "Proof of Work",
    supply: "21M (Fixed)",
    uniqueness: "First cryptocurrency, store of value, widely adopted",
    tradeoffs: "High energy consumption, expensive to acquire",
    network: "Bitcoin",
    launched: "2009",
    marketCap: "$800B+"
  },
  {
    name: "Pi Network",
    symbol: "PI",
    miningMethod: "Social Mining",
    supply: "Variable",
    uniqueness: "Social verification, mobile mining",
    tradeoffs: "Not yet tradeable, centralized, uncertain launch",
    network: "Pi Network",
    launched: "2019",
    marketCap: "Not Listed"
  },
  {
    name: "Dogecoin",
    symbol: "DOGE",
    miningMethod: "Proof of Work",
    supply: "Unlimited",
    uniqueness: "Meme coin, low fees, community driven",
    tradeoffs: "Inflationary supply, limited utility",
    network: "Dogecoin",
    launched: "2013",
    marketCap: "$15B+"
  }
];

const comparisonCategories = [
  {
    title: "Accessibility",
    description: "How easy is it for newcomers to start earning?",
    analysis: [
      "Astralux: Download app and start earning immediately",
      "Bitcoin: Requires expensive hardware or significant investment",
      "Pi Network: Simple mobile app but tokens not yet available",
      "Dogecoin: Need to buy from exchanges or mine with hardware"
    ]
  },
  {
    title: "Environmental Impact",
    description: "Energy consumption and environmental sustainability",
    analysis: [
      "Astralux: Zero energy consumption, ad-supported model",
      "Bitcoin: Extremely high energy consumption from mining",
      "Pi Network: Low energy, but network still in development",
      "Dogecoin: High energy consumption from Proof of Work"
    ]
  },
  {
    title: "Earning Potential",
    description: "Realistic earning opportunities for average users",
    analysis: [
      "Astralux: Consistent daily earnings through ad viewing",
      "Bitcoin: Mining not profitable for individuals without significant investment",
      "Pi Network: Uncertain value and exchange availability",
      "Dogecoin: Mining requires technical knowledge and hardware"
    ]
  },
  {
    title: "Market Maturity",
    description: "Established market presence and trading availability",
    analysis: [
      "Astralux: New project, limited initial trading options",
      "Bitcoin: Highly established, available on all major exchanges",
      "Pi Network: No current market presence, awaiting mainnet",
      "Dogecoin: Well-established, widely available for trading"
    ]
  }
];

export default function Comparisons() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
            How Astralux Compares
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A balanced comparison of Astralux with other major cryptocurrencies, highlighting unique advantages and honest tradeoffs.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="mb-16">
          <ComparisonTable data={cryptoComparisons} />
        </div>

        {/* Detailed Analysis */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-center mb-12">Detailed Analysis</h2>
          
          {comparisonCategories.map((category, index) => (
            <div key={category.title} className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">{category.title}</h3>
              <p className="text-muted-foreground mb-6">{category.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {category.analysis.map((item, itemIndex) => {
                  const [project, analysis] = item.split(': ');
                  return (
                    <div key={itemIndex} className="p-4 bg-secondary/30 rounded-lg">
                      <div className="font-semibold text-accent mb-2">{project}</div>
                      <div className="text-sm text-muted-foreground">{analysis}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="mt-16 p-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold mb-4 text-center">Why Choose Astralux?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl mb-2">🚀</div>
              <h4 className="font-semibold mb-2">Immediate Start</h4>
              <p className="text-sm text-muted-foreground">
                No investment, hardware, or technical knowledge required. Start earning in minutes.
              </p>
            </div>
            <div>
              <div className="text-3xl mb-2">🌱</div>
              <h4 className="font-semibold mb-2">Eco-Friendly</h4>
              <p className="text-sm text-muted-foreground">
                Zero energy consumption through our innovative ad-supported earning model.
              </p>
            </div>
            <div>
              <div className="text-3xl mb-2">📱</div>
              <h4 className="font-semibold mb-2">Mobile-First</h4>
              <p className="text-sm text-muted-foreground">
                Designed specifically for mobile users with intuitive, accessible interface.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
