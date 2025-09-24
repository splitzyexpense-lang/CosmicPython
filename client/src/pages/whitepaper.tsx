import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink } from "lucide-react";

export default function Whitepaper() {
  const handleDownloadPDF = () => {
    // TODO: Implement PDF download when whitepaper PDF is available
    window.open("/assets/Astralux_Whitepaper_v1.pdf", "_blank");
  };

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
            Astralux (ASLX) Whitepaper Summary
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            This summary provides an overview of the core concepts, mechanics, and goals of the Astralux project as detailed in the official whitepaper (Version 1.0, September 2025).
          </p>
          <Button 
            onClick={handleDownloadPDF} 
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            data-testid="button-download-pdf"
          >
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </Button>
        </div>

        <div className="space-y-8">
          {/* Abstract */}
          <Card>
            <CardHeader>
              <CardTitle>Abstract</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-none space-y-4">
              <p className="text-justify leading-relaxed">
                Astralux is a mobile-first platform created to simplify and lower the barrier to entry for cryptocurrency adoption. Through a gamified mobile app, users can earn real ASLX cryptocurrency tokens by participating in a simulated mining experience. The platform operates on a rewarded advertising model, which completely eliminates the financial risk and technical complexity typically associated with digital assets.
              </p>
              <p className="text-justify leading-relaxed">
                ASLX is a fixed-supply ERC-20 token on the Polygon network, with a total of 3,300,000 tokens. A significant majority of the supply, 75%, is reserved for community distribution through the app's mining and rewards system to ensure a fair launch.
              </p>
            </CardContent>
          </Card>

          {/* The Problem & Solution */}
          <Card>
            <CardHeader>
              <CardTitle>The Problem & Solution</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-none space-y-4">
              <p className="text-justify leading-relaxed">
                Astralux was designed to solve common challenges that prevent widespread crypto adoption:
              </p>
              <ul className="space-y-3 ml-4">
                <li className="leading-relaxed"><strong>Financial Risk:</strong> The need to purchase crypto exposes users to market volatility.</li>
                <li className="leading-relaxed"><strong>Technical Complexity:</strong> Managing wallets and private keys can be intimidating for newcomers.</li>
                <li className="leading-relaxed"><strong>Information Overload:</strong> The crypto space is often filled with confusing jargon.</li>
                <li className="leading-relaxed"><strong>Trust & Security:</strong> New users are frequently targeted by scams.</li>
              </ul>
              <p className="text-justify leading-relaxed">
                The Astralux ecosystem directly addresses these issues by providing a risk-free, user-friendly on-ramp to Web3. By participating in the app, users learn core crypto concepts in a simplified environment, and tokens are distributed based on active engagement rather than early investment.
              </p>
            </CardContent>
          </Card>

          {/* Core Mechanics */}
          <Card>
            <CardHeader>
              <CardTitle>Core Mechanics</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-none space-y-6">
              <p className="text-justify leading-relaxed">
                The user experience is built around a simple and sustainable model.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Dual Token System</h3>
                  <p className="text-justify leading-relaxed mb-4">
                    The platform uses two tokens to separate in-app rewards from on-chain assets:
                  </p>
                  <ul className="space-y-3 ml-4">
                    <li className="leading-relaxed"><strong>ASLX Mini:</strong> This is the centralized, off-chain reward currency earned within the app through mining.</li>
                    <li className="leading-relaxed"><strong>ASLX:</strong> This is the official ERC-20 cryptocurrency on the Polygon blockchain that holds real-world value.</li>
                    <li className="leading-relaxed"><strong>Conversion Rate:</strong> 1,000 ASLX Mini = 1 ASLX Token.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">The Mining Cycle</h3>
                  <ul className="space-y-3 ml-4">
                    <li className="leading-relaxed"><strong>Tap to Mine:</strong> A user starts a mining session in the app.</li>
                    <li className="leading-relaxed"><strong>View Ad:</strong> The user watches a short rewarded ad.</li>
                    <li className="leading-relaxed"><strong>Earn Reward:</strong> Upon completion, the user is credited with 1 ASLX Mini.</li>
                    <li className="leading-relaxed"><strong>Cooldown:</strong> A 1-hour cooldown period begins before the next session can be started.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Bonuses and Referrals</h3>
                  <ul className="space-y-3 ml-4">
                    <li className="leading-relaxed"><strong>Streak Bonus:</strong> Users who mine for 10 consecutive days receive a bonus of 100 ASLX Mini.</li>
                    <li className="leading-relaxed"><strong>Referral Bonus:</strong> A user earns 250 ASLX Mini for each successful referral. The bonus is granted after the referred user mines their first 200 ASLX Mini.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Withdrawal Process</h3>
                  <ul className="space-y-3 ml-4">
                    <li className="leading-relaxed"><strong>Conversion:</strong> Users convert their ASLX Mini into ASLX tokens inside the app's wallet.</li>
                    <li className="leading-relaxed"><strong>Withdrawal:</strong> Once a user has a minimum of 10 ASLX, they can request a withdrawal to an external Polygon wallet. All withdrawals require mandatory phone number verification to prevent abuse.</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tokenomics */}
          <Card>
            <CardHeader>
              <CardTitle>Tokenomics</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-none space-y-6">
              <ul className="space-y-2 ml-4">
                <li className="leading-relaxed"><strong>Token Name:</strong> Astralux</li>
                <li className="leading-relaxed"><strong>Symbol:</strong> ASLX</li>
                <li className="leading-relaxed"><strong>Network:</strong> Polygon</li>
                <li className="leading-relaxed"><strong>Contract Type:</strong> ERC-20</li>
                <li className="leading-relaxed"><strong>Total Supply:</strong> 3,300,000 ASLX (fixed)</li>
              </ul>

              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-3">Token Allocation</h3>
                <ul className="space-y-4 ml-4">
                  <li className="leading-relaxed">
                    <strong>Airdrop Rewards (75% - 2,475,000 ASLX):</strong> Reserved entirely for community distribution through the mobile app's mining and reward features.
                  </li>
                  <li className="leading-relaxed">
                    <strong>Ecosystem & Treasury (15% - 495,000 ASLX):</strong> Funds for future development, marketing, and partnerships.
                  </li>
                  <li className="leading-relaxed">
                    <strong>Liquidity Provision (5% - 165,000 ASLX):</strong> Reserved for providing initial liquidity on a decentralized exchange (DEX).
                  </li>
                  <li className="leading-relaxed">
                    <strong>Team (5% - 165,000 ASLX):</strong> Allocated to the founding team, subject to a vesting schedule to ensure long-term commitment.
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Technical Architecture */}
          <Card>
            <CardHeader>
              <CardTitle>Technical Architecture</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-none space-y-4">
              <ul className="space-y-4 ml-4">
                <li className="leading-relaxed"><strong>Mobile App:</strong> Built with Flutter for a consistent experience on iOS and Android, using Riverpod for state management.</li>
                <li className="leading-relaxed"><strong>Backend:</strong> Powered by Firebase, including Firestore for the database and Cloud Functions for secure, server-side validation.</li>
                <li className="leading-relaxed"><strong>Blockchain:</strong> The ASLX token is deployed on the Polygon network for its low fees and high throughput. The smart contract includes a batchTransfer function for efficient airdrop processing.</li>
              </ul>
            </CardContent>
          </Card>

          {/* Roadmap */}
          <Card>
            <CardHeader>
              <CardTitle>Roadmap</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-none space-y-6">
              <div className="space-y-4">
                <div>
                  <p className="leading-relaxed"><strong>Phase 0 (Completed):</strong> Smart contract deployment, token distribution to allocation wallets, and core infrastructure setup.</p>
                </div>
                <div>
                  <p className="leading-relaxed"><strong>Phase 1 (In Progress):</strong> Public app launch on iOS and Android, implementation of Google Sign-In, and activation of the streak bonus system.</p>
                </div>
                <div>
                  <p className="leading-relaxed"><strong>Phase 2 (Growth & Economy):</strong> Launch of the referral program, activation of in-app conversion and withdrawal requests.</p>
                </div>
                <div>
                  <p className="leading-relaxed"><strong>Phase 3 (Full On-Chain Integration):</strong> Integration of a secure in-app EVM wallet and display of live on-chain balances.</p>
                </div>
                <div>
                  <p className="leading-relaxed"><strong>Phase 4 (Ecosystem Expansion):</strong> Pursue listing on a DEX, provide liquidity, and explore community governance.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Download Section */}
          <div className="text-center pt-8">
            <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Download Full Whitepaper</h3>
                <p className="text-muted-foreground mb-6">
                  Get the complete technical documentation and detailed analysis in PDF format.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    onClick={handleDownloadPDF}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                    data-testid="button-download-pdf-bottom"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF (v1.0)
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="/tokenomics" data-testid="link-view-tokenomics">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Tokenomics
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}