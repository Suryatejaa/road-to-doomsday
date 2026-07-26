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

const BRANCH_CATEGORIES = new Set([
  "MCU Multiverse Nexus",
  "Sony Animation Canon",
  "MCU Animation Canon",
  "MCU Mutant Animation",
  "Alternative Multi-Universe",
]);

export function TimelineItem({ entry, index, spotlightId }: TimelineItemProps) {
  const itemRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const isEven = index % 2 === 0;
  const hasBranch = BRANCH_CATEGORIES.has(entry.universe_category);
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
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" },
    );
    observer.observe(itemRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={itemRef}
      className={cn(
        "relative flex items-center gap-4 md:gap-8",
        isEven && "md:flex-row-reverse",
        hasBranch && visible && "branch-visible",
      )}
    >
      <div className="hidden md:block md:flex-1" />

      <div className="relative z-10 flex h-4 w-4 shrink-0 items-center justify-center">
        <span
          className={cn(
            "absolute top-1/2 h-0.5 w-12 origin-left scale-x-0 md:w-24",
            colors.bg,
            isEven ? "md:right-full md:origin-right" : "md:left-full md:origin-left",
            "left-full origin-left",
            "branch-line",
          )}
        />
        <span
          className={cn("relative block h-3 w-3 rounded-full border-2 bg-background shadow-sm", colors.border)}
          style={{ boxShadow: `0 0 12px color-mix(in oklab, var(--cat-${entry.categoryToken}) 50%, transparent)` }}
        />
      </div>

      <div className="flex-1">
        <TimelineCard entry={entry} isVisible={visible} isSpotlight={isSpotlight} />
      </div>
    </div>
  );
}

