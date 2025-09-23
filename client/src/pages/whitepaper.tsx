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
            Astralux Whitepaper
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            A comprehensive overview of the Astralux ecosystem, tokenomics, and mobile-first approach to cryptocurrency earning.
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
                Astralux introduces a revolutionary mobile-first approach to cryptocurrency earning through rewarded advertisements. 
                By eliminating traditional barriers such as expensive hardware, technical complexity, and high energy consumption, 
                Astralux democratizes access to cryptocurrency for billions of smartphone users worldwide.
              </p>
              <p>
                Built on the Polygon network with a fixed supply of 3,300,000 ASLX tokens, the ecosystem prioritizes 
                sustainability, accessibility, and user empowerment. This whitepaper outlines the technical architecture, 
                economic model, and strategic roadmap for achieving mass adoption of cryptocurrency through innovative 
                mobile technology.
              </p>
            </CardContent>
          </Card>

          {/* Introduction */}
          <Card>
            <CardHeader>
              <CardTitle>1. Introduction</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-none">
              <h3>1.1 Problem Statement</h3>
              <p>
                The cryptocurrency industry faces significant barriers to mass adoption. Traditional mining requires 
                expensive hardware and consumes enormous amounts of energy. Most earning opportunities are complex, 
                require substantial technical knowledge, or demand significant upfront investment.
              </p>
              
              <h3>1.2 Market Opportunity</h3>
              <p>
                With over 6.8 billion smartphone users globally, there exists an unprecedented opportunity to create 
                accessible cryptocurrency earning mechanisms. The mobile advertising market, valued at over $350 billion 
                annually, provides a sustainable revenue model for token distribution.
              </p>

              <h3>1.3 Astralux Solution</h3>
              <p>
                Astralux bridges the gap between traditional mobile advertising and cryptocurrency by rewarding users 
                with ASLX tokens for engaging with advertisements. This creates value for users, advertisers, and the 
                ecosystem while maintaining environmental sustainability.
              </p>
            </CardContent>
          </Card>

          {/* Ecosystem Overview */}
          <Card>
            <CardHeader>
              <CardTitle>2. Ecosystem Overview</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-none">
              <h3>2.1 Core Components</h3>
              <ul>
                <li><strong>Mobile Application:</strong> Cross-platform app for iOS and Android</li>
                <li><strong>Rewarded Advertisement System:</strong> Integration with premium ad networks</li>
                <li><strong>Token Distribution Mechanism:</strong> Automated airdrop system</li>
                <li><strong>Blockchain Infrastructure:</strong> Polygon network smart contracts</li>
                <li><strong>Community Governance:</strong> Decentralized decision-making structure</li>
              </ul>

              <h3>2.2 User Journey</h3>
              <ol>
                <li>Download Astralux mobile application</li>
                <li>Create account and complete verification</li>
                <li>Watch rewarded advertisements to earn mini-tokens</li>
                <li>Accumulate 1,000 mini-tokens to convert to 1 ASLX</li>
                <li>Request airdrop to self-custody wallet</li>
                <li>Participate in staking and governance (future phases)</li>
              </ol>
            </CardContent>
          </Card>

          {/* Tokenomics */}
          <Card>
            <CardHeader>
              <CardTitle>3. Tokenomics</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-none">
              <h3>3.1 Token Specifications</h3>
              <ul>
                <li><strong>Token Name:</strong> Astralux</li>
                <li><strong>Symbol:</strong> ASLX</li>
                <li><strong>Total Supply:</strong> 3,300,000 (Fixed)</li>
                <li><strong>Decimals:</strong> 18</li>
                <li><strong>Network:</strong> Polygon (MATIC)</li>
                <li><strong>Standard:</strong> ERC-20</li>
              </ul>

              <h3>3.2 Distribution Model</h3>
              <ul>
                <li><strong>Airdrop Rewards (75%):</strong> 2,475,000 ASLX for user incentives</li>
                <li><strong>Ecosystem & Treasury (15%):</strong> 495,000 ASLX for development and partnerships</li>
                <li><strong>Liquidity (5%):</strong> 165,000 ASLX for DEX liquidity provision</li>
                <li><strong>Team Vesting (5%):</strong> 165,000 ASLX with 4-year vesting, 1-year cliff</li>
              </ul>

              <h3>3.3 Economic Sustainability</h3>
              <p>
                The fixed supply model ensures scarcity and long-term value preservation. Revenue from advertising 
                partnerships funds ongoing development and ecosystem growth without requiring additional token issuance.
              </p>
            </CardContent>
          </Card>

          {/* Technical Architecture */}
          <Card>
            <CardHeader>
              <CardTitle>4. Technical Architecture</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-none">
              <h3>4.1 Blockchain Layer</h3>
              <p>
                Astralux operates on the Polygon network, chosen for its low transaction costs, fast confirmation times, 
                and Ethereum compatibility. Smart contracts handle token distribution, staking mechanisms, and governance 
                functions with full transparency and auditability.
              </p>

              <h3>4.2 Mobile Application</h3>
              <p>
                The mobile application is built using React Native for cross-platform compatibility. Key features include:
              </p>
              <ul>
                <li>Integrated wallet functionality with self-custody options</li>
                <li>Seamless ad viewing and reward tracking</li>
                <li>Real-time token balance and transaction history</li>
                <li>Social features including referral systems</li>
              </ul>

              <h3>4.3 Backend Infrastructure</h3>
              <p>
                Cloud-based infrastructure ensures scalability and reliability. Components include:
              </p>
              <ul>
                <li>User management and authentication systems</li>
                <li>Ad serving and engagement tracking</li>
                <li>Fraud detection and prevention mechanisms</li>
                <li>Automated airdrop processing and batching</li>
              </ul>
            </CardContent>
          </Card>

          {/* Roadmap */}
          <Card>
            <CardHeader>
              <CardTitle>5. Development Roadmap</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-none">
              <h3>Phase 1: Foundation (Q4 2025)</h3>
              <ul>
                <li>Mobile application launch (iOS & Android)</li>
                <li>Smart contract deployment and audit</li>
                <li>Initial airdrop system implementation</li>
                <li>Community building and user acquisition</li>
              </ul>

              <h3>Phase 2: Expansion (Q1-Q2 2026)</h3>
              <ul>
                <li>Staking mechanism introduction</li>
                <li>Governance system deployment</li>
                <li>DEX listings and liquidity provision</li>
                <li>Strategic partnerships and integrations</li>
              </ul>

              <h3>Phase 3: Ecosystem Growth (Q3-Q4 2026)</h3>
              <ul>
                <li>Cross-chain compatibility exploration</li>
                <li>Enterprise partnership program</li>
                <li>Advanced analytics and insights</li>
                <li>Community-driven feature development</li>
              </ul>
            </CardContent>
          </Card>

          {/* Risk Factors */}
          <Card>
            <CardHeader>
              <CardTitle>6. Risk Factors and Mitigation</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-none">
              <h3>6.1 Regulatory Risks</h3>
              <p>
                Cryptocurrency regulations continue to evolve globally. Astralux maintains legal compliance through 
                proactive engagement with regulatory bodies and implementation of necessary KYC/AML procedures.
              </p>

              <h3>6.2 Technical Risks</h3>
              <p>
                Smart contract vulnerabilities and technical failures pose risks to the ecosystem. Comprehensive 
                security audits, bug bounty programs, and gradual feature rollouts minimize these risks.
              </p>

              <h3>6.3 Market Risks</h3>
              <p>
                Cryptocurrency market volatility affects token values. The utility-focused approach and fixed supply 
                model provide fundamental value beyond speculative trading.
              </p>
            </CardContent>
          </Card>

          {/* Conclusion */}
          <Card>
            <CardHeader>
              <CardTitle>7. Conclusion</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                Astralux represents a paradigm shift in cryptocurrency accessibility, leveraging the ubiquity of 
                smartphones and the value of user attention to create a sustainable earning ecosystem. By eliminating 
                traditional barriers and focusing on user experience, Astralux has the potential to onboard millions 
                of new users to the cryptocurrency space.
              </p>
              <p>
                The fixed token supply, transparent governance, and community-focused approach ensure long-term 
                sustainability and value creation for all ecosystem participants. As the mobile advertising market 
                continues to grow, Astralux is positioned to capture significant value while empowering users 
                worldwide with accessible cryptocurrency earning opportunities.
              </p>
            </CardContent>
          </Card>

          {/* Disclaimers */}
          <Card>
            <CardHeader>
              <CardTitle>Important Disclaimers</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-sm text-muted-foreground">
                <strong>Risk Warning:</strong> Cryptocurrency investments carry significant risks including potential 
                total loss of value. ASLX tokens are utility tokens, not investment securities. This whitepaper is 
                for informational purposes only and does not constitute financial advice.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Forward-Looking Statements:</strong> This document contains forward-looking statements that 
                involve risks and uncertainties. Actual results may differ materially from those expressed or implied.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Legal Compliance:</strong> Users are responsible for complying with applicable laws and 
                regulations in their jurisdiction. Astralux reserves the right to restrict access in certain regions.
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
