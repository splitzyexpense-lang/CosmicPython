import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqData } from "@/data/faq";

interface SupportFormData {
  name: string;
  email: string;
  category: string;
  subject: string;
  message: string;
}

export default function Support() {
  const [formData, setFormData] = useState<SupportFormData>({
    name: "",
    email: "",
    category: "",
    subject: "",
    message: "",
  });

  const { toast } = useToast();
  const queryClient = useQueryClient();

  const submitMutation = useMutation({
    mutationFn: (data: SupportFormData) => apiRequest("POST", "/api/support/tickets", data),
    onSuccess: () => {
      toast({
        title: "Support ticket submitted",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({
        name: "",
        email: "",
        category: "",
        subject: "",
        message: "",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Error submitting ticket",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.category || !formData.subject || !formData.message) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    submitMutation.mutate(formData);
  };

  const popularFaqs = faqData.slice(0, 5);

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
            Support Center
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get help with Astralux, report issues, or connect with our community for support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Support Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Contact Support</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your full name"
                        required
                        data-testid="input-name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your@email.com"
                        required
                        data-testid="input-email"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="category">Category *</Label>
                    <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
                      <SelectTrigger data-testid="select-category">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="technical">Technical Issue</SelectItem>
                        <SelectItem value="account">Account Support</SelectItem>
                        <SelectItem value="tokens">Token/Airdrop Issue</SelectItem>
                        <SelectItem value="app">Mobile App</SelectItem>
                        <SelectItem value="general">General Question</SelectItem>
                        <SelectItem value="partnership">Partnership Inquiry</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Brief description of your issue"
                      required
                      data-testid="input-subject"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Provide detailed information about your issue or question..."
                      rows={6}
                      required
                      data-testid="textarea-message"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={submitMutation.isPending}
                    data-testid="button-submit-ticket"
                  >
                    {submitMutation.isPending ? "Submitting..." : "Submit Support Ticket"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Community Links */}
            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Community Support</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Get faster help from our community or reach out directly:
                </p>
                <div className="mb-4 p-4 bg-secondary/20 rounded-lg border border-border">
                  <p className="text-sm font-medium text-foreground mb-1">Direct Email Support</p>
                  <a 
                    href="mailto:support@getastralux.com" 
                    className="text-primary hover:text-primary/80 font-mono text-sm"
                    data-testid="link-support-email"
                  >
                    support@getastralux.com
                  </a>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <a
                    href="https://t.me/AstraluxOfficial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-4 py-3 bg-[#0088cc] hover:bg-[#006699] text-white rounded-lg font-medium transition-all"
                    data-testid="button-telegram"
                  >
                    Join Telegram
                  </a>
                  <a
                    href="https://x.com/AstraluxSupport"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-4 py-3 bg-[#1DA1F2] hover:bg-[#1991DA] text-white rounded-lg font-medium transition-all"
                    data-testid="button-twitter"
                  >
                    X (Twitter)
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Section */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Check these common questions before submitting a ticket:
                </p>
                <Accordion type="single" collapsible className="w-full" data-testid="support-faq">
                  {popularFaqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left" data-testid={`faq-question-${index}`}>
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground" data-testid={`faq-answer-${index}`}>
                        <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
                
                <div className="mt-6 text-center">
                  <a
                    href="/faq"
                    className="text-primary hover:text-primary/80 font-medium"
                    data-testid="link-view-all-faq"
                  >
                    View All FAQs →
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Support Hours */}
            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Support Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Response Times</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Technical issues: 24-48 hours</li>
                    <li>• Account support: 12-24 hours</li>
                    <li>• General questions: 24-72 hours</li>
                    <li>• Partnership inquiries: 3-5 business days</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Before Contacting Support</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Check our FAQ section</li>
                    <li>• Search our Telegram community</li>
                    <li>• Ensure you have the latest app version</li>
                    <li>• Include relevant screenshots if applicable</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
