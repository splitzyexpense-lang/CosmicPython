import { Card, CardContent } from "@/components/ui/card";
import { useFirebaseStats } from "@/hooks/use-firebase-stats";
import { useLiveStats } from "@/hooks/use-live-stats";
import { Loader2 } from "lucide-react";

interface StatsWidgetProps {
  className?: string;
}

export default function StatsWidget({ className, ...props }: StatsWidgetProps) {
  const { stats: firebaseStats, isLoading: firebaseLoading, error: firebaseError } = useFirebaseStats();
  const { data: liveStats, isLoading: liveStatsLoading, error: liveStatsError } = useLiveStats();

  if (firebaseError && liveStatsError) {
    return (
      <div className={`text-center text-muted-foreground text-sm ${className}`} {...props}>
        <p data-testid="stats-error">Unable to load stats</p>
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 text-center ${className}`} {...props}>
      <Card className="bg-secondary/50">
        <CardContent className="p-3">
          {firebaseLoading ? (
            <Loader2 className="h-4 w-4 animate-spin mx-auto text-accent" data-testid="stats-loading" />
          ) : (
            <div className="font-bold text-xl text-accent" data-testid="stats-total-miners">
              {firebaseStats?.totalMiners?.toLocaleString() || "0"}
            </div>
          )}
          <div className="text-xs text-muted-foreground">Total Miners</div>
        </CardContent>
      </Card>
      <Card className="bg-secondary/50">
        <CardContent className="p-3">
          {liveStatsLoading ? (
            <Loader2 className="h-4 w-4 animate-spin mx-auto text-accent" data-testid="airdrop-loading" />
          ) : liveStatsError ? (
            <div className="font-bold text-xl text-red-500" data-testid="airdrop-error">
              Error
            </div>
          ) : (
            <div className="font-bold text-xl text-accent" data-testid="stats-coins-transferred">
              {liveStats?.totalMined?.toLocaleString() || "0"}
            </div>
          )}
          <div className="text-xs text-muted-foreground">Total Coins Transferred</div>
        </CardContent>
      </Card>
    </div>
  );
}
