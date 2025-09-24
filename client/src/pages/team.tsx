import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download } from "lucide-react";

export default function Team() {
  const handleDownloadApp = () => {
    // TODO: Implement app download link
    window.open("https://play.google.com/store/apps/details?id=com.astralux.app", "_blank");
  };

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
            The Astralux Collective: Our Team is Our Community
          </h1>
        </div>

        <div className="space-y-8">
          {/* Introduction */}
          <Card>
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                Traditional projects are built by a small, centralized team working behind closed doors. Astralux is built differently. We are founded on the principle of true decentralization, where the power, the growth, and the success of the network belong to its users.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Our team isn't a list of names and titles in an office; it's the global, ever-growing collective of individuals who believe in a more equitable digital future.
              </p>
            </CardContent>
          </Card>

          {/* Every Miner is a Builder */}
          <Card>
            <CardHeader>
              <CardTitle className="text-primary">Every Miner is a Builder</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed text-muted-foreground">
                When you tap the mine button, you are doing more than just earning rewards. You are casting a vote of confidence, strengthening the network, and actively participating in the construction of a new digital economy. You aren't just a user; you are a foundational partner.
              </p>
            </CardContent>
          </Card>

          {/* Shared Effort, Shared Success */}
          <Card>
            <CardHeader>
              <CardTitle className="text-primary">Shared Effort, Shared Success</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed text-muted-foreground">
                The value and utility of Astralux are a direct reflection of the strength of its community. As our network of miners, holders, and advocates grows, so does the potential for every member who was there from the beginning. Our success is mutual.
              </p>
            </CardContent>
          </Card>

          {/* A Movement, Not a Mandate */}
          <Card>
            <CardHeader>
              <CardTitle className="text-primary">A Movement, Not a Mandate</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed text-muted-foreground">
                We are not just building an app; we are fostering a movement. A movement powered by individuals like you, from every corner of the world, who are ready to become stakeholders in the networks they help create.
              </p>
            </CardContent>
          </Card>

          {/* Closing Message */}
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-6 text-foreground">You are the team. Welcome aboard.</h3>
              <Button 
                onClick={handleDownloadApp}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                data-testid="button-download-app"
              >
                <Download className="mr-2 h-4 w-4" />
                Download the App and Join the Team
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}