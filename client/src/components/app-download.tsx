import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface AppDownloadProps {
  onDownload?: () => void;
  variant?: "single" | "full";
  className?: string;
}

export default function AppDownload({ 
  onDownload, 
  variant = "single", 
  className = "",
  ...props 
}: AppDownloadProps) {
  const [userOS, setUserOS] = useState<"ios" | "android" | "unknown">("unknown");

  useEffect(() => {
    const detectOS = () => {
      const userAgent = navigator.userAgent || navigator.vendor;
      
      if (/iPad|iPhone|iPod/.test(userAgent)) {
        setUserOS("ios");
      } else if (/android/i.test(userAgent)) {
        setUserOS("android");
      } else {
        setUserOS("unknown");
      }
    };

    detectOS();
  }, []);

  const handleDownload = (platform?: "ios" | "android") => {
    const targetPlatform = platform || userOS;
    
    // Show coming soon message since app isn't published yet
    alert("🚀 Astralux mobile app is coming soon! We're putting the finishing touches on the app and will notify users when it's available on the App Store and Google Play Store. Stay tuned!");
    
    onDownload?.();
  };

  if (variant === "single") {
    return (
      <Button
        onClick={() => handleDownload()}
        className={className}
        data-testid="button-download-app"
        {...props}
      >
        {userOS === "ios" ? "📱 Download for iOS" : 
         userOS === "android" ? "🤖 Download for Android" : 
         "📱 Download App"}
      </Button>
    );
  }

  return (
    <div className="flex flex-col gap-2" {...props}>
      <Button
        onClick={() => handleDownload("ios")}
        variant="secondary"
        className="bg-secondary hover:bg-secondary/80 px-4 py-2 rounded text-sm transition-all"
        data-testid="button-download-ios"
      >
        📱 Download for iOS
      </Button>
      <Button
        onClick={() => handleDownload("android")}
        variant="secondary"
        className="bg-secondary hover:bg-secondary/80 px-4 py-2 rounded text-sm transition-all"
        data-testid="button-download-android"
      >
        🤖 Download for Android
      </Button>
    </div>
  );
}
