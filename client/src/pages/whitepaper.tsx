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
            Astralux (ASLX) Whitepaper
          </h1>
          <p className="text-xl text-muted-foreground mb-4">
            Version 1.0
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            September 24, 2025
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
            <CardContent className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                Astralux is a mobile-first platform designed to lower the barrier to entry for cryptocurrency adoption. Through a gamified mobile application, users can earn real ASLX cryptocurrency tokens by engaging in a simulated mining experience, supported by a rewarded advertising model. This approach eliminates the financial risk and technical complexity typically associated with entering the digital asset space. ASLX is an ERC-20 token on the Polygon network, with a fixed supply of 3,300,000 tokens. A supermajority of the supply, 75%, is reserved for community distribution through the app's mining and reward mechanisms, ensuring a fair and widespread launch.
              </p>
            </CardContent>
          </Card>

          {/* Introduction */}
          <Card>
            <CardHeader>
              <CardTitle>1. Introduction</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                The global interest in cryptocurrency continues to surge, yet for the average individual, the path to ownership remains fraught with obstacles. Complex exchanges, volatile market risks, and the need for technical knowledge create a significant barrier, preventing widespread adoption.
              </p>
              <p>
                Astralux was conceived to bridge this gap. We believe that earning your first cryptocurrency should be an intuitive, engaging, and risk-free experience. By leveraging the ubiquity of smartphones, Astralux provides a gateway for anyone to begin their crypto journey. Our mission is to distribute cryptocurrency into the hands of a global user base through a simple, fair, and sustainable model.
              </p>
            </CardContent>
          </Card>

          {/* The Problem */}
          <Card>
            <CardHeader>
              <CardTitle>2. The Problem: Barriers to Crypto Adoption</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                Despite its potential, the cryptocurrency ecosystem presents several challenges for newcomers:
              </p>
              <ul>
                <li><strong>Financial Risk:</strong> The primary method of acquiring cryptocurrency is through direct purchase, exposing individuals to market volatility and potential financial loss.</li>
                <li><strong>Technical Complexity:</strong> Setting up wallets, managing private keys, and navigating decentralized exchanges (DEXs) requires a steep learning curve that can be intimidating.</li>
                <li><strong>Information Overload:</strong> The space is filled with jargon and conflicting information, making it difficult for beginners to make informed decisions.</li>
                <li><strong>Trust & Security:</strong> New users are often vulnerable to scams and security breaches.</li>
              </ul>
            </CardContent>
          </Card>

          {/* The Solution */}
          <Card>
            <CardHeader>
              <CardTitle>3. The Solution: The Astralux Ecosystem</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                Astralux addresses these challenges with a mobile application that serves as a user-friendly on-ramp to the world of Web3:
              </p>
              <ul>
                <li><strong>Risk-Free Entry:</strong> Users do not need to invest any of their own money. The entire ecosystem is funded by a rewarded advertising model, where the value generated from ad views is converted into cryptocurrency for the user.</li>
                <li><strong>Learn by Doing:</strong> The app introduces core crypto concepts—like wallets and on-chain balances—in a controlled and simplified environment, building user confidence and knowledge over time.</li>
                <li><strong>Fair & Meritocratic Distribution:</strong> The primary method of token distribution is through active participation ("mining"). This ensures that tokens are earned by engaged community members, rather than being concentrated in the hands of early investors.</li>
                <li><strong>Secure Foundation:</strong> By building on a robust technical stack and implementing server-side validation for all critical actions, we prioritize user security and the integrity of the ecosystem.</li>
              </ul>
            </CardContent>
          </Card>

          {/* Core Mechanics */}
          <Card>
            <CardHeader>
              <CardTitle>4. Core Mechanics: How Astralux Works</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                The user journey is designed for simplicity and sustained engagement.
              </p>

              <h3>4.1 The Dual Token System</h3>
              <p>
                Astralux utilizes a two-token system to separate in-app activity from on-chain transactions, creating a seamless user experience:
              </p>
              <ul>
                <li><strong>ASLX Mini:</strong> This is the in-app reward currency. Users earn ASLX Mini by participating in the mining process. It is a centralized, off-chain point system that represents a user's contribution to the network.</li>
                <li><strong>ASLX:</strong> This is the official ERC-20 cryptocurrency on the Polygon blockchain. It holds real-world value and can be withdrawn to a personal wallet.</li>
              </ul>
              <p>
                Users can convert their in-app rewards at a fixed rate: <strong>1,000 ASLX Mini = 1 ASLX Token</strong>.
              </p>

              <h3>4.2 The Mining Cycle</h3>
              <ol>
                <li><strong>Tap to Mine:</strong> Users initiate a mining session by tapping a button in the app.</li>
                <li><strong>View Rewarded Ad:</strong> To complete the session and earn a reward, the user watches a short ad.</li>
                <li><strong>Earn Reward:</strong> Upon successful ad completion, the user's account is credited with 1 ASLX Mini.</li>
                <li><strong>Cooldown Period:</strong> A 1-hour cooldown begins before the user can start another session. This server-validated cooldown ensures fair participation and system stability.</li>
              </ol>

              <h3>4.3 Bonuses and Referrals</h3>
              <p>
                To encourage consistent engagement and community growth, Astralux offers two bonus systems:
              </p>
              <ul>
                <li><strong>Streak Bonus:</strong> Users who mine consecutively for 10 days receive a bonus of 100 ASLX Mini.</li>
                <li><strong>Referral Bonus:</strong> A user earns 250 ASLX Mini for each friend they refer. This bonus is awarded when the referred user successfully mines their first 200 ASLX Mini, ensuring high-quality referrals.</li>
              </ul>

              <h3>4.4 The Withdrawal Process</h3>
              <p>
                The process is designed in two secure steps to bridge the off-chain and on-chain environments:
              </p>
              <p><strong>1. Conversion:</strong> Inside the app's wallet, a user converts their accumulated ASLX Mini into ASLX tokens.</p>
              <p><strong>2. Withdrawal Request:</strong> Once a user has accumulated a minimum of 10 ASLX, they can request a withdrawal to an external Polygon wallet address. This request is added to a secure processing queue. All withdrawal requests are subject to mandatory phone number verification to prevent abuse.</p>
            </CardContent>
          </Card>

          {/* Tokenomics */}
          <Card>
            <CardHeader>
              <CardTitle>5. Tokenomics</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                The ASLX token is designed for utility and decentralized distribution:
              </p>
              <ul>
                <li><strong>Token Name:</strong> Astralux</li>
                <li><strong>Symbol:</strong> ASLX</li>
                <li><strong>Network:</strong> Polygon</li>
                <li><strong>Contract Type:</strong> ERC-20</li>
                <li><strong>Total Supply:</strong> 3,300,000 ASLX (fixed)</li>
              </ul>

              <h3>5.1 Token Allocation</h3>
              <p>
                The total supply is allocated to four distinct wallets to ensure transparency and long-term project health:
              </p>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-border">
                  <thead>
                    <tr className="bg-secondary">
                      <th className="border border-border p-3 text-left">Allocation</th>
                      <th className="border border-border p-3 text-left">Amount</th>
                      <th className="border border-border p-3 text-left">Percentage</th>
                      <th className="border border-border p-3 text-left">Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-3"><strong>Airdrop Rewards</strong></td>
                      <td className="border border-border p-3 font-mono">2,475,000 ASLX</td>
                      <td className="border border-border p-3">75%</td>
                      <td className="border border-border p-3">This entire allocation is reserved for the community and can only be distributed through the mobile app's mining and reward mechanisms. This ensures the majority of tokens are earned by the users.</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3"><strong>Ecosystem & Treasury</strong></td>
                      <td className="border border-border p-3 font-mono">495,000 ASLX</td>
                      <td className="border border-border p-3">15%</td>
                      <td className="border border-border p-3">Funds for future development, marketing, partnerships, and community initiatives to grow the Astralux ecosystem.</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3"><strong>Liquidity Provision</strong></td>
                      <td className="border border-border p-3 font-mono">165,000 ASLX</td>
                      <td className="border border-border p-3">5%</td>
                      <td className="border border-border p-3">Reserved to provide initial liquidity on a decentralized exchange (DEX) upon listing, facilitating a stable trading environment.</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3"><strong>Team</strong></td>
                      <td className="border border-border p-3 font-mono">165,000 ASLX</td>
                      <td className="border border-border p-3">5%</td>
                      <td className="border border-border p-3">Allocated to the founding team, subject to a vesting schedule to ensure long-term commitment to the project's success.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Technical Architecture */}
          <Card>
            <CardHeader>
              <CardTitle>6. Technical Architecture</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                The Astralux platform is built on a modern, scalable, and secure technology stack:
              </p>
              <ul>
                <li><strong>Mobile Application:</strong> Developed using Flutter, allowing for a consistent, high-performance experience on both iOS and Android from a single codebase. State management is handled by Riverpod for a reactive and predictable UI.</li>
                <li><strong>Backend:</strong> Powered by Firebase, utilizing secure Firestore databases for user data and state, and Cloud Functions for server-side validation of critical logic like mining, rewards, and withdrawal requests.</li>
                <li><strong>Blockchain:</strong> The ASLX token is deployed on the Polygon network, chosen for its low transaction fees, high throughput, and robust EVM compatibility.</li>
                <li><strong>Smart Contract:</strong> The ASLX token contract is a standard ERC-20 with an added batchTransfer function to efficiently process community airdrops in a gas-optimized manner.</li>
              </ul>
            </CardContent>
          </Card>

          {/* Roadmap */}
          <Card>
            <CardHeader>
              <CardTitle>7. Roadmap</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                Our development is structured into distinct phases, moving from launch to full decentralization:
              </p>
              
              <h3>✅ Phase 0: Foundation (Completed)</h3>
              <ul>
                <li>ASLX Smart Contract deployed on the Polygon network.</li>
                <li>Token supply distributed to allocation wallets.</li>
                <li>Core mobile application architecture and backend infrastructure established.</li>
              </ul>

              <h3>⏳ Phase 1: Mainnet Launch (In Progress)</h3>
              <ul>
                <li>Public launch of the Astralux app on iOS and Android with core mining functionality.</li>
                <li>Implementation of Google Sign-In with a welcome bonus.</li>
                <li>Activation of the 10-day streak bonus system.</li>
              </ul>

              <h3>🚀 Phase 2: Growth & Economy</h3>
              <ul>
                <li>Launch of the high-value referral program.</li>
                <li>Activation of the in-app wallet for Mini-to-ASLX conversion and withdrawal requests.</li>
                <li>Implementation of deep linking for seamless referral onboarding.</li>
              </ul>

              <h3>🔮 Phase 3: Full On-Chain Integration</h3>
              <ul>
                <li>Integration of a secure, in-app EVM wallet for users to create or import their own Polygon address.</li>
                <li>Display of live on-chain ASLX balances directly within the app.</li>
                <li>Activation of automated, batched airdrops for processing withdrawals.</li>
              </ul>

              <h3>🌟 Phase 4: Ecosystem Expansion & Listing</h3>
              <ul>
                <li>Pursue listing on a decentralized exchange (DEX) after a critical mass of tokens has been distributed to the community.</li>
                <li>Provide liquidity to create a stable trading market.</li>
                <li>Explore community governance models and utility-expanding partnerships.</li>
              </ul>
            </CardContent>
          </Card>

          {/* Disclaimer */}
          <Card>
            <CardHeader>
              <CardTitle>8. Disclaimer</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-sm text-muted-foreground">
                This whitepaper is for informational purposes only and does not constitute an offer to sell, a solicitation of an offer to buy, or a recommendation for any security or investment product. The information presented is not investment advice. The Astralux team makes no warranties or representations as to the success of the project. Digital assets are subject to a number of risks, including price volatility and loss of principal. Please conduct your own research before participating in the Astralux ecosystem.
              </p>
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