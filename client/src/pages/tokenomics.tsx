import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import auditReportPdf from "@assets/Smart Contract Security Audit Report(Initial)_1758794851558.pdf";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const tokenData = [
  { name: "Airdrop Rewards", value: 75, color: "#8E44AD" },
  { name: "Ecosystem & Treasury", value: 15, color: "#3498DB" },
  { name: "Liquidity", value: 5, color: "#E74C3C" },
  { name: "Team Vesting", value: 5, color: "#F39C12" },
];

const keyStats = [
  { label: "Total Supply", value: "3,300,000 ASLX", mono: true },
  { label: "Decimals", value: "18", mono: true },
  { label: "Network", value: "Polygon", mono: false },
  { label: "Contract Type", value: "ERC-20", mono: true },
];

export default function Tokenomics() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
            Astralux (ASLX) Tokenomics
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transparent, Fixed, and Audited. Our tokenomics are designed for long-term sustainability and community growth.
          </p>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {keyStats.map((stat, index) => (
            <Card key={stat.label} className="text-center">
              <CardContent className="p-6">
                <div className={`text-2xl font-bold text-primary mb-2 ${stat.mono ? 'font-mono' : ''}`}>
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Distribution Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <Card>
            <CardHeader>
              <CardTitle>Token Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={tokenData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {tokenData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `${value}%`} />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Distribution Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {tokenData.map((item, index) => (
                <div key={item.name} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div 
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="font-medium">{item.name}</span>
                  </div>
                  <span className="text-muted-foreground">{item.value}%</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Utility Section */}
        <Card className="mb-16">
          <CardHeader>
            <CardTitle>Token Utility</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-secondary/30 rounded-lg">
              <div className="text-3xl mb-4">💳</div>
              <h3 className="font-semibold mb-2">In-App Payments</h3>
              <p className="text-sm text-muted-foreground">
                Use ASLX for premium features and enhanced earning opportunities within the app.
              </p>
            </div>
            <div className="text-center p-6 bg-secondary/30 rounded-lg">
              <div className="text-3xl mb-4">🏆</div>
              <h3 className="font-semibold mb-2">Staking Rewards</h3>
              <p className="text-sm text-muted-foreground">
                Stake your ASLX tokens to earn additional rewards and participate in ecosystem governance.
              </p>
            </div>
            <div className="text-center p-6 bg-secondary/30 rounded-lg">
              <div className="text-3xl mb-4">🗳️</div>
              <h3 className="font-semibold mb-2">Governance</h3>
              <p className="text-sm text-muted-foreground">
                Vote on important ecosystem decisions and help shape the future of Astralux.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Security & Audits */}
        <Card>
          <CardHeader>
            <CardTitle>Security & Audits</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between p-4 bg-secondary/30 rounded-lg">
              <div>
                <h3 className="font-semibold">Smart Contract Audit</h3>
                <p className="text-sm text-muted-foreground">
                  Our smart contracts have been professionally audited for security vulnerabilities.
                </p>
              </div>
              <Button className="bg-primary hover:bg-primary/90" asChild>
                <a 
                  href={auditReportPdf}
                  download="Astralux_Security_Audit_Report.pdf"
                  data-testid="button-audit-report"
                >
                  View Audit Report
                </a>
              </Button>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-secondary/30 rounded-lg">
              <div>
                <h3 className="font-semibold">Contract Address</h3>
                <p className="text-sm text-muted-foreground font-mono">
                  0x556cAAa810377c85c88A941f58Bf69E3A38C4219 (Polygon Network)
                </p>
              </div>
              <Button variant="outline" asChild>
                <a 
                  href="https://amoy.polygonscan.com/address/0x556cAAa810377c85c88A941f58Bf69E3A38C4219" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  data-testid="button-polygon-scan"
                >
                  View on PolygonScan
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
