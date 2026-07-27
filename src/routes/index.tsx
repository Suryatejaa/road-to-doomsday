import { useEffect, useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

import { HeroSection } from "@/components/timeline/HeroSection";
import { SearchLocator } from "@/components/timeline/SearchLocator";
import { TimelineItem } from "@/components/timeline/TimelineItem";
import { BackToTop } from "@/components/timeline/BackToTop";
import LineSidebar from "@/components/LineSidebar";
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

  const [menuOpen, setMenuOpen] = useState(false);

  const allCategories = useMemo(
    () => [{ universe_category: "All", token: "tva", label: "Complete Timeline" }, ...categories],
    [categories],
  );
  const activeCategoryIndex = allCategories.findIndex((c) => c.universe_category === filter);

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <HeroSection />

      <main className="relative mx-auto max-w-6xl px-4 pb-24">
        <div className="sticky top-4 z-40 space-y-4 rounded-2xl bg-background/60 py-6 backdrop-blur-md">
          <div className="flex items-center gap-3 px-4">
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open universe filters"
              className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-card text-card-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <Menu className="size-5" />
            </button>
            <div className="flex-1">
              <SearchLocator data={timelineData} onSpotlight={setSpotlightId} />
            </div>
          </div>
        </div>

        {menuOpen && (
          <>
            <div
              className="fixed inset-0 z-[60] bg-background/70 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
              aria-hidden="true"
            />
            <aside
              className="fixed left-0 top-0 z-[70] h-full w-[86%] max-w-sm overflow-y-auto border-r border-border bg-card/95 p-6 shadow-2xl"
              role="dialog"
              aria-label="Universe filters"
            >
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">TVA Archive</p>
                  <h2 className="mt-1 text-lg font-semibold text-foreground">Filter Universes</h2>
                </div>
                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close filters"
                  className="inline-flex size-9 items-center justify-center rounded-full border border-border text-foreground/70 hover:bg-accent"
                >
                  <X className="size-4" />
                </button>
              </div>
              <LineSidebar
                items={allCategories.map((c) => c.label)}
                accentColor="oklch(0.82 0.22 75)"
                textColor="oklch(0.75 0.02 260)"
                markerColor="oklch(0.5 0.02 260)"
                activeIndex={activeCategoryIndex >= 0 ? activeCategoryIndex : 0}
                proximityRadius={140}
                maxShift={18}
                markerLength={40}
                itemGap={22}
                fontSize={1.05}
                onItemClick={(index) => {
                  handleFilter(allCategories[index].universe_category);
                  setMenuOpen(false);
                }}
              />
            </aside>
          </>
        )}

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
