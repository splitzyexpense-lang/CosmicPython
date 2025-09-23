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
              
              <h3>A. Information You Provide Directly:</h3>
              <p><strong>Account Information:</strong> When you create an account using Google Sign-In, we collect your display name and photo URL as provided by Google. We also generate a unique user ID and store timestamps for when your account was created and when you last logged in.</p>
              
              <p><strong>Phone Number:</strong> To enable the withdrawal feature and enhance account security, we require you to verify your phone number. We store your verified phone number and a verification status flag (isPhoneVerified) associated with your account.</p>
              
              <p><strong>Wallet Address:</strong> When you create or import a wallet within the App, your public EVM wallet address is linked to your user profile in our database to facilitate the withdrawal of ASLX tokens.</p>

              <h3>B. Information Collected Automatically:</h3>
              <p><strong>Usage and App Data:</strong> We automatically collect data related to your in-app activity. This includes your "ASLX mini" balance, your real "ASLX" balance, mining session timestamps, your 10-day streak progress, and your global rank. We also log transaction history for conversions and withdrawals.</p>
              
              <p><strong>Referral Information:</strong> If you participate in our referral program, we track the users you have invited and their progress towards meeting the referral bonus conditions (mining at least 200 app coins).</p>
              
              <p><strong>Device and Analytics Information:</strong> We use services like Firebase Analytics to collect data about your device, such as your device model, operating system, and general usage patterns, to help us improve the App.</p>

              <h3>C. Information Stored Locally on Your Device:</h3>
              <p><strong>Secure Wallet Credentials:</strong> When you create a wallet, your BIP-39 mnemonic (seed phrase) is generated and stored in your device's encrypted secure storage (flutter_secure_storage). We never have access to, transmit, or store your private keys or seed phrases on our servers. Access to this information on your device is protected by biometric authentication (Face ID or Fingerprint).</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-none">
              <p>We use the information we collect for the following purposes:</p>
              <ul>
                <li><strong>To Provide and Manage the Service:</strong> To operate the mining function, manage your in-app balances, process conversions from "ASLX mini" to ASLX tokens, and facilitate withdrawal requests.</li>
                <li><strong>To Secure Your Account:</strong> To authenticate you, prevent fraud, and secure your account through measures like required phone verification for withdrawals.</li>
                <li><strong>To Communicate With You:</strong> To send you push notifications about your mining status or referral reminders, which you can manage in the App's settings.</li>
                <li><strong>To Support Our Business Model:</strong> The App's operation and your rewards are funded exclusively by showing advertisements from Google Mobile Ads. Information may be used by our ad partners to provide relevant ads.</li>
                <li><strong>To Improve Our App:</strong> To analyze usage trends and feedback to enhance the user experience and develop new features.</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. How We Share Your Information</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-none">
              <p>We do not sell your personal information. We may share your information in the following situations:</p>
              <ul>
                <li><strong>With Service Providers:</strong> We share information with third-party vendors and service providers that support our business, such as Google (for Firebase services like Authentication, Firestore, and Analytics) and Google Mobile Ads.</li>
                <li><strong>For Legal Reasons:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities.</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Data Security</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-none">
              <p>We implement a variety of security measures to maintain the safety of your personal information. Our backend infrastructure utilizes Firestore Security Rules to protect your data from unauthorized access. Sensitive information, such as your wallet's seed phrase, is stored only on your device in an encrypted format. However, please be aware that no method of transmission over the internet or method of electronic storage is 100% secure.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Your Choices and Rights</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-none">
              <p>You have certain rights regarding the personal information we hold about you. You can:</p>
              <ul>
                <li>Access and update your profile information through the App.</li>
                <li>Manage your push notification preferences in the App's settings.</li>
                <li>Log out of your account or request account deletion.</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Children's Privacy</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-none">
              <p>Our services are not intended for individuals under the age of 13. We do not knowingly collect personal information from children under 13.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. Changes to This Privacy Policy</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-none">
              <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Effective Date" at the top.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>8. Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-none">
              <p>If you have any questions about this Privacy Policy, please contact us through the support channels provided on our website.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}