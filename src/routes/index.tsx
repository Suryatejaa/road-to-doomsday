import { useEffect, useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { HeroSection } from "@/components/timeline/HeroSection";
import { SearchLocator } from "@/components/timeline/SearchLocator";
import { CategoryFilter } from "@/components/timeline/CategoryFilter";
import { TimelineItem } from "@/components/timeline/TimelineItem";
import { BackToTop } from "@/components/timeline/BackToTop";
import { timelineData } from "@/lib/timeline-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Marvel Timeline Guide — Sacred Timeline & Multiverse Watch Order" },
      {
        name: "description",
        content:
          "The definitive chronological watch order for the MCU, Fox Mutant Legacy, Sony Animation, and the Multiverse — with streaming platforms and importance tiers.",
      },
      { property: "og:title", content: "Marvel Timeline Guide — Sacred Timeline & Multiverse Watch Order" },
      {
        property: "og:description",
        content:
          "The definitive chronological watch order for the MCU, Fox Mutant Legacy, Sony Animation, and the Multiverse.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [filter, setFilter] = useState("All");
  const [glitching, setGlitching] = useState(false);
  const [spotlightId, setSpotlightId] = useState<string | null>(null);
  const [wave, setWave] = useState(0);
  const [lineProgress, setLineProgress] = useState(0);

  const categories = useMemo(() => {
    const map = new Map<string, { universe_category: string; token: string; label: string }>();
    timelineData.forEach((entry) => {
      map.set(entry.universe_category, {
        universe_category: entry.universe_category,
        token: entry.categoryToken,
        label: entry.categoryLabel,
      });
    });
    return Array.from(map.values()).sort((a, b) => a.label.localeCompare(b.label));
  }, []);

  const filtered = useMemo(
    () => (filter === "All" ? timelineData : timelineData.filter((entry) => entry.universe_category === filter)),
    [filter],
  );

  const handleFilter = (category: string) => {
    if (category === filter) return;
    setGlitching(true);
    setFilter(category);
    setWave((w) => w + 1);
    setTimeout(() => setGlitching(false), 200);
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    const onScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(1, Math.max(0, window.scrollY / docHeight)) : 0;
      setLineProgress(progress);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <HeroSection />

      <main className="relative mx-auto max-w-6xl px-4 pb-24">
        <div className="sticky top-4 z-40 space-y-4 rounded-2xl bg-background/60 py-6 backdrop-blur-md">
          <SearchLocator data={timelineData} onSpotlight={setSpotlightId} />
          <CategoryFilter categories={categories} active={filter} onSelect={handleFilter} />
        </div>

        <section className="relative mt-8 space-y-12" aria-label="Marvel watch timeline">
          <div
            className="timeline-line absolute left-8 top-0 w-0.5 bg-tva md:left-1/2 md:-translate-x-1/2"
            style={{ height: "100%", transform: `scaleY(${lineProgress})` }}
          />

          <div className={cn("relative space-y-12", spotlightId && "timeline-dimmed")}>
            {filtered.map((entry, index) => (
              <TimelineItem key={`${wave}-${entry.id}`} entry={entry} index={index} spotlightId={spotlightId} />
            ))}
          </div>

          {glitching && (
            <div
              className="glitch-overlay fixed inset-0 z-50 flex items-center justify-center bg-background/20 backdrop-blur-[2px]"
              aria-hidden="true"
            >
              <span className="text-4xl font-black uppercase tracking-widest text-foreground opacity-80">
                Reality Reset
              </span>
            </div>
          )}
        </section>
      </main>

      <BackToTop />
    </div>
  );
}
