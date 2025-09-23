import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Privacy() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-xl text-muted-foreground">
            Last updated: December 15, 2024
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Introduction</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                Astralux Foundation ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and website (collectively, the "Service").
              </p>
              <p>
                By using our Service, you consent to the data practices described in this Privacy Policy. If you do not agree with the practices described in this Privacy Policy, please do not access or use our Service.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Information We Collect</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-none">
              <h3>Personal Information</h3>
              <p>When you create an account or use our Service, we may collect:</p>
              <ul>
                <li>Email address for account creation and communication</li>
                <li>Google account information (if you choose to sign in with Google)</li>
                <li>Wallet addresses for token distribution</li>
                <li>Contact information when you reach out for support</li>
              </ul>

              <h3>Device Information</h3>
              <p>We automatically collect certain information about your device and usage:</p>
              <ul>
                <li>Device identifiers (for anti-fraud and fair usage enforcement)</li>
                <li>IP address and general location information</li>
                <li>App usage statistics and interaction data</li>
                <li>Device type, operating system, and app version</li>
              </ul>

              <h3>Ad Interaction Data</h3>
              <p>When you watch rewarded advertisements:</p>
              <ul>
                <li>Ad completion status and interaction metrics</li>
                <li>Advertising identifiers provided by your device</li>
                <li>General demographic information for ad targeting</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-none">
              <p>We use the collected information for the following purposes:</p>
              <ul>
                <li><strong>Service Provision:</strong> To provide and maintain our earning platform</li>
                <li><strong>Token Distribution:</strong> To process and distribute ASLX token airdrops</li>
                <li><strong>Fair Usage:</strong> To prevent abuse and ensure fair token distribution</li>
                <li><strong>Communication:</strong> To send important updates about your account and the service</li>
                <li><strong>Customer Support:</strong> To respond to your inquiries and provide assistance</li>
                <li><strong>Analytics:</strong> To understand how users interact with our Service and improve it</li>
                <li><strong>Legal Compliance:</strong> To comply with applicable laws and regulations</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Information Sharing and Disclosure</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-none">
              <p>We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:</p>
              
              <h3>Service Providers</h3>
              <p>We may share information with trusted third-party service providers who assist us in:</p>
              <ul>
                <li>Ad network partnerships for rewarded advertisement delivery</li>
                <li>Cloud hosting and data storage (Firebase, Google Cloud)</li>
                <li>Analytics and app performance monitoring</li>
                <li>Customer support and communication tools</li>
              </ul>

              <h3>Legal Requirements</h3>
              <p>We may disclose your information if required to do so by law or in the good faith belief that such action is necessary to:</p>
              <ul>
                <li>Comply with legal process or government requests</li>
                <li>Protect and defend our rights or property</li>
                <li>Prevent fraud or abuse of our Service</li>
                <li>Protect the personal safety of users or the public</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Data Security</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-none">
              <p>We implement appropriate security measures to protect your personal information:</p>
              <ul>
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Access controls and authentication requirements</li>
                <li>Secure cloud infrastructure with industry-standard protections</li>
              </ul>
              <p>However, please note that no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Your Privacy Rights</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-none">
              <p>Depending on your location, you may have the following rights regarding your personal information:</p>
              <ul>
                <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal requirements)</li>
                <li><strong>Portability:</strong> Request transfer of your data to another service provider</li>
                <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
              </ul>
              <p>To exercise these rights, please contact us at privacy@astralux.org.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Data Retention</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-none">
              <p>We retain your personal information only as long as necessary to:</p>
              <ul>
                <li>Provide our Service and fulfill the purposes outlined in this Privacy Policy</li>
                <li>Comply with legal obligations and resolve disputes</li>
                <li>Prevent fraud and maintain security</li>
              </ul>
              <p>Account data is typically retained for the duration of your active use of the Service plus 3 years after account closure, unless longer retention is required by law.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Children's Privacy</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-none">
              <p>Our Service is not intended for children under the age of 13 (or the minimum age in your jurisdiction). We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>International Data Transfers</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-none">
              <p>Your information may be transferred to and stored on servers located outside your country of residence. By using our Service, you consent to such transfers. We ensure that appropriate safeguards are in place to protect your information during international transfers.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Changes to This Privacy Policy</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-none">
              <p>We may update this Privacy Policy from time to time. We will notify you of any material changes by:</p>
              <ul>
                <li>Posting the updated Privacy Policy on our website</li>
                <li>Sending an email notification to your registered email address</li>
                <li>Displaying a prominent notice in our mobile application</li>
              </ul>
              <p>Your continued use of the Service after any changes constitutes acceptance of the updated Privacy Policy.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-none">
              <p>If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
              <ul>
                <li><strong>Email:</strong> privacy@astralux.org</li>
                <li><strong>Support:</strong> <a href="/support" className="text-primary hover:text-primary/80">Submit a support ticket</a></li>
                <li><strong>Discord:</strong> <a href="https://discord.gg/astralux" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary/80">Join our community</a></li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
