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
            Astralux (ASLX) Whitepaper
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
          {/* Empty content area */}
          <Card>
            <CardContent className="p-8 text-center">
              <p className="text-muted-foreground">
                Whitepaper content will be available soon.
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