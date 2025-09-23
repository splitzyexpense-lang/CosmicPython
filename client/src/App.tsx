import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import { initGA } from "./lib/analytics";
import { useAnalytics } from "./hooks/use-analytics";

import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Tokenomics from "@/pages/tokenomics";
import Roadmap from "@/pages/roadmap";
import HowToEarn from "@/pages/how-to-earn";
import Comparisons from "@/pages/comparisons";
import FAQ from "@/pages/faq";
import NewsIndex from "@/pages/news/index";
import NewsPost from "@/pages/news/[slug]";
import Support from "@/pages/support";
import Privacy from "@/pages/privacy";
import Terms from "@/pages/terms";
import Whitepaper from "@/pages/whitepaper";

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

function Router() {
  // Track page views when routes change
  useAnalytics();
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/tokenomics" component={Tokenomics} />
          <Route path="/roadmap" component={Roadmap} />
          <Route path="/how-to-earn" component={HowToEarn} />
          <Route path="/comparisons" component={Comparisons} />
          <Route path="/faq" component={FAQ} />
          <Route path="/news" component={NewsIndex} />
          <Route path="/news/:slug" component={NewsPost} />
          <Route path="/support" component={Support} />
          <Route path="/privacy" component={Privacy} />
          <Route path="/terms" component={Terms} />
          <Route path="/whitepaper" component={Whitepaper} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  // Initialize Google Analytics when app loads
  useEffect(() => {
    // Verify required environment variable is present
    if (!import.meta.env.VITE_GA_MEASUREMENT_ID) {
      console.warn('Missing required Google Analytics key: VITE_GA_MEASUREMENT_ID');
    } else {
      initGA();
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
