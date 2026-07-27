import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const TIMELINE_LOGS = [
  { label: "SYS_LOG // SPIDER_MAN // 616_NEXUS", color: "text-red-500 text-shadow-[0_0_8px_rgba(239,68,68,0.5)]" },
  { label: "SYS_LOG // DAREDEVIL // KITCHEN_STREET", color: "text-red-700 text-shadow-[0_0_8px_rgba(185,28,28,0.5)]" },
  { label: "SYS_LOG // WOLVERINE // FOX_ANCHOR", color: "text-amber-500 text-shadow-[0_0_8px_rgba(245,158,11,0.5)]" },
  { label: "SYS_LOG // REY_MORALES // SPIDER_VERSE", color: "text-fuchsia-500 text-shadow-[0_0_8px_rgba(217,70,239,0.5)]" },
  { label: "SYS_LOG // VARIANT_DOOM // MULTIVERSE_CRISIS", color: "text-emerald-400 text-shadow-[0_0_8px_rgba(52,211,153,0.5)]" },
];

export function HeroSection() {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isBooted, setIsBooted] = useState(false);

  useEffect(() => {
    // Rapidly flash through timeline system logs on load
    const frameInterval = setInterval(() => {
      setCurrentFrame((prev) => {
        if (prev >= TIMELINE_LOGS.length - 1) {
          clearInterval(frameInterval);
          setIsBooted(true);
          return prev;
        }
        return prev + 1;
      });
    }, 250);

    return () => clearInterval(frameInterval);
  }, []);

  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-black px-4 font-mono select-none">
      {/* Background TVA Grid & CRT Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.4)_50%)] bg-[size:100%_4px] pointer-events-none z-20" />
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/40 to-black pointer-events-none z-10" />
      
      {/* Animated Matrix/TVA Scan Grid background line */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[linear-gradient(to_right,#022c22_1px,transparent_1px),linear-gradient(to_bottom,#022c22_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center text-center">
        {/* Upper System Monitor Diagnostics Banner */}
        <div className="mb-6 flex items-center gap-3 border border-emerald-950/60 bg-emerald-950/10 px-4 py-1.5 rounded-full text-[10px] tracking-[0.2em] text-emerald-500 uppercase">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          TVA_LOCATOR_TERMINAL // CHRONO_MONITOR
        </div>

        {/* The Flashing System Log Streamer */}
        <div className="relative h-16 w-full flex items-center justify-center" aria-hidden="true">
          {!isBooted ? (
            <span className={cn(
              "absolute text-xs tracking-widest font-bold uppercase transition-all duration-75 animate-pulse",
              TIMELINE_LOGS[currentFrame].color
            )}>
              {TIMELINE_LOGS[currentFrame].label}
            </span>
          ) : (
            <span className="text-xs tracking-[0.3em] font-bold text-red-500 border border-red-950/40 bg-red-950/10 px-3 py-1 rounded animate-pulse">
              WARNING // DESYNCHRONISATION_DETECTED
            </span>
          )}
        </div>

        {/* Massive Main Cinematic Title with CSS text glow */}
        <div className="relative mt-2">
          <h1 
            className={cn(
              "text-5xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-500 sm:text-7xl md:text-8xl lg:text-9xl scale-95 opacity-0 transition-all duration-1000 ease-out",
              isBooted && "scale-100 opacity-100"
            )}
            style={{ textShadow: "0 0 30px rgba(255,255,255,0.05)" }}
          >
            MULTIVERSE
          </h1>
          <h2 
            className={cn(
              "text-3xl font-black uppercase tracking-[0.25em] text-emerald-500 sm:text-5xl md:text-6xl lg:text-7xl scale-105 opacity-0 transition-all duration-1000 delay-300 ease-out mt-[-10px]",
              isBooted && "scale-100 opacity-100"
            )}
            style={{ textShadow: "0 0 15px rgba(16,185,129,0.4)" }}
          >
            CHRONOLOGY
          </h2>
        </div>

        {/* Detailed Secondary Text Line */}
        <p 
          className={cn(
            "mt-8 max-w-2xl text-xs leading-relaxed text-neutral-500 tracking-wide uppercase opacity-0 translate-y-4 transition-all duration-700 delay-700",
            isBooted && "opacity-100 translate-y-0"
          )}
        >
          Comprehensive indexing of the Earth-616 Sacred Timeline segments, alternate animation sub-clusters, and the collapsing Fox legacy variant branches.
        </p>

        {/* Dynamic Diagnostic Metrics Footer */}
        <div 
          className={cn(
            "mt-12 grid grid-cols-3 gap-8 border-t border-neutral-900 pt-6 w-full max-w-lg opacity-0 transition-all duration-700 delay-1000",
            isBooted && "opacity-100"
          )}
        >
          <div>
            <div className="text-xl font-bold text-white tracking-tight">80</div>
            <div className="text-[9px] uppercase tracking-wider text-neutral-600 mt-0.5">Tracked Nodes</div>
          </div>
          <div>
            <div className="text-xl font-bold text-emerald-500 tracking-tight animate-pulse">E-616</div>
            <div className="text-[9px] uppercase tracking-wider text-neutral-600 mt-0.5">Anchor Reality</div>
          </div>
          <div>
            <div className="text-xl font-bold text-red-500 tracking-tight">04</div>
            <div className="text-[9px] uppercase tracking-wider text-neutral-600 mt-0.5">Active Collapses</div>
          </div>
        </div>
      </div>
    </section>
  );
}
