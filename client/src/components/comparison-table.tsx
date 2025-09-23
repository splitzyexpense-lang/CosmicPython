import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ComparisonData {
  name: string;
  symbol: string;
  miningMethod: string;
  supply: string;
  uniqueness: string;
  tradeoffs: string;
  network: string;
  launched: string;
  marketCap: string;
}

interface ComparisonTableProps {
  data: ComparisonData[];
}

export default function ComparisonTable({ data }: ComparisonTableProps) {
  return (
    <div className="overflow-x-auto">
      {/* Mobile Card View */}
      <div className="md:hidden space-y-4">
        {data.map((item, index) => (
          <Card key={item.name} className={`${index === 0 ? 'border-primary bg-primary/5' : ''}`}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-lg">{item.name}</h3>
                <Badge variant={index === 0 ? "default" : "secondary"}>{item.symbol}</Badge>
              </div>
              
              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-semibold text-muted-foreground">Mining: </span>
                  <span>{item.miningMethod}</span>
                </div>
                <div>
                  <span className="font-semibold text-muted-foreground">Supply: </span>
                  <span>{item.supply}</span>
                </div>
                <div>
                  <span className="font-semibold text-muted-foreground">Network: </span>
                  <span>{item.network}</span>
                </div>
                <div>
                  <span className="font-semibold text-muted-foreground">Launched: </span>
                  <span>{item.launched}</span>
                </div>
                <div>
                  <span className="font-semibold text-muted-foreground">Market Cap: </span>
                  <span>{item.marketCap}</span>
                </div>
                <div>
                  <span className="font-semibold text-muted-foreground">Strengths: </span>
                  <span className="text-muted-foreground">{item.uniqueness}</span>
                </div>
                <div>
                  <span className="font-semibold text-muted-foreground">Considerations: </span>
                  <span className="text-muted-foreground">{item.tradeoffs}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Desktop Table View */}
      <div className="hidden md:block">
        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-4 font-semibold">Project</th>
                    <th className="text-left p-4 font-semibold">Mining Method</th>
                    <th className="text-left p-4 font-semibold">Supply</th>
                    <th className="text-left p-4 font-semibold">Unique Features</th>
                    <th className="text-left p-4 font-semibold">Tradeoffs</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr 
                      key={item.name} 
                      className={`border-b border-border hover:bg-secondary/20 transition-colors ${
                        index === 0 ? 'bg-primary/5 border-primary/20' : ''
                      }`}
                    >
                      <td className="p-4">
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2">
                            <span className="font-semibold">{item.name}</span>
                            <Badge variant={index === 0 ? "default" : "secondary"} className="text-xs">
                              {item.symbol}
                            </Badge>
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {item.network} • {item.launched}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {item.marketCap}
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className="inline-block px-2 py-1 bg-secondary rounded text-sm">
                          {item.miningMethod}
                        </span>
                      </td>
                      <td className="p-4 font-mono text-sm">{item.supply}</td>
                      <td className="p-4 text-sm text-muted-foreground max-w-xs">
                        {item.uniqueness}
                      </td>
                      <td className="p-4 text-sm text-muted-foreground max-w-xs">
                        {item.tradeoffs}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
