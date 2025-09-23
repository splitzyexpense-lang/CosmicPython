import { useQuery } from "@tanstack/react-query";

interface LiveStats {
  totalMiners: number;
  totalMined: number;
  lastUpdated: string;
}

export function useLiveStats() {
  return useQuery<LiveStats>({
    queryKey: ["/api/stats/live"],
    refetchInterval: 30000, // Refetch every 30 seconds
    staleTime: 25000, // Consider data stale after 25 seconds
  });
}
