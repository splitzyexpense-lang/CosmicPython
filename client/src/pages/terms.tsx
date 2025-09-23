import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Terms() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
            Astralux Terms of Service
          </h1>
          <p className="text-xl text-muted-foreground">
            Last Updated: September 24, 2025
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Introduction</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                Welcome to Astralux. These Terms of Service ("Terms") govern your access to and use of the Astralux mobile application (the "App") and any related services (collectively, the "Service") provided by us. Please read these Terms carefully before using our Service.
              </p>
              <p>
                By creating an account or using our Service, you agree to be bound by these Terms. If you do not agree to these Terms, you may not use the Service.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>1. Eligibility</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                You must be at least 18 years old or the age of legal majority in your jurisdiction to create an account and use the Service. By using the Service, you represent and warrant that you meet this requirement.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. Account Registration and Security</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                To use the Service, you must create an account using Google Sign-In. You are responsible for maintaining the confidentiality of your Google account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. The Astralux Service</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                The Service allows you to earn cryptocurrency tokens through a "proof-of-engagement" model. The Service is funded entirely by revenue from advertisements shown within the App.
              </p>

              <h3>A. Mining and "ASLX mini"</h3>
              <ul>
                <li>To earn rewards, you must tap the "Mine" button in the App and successfully view a rewarded advertisement.</li>
                <li>Each successful mining session rewards your account with one (1) in-app token called "ASLX mini".</li>
                <li>After a successful mining session, the "Mine" button will be disabled for a one-hour cooldown period.</li>
                <li>"ASLX mini" are in-app tokens and do not have any monetary value outside of the Service until they are converted into ASLX tokens as described below. Your global rank within the App is based on your total "ASLX mini" balance.</li>
              </ul>

              <h3>B. Bonuses</h3>
              <ul>
                <li><strong>Sign-In Bonus:</strong> New users receive a one-time bonus of 100 ASLX mini upon their first successful sign-in.</li>
                <li><strong>Streak Bonus:</strong> You will receive a bonus of 100 ASLX mini for maintaining a continuous 10-day mining streak.</li>
                <li><strong>Referral Bonus:</strong> You will receive a bonus of 250 ASLX mini for each new user who signs up using your referral code. This bonus is only credited to your account after the referred user has successfully mined at least 200 ASLX mini themselves.</li>
              </ul>

              <h3>C. Conversion of ASLX mini to ASLX</h3>
              <ul>
                <li>You may convert your ASLX mini into the official Astralux (ASLX) cryptocurrency token.</li>
                <li>The conversion rate is fixed: 1,000 ASLX mini are required to convert into 1 ASLX token.</li>
                <li>Upon conversion, the ASLX token amount will be credited to your off-chain in-app aslxBalance.</li>
              </ul>

              <h3>D. Withdrawal of ASLX Tokens</h3>
              <ul>
                <li>You may request to withdraw your ASLX tokens from your in-app balance to a personal, on-chain cryptocurrency wallet.</li>
                <li><strong>Minimum Withdrawal Amount:</strong> A withdrawal request can only be made if your aslxBalance is at least 10 ASLX.</li>
                <li><strong>Withdrawal Prerequisites:</strong> To be eligible for a withdrawal, you must:
                  <ul>
                    <li>Have linked a valid personal EVM-compatible wallet address to your account.</li>
                    <li>Have successfully completed a one-time phone number verification process. The server will reject withdrawal requests from users who have not verified their phone number.</li>
                  </ul>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. User Conduct and Responsibilities</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-none">
              <p>You agree not to:</p>
              <ul>
                <li>Use any automated means, such as bots or scripts, to interact with the Service.</li>
                <li>Attempt to bypass the one-hour mining cooldown or any other security measures.</li>
                <li>Create multiple accounts or engage in any fraudulent activity to manipulate the rewards system.</li>
                <li>Use the Service for any illegal or unauthorized purpose.</li>
              </ul>
              <p>
                Violation of these rules may result in the suspension or termination of your account and the forfeiture of any accumulated balances.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Wallet Security</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                The App allows you to generate or import a non-custodial EVM wallet. You are solely responsible for the security of your wallet, including your private keys and mnemonic (seed) phrase. We store these credentials in an encrypted format on your device only (flutter_secure_storage) and never have access to them. We cannot recover your wallet, private keys, or any funds if you lose them.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Disclaimers</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. WE MAKE NO WARRANTIES, EXPRESS OR IMPLIED, REGARDING THE SERVICE, INCLUDING BUT NOT LIMITED TO THE FUTURE VALUE OF THE ASLX TOKEN. THE VALUE OF CRYPTOCURRENCIES IS HIGHLY VOLATILE AND CAN RESULT IN SIGNIFICANT FINANCIAL LOSS. THE SERVICE IS NOT INTENDED TO PROVIDE ANY FINANCIAL OR INVESTMENT ADVICE.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                TO THE FULLEST EXTENT PERMITTED BY LAW, IN NO EVENT WILL ASTRALUX OR ITS AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM (A) YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICE; OR (B) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION STORED THEREIN.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>8. Termination</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                We reserve the right to suspend or terminate your account at our sole discretion, without notice, for any conduct that we believe violates these Terms or is otherwise harmful to other users of the Service, us, or third parties.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>9. Changes to Terms</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                We may modify these Terms at any time. We will provide notice of such changes by updating the "Last Updated" date. Your continued use of the Service after any modification constitutes your acceptance of the new Terms.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>10. Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg dark:prose-invert max-w-none">
              <p>
                If you have any questions about these Terms, please contact us through the channels provided on our website.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}