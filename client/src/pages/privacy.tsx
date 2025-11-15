import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Privacy() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
            Astralux Privacy Policy
          </h1>
          <p className="text-xl text-muted-foreground">
            Effective Date: September 24, 2025
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Introduction</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                Welcome to Astralux ("we," "us," or "our"). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application (the "App") and our services. Please read this policy carefully.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>1. Information We Collect</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-none">
              <p>We collect information that is essential for the functionality of the App and to provide you with our services.</p>
              
              <p><strong>A. Information You Provide Directly:</strong></p>
              <p>
                Account Information: When you create an account using Google Sign-In, we collect your display name and photo URL as provided by Google. We also generate a unique user ID and store timestamps for when your account was created and when you last logged in.
                Phone Number: To enable the withdrawal feature and enhance account security, we require you to verify your phone number. We store your verified phone number and a verification status flag (isPhoneVerified) associated with your account.
                Wallet Address: When you create or import a wallet within the App, your public EVM wallet address is linked to your user profile in our database to facilitate the withdrawal of ASLX tokens.
              </p>
              
              <p><strong>B. Information Collected Automatically:</strong></p>
              <p>
                Usage and App Data: We automatically collect data related to your in-app activity. This includes your "ASLX mini" balance, your real "ASLX" balance, mining session timestamps, your 10-day streak progress, and your global rank. We also log transaction history for conversions and withdrawals.
                Referral Information: If you participate in our referral program, we track the users you have invited and their progress towards meeting the referral bonus conditions (mining at least 200 app coins).
                Device and Analytics Information: We use services like Firebase Analytics to collect data about your device, such as your device model, operating system, and general usage patterns, to help us improve the App.
              </p>
              
              <p><strong>C. Information Stored Locally on Your Device:</strong></p>
              <p>
                Secure Wallet Credentials: When you create a wallet, your BIP-39 mnemonic (seed phrase) is generated and stored in your device's encrypted secure storage (flutter_secure_storage). We never have access to, transmit, or store your private keys or seed phrases on our servers. Access to this information on your device is protected by biometric authentication (Face ID or Fingerprint).
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-none">
              <p>We use the information we collect for the following purposes:</p>
              <p>
                To Provide and Manage the Service: To operate the mining function, manage your in-app balances, process conversions from "ASLX mini" to ASLX tokens, and facilitate withdrawal requests.
                To Secure Your Account: To authenticate you, prevent fraud, and secure your account through measures like required phone verification for withdrawals.
                To Communicate With You: To send you push notifications about your mining status or referral reminders, which you can manage in the App's settings.
                To Support Our Business Model: The App's operation and your rewards are funded exclusively by showing advertisements from Google Mobile Ads. Information may be used by our ad partners to provide relevant ads.
                To Improve Our App: To analyze usage trends and feedback to enhance the user experience and develop new features.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. How We Share Your Information</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-none">
              <p>We do not sell your personal information. We may share your information in the following situations:</p>
              <p>
                With Service Providers: We share information with third-party vendors and service providers that support our business, such as Google (for Firebase services like Authentication, Firestore, and Analytics) and Google Mobile Ads.
                For Legal Reasons: We may disclose your information if required to do so by law or in response to valid requests by public authorities.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Data Security</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                We implement a variety of security measures to maintain the safety of your personal information. Our backend infrastructure utilizes Firestore Security Rules to protect your data from unauthorized access. Sensitive information, such as your wallet's seed phrase, is stored only on your device in an encrypted format. However, please be aware that no method of transmission over the internet or method of electronic storage is 100% secure.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Your Choices and Rights</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-none">
              <p>You have certain rights regarding the personal information we hold about you. You can:</p>
              <p>
                Access and update your profile information through the App.
                Manage your push notification preferences in the App's settings.
                Log out of your account or request account deletion.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Children's Privacy</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                Our services are not intended for individuals under the age of 13. We do not knowingly collect personal information from children under 13.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. Changes to This Privacy Policy</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Effective Date" at the top.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>8. Your Rights Under GDPR (EU Users)</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-none">
              <p>If you are located in the European Economic Area (EEA), you have the following rights under the General Data Protection Regulation (GDPR):</p>
              
              <p><strong>Right to Access</strong></p>
              <ul>
                <li>You can request a copy of all personal data we hold about you</li>
                <li>Contact us at <a href="mailto:privacy@getastralux.com" className="text-primary hover:underline" data-testid="link-privacy-email">privacy@getastralux.com</a> to request your data</li>
              </ul>

              <p><strong>Right to Rectification</strong></p>
              <ul>
                <li>You can update incorrect information through the App settings</li>
                <li>Request corrections by contacting our support team</li>
              </ul>

              <p><strong>Right to Erasure (Right to be Forgotten)</strong></p>
              <ul>
                <li>You can request deletion of your account and associated data</li>
                <li>Email <a href="mailto:privacy@getastralux.com" className="text-primary hover:underline">privacy@getastralux.com</a> with "Delete My Account" in the subject</li>
                <li>Some data may be retained for legal compliance (e.g., transaction records)</li>
              </ul>

              <p><strong>Right to Data Portability</strong></p>
              <ul>
                <li>You can export your wallet data using the "Export Wallet" feature in-app</li>
                <li>Request a full data export by contacting <a href="mailto:privacy@getastralux.com" className="text-primary hover:underline">privacy@getastralux.com</a></li>
                <li>Data will be provided in JSON or CSV format within 30 days</li>
              </ul>

              <p><strong>Right to Restriction of Processing</strong></p>
              <ul>
                <li>You can limit how we process your data in certain circumstances</li>
                <li>Contact us to discuss specific restrictions</li>
              </ul>

              <p><strong>Right to Object</strong></p>
              <ul>
                <li>You can object to processing based on legitimate interests</li>
                <li>You can opt out of marketing communications</li>
                <li>You can disable analytics tracking in App settings</li>
              </ul>

              <p><strong>Right to Withdraw Consent</strong></p>
              <ul>
                <li>Where we rely on consent, you can withdraw it at any time</li>
                <li>Withdrawing consent does not affect prior processing</li>
              </ul>

              <p><strong>Right to Lodge a Complaint</strong></p>
              <ul>
                <li>You can file a complaint with your local data protection authority</li>
                <li>Find your authority at: <a href="https://edpb.europa.eu/about-edpb/board/members_en" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline" data-testid="link-edpb">EDPB Members</a></li>
              </ul>

              <p><strong>How to Exercise Your Rights</strong></p>
              <p>To exercise any of these rights, contact us at:</p>
              <ul>
                <li><strong>Email:</strong> <a href="mailto:privacy@getastralux.com" className="text-primary hover:underline">privacy@getastralux.com</a></li>
                <li><strong>Response Time:</strong> Within 30 days of your request</li>
                <li><strong>Verification:</strong> We may require identity verification to protect your data</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>9. Legal Basis for Processing (GDPR)</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-none">
              <p>We process your personal data based on the following legal grounds:</p>
              
              <ul>
                <li><strong>Contractual Necessity:</strong> To provide the App services you've requested (mining, conversions, withdrawals)</li>
                <li><strong>Legitimate Interests:</strong> To improve our services, prevent fraud, and ensure security</li>
                <li><strong>Consent:</strong> For marketing communications and optional features (can be withdrawn anytime)</li>
                <li><strong>Legal Obligations:</strong> To comply with financial regulations and legal requirements</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>10. Data Retention (GDPR)</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-none">
              <ul>
                <li><strong>Account Data:</strong> Retained while your account is active</li>
                <li><strong>Transaction Records:</strong> Retained for 7 years for legal/tax compliance</li>
                <li><strong>Analytics Data:</strong> Anonymized after 24 months</li>
                <li><strong>Deleted Accounts:</strong> Personal data erased within 90 days of deletion request</li>
                <li><strong>Blockchain Data:</strong> On-chain transactions are permanent and cannot be deleted</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>11. Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                If you have any questions about this Privacy Policy, please contact us at{' '}
                <a 
                  href="mailto:privacy@getastralux.com" 
                  className="text-primary hover:underline"
                  data-testid="link-privacy-contact"
                >
                  privacy@getastralux.com
                </a>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}