import { useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { categoryColorClasses, type CategoryToken } from "@/lib/category-styles";
import { cn } from "@/lib/utils";
import { useWatched } from "@/hooks/useWatched";
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

// TVA case-file numbering — every sanctioned event gets a file number
function toCaseNumber(n: number) {
  return `TVA-${String(n).padStart(4, "0")}`;
}

export function TimelineCard({ entry, isVisible, isSpotlight, isFractured }: TimelineCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");
  const [glare, setGlare] = useState({ x: 0, y: 0, opacity: 0 });
  const colors = categoryColorClasses[entry.categoryToken as CategoryToken];
  const { isWatched, toggleWatched } = useWatched(entry.id);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    // Smooth 3D Perspective Tilt Mechanics
    setTransform(`rotateX(${-y * 8}deg) rotateY(${x * 8}deg) scale(1.01)`);
    setGlare({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      opacity: 0.18,
    });
  };

  const handleLeave = () => {
    setTransform("");
    setGlare((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      id={entry.id}
      ref={cardRef}
      className={cn(
        "relative rounded-sm transition-all duration-300 ease-out style-card scroll-mt-28",
        isSpotlight && "animate-[tvaAlert_1s_ease-in-out_infinite]"
      )}
      style={
        {
          perspective: "1000px",
          transform,
          ["--glow-color" as string]: `var(--cat-${entry.categoryToken})`,
        } as React.CSSProperties
      }
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {/* Analog Case-File Chassis — amber phosphor terminal housed in a TVA file jacket */}
      <div
        className={cn(
          "relative overflow-hidden rounded-sm border bg-[#14100B]/85 backdrop-blur-md p-5 transition-all duration-500",
          isFractured
            ? "border-[#5c2a12]/60 hover:border-[#E85D2C]/70 shadow-[inset_0_0_14px_rgba(232,93,44,0.08)]"
            : "border-[#4a3a1e]/60 hover:border-[#F2A93B]/70 shadow-[inset_0_0_14px_rgba(242,169,59,0.08)]",
          isWatched && "opacity-60 saturate-[0.5]"
        )}
      >
        {/* Amber phosphor CRT scanline overlay — single-channel, monochrome monitor */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[linear-gradient(rgba(0,0,0,0)_50%,rgba(0,0,0,0.3)_50%),linear-gradient(90deg,rgba(242,169,59,0.05),transparent,rgba(242,169,59,0.05))] bg-[size:100%_4px,3px_100%]" />

        {/* Aged paper vignette — case files don't stay pristine */}
        <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(ellipse_at_top_left,rgba(242,169,59,0.04),transparent_60%)]" />

        {/* Interactive Flashlight Glare Node */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 mix-blend-screen"
          style={{
            background: `radial-gradient(circle 120px at ${glare.x}px ${glare.y}px, rgba(242,169,59,0.15), transparent)`,
            opacity: glare.opacity,
          }}
        />

        {/* Rubber-stamped PRUNED mark for fractured / variant branches */}
        {isFractured && (
          <div
            className="absolute -right-1 top-15 z-20 select-none pointer-events-none"
            style={{ transform: "rotate(-11deg)" }}
          >
            <span className="block border-[3px] border-double border-[#E85D2C]/80 px-2.5 py-1 font-mono text-[10px] font-black uppercase tracking-[0.2em] text-[#E85D2C]/85 [text-shadow:0_0_6px_rgba(232,93,44,0.5)]">
              Variance
            </span>
          </div>
        )}

        {/* Rubber-stamped REVIEWED mark once the entry is filed as watched */}
        {isWatched && (
          <div
            className="absolute -right-1 top-26 z-20 select-none pointer-events-none"
            style={{ transform: "rotate(-11deg)" }}
          >
            <span className="block border-[3px] border-double border-[#8B6F47]/80 px-2.5 py-1 font-mono text-[10px] font-black uppercase tracking-[0.2em] text-[#8B6F47]/85">
              Watched
            </span>
          </div>
        )}

        <div className="relative z-10">
          <div className="flex items-start justify-between gap-4">
            <div>
              {/* Case File Header Strip */}
              <div className="flex items-center gap-2 mb-1.5">
                <span
                  className={cn(
                    "font-mono text-xs font-bold tracking-widest px-1.5 py-0.5 rounded-sm border",
                    isFractured
                      ? "bg-[#2a1208]/70 border-[#E85D2C]/30 text-[#E85D2C]"
                      : "bg-[#241c0c]/70 border-[#F2A93B]/30 text-[#F2A93B]"
                  )}
                >
                  {toCaseNumber(entry.chronological_position)}
                </span>
                <span className="text-[10px] uppercase font-mono tracking-[0.15em] text-[#D9C9A3]/40">
                  {isFractured ? "Nexus Event — Unpruned" : "Sacred Timeline"}
                </span>
              </div>
              <h3 className="text-lg font-extrabold tracking-tight text-[#EFE6D0] group-hover:text-white transition-colors">
                {entry.title}
              </h3>
              <p className="mt-1 font-mono text-xs text-[#D9C9A3]/60">{entry.setting_period}</p>
            </div>
            <Badge
              variant={tierVariant[entry.importance_tier]}
              className="font-mono text-[10px] tracking-wider uppercase shrink-0"
            >
              {entry.importance_tier}
            </Badge>
          </div>

          {/* Case Disposition — mark this file as reviewed */}
          <label
            className="mt-4 flex w-fit cursor-pointer select-none items-center gap-2 text-[10px] uppercase tracking-[0.15em] text-[#D9C9A3]/60 hover:text-[#D9C9A3]/90 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="relative flex h-3.5 w-3.5 items-center justify-center">
              <input
                type="checkbox"
                checked={isWatched}
                onChange={toggleWatched}
                className="peer absolute inset-0 h-full w-full cursor-pointer appearance-none rounded-[2px] border border-[#4a3a1e]/70 bg-[#241c0c]/60 transition-colors checked:border-[#8B6F47] checked:bg-[#8B6F47]/30"
              />
              <svg
                viewBox="0 0 12 12"
                className="pointer-events-none absolute h-2 w-2 scale-0 text-[#D9C9A3] transition-transform peer-checked:scale-100"
                fill="none"
              >
                <path d="M2 6.2L4.8 9L10 2.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            Mark as watched
          </label>

          {/* Filing & Distribution Stamps */}
          <div className="mt-4 flex flex-wrap items-center gap-1.5 border-t border-[#4a3a1e]/40 pt-4">
            <span
              className={cn(
                "inline-flex items-center font-mono rounded-sm px-2 py-0.5 text-[10px] uppercase tracking-wider font-semibold border",
                isFractured
                  ? "bg-[#2a1208]/40 border-[#E85D2C]/30 text-[#E85D2C]/90"
                  : "bg-[#241c0c]/40 border-[#F2A93B]/30 text-[#F2A93B]/90"
              )}
            >
              {entry.categoryLabel}
            </span>
            {entry.streaming_platforms.map((platform) => (
              <span
                key={platform}
                className="inline-flex items-center font-mono rounded-sm border border-[#4a3a1e]/40 bg-[#D9C9A3]/[0.03] px-2 py-0.5 text-[10px] tracking-wide text-[#D9C9A3]/70"
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
