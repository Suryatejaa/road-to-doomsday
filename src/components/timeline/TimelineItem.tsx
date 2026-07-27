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
      { threshold: 0.1, rootMargin: "0px 0px -10px 0px" }
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
      {/* The Sacred Timeline Thread — an analog gauge, not a wire */}
      <div className="absolute left-3 top-0 bottom-0 w-[2px] bg-[#4a3a1e]/40">
        {/* Ticked hash marks, like a clockwork gauge reel */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to bottom, rgba(217,201,163,0.5) 0px, rgba(217,201,163,0.5) 1px, transparent 1px, transparent 10px)",
            width: "3px",
            left: "-0.5px",
          }}
        />
        {/* Active Core — amber for the Sacred Timeline, burning orange where it's been pruned */}
        <span
          className={cn(
            "absolute top-0 bottom-0 left-0 w-full origin-top scale-y-0 transition-transform duration-1000 ease-out",
            isFractured ? "bg-[#E85D2C] shadow-[0_0_10px_#E85D2C]" : "bg-[#F2A93B] shadow-[0_0_8px_#F2A93B]",
            visible && "scale-y-100"
          )}
        />
      </div>

      {/* Timeline Node — a TemPad tick mark, burnt to a stub where a branch was pruned */}
      <div className="absolute left-1.5 top-7 z-20 flex h-5 w-5 items-center justify-center">
        <span
          className={cn(
            "absolute h-4 w-4 rounded-full animate-ping opacity-0 transition-opacity duration-500",
            isFractured ? "bg-[#E85D2C]/30" : "bg-[#F2A93B]/25",
            visible && "opacity-100"
          )}
        />
        <span
          className={cn(
            "h-2.5 w-2.5 border bg-[#0c0906] transition-all duration-500 scale-0",
            isFractured
              ? "border-[#E85D2C] shadow-[0_0_8px_#E85D2C] rotate-45"
              : "border-[#F2A93B] shadow-[0_0_8px_#F2A93B] rotate-45",
            visible && "scale-100"
          )}
        />

        {/* Case-file spur connector to the card */}
        <span
          className={cn(
            "absolute left-full h-[1px] w-4 md:w-8 origin-left scale-x-0 transition-transform duration-500 delay-300",
            isFractured
              ? "bg-gradient-to-r from-[#E85D2C] to-transparent"
              : "bg-gradient-to-r from-[#F2A93B] to-transparent",
            visible && "scale-x-100"
          )}
        />
      </div>

      {/* Case File Card */}
      <div className="flex-1 w-full pb-0">
        <TimelineCard entry={entry} isVisible={visible} isSpotlight={isSpotlight} isFractured={isFractured} />
      </div>
    </div>
  );
}
