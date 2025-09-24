export default function About() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
            About Astralux
          </h1>
        </div>

        <div className="space-y-12">
          {/* Mission Section */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-primary">
              Our Mission: Democratizing Cryptocurrency for Everyone
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Astralux, our mission is to dismantle the barriers to entry in the world of cryptocurrency. We believe that access to the future of digital finance should be open to all, not just a select few. We've designed the Astralux app from the ground up to be the simplest, most secure, and most rewarding gateway for anyone to begin their crypto journey, regardless of their technical expertise or financial standing.
            </p>
          </section>

          {/* What is Astralux Section */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-primary">
              What is Astralux?
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Astralux is a free-to-use mobile application that allows you to earn real cryptocurrency, the Astralux token (ASLX), through a simple and engaging process we call mobile mining.
              </p>
              <p>
                By tapping a button in the app once an hour, you earn our in-app currency, ASLX mini. These ASLX mini tokens are your reward for contributing to the network. Once you've collected enough, you can convert them into real ASLX tokens, which are yours to hold, trade, or use on the Polygon blockchain.
              </p>
              <p>
                The entire ecosystem is powered by ad revenue, meaning you never have to invest your own money to get started. Your time and engagement are what fuel the platform.
              </p>
            </div>
          </section>

          {/* Philosophy Section */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-primary">
              The Astralux Philosophy: Our Core Principles
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We are guided by a set of core principles that ensure our platform is fair, secure, and built for the long term.
            </p>
            
            <div className="space-y-8">
              {/* Community-First Tokenomics */}
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-2xl font-semibold mb-3 text-foreground">Community-First Tokenomics</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our project is fundamentally centered around our users. An unprecedented 75% of the total token supply (2,475,000 ASLX) is allocated directly to the Airdrop Rewards wallet. This isn't just a platform; it's a community-owned economy where the vast majority of value is distributed to the users who build it.
                </p>
              </div>

              {/* Fair and Free Access */}
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-2xl font-semibold mb-3 text-foreground">Fair and Free Access</h3>
                <p className="text-muted-foreground leading-relaxed">
                  True accessibility means no financial barriers. The Astralux project's operational costs and revenue are covered exclusively by advertisements shown during the mining process. This ensures a level playing field where anyone with a smartphone can participate and earn without any upfront investment.
                </p>
              </div>

              {/* Unyielding Security */}
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-2xl font-semibold mb-3 text-foreground">Unyielding Security</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Your assets and trust are paramount. Astralux is built with institutional-grade security measures at every level.
                </p>
                <ul className="space-y-2 text-muted-foreground ml-4">
                  <li><strong>On-Device Protection:</strong> We implement secure, encrypted storage for your wallet credentials, protected by biometric authentication (Face ID or fingerprint).</li>
                  <li><strong>Server-Side Validation:</strong> All critical actions, such as mining claims and conversions, are validated on the server to prevent cheating and ensure the integrity of the economy.</li>
                  <li><strong>Robust Architecture:</strong> The app is built on a modern, production-ready technology stack (Flutter, Firebase, Riverpod) to deliver a stable and reliable experience.</li>
                </ul>
              </div>

              {/* Built on Proven Technology */}
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-2xl font-semibold mb-3 text-foreground">Built on Proven Technology</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Astralux (ASLX) is an ERC-20 token built on the Polygon network. We chose Polygon for its low transaction fees, high speed, and robust security, ensuring that when you withdraw your tokens, the process is both efficient and affordable.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}