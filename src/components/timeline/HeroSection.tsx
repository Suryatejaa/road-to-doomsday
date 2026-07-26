import { cn } from "@/lib/utils";

const FRAMES = [
  { label: "SPIDER-MAN", color: "text-cat-mcu" },
  { label: "DAREDEVIL", color: "text-cat-street" },
  { label: "WOLVERINE", color: "text-cat-fox" },
  { label: "THE MULTIVERSE", color: "text-cat-multiverse" },
];

export function HeroSection() {
  return (
    <section
      className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-background px-4"
      style={{ backgroundImage: "url(/images/hero-multiverse.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />

      <div className="relative z-10 flex w-full max-w-4xl flex-col items-center text-center">
        <div className="relative h-24 w-full sm:h-32 md:h-40" aria-hidden="true">
          {FRAMES.map((frame, i) => (
            <span
              key={frame.label}
              className={cn(
                "hero-frame absolute inset-0 flex items-center justify-center text-4xl font-black uppercase tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl",
                frame.color,
              )}
              style={{ animationDelay: `${i * 0.3}s` }}
            >
              {frame.label}
            </span>
          ))}
        </div>

        <h1 className="hero-title mt-2 text-5xl font-black uppercase tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
          Marvel Timeline Guide
        </h1>
        <p className="hero-title mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg" style={{ animationDelay: "1.6s" }}>
          The definitive chronological watch order across the Sacred Timeline, the Multiverse, and beyond.
        </p>
      </div>
    </section>
  );
}
