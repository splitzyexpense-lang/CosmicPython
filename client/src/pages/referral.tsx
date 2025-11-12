import { useEffect } from "react";
import { useLocation } from "wouter";

export default function Referral() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    // Get the referral code from the URL query parameter
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');

    if (code) {
      // Store the referral code in localStorage so the app can use it later
      localStorage.setItem('referralCode', code);
      
      // Track referral link click
      console.log('Referral code captured:', code);
      
      // Show a brief message before redirecting
      const message = document.createElement('div');
      message.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: hsl(var(--primary));
        color: hsl(var(--primary-foreground));
        padding: 24px 32px;
        border-radius: 8px;
        font-size: 16px;
        font-weight: 500;
        z-index: 9999;
        box-shadow: 0 8px 32px rgba(0,0,0,0.3);
      `;
      message.textContent = `Referral code ${code} applied! Redirecting...`;
      document.body.appendChild(message);

      // Redirect to home page after 2 seconds
      setTimeout(() => {
        document.body.removeChild(message);
        setLocation('/');
      }, 2000);
    } else {
      // No code provided, redirect immediately
      setLocation('/');
    }
  }, [setLocation]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-lg text-muted-foreground">Processing referral link...</p>
      </div>
    </div>
  );
}
