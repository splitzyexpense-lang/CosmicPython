import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

export default function EarnCalculator() {
  const [adsPerDay, setAdsPerDay] = useState([10]);
  const [streakDays, setStreakDays] = useState([7]);
  const [referrals, setReferrals] = useState(0);

  // Calculate earnings
  const baseTokensPerAd = 30; // Average mini-tokens per ad
  const dailyBaseEarnings = adsPerDay[0] * baseTokensPerAd;
  
  // Streak multiplier
  const getStreakMultiplier = (days: number) => {
    if (days >= 31) return 2.0;
    if (days >= 8) return 1.5;
    return 1.0;
  };
  
  const streakMultiplier = getStreakMultiplier(streakDays[0]);
  const dailyEarningsWithStreak = dailyBaseEarnings * streakMultiplier;
  
  // Referral earnings (10% of referral activity, assuming 500 mini-tokens per referral per day)
  const referralEarnings = referrals * 500 * 0.1;
  
  const totalDailyMiniTokens = dailyEarningsWithStreak + referralEarnings;
  const monthlyMiniTokens = totalDailyMiniTokens * 30;
  const monthlyASLX = monthlyMiniTokens / 1000; // 1000 mini-tokens = 1 ASLX

  return (
    <Card>
      <CardHeader>
        <CardTitle>Calculate Your Potential Earnings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Ads per day */}
        <div className="space-y-3">
          <Label>Ads watched per day: {adsPerDay[0]}</Label>
          <Slider
            value={adsPerDay}
            onValueChange={setAdsPerDay}
            max={20}
            min={1}
            step={1}
            className="w-full"
          />
          <div className="text-xs text-muted-foreground">
            Maximum 20 ads per day per user
          </div>
        </div>

        {/* Streak days */}
        <div className="space-y-3">
          <Label>Daily streak: {streakDays[0]} days</Label>
          <Slider
            value={streakDays}
            onValueChange={setStreakDays}
            max={60}
            min={1}
            step={1}
            className="w-full"
          />
          <div className="text-xs text-muted-foreground">
            Multiplier: {getStreakMultiplier(streakDays[0])}x
          </div>
        </div>

        {/* Referrals */}
        <div className="space-y-2">
          <Label htmlFor="referrals">Active referrals</Label>
          <Input
            id="referrals"
            type="number"
            min="0"
            max="100"
            value={referrals}
            onChange={(e) => setReferrals(Number(e.target.value))}
            placeholder="0"
          />
          <div className="text-xs text-muted-foreground">
            Earn 10% of your referrals' daily earnings
          </div>
        </div>

        {/* Results */}
        <div className="space-y-4 p-4 bg-secondary/20 rounded-lg">
          <h4 className="font-semibold">Your Potential Earnings</h4>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-3 bg-card rounded-lg">
              <div className="text-2xl font-bold text-primary">
                {totalDailyMiniTokens.toLocaleString()}
              </div>
              <div className="text-xs text-muted-foreground">Mini-tokens/day</div>
            </div>
            
            <div className="text-center p-3 bg-card rounded-lg">
              <div className="text-2xl font-bold text-accent">
                {monthlyASLX.toFixed(2)}
              </div>
              <div className="text-xs text-muted-foreground">ASLX/month</div>
            </div>
          </div>

          <div className="text-xs text-muted-foreground text-center">
            * Calculations are estimates based on current reward rates and may change
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
