import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Search } from "lucide-react";
import { faqData } from "@/data/faq";

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFAQs = faqData.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about Astralux, ASLX tokens, and our mobile earning platform.
          </p>
        </div>

        {/* Search */}
        <div className="mb-12">
          <div className="relative max-w-md mx-auto">
            <Input
              type="search"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
              data-testid="faq-search"
            />
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {filteredFAQs.length > 0 ? (
            <Accordion type="single" collapsible className="w-full" data-testid="faq-accordion">
              {filteredFAQs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg mb-4">
                  <AccordionTrigger 
                    className="px-6 py-4 text-left hover:no-underline hover:bg-secondary/50 rounded-t-lg"
                    data-testid={`faq-question-${index}`}
                  >
                    <span className="font-semibold">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent 
                    className="px-6 py-4 text-muted-foreground prose prose-sm dark:prose-invert max-w-none"
                    data-testid={`faq-answer-${index}`}
                  >
                    <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            <div className="text-center py-12" data-testid="faq-no-results">
              <div className="text-muted-foreground">
                No questions found matching "{searchQuery}". Try a different search term.
              </div>
            </div>
          )}
        </div>

        {/* Contact Support */}
        <div className="mt-16 text-center p-8 bg-card border border-border rounded-lg">
          <h3 className="text-xl font-bold mb-4">Still have questions?</h3>
          <p className="text-muted-foreground mb-6">
            Can't find what you're looking for? Our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/support"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold transition-all"
              data-testid="button-contact-support"
            >
              Contact Support
            </a>
            <a
              href="https://discord.gg/astralux"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#5865F2] hover:bg-[#4752C4] text-white rounded-lg font-semibold transition-all"
              data-testid="button-join-discord"
            >
              Join Discord
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
