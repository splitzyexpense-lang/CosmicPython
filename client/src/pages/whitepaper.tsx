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
          {/* Overview */}
          <Card>
            <CardHeader>
              <CardTitle>Overview</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-none space-y-4">
              <p className="text-justify leading-relaxed">
                The Astralux project, detailed in its version 1.0 whitepaper, introduces a mobile-first platform designed to simplify cryptocurrency adoption. Its core is a gamified mobile application where users can earn the ASLX cryptocurrency token through a simulated mining experience. This model is sustained by rewarded advertising, which removes the financial risks and technical hurdles often associated with digital assets. ASLX is an ERC-20 token built on the Polygon network, featuring a fixed supply of 3,300,000 tokens, with 75% reserved for community distribution to ensure a fair and widespread launch.
              </p>
            </CardContent>
          </Card>

          {/* Problem & Solution */}
          <Card>
            <CardHeader>
              <CardTitle>Problem & Solution</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-none space-y-4">
              <p className="text-justify leading-relaxed">
                Astralux aims to solve several key problems that hinder mainstream crypto adoption, including financial risk from market volatility, the technical complexity of managing wallets, information overload from industry jargon, and the prevalence of scams targeting new users. The platform provides a risk-free and user-friendly on-ramp to Web3, allowing users to learn fundamental crypto concepts in a controlled environment. Token distribution is based on active engagement within the app, ensuring that cryptocurrency reaches engaged community members rather than being concentrated among early investors.
              </p>
            </CardContent>
          </Card>

          {/* Core Mechanics */}
          <Card>
            <CardHeader>
              <CardTitle>Core Mechanics</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-none space-y-4">
              <p className="text-justify leading-relaxed">
                The platform's core mechanics are centered around a sustainable dual-token system. Users earn ASLX Mini, a centralized, off-chain reward currency, through their in-app activities. This can later be converted into ASLX, the official on-chain ERC-20 token that holds real-world value, at a rate of 1,000 ASLX Mini for 1 ASLX. The primary method of earning is a simple mining cycle: a user taps to start a session, watches a short rewarded advertisement, and receives 1 ASLX Mini, after which there is a 1-hour cooldown before the next session can begin. Additional bonuses include a 10-day streak bonus of 100 ASLX Mini and referral rewards of 250 ASLX Mini per successful referral. For security, withdrawals require a minimum of 10 ASLX and phone number verification.
              </p>
            </CardContent>
          </Card>

          {/* Tokenomics */}
          <Card>
            <CardHeader>
              <CardTitle>Tokenomics</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-none space-y-4">
              <p className="text-justify leading-relaxed">
                The tokenomics for Astralux (ASLX) are clearly defined. It is an ERC-20 token on the Polygon network with a fixed total supply of 3,300,000. The token allocation is heavily weighted towards the community, with 75% (2,475,000 ASLX) reserved for airdrop rewards distributed through the app. An additional 15% (495,000 ASLX) is allocated to the Ecosystem & Treasury fund for future development, marketing, and partnerships. For market stability, 5% (165,000 ASLX) is set aside for providing initial liquidity on decentralized exchanges, while the remaining 5% (165,000 ASLX) is allocated to the founding team under a vesting schedule to ensure long-term commitment to the project's success.
              </p>
            </CardContent>
          </Card>

          {/* Technical Architecture */}
          <Card>
            <CardHeader>
              <CardTitle>Technical Architecture</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-none space-y-4">
              <p className="text-justify leading-relaxed">
                The technical architecture is built on a modern and scalable stack. The cross-platform mobile app for iOS and Android is developed using Flutter with Riverpod for state management. The backend infrastructure is powered by Google Firebase, utilizing Firestore for the database and Cloud Functions for secure, server-side operations. The ASLX smart contract is deployed on the Polygon network to leverage its low transaction fees and high throughput, and it includes a batchTransfer function for efficient gas-optimized airdrop processing to the community.
              </p>
            </CardContent>
          </Card>

          {/* Roadmap */}
          <Card>
            <CardHeader>
              <CardTitle>Roadmap</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-none space-y-4">
              <p className="text-justify leading-relaxed">
                The project's roadmap is structured in several phases. Phase 0, which included smart contract deployment and setting up the core infrastructure, is complete. The project is currently in Phase 1, focusing on the public launch of the mobile apps and the implementation of key features like Google Sign-In and streak bonuses. Phase 2 will concentrate on growth by launching the referral program and enabling in-app token conversion and withdrawal requests. Following this, Phase 3 will integrate secure in-app EVM wallets and display live on-chain balances, while Phase 4 will focus on ecosystem expansion, including DEX listings, liquidity provision, and exploring community governance models.
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