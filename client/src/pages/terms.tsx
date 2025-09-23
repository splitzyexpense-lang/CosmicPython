import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Terms() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
            Terms of Service
          </h1>
          <p className="text-xl text-muted-foreground">
            Last updated: December 15, 2024
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Agreement to Terms</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                These Terms of Service ("Terms") govern your use of the Astralux mobile application and website (the "Service") operated by Astralux Foundation ("we," "us," or "our"). By accessing or using our Service, you agree to be bound by these Terms.
              </p>
              <p>
                If you disagree with any part of these Terms, then you may not access the Service. These Terms apply to all visitors, users, and others who access or use the Service.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Eligibility</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-none">
              <p>To use our Service, you must:</p>
              <ul>
                <li>Be at least 18 years old (or the age of majority in your jurisdiction)</li>
                <li>Have the legal capacity to enter into a binding contract</li>
                <li>Not be prohibited from using the Service under applicable laws</li>
                <li>Reside in a jurisdiction where cryptocurrency activities are legal</li>
                <li>Provide accurate and truthful information during registration</li>
              </ul>
              <p>By using the Service, you represent and warrant that you meet these eligibility requirements.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Account Registration and Security</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-none">
              <h3>Account Creation</h3>
              <p>To access certain features of the Service, you must create an account. You agree to:</p>
              <ul>
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain and update your information as needed</li>
                <li>Maintain only one account per person</li>
                <li>Not share your account with others</li>
              </ul>

              <h3>Account Security</h3>
              <p>You are responsible for:</p>
              <ul>
                <li>Maintaining the confidentiality of your account credentials</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of any unauthorized access</li>
                <li>Ensuring your device security and wallet protection</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>ASLX Tokens and Earning Mechanism</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-none">
              <h3>Token Nature</h3>
              <p>ASLX tokens are utility tokens designed for ecosystem participation. They are not:</p>
              <ul>
                <li>Investment securities or financial instruments</li>
                <li>Guaranteed to have any specific value</li>
                <li>Promises of future profits or returns</li>
                <li>Legal tender or currency</li>
              </ul>

              <h3>Earning Through Advertisements</h3>
              <p>Users can earn mini-tokens by watching rewarded advertisements. We reserve the right to:</p>
              <ul>
                <li>Set daily limits on ad views and earnings</li>
                <li>Modify reward rates and earning mechanisms</li>
                <li>Suspend or terminate accounts for abuse</li>
                <li>Implement anti-fraud measures</li>
              </ul>

              <h3>Token Distribution</h3>
              <p>Airdrops are processed in batches and subject to:</p>
              <ul>
                <li>Verification of legitimate earning activity</li>
                <li>Network conditions and gas fees</li>
                <li>Our operational schedules and procedures</li>
                <li>Compliance with applicable regulations</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Prohibited Conduct</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-none">
              <p>You agree not to engage in any of the following prohibited activities:</p>
              <ul>
                <li>Creating multiple accounts or using automated systems</li>
                <li>Manipulating or exploiting the earning mechanism</li>
                <li>Using VPNs or other tools to circumvent geographic restrictions</li>
                <li>Engaging in fraudulent or deceptive practices</li>
                <li>Violating any applicable laws or regulations</li>
                <li>Interfering with the Service's operation or security</li>
                <li>Harassing or abusing other users or our support team</li>
                <li>Attempting to reverse engineer or hack the Service</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Intellectual Property Rights</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-none">
              <p>The Service and its original content, features, and functionality are owned by Astralux Foundation and are protected by international copyright, trademark, and other intellectual property laws.</p>
              <p>You may not:</p>
              <ul>
                <li>Copy, modify, or distribute our content without permission</li>
                <li>Use our trademarks or logos without authorization</li>
                <li>Create derivative works based on our Service</li>
                <li>Remove or alter any proprietary notices</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Third-Party Services</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-none">
              <p>Our Service may contain links to third-party websites, applications, or services, including:</p>
              <ul>
                <li>Cryptocurrency wallets and exchanges</li>
                <li>Advertisement networks and partners</li>
                <li>Social media platforms</li>
                <li>Analytics and support tools</li>
              </ul>
              <p>We are not responsible for the content, privacy policies, or practices of any third-party services. Your use of third-party services is at your own risk.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Disclaimers and Risks</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-none">
              <h3>Service Availability</h3>
              <p>We provide the Service on an "as is" and "as available" basis. We do not warrant that:</p>
              <ul>
                <li>The Service will be uninterrupted or error-free</li>
                <li>All features will always be available</li>
                <li>Token values will remain stable or increase</li>
                <li>Earnings will continue at current rates</li>
              </ul>

              <h3>Cryptocurrency Risks</h3>
              <p>Cryptocurrency activities involve significant risks, including:</p>
              <ul>
                <li>Price volatility and potential total loss of value</li>
                <li>Regulatory changes that may affect token utility</li>
                <li>Technical risks related to blockchain technology</li>
                <li>Market risks and lack of liquidity</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-none">
              <p>To the maximum extent permitted by law, Astralux Foundation and its affiliates shall not be liable for any:</p>
              <ul>
                <li>Indirect, incidental, or consequential damages</li>
                <li>Loss of profits, data, or business opportunities</li>
                <li>Damages resulting from third-party actions</li>
                <li>Technical failures or service interruptions</li>
                <li>Cryptocurrency price fluctuations or market losses</li>
              </ul>
              <p>Our total liability for any claims related to the Service shall not exceed $100 USD.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Termination</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-none">
              <p>We may terminate or suspend your account and access to the Service immediately, without prior notice, for any reason, including:</p>
              <ul>
                <li>Violation of these Terms</li>
                <li>Fraudulent or abusive behavior</li>
                <li>Legal or regulatory requirements</li>
                <li>Extended periods of inactivity</li>
              </ul>
              <p>Upon termination, your right to use the Service ceases immediately. However, earned tokens already distributed to your wallet remain yours.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Governing Law and Disputes</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-none">
              <p>These Terms shall be governed by and construed in accordance with the laws of [Jurisdiction], without regard to conflict of law principles.</p>
              <p>Any disputes arising from or relating to these Terms or the Service shall be resolved through binding arbitration, except for:</p>
              <ul>
                <li>Claims for injunctive relief</li>
                <li>Intellectual property disputes</li>
                <li>Small claims court matters</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Changes to Terms</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-none">
              <p>We reserve the right to modify or replace these Terms at any time. We will provide notice of material changes by:</p>
              <ul>
                <li>Posting updated Terms on our website</li>
                <li>Sending email notifications to registered users</li>
                <li>Displaying notices within the mobile application</li>
              </ul>
              <p>Your continued use of the Service after any changes constitutes acceptance of the new Terms.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-none">
              <p>If you have any questions about these Terms, please contact us:</p>
              <ul>
                <li><strong>Email:</strong> legal@astralux.org</li>
                <li><strong>Support:</strong> <a href="/support" className="text-primary hover:text-primary/80">Submit a support ticket</a></li>
                <li><strong>Address:</strong> [Company Address]</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
