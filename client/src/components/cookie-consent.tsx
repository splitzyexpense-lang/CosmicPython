import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
  };

  const rejectCookies = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setShowBanner(false);
    // Disable analytics when rejected
    if (window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'denied'
      });
    }
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm text-muted-foreground">
              We use cookies and similar technologies to improve your experience and analyze app usage. 
              By clicking "Accept All", you consent to our use of cookies.{' '}
              <Link href="/privacy" className="text-primary hover:underline" data-testid="link-cookie-privacy">
                Learn more
              </Link>
            </p>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <Button
              variant="secondary"
              size="sm"
              onClick={rejectCookies}
              data-testid="button-reject-cookies"
            >
              Reject Non-Essential
            </Button>
            <Button
              variant="default"
              size="sm"
              onClick={acceptCookies}
              data-testid="button-accept-cookies"
            >
              Accept All
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={rejectCookies}
              className="h-8 w-8"
              data-testid="button-close-cookies"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
