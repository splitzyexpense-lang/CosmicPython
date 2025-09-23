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
            Astralux (ASLX) White Paper
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
                Astralux is a mobile application designed to democratize access to cryptocurrency by introducing a novel "proof-of-engagement" mining model. It removes the traditional barriers to entry—such as expensive hardware, technical expertise, and financial risk—by allowing users to earn cryptocurrency tokens simply by engaging with the app. Users mine an in-app currency, "ASLX mini," which can later be converted into the on-chain Astralux (ASLX) token. The entire ecosystem is powered by the established mobile advertising economy, ensuring both sustainability and scalability.
              </p>
            </CardContent>
          </Card>

          {/* Introduction */}
          <Card>
            <CardHeader>
              <CardTitle>1. Introduction</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-none">
              <h3>1.1 The Problem</h3>
              <p>
                For many, the world of cryptocurrency remains inaccessible. Traditional "proof-of-work" mining demands significant computational power, leading to high energy consumption and substantial hardware costs. Newer models have lowered some barriers, but the inherent complexity of blockchain technology, wallet management, and market volatility still presents a steep learning curve for the average individual. This friction prevents widespread adoption and limits participation to a technically-savvy elite.
              </p>
              
              <h3>1.2 The Astralux Solution</h3>
              <p>
                Astralux offers a paradigm shift. We replace resource-intensive "proof-of-work" with user-centric "proof-of-engagement." Our solution is a free-to-use mobile application where users' time and attention are the primary resources.
              </p>
              <p>
                By watching a rewarded advertisement, users initiate a mining session and earn "ASLX mini," our in-app virtual currency. This simple, gamified process serves as an intuitive introduction to crypto-earning mechanics. Once a user accumulates a sufficient amount of ASLX mini, they can convert it into the official ASLX cryptocurrency token, which can be withdrawn to a personal on-chain wallet.
              </p>

              <h3>1.3 Our Vision</h3>
              <p>
                Our vision is to onboard the next billion users into the Web3 ecosystem. We aim to create a risk-free, educational, and rewarding environment that not only distributes cryptocurrency but also fosters a deeper understanding of its potential. Astralux is designed to be the first step in a user's crypto journey—a bridge from the familiar world of mobile apps to the decentralized economy.
              </p>
            </CardContent>
          </Card>

          {/* The Astralux Application */}
          <Card>
            <CardHeader>
              <CardTitle>2. The Astralux Application: Architecture & Features</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                The Astralux app is built on a robust and scalable technology stack designed for a global user base.
              </p>
              <ul>
                <li><strong>Mobile Framework:</strong> Flutter, for a seamless, native experience on both Android and iOS from a single codebase.</li>
                <li><strong>Backend Infrastructure:</strong> Google Firebase, leveraging its comprehensive suite of tools including Firestore for the database, Firebase Authentication for secure user management, and Cloud Functions for serverless backend logic.</li>
                <li><strong>Blockchain Network:</strong> Polygon, an Ethereum Virtual Machine (EVM) compatible network chosen for its low transaction fees, high throughput, and robust developer ecosystem.</li>
              </ul>

              <h3>2.1 The Mining Cycle</h3>
              <p>The core of the user experience is the mining cycle:</p>
              <ol>
                <li><strong>Initiation:</strong> The user taps the "Mine" button on the app's home screen.</li>
                <li><strong>Engagement:</strong> To start the session, the user views a rewarded advertisement.</li>
                <li><strong>Reward:</strong> Upon successful ad completion, the user is rewarded with 1 ASLX mini.</li>
                <li><strong>Cooldown:</strong> The mining function enters a 1-hour cooldown period, after which the user can initiate another session.</li>
              </ol>

              <h3>2.2 The Dual Wallet System</h3>
              <p>To ensure both user-friendliness and security, Astralux employs a dual-wallet architecture:</p>
              <ul>
                <li><strong>In-App Wallet:</strong> Automatically created for every user, this wallet holds their ASLX mini balance. It is a centralized ledger managed within the Astralux backend, allowing for instant, gas-free reward distribution.</li>
                <li><strong>On-Chain Polygon Wallet:</strong> The app includes a secure, non-custodial wallet generator. Users can create or import their own EVM-compatible wallet, where they have sole control over their private keys. This wallet is used to hold the official ASLX token after withdrawal.</li>
              </ul>

              <h3>2.3 The Conversion and Withdrawal Process</h3>
              <p>Astralux features a clear, two-step process to transition from in-app earnings to on-chain assets:</p>
              <p><strong>Step 1: Conversion</strong></p>
              <ul>
                <li>When a user accumulates 1,000 ASLX mini, they can convert them into 1 ASLX token.</li>
                <li>This conversion updates an off-chain aslxBalance in the user's account, representing their ownership of the real token before it is withdrawn.</li>
              </ul>
              <p><strong>Step 2: Withdrawal</strong></p>
              <ul>
                <li>To ensure network efficiency and security, a minimum withdrawal threshold is set at 10 ASLX.</li>
                <li>Once a user's aslxBalance reaches this minimum, they can request a withdrawal to their linked on-chain Polygon wallet address.</li>
                <li>As a crucial security measure, users must complete a one-time phone number verification (OTP) before their first withdrawal is enabled. This helps prevent fraudulent activity and secures user accounts.</li>
              </ul>

              <h3>2.4 User Growth and Engagement Mechanics</h3>
              <p>To foster a vibrant community and reward consistent participation, Astralux has integrated several bonus systems:</p>
              <ul>
                <li><strong>Streak Bonus:</strong> Users who mine consecutively for 10 days receive a bonus of 100 ASLX mini.</li>
                <li><strong>Referral Program:</strong> A user who refers a new member receives a 250 ASLX mini bonus. This reward is unlocked only after the referred user has successfully mined at least 200 ASLX mini, ensuring that referrals are of high quality and genuine engagement. Referrers can also send friendly push notification reminders to their inactive referrals.</li>
              </ul>
            </CardContent>
          </Card>

          {/* The ASLX Token */}
          <Card>
            <CardHeader>
              <CardTitle>3. The ASLX Token: Tokenomics and Utility</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                The ASLX token is the cornerstone of the Astralux economy. It is a standard ERC-20 token on the Polygon network.
              </p>
              <ul>
                <li><strong>Token Name:</strong> Astralux</li>
                <li><strong>Token Symbol:</strong> ASLX</li>
                <li><strong>Network:</strong> Polygon</li>
                <li><strong>Decimals:</strong> 18</li>
                <li><strong>Total Supply (Fixed):</strong> 3,300,000 ASLX</li>
              </ul>
              <p>
                The total supply is pre-minted and allocated to specific, purpose-driven wallets to ensure transparency and long-term project alignment.
              </p>

              <h3>3.1 Token Distribution</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-border">
                  <thead>
                    <tr className="bg-secondary">
                      <th className="border border-border p-2 text-left">Allocation</th>
                      <th className="border border-border p-2 text-left">Token Amount</th>
                      <th className="border border-border p-2 text-left">Percentage</th>
                      <th className="border border-border p-2 text-left">Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-2">Airdrop & Mining Rewards</td>
                      <td className="border border-border p-2 font-mono">2,475,000 ASLX</td>
                      <td className="border border-border p-2">75%</td>
                      <td className="border border-border p-2">The primary pool for distributing rewards to users through the mobile mining and conversion mechanism.</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-2">Ecosystem & Treasury</td>
                      <td className="border border-border p-2 font-mono">495,000 ASLX</td>
                      <td className="border border-border p-2">15%</td>
                      <td className="border border-border p-2">Funding for future development, strategic partnerships, marketing initiatives, and community grants.</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-2">Liquidity Provision</td>
                      <td className="border border-border p-2 font-mono">165,000 ASLX</td>
                      <td className="border border-border p-2">5%</td>
                      <td className="border border-border p-2">Reserved to provide initial liquidity on decentralized exchanges (DEXs), facilitating a stable market.</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-2">Team</td>
                      <td className="border border-border p-2 font-mono">165,000 ASLX</td>
                      <td className="border border-border p-2">5%</td>
                      <td className="border border-border p-2">Allocated to the founding team, subject to a vesting schedule to ensure long-term commitment.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3>3.2 Token Utility</h3>
              <p>
                The primary utility of the ASLX token is to serve as a tangible reward for user engagement within the Astralux ecosystem. Future utility planned on the roadmap includes:
              </p>
              <ul>
                <li><strong>Governance:</strong> Allowing token holders to vote on key project decisions.</li>
                <li><strong>Premium Features:</strong> Unlocking advanced features within the app.</li>
                <li><strong>Ecosystem Participation:</strong> Use as a medium of exchange in future partnerships and integrations.</li>
              </ul>
            </CardContent>
          </Card>

          {/* Economic Model */}
          <Card>
            <CardHeader>
              <CardTitle>4. Economic Model and Sustainability</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                Astralux is built on a simple and sustainable economic model. The project's operational costs and the backing for the ASLX token's value are funded entirely by revenue generated from the rewarded advertisements displayed within the app.
              </p>
              <p>This creates a virtuous cycle:</p>
              <ul>
                <li><strong>User Engagement:</strong> Users engage with the app to mine ASLX mini.</li>
                <li><strong>Ad Revenue:</strong> This engagement generates revenue from our advertising partners.</li>
                <li><strong>Value Distribution:</strong> A portion of this revenue is distributed back to the community in the form of ASLX tokens.</li>
                <li><strong>Operational Funding:</strong> The remaining revenue covers all operational costs, including server maintenance, development, and marketing.</li>
                <li><strong>Market Support:</strong> A share of the revenue will be used to support the ASLX token's liquidity and value on the open market.</li>
              </ul>
              <p>
                This model ensures that the project is not reliant on token sales or external funding, aligning its success directly with the activity and growth of its user base.
              </p>
            </CardContent>
          </Card>

          {/* Roadmap */}
          <Card>
            <CardHeader>
              <CardTitle>5. Roadmap</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                Our development is structured in distinct phases to ensure methodical progress and timely delivery of features.
              </p>
              
              <h3>✅ Phase 0: Project Setup & Foundation</h3>
              <ul>
                <li>Complete Flutter project bootstrap with multi-flavor environments.</li>
                <li>Establish a robust Riverpod state management architecture.</li>
                <li>Configure platform-specific settings for Android & iOS.</li>
              </ul>

              <h3>✅ Phase 1: Enhanced Foundation</h3>
              <ul>
                <li>Implement secure Google Sign-In with new user bonus.</li>
                <li>Deploy comprehensive Firestore security rules.</li>
                <li>Build the core mining screen UI with live state updates.</li>
              </ul>

              <h3>⏳ Phase 2: Value and Growth</h3>
              <ul>
                <li>Launch the two-step conversion and withdrawal system.</li>
                <li>Implement the high-value referral rewards program.</li>
                <li>Integrate reliable push notifications for engagement.</li>
                <li>Set up deep linking infrastructure for growth campaigns.</li>
              </ul>

              <h3>⏳ Phase 2.5: Token Deployment & Distribution</h3>
              <ul>
                <li>Deploy the official ASLX ERC-20 smart contract on the Polygon mainnet.</li>
                <li>Generate secure wallet infrastructure for treasury and rewards.</li>
                <li>Execute the initial distribution of the total supply according to tokenomics.</li>
              </ul>

              <h3>🚀 Phase 3: Crypto & Polish</h3>
              <ul>
                <li>Integrate the secure, non-custodial EVM wallet into the app.</li>
                <li>Display on-chain ASLX balance and link to block explorers.</li>
                <li>Build out a comprehensive settings screen with security and user controls.</li>
              </ul>

              <h3>Future Vision:</h3>
              <ul>
                <li>Listing ASLX on decentralized exchanges (DEXs).</li>
                <li>Introducing governance protocols for community voting.</li>
                <li>Exploring strategic partnerships to expand ASLX utility.</li>
              </ul>
            </CardContent>
          </Card>


          {/* Disclaimer */}
          <Card>
            <CardHeader>
              <CardTitle>6. Disclaimer</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-sm text-muted-foreground">
                This white paper is for informational purposes only and does not constitute an offer or solicitation to sell shares or securities. The information provided herein is not intended to be, and should not be construed as, investment advice, financial advice, or trading advice. The Astralux (ASLX) token is a utility token designed for use within the Astralux ecosystem. The value of cryptocurrencies is volatile and can go down as well as up. Please conduct your own due diligence and consult with a qualified financial advisor before making any investment decisions. Past performance is not indicative of future results.
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
