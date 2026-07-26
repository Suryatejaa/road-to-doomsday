import { useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { TimelineEntry } from "@/lib/timeline-data";

interface TimelineCardProps {
  entry: TimelineEntry;
  isVisible: boolean;
  isSpotlight: boolean;
}

const tierVariant: Record<string, "default" | "secondary" | "outline"> = {
  Mandatory: "default",
  "Highly Recommended": "secondary",
  Optional: "outline",
};

export function TimelineCard({ entry, isVisible, isSpotlight }: TimelineCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");
  const [posterTransform, setPosterTransform] = useState("");

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTransform(`rotateX(${-y * 10}deg) rotateY(${x * 10}deg)`);
    setPosterTransform(`translate(${x * 12}px, ${y * 12}px)`);
  };

  const handleLeave = () => {
    setTransform("");
    setPosterTransform("");
  };

  const glowColor = `var(--cat-${entry.categoryToken})`;

  return (
    <div
      id={entry.id}
      ref={cardRef}
      className={cn(
        "timeline-card group relative rounded-2xl",
        isSpotlight && "spotlight-pulse",
      )}
      style={{ perspective: "800px", ["--glow-color" as string]: glowColor } as React.CSSProperties}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <div
        className={cn(
          "card-inner card-glow card-glow-hover relative overflow-hidden rounded-2xl border bg-card p-5",
          "border-border/60 hover:border-[var(--glow-color)]",
        )}
      >
        <div
          className="card-content"
          style={{ transform }}
        >
          <div className="relative mb-4 aspect-[16/9] overflow-hidden rounded-xl bg-muted">
            <div
              className={cn(
                "absolute inset-0 flex items-center justify-center bg-cat-" + entry.categoryToken + "/10",
              )}
              style={{ transform: posterTransform }}
            >
              <span className={cn("text-6xl font-black opacity-20", `text-cat-${entry.categoryToken}`)}>
                {entry.chronological_position}
              </span>
            </div>
          </div>

          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-lg font-bold leading-tight text-card-foreground">{entry.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{entry.setting_period}</p>
            </div>
            <Badge variant={tierVariant[entry.importance_tier]}>{entry.importance_tier}</Badge>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span
              className={cn("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium", `border-cat-${entry.categoryToken}/30 text-cat-${entry.categoryToken}`)}
            >
              {entry.categoryLabel}
            </span>
            {entry.streaming_platforms.map((platform) => (
              <span
                key={platform}
                className="inline-flex items-center rounded-full border border-border bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
              >
                {platform}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
