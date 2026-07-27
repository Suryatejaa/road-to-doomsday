import { useEffect, useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { HeroSection } from "@/components/timeline/HeroSection";
import { SearchLocator } from "@/components/timeline/SearchLocator";
import { TimelineItem } from "@/components/timeline/TimelineItem";
import { BackToTop } from "@/components/timeline/BackToTop";
import { MusicPlayer } from "@/components/timeline/MusicPlayer";
import { BndPathToggle } from "@/components/timeline/BndPathToggle";
import { CategoryTabs, filterGroups, ImportanceTabs, ImportanceTier, importanceOptions } from "@/components/timeline/CategoryFilter";
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
  const [filterKey, setFilterKey] = useState("all");
  const [spotlightId, setSpotlightId] = useState<string | null>(null);
  const [wave, setWave] = useState(0);
  const [lineProgress, setLineProgress] = useState(0);
  const [selectedTier, setSelectedTier] = useState<typeof importanceOptions[number]>("all");
  const [bndPathActive, setBndPathActive] = useState(false);
  const activeGroup = filterGroups.find((g) => g.key === filterKey) ?? filterGroups[0]

  // Category and tier filters are mutually exclusive with the BND case file —
  // touching either one drops you back out of the curated path.
  const handleFilter = (key: string) => {
    if (bndPathActive) setBndPathActive(false);
    if (key === filterKey) return;
    setFilterKey(key);
    setWave((w) => w + 1);
  };

  const handleTierSelect = (tier: typeof importanceOptions[number]) => {
    if (bndPathActive) setBndPathActive(false);
    setSelectedTier(tier);
    setWave((w) => w + 1);
  };

  const handleBndToggle = (next: boolean) => {
    setBndPathActive(next);
    setWave((w) => w + 1);
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

  const filtered = useMemo(() => {
    // Exclusive case file — ignore category/tier selections entirely while active
    if (bndPathActive) {
      return timelineData
        .filter((entry) => entry.requiredForBnd)
        .sort((a, b) => a.chronological_position - b.chronological_position);
    }

    let items = timelineData;
    if (activeGroup.categories !== "all") {
      const set = new Set(activeGroup.categories);
      items = items.filter((entry) => set.has(entry.universe_category));
    }
    if (selectedTier !== "all") {
      items = items.filter((entry) => entry.importance_tier === selectedTier);
    }
    return items;
  }, [activeGroup, selectedTier, bndPathActive]);

  // In the sticky controls area, render the tabs

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <HeroSection />

      <main className="relative mx-auto max-w-6xl px-0 pb-24">
        <div className="sticky top-4 z-40 space-y-4 rounded-2xl border border-border/40 bg-background/70 px-0 py-4 backdrop-blur-xl shadow-lg">
          <div className="sticky top-4 z-40 space-y-4 rounded-2xl border border-border/40 bg-background/70 px-0 py-4 backdrop-blur-xl shadow-lg">
            <SearchLocator data={timelineData} onSpotlight={setSpotlightId} />

            <div className="px-2 ">
              <BndPathToggle active={bndPathActive} onToggle={handleBndToggle} />
            </div>

            <div
              className={cn(
                "space-y-1 transition-opacity duration-300",
                bndPathActive && "pointer-events-none opacity-40"
              )}
            >
              <div className="px-2">
                <CategoryTabs activeKey={filterKey} onSelect={handleFilter} />
              </div>
              <div className="px-2">
                <ImportanceTabs selected={selectedTier} onSelect={handleTierSelect} />
              </div>
            </div>
          </div>

          <section className="relative mt-8 space-y-12" aria-label="Marvel watch timeline">
            <div
              className="timeline-line absolute left-8 top-0 w-0.5 bg-tva md:left-1/2 md:-translate-x-1/2"
              style={{ height: "100%", transform: `scaleY(${lineProgress})` }}
            />

            <div key={wave} className={cn("relative space-y-12 timeline-wave", spotlightId && "timeline-dimmed")}>
              {filtered.map((entry, index) => (
                <TimelineItem key={entry.id} entry={entry} index={index} spotlightId={spotlightId} />
              ))}
            </div>
          </section>
        </div>
      </main>

      <MusicPlayer />
      <BackToTop />
    </div>
  );
}
