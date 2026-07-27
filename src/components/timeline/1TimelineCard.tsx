import { useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { categoryColorClasses, type CategoryToken } from "@/lib/category-styles";
import { cn } from "@/lib/utils";
import type { TimelineEntry } from "@/lib/timeline-data";

interface TimelineCardProps {
  entry: TimelineEntry;
  isVisible: boolean;
  isSpotlight: boolean;
  isFractured?: boolean;
}

const tierVariant: Record<string, "default" | "secondary" | "outline"> = {
  Mandatory: "default",
  "Highly Recommended": "secondary",
  Optional: "outline",
};

export function TimelineCard({ entry, isVisible, isSpotlight, isFractured }: TimelineCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");
  const [glare, setGlare] = useState({ x: 0, y: 0, opacity: 0 });
  const colors = categoryColorClasses[entry.categoryToken as CategoryToken];

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    
    // Smooth 3D Perspective Tilt Mechanics
    setTransform(`rotateX(${-y * 8}deg) rotateY(${x * 8}deg) scale(1.01)`);
    setGlare({
      x: (e.clientX - rect.left),
      y: (e.clientY - rect.top),
      opacity: 0.15
    });
  };

  const handleLeave = () => {
    setTransform("");
    setGlare(prev => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      id={entry.id}
      ref={cardRef}
      className={cn(
        "relative rounded-xl transition-all duration-300 ease-out style-card scroll-mt-28",
        isSpotlight && "animate-[tvaAlert_1s_ease-in-out_infinite]"
      )}
      style={{ 
        perspective: "1000px", 
        transform,
        ["--glow-color" as string]: `var(--cat-${entry.categoryToken})` 
      } as React.CSSProperties}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {/* High-Tech Terminal Card Chassis */}
      <div
        className={cn(
          "relative overflow-hidden rounded-xl border bg-black/60 backdrop-blur-md p-5 transition-all duration-500",
          isFractured 
            ? "border-red-950/40 hover:border-red-500/60 shadow-[inset_0_0_12px_rgba(239,68,68,0.05)]" 
            : "border-emerald-950/40 hover:border-emerald-500/60 shadow-[inset_0_0_12px_rgba(16,185,129,0.05)]"
        )}
      >
        {/* CRT Scanline Display Overlay Grid */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,3px_100%]" />
        
        {/* Interactive Flashlight Glare Node */}
        <div 
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 mix-blend-screen"
          style={{
            background: `radial-gradient(circle 120px at ${glare.x}px ${glare.y}px, rgba(255,255,255,0.12), transparent)`,
            opacity: glare.opacity
          }}
        />

        <div className="relative z-10">
          <div className="flex items-start justify-between gap-4">
            <div>
              {/* Index Stream Header ID */}
              <div className="flex items-center gap-2 mb-1.5">
                <span className={cn(
                  "font-mono text-xs font-bold tracking-widest px-1.5 py-0.5 rounded",
                  isFractured ? "bg-red-950/50 text-red-400" : "bg-emerald-950/50 text-emerald-400"
                )}>
                  LOC_{String(entry.chronological_position).padStart(3, '0')}
                </span>
                <span className="text-[10px] uppercase font-mono tracking-wider opacity-40">
                  {isFractured ? "Timeline_Branch_Variance" : "Sacred_Sequence"}
                </span>
              </div>
              <h3 className="text-lg font-extrabold tracking-tight text-white/90 group-hover:text-white transition-colors">
                {entry.title}
              </h3>
              <p className="mt-1 font-mono text-xs text-muted-foreground/80">{entry.setting_period}</p>
            </div>
            <Badge variant={tierVariant[entry.importance_tier]} className="font-mono text-[10px] tracking-wider uppercase shrink-0">
              {entry.importance_tier}
            </Badge>
          </div>

          {/* Infrastructure Distribution Badges */}
          <div className="mt-5 flex flex-wrap items-center gap-1.5 border-t border-white/[0.06] pt-4">
            <span className={cn(
              "inline-flex items-center font-mono rounded px-2 py-0.5 text-[10px] uppercase tracking-wider font-semibold border",
              isFractured ? "bg-red-950/20 border-red-900/30 text-red-400" : "bg-emerald-950/20 border-emerald-900/30 text-emerald-400"
            )}>
              {entry.categoryLabel}
            </span>
            {entry.streaming_platforms.map((platform) => (
              <span
                key={platform}
                className="inline-flex items-center font-mono rounded border border-white/[0.05] bg-white/[0.02] px-2 py-0.5 text-[10px] tracking-wide text-muted-foreground"
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
