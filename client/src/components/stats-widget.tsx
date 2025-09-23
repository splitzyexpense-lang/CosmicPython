import { Card, CardContent } from "@/components/ui/card";
import { useLiveStats } from "@/hooks/use-live-stats";
import { Loader2 } from "lucide-react";

interface StatsWidgetProps {
  className?: string;
}

export default function StatsWidget({ className, ...props }: StatsWidgetProps) {
  const { data: stats, isLoading, error } = useLiveStats();

  if (error) {
    return (
      <div className={`text-center text-muted-foreground text-sm ${className}`} {...props}>
        <p data-testid="stats-error">Unable to load stats</p>
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-2 gap-4 text-center ${className}`} {...props}>
      <Card className="bg-secondary/50">
        <CardContent className="p-3">
          {isLoading ? (
            <Loader2 className="h-4 w-4 animate-spin mx-auto text-accent" data-testid="stats-loading" />
          ) : (
            <div className="font-bold text-xl text-accent" data-testid="stats-total-miners">
              {stats?.totalMiners?.toLocaleString() || "0"}
            </div>
          )}
          <div className="text-xs text-muted-foreground">Total Miners</div>
        </CardContent>
      </Card>
      <Card className="bg-secondary/50">
        <CardContent className="p-3">
          {isLoading ? (
            <Loader2 className="h-4 w-4 animate-spin mx-auto text-accent" data-testid="stats-loading" />
          ) : (
            <div className="font-bold text-xl text-accent" data-testid="stats-total-mined">
              {stats?.totalMined?.toLocaleString() || "0"}
            </div>
          )}
          <div className="text-xs text-muted-foreground">Total Mined</div>
        </CardContent>
      </Card>
    </div>
  );
}
