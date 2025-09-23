import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface TimelineItem {
  quarter: string;
  title: string;
  description: string;
  status: "completed" | "current" | "upcoming";
  features: string[];
}

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  const getStatusColor = (status: TimelineItem["status"]) => {
    switch (status) {
      case "completed":
        return "bg-astralux-success";
      case "current":
        return "bg-primary";
      case "upcoming":
        return "bg-muted";
      default:
        return "bg-muted";
    }
  };

  const getStatusText = (status: TimelineItem["status"]) => {
    switch (status) {
      case "completed":
        return "Completed";
      case "current":
        return "In Progress";
      case "upcoming":
        return "Planned";
      default:
        return "Planned";
    }
  };

  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-0.5" />
      
      <div className="space-y-8">
        {items.map((item, index) => (
          <div key={item.quarter} className="relative flex items-start md:items-center">
            {/* Timeline dot */}
            <div className={`absolute left-2 md:left-1/2 w-4 h-4 rounded-full ${getStatusColor(item.status)} transform md:-translate-x-1/2 z-10`} />
            
            {/* Content */}
            <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8 md:ml-auto"}`}>
              <Card className="hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="text-primary border-primary">
                      {item.quarter}
                    </Badge>
                    <Badge 
                      className={`text-white ${
                        item.status === "completed" ? "bg-astralux-success" :
                        item.status === "current" ? "bg-primary" :
                        "bg-muted"
                      }`}
                    >
                      {getStatusText(item.status)}
                    </Badge>
                  </div>
                  
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Key Features:</h4>
                    <ul className="space-y-1">
                      {item.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
