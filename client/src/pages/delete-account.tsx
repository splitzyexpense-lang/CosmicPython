import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle, Mail, Trash2, Database, Shield, Smartphone } from "lucide-react";

export default function DeleteAccount() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full bg-destructive/10">
              <Trash2 className="w-12 h-12 text-destructive" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-destructive to-accent bg-clip-text text-transparent">
            Account Deletion Request
          </h1>
          <p className="text-xl text-muted-foreground">
            Understand what happens when you delete your Astralux account
          </p>
        </div>

        <div className="space-y-8">
          {/* Important Notice */}
          <Card className="border-destructive/50">
            <CardHeader>
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-destructive mt-1 flex-shrink-0" />
                <div>
                  <CardTitle className="text-destructive">Important: Blockchain Transactions Are Permanent</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-base">
              <p className="text-muted-foreground">
                While we can delete your personal account data, <strong className="text-foreground">blockchain transactions cannot be erased</strong>. All ASLX token transactions on the Polygon network are permanently recorded on a public, decentralized ledger. This is a fundamental characteristic of blockchain technology—not a limitation of Astralux.
              </p>
              <p className="text-muted-foreground">
                Your wallet address and all associated token transfers, conversions, and withdrawals will remain publicly visible on PolygonScan and other blockchain explorers forever.
              </p>
            </CardContent>
          </Card>

          {/* Delete From App */}
          <Card>
            <CardHeader>
              <div className="flex items-start gap-3">
                <Smartphone className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <CardTitle>Delete Account from the App</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-base">
              <p className="text-muted-foreground">
                Users can delete their entire account directly from the app's Settings screen using the <strong className="text-foreground">"Delete Account"</strong> button.
              </p>
              <p className="text-muted-foreground">
                This is the quickest and easiest way to delete your Astralux account. The in-app deletion process will immediately remove your account and all associated data from our systems.
              </p>
            </CardContent>
          </Card>

          {/* How to Request Deletion */}
          <Card>
            <CardHeader>
              <div className="flex items-start gap-3">
                <Mail className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <CardTitle>How to Request Account Deletion</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-base">
              <p className="text-muted-foreground">To delete your Astralux account, please send an email request to:</p>
              <div className="my-4">
                <Button 
                  asChild 
                  size="lg"
                  data-testid="button-email-support"
                >
                  <a href="mailto:support@getastralux.com?subject=Account%20Deletion%20Request">
                    <Mail className="w-4 h-4 mr-2" />
                    support@getastralux.com
                  </a>
                </Button>
              </div>
              <div>
                <p className="font-semibold mb-2">In your email, please include:</p>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>The email address associated with your Astralux account</li>
                  <li>Your registered phone number (if verified)</li>
                  <li>Subject line: "Account Deletion Request"</li>
                  <li>Confirmation that you understand blockchain data cannot be deleted</li>
                </ul>
              </div>
              <p className="text-muted-foreground">
                Our team will process your request and send you a confirmation email once your account data has been deleted.
              </p>
            </CardContent>
          </Card>

          {/* Data Retention Policy */}
          <Card>
            <CardHeader>
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <CardTitle>Data Retention Policy</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-base">
              <p className="text-muted-foreground">
                Upon receiving your deletion request, we will delete most of your personal data <strong className="text-foreground">within 30 days</strong>. However, some data retention is required by law or is technically impossible to delete.
              </p>
            </CardContent>
          </Card>

          {/* What Gets Deleted */}
          <Card>
            <CardHeader>
              <CardTitle className="text-green-600 dark:text-green-500">
                ✓ Data We Will Delete
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-base">
              <p className="text-muted-foreground">The following personal information will be permanently removed from our systems:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong className="text-foreground">Email Address:</strong> Your Google Sign-In email and associated authentication data</li>
                <li><strong className="text-foreground">Phone Number:</strong> Your verified phone number and verification status</li>
                <li><strong className="text-foreground">Profile Information:</strong> Display name, photo URL, and user ID</li>
                <li><strong className="text-foreground">Mining History:</strong> In-app mining sessions, streak progress, and timestamps</li>
                <li><strong className="text-foreground">Analytics Data:</strong> Firebase Analytics data, device information, and usage patterns</li>
                <li><strong className="text-foreground">Referral Information:</strong> Your referral code and referral activity records</li>
                <li><strong className="text-foreground">App Balances:</strong> Your "ASLX mini" balance and conversion records in our database</li>
              </ul>
              <p className="text-muted-foreground">
                After deletion, you will no longer be able to access your Astralux account or use the app with this identity.
              </p>
            </CardContent>
          </Card>

          {/* What Cannot Be Deleted */}
          <Card>
            <CardHeader>
              <div className="flex items-start gap-3">
                <Database className="w-6 h-6 text-amber-600 dark:text-amber-500 mt-1 flex-shrink-0" />
                <div>
                  <CardTitle className="text-amber-600 dark:text-amber-500">
                    ⚠ Data That Cannot Be Deleted
                  </CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-base">
              <p className="text-muted-foreground">
                The following information is <strong className="text-foreground">permanently stored on the Polygon blockchain</strong> and cannot be deleted by Astralux or any other entity:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong className="text-foreground">Wallet Address:</strong> Your public EVM wallet address (e.g., 0x123...abc)</li>
                <li><strong className="text-foreground">ASLX Token Balance:</strong> Your current ASLX token holdings</li>
                <li><strong className="text-foreground">Transaction History:</strong> All token conversions, transfers, and withdrawals</li>
                <li><strong className="text-foreground">Smart Contract Interactions:</strong> Any interaction with the ASLX token contract</li>
                <li><strong className="text-foreground">Block Timestamps:</strong> When transactions occurred on the blockchain</li>
              </ul>
              <div>
                <p className="font-semibold mb-2">Why can't this be deleted?</p>
                <p className="text-muted-foreground">
                  Blockchain networks are decentralized and immutable by design. No single person, company, or government can alter or erase blockchain records. This is a core security feature of cryptocurrency—it ensures transparency and prevents fraud.
                </p>
              </div>
              <p className="text-muted-foreground">
                Your wallet address and transactions will remain publicly visible on blockchain explorers like <a href="https://polygonscan.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">PolygonScan</a> indefinitely. However, these records are pseudonymous—your wallet address is not directly linked to your personal identity unless you publicly disclose the connection.
              </p>
            </CardContent>
          </Card>

          {/* Your Wallet Remains Yours */}
          <Card>
            <CardHeader>
              <CardTitle>Your Wallet and Tokens Remain Under Your Control</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-base">
              <p className="text-muted-foreground">
                <strong className="text-foreground">Important:</strong> Deleting your Astralux account does not delete your cryptocurrency wallet or tokens. Your wallet is a real Ethereum-compatible wallet on the Polygon blockchain that exists independently of Astralux.
              </p>
              <div>
                <p className="text-muted-foreground mb-2">
                  If you have your <strong className="text-foreground">24-word seed phrase</strong> saved, you can:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>Import your wallet into MetaMask, Trust Wallet, or any compatible wallet app</li>
                  <li>Continue to access and manage your ASLX tokens</li>
                  <li>Send tokens to other addresses</li>
                  <li>Trade on decentralized exchanges (once ASLX is listed)</li>
                </ul>
              </div>
              <p className="text-destructive">
                ⚠️ <strong>Warning:</strong> If you delete your account without saving your seed phrase, you will lose access to your wallet and tokens forever. Astralux does not store your private keys or seed phrase—only you have access to this information.
              </p>
            </CardContent>
          </Card>

          {/* GDPR Rights */}
          <Card>
            <CardHeader>
              <CardTitle>Your GDPR Rights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-base">
              <p className="text-muted-foreground">
                Under the General Data Protection Regulation (GDPR) and similar data protection laws, you have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong className="text-foreground">Right to Erasure ("Right to be Forgotten"):</strong> Request deletion of your personal data</li>
                <li><strong className="text-foreground">Right to Access:</strong> Request a copy of all personal data we hold about you</li>
                <li><strong className="text-foreground">Right to Rectification:</strong> Request correction of inaccurate personal data</li>
                <li><strong className="text-foreground">Right to Data Portability:</strong> Receive your data in a machine-readable format</li>
                <li><strong className="text-foreground">Right to Object:</strong> Object to processing of your personal data</li>
              </ul>
              <p className="text-muted-foreground">
                To exercise any of these rights, please contact us at <a href="mailto:support@getastralux.com" className="text-primary hover:underline">support@getastralux.com</a>.
              </p>
              <p className="text-muted-foreground">
                Please note: GDPR rights apply to personal data controlled by Astralux. We cannot delete blockchain data as it is stored on a decentralized network outside our control.
              </p>
            </CardContent>
          </Card>

          {/* Questions */}
          <Card>
            <CardHeader>
              <CardTitle>Questions About Account Deletion?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-base">
              <p className="text-muted-foreground">
                If you have questions about account deletion, data retention, or your privacy rights, please contact our support team:
              </p>
              <div className="my-4">
                <Button 
                  asChild 
                  variant="outline"
                  data-testid="button-contact-support"
                >
                  <a href="mailto:support@getastralux.com">
                    <Mail className="w-4 h-4 mr-2" />
                    Contact Support
                  </a>
                </Button>
              </div>
              <p className="text-muted-foreground">
                We're committed to protecting your privacy and ensuring transparency about how we handle your data. Our team typically responds to deletion requests within 2-3 business days.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
