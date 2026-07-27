import { useEffect, useRef, useState } from "react";
import { categoryColorClasses, type CategoryToken } from "@/lib/category-styles";
import { cn } from "@/lib/utils";
import { TimelineCard } from "./TimelineCard";
import type { TimelineEntry } from "@/lib/timeline-data";

interface TimelineItemProps {
  entry: TimelineEntry;
  index: number;
  spotlightId: string | null;
}

// Factions causing timeline fractures
const FRACTURED_CATEGORIES = new Set([
  "MCU Multiverse Nexus",
  "Sony Animation Canon",
  "MCU Animation Canon",
  "MCU Mutant Animation",
  "Alternative Multi-Universe",
]);

export function TimelineItem({ entry, index, spotlightId }: TimelineItemProps) {
  const itemRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const isFractured = FRACTURED_CATEGORIES.has(entry.universe_category);
  const isSpotlight = spotlightId === entry.id;
  const colors = categoryColorClasses[entry.categoryToken as CategoryToken];

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined" || !itemRef.current) return;
    const observer = new IntersectionObserver(
      ([record]) => {
        if (record.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.10, rootMargin: "0px 0px -10px 0px" },
    );
    observer.observe(itemRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={itemRef}
      className={cn(
        "relative flex items-start gap-6 pl-8 md:pl-12 opacity-30 translate-y-4 transition-all duration-700 ease-out",
        visible && "opacity-100 translate-y-0"
      )}
    >
      {/* The Central TVA Track System */}
      <div className="absolute left-3 top-0 bottom-0 w-[2px] bg-emerald-950/40">
        {/* Active Animated Time-line Core */}
        <span 
          className={cn(
            "absolute top-0 bottom-0 left-0 w-full origin-top scale-y-0 transition-transform duration-1000 ease-out",
            isFractured ? "bg-red-500 shadow-[0_0_10px_#ef4444]" : "bg-emerald-500 shadow-[0_0_8px_#10b981]",
            visible && "scale-y-100"
          )}
        />
      </div>

      {/* Timeline Node Ring / Glitch Anchor */}
      <div className="absolute left-1.5 top-7 z-20 flex h-5 w-5 items-center justify-center">
        <span
          className={cn(
            "absolute h-4 w-4 rounded-full animate-ping opacity-0 transition-opacity duration-500",
            isFractured ? "bg-red-500/30" : "bg-emerald-500/20",
            visible && "opacity-100"
          )}
        />
        <span
          className={cn(
            "h-2.5 w-2.5 rounded-full border bg-background transition-all duration-500 scale-0",
            isFractured ? "border-red-500 shadow-[0_0_8px_#ef4444]" : "border-emerald-500 shadow-[0_0_8px_#10b981]",
            visible && "scale-100 rotate-45"
          )}
        />
        
        {/* Scarred Horizontal Spur Connector */}
        <span
          className={cn(
            "absolute left-full h-[1px] w-4 md:w-8 origin-left scale-x-0 transition-transform duration-500 delay-300",
            isFractured ? "bg-gradient-to-r from-red-500 to-transparent" : "bg-gradient-to-r from-emerald-500 to-transparent",
            visible && "scale-x-100"
          )}
        />
      </div>

      {/* Movie Information Stream Card */}
      <div className="flex-1 w-full pb-8">
        <TimelineCard entry={entry} isVisible={visible} isSpotlight={isSpotlight} isFractured={isFractured} />
      </div>
    </div>
  );
}
