import { useEffect, useRef, useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import type { TimelineEntry } from "@/lib/timeline-data";

interface SearchLocatorProps {
  data: TimelineEntry[];
  onSpotlight: (id: string | null) => void;
}

export function SearchLocator({ data, onSpotlight }: SearchLocatorProps) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const filtered = query.trim()
    ? data.filter((item) => item.title.toLowerCase().includes(query.toLowerCase().trim()))
    : [];

  useEffect(() => {
    if (typeof document === "undefined") return;
    const handleClick = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleSelect = (item: TimelineEntry) => {
    setQuery(item.title);
    setOpen(false);
    onSpotlight(item.id);

    const target = document.getElementById(item.id);
    if (target) {
      target.classList.add("spotlight-pulse");
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => {
        target.classList.remove("spotlight-pulse");
        onSpotlight(null);
      }, 3000);
    }
  };

  return (
    <div ref={wrapperRef} className="relative mx-auto w-full max-w-xl px-4">
      <div className="relative">
        <Search className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
        <Input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => query.trim() && setOpen(true)}
          placeholder="Locate timeline entry... (e.g., Daredevil, Infinity War)"
          className={cn(
            "h-12 w-full rounded-full border-2 bg-background/80 pl-12 pr-5 text-foreground shadow-lg backdrop-blur-md transition-all",
            "border-tva/30 placeholder:text-muted-foreground",
            "focus-visible:border-tva focus-visible:ring-tva/40 focus-visible:ring-offset-0",
          )}
          aria-label="Search the timeline"
          aria-autocomplete="list"
          aria-controls="search-results"
          aria-expanded={open}
        />
      </div>

      {open && filtered.length > 0 && (
        <div
          id="search-results"
          className="absolute left-4 right-4 top-full z-50 mt-2 max-h-60 overflow-y-auto rounded-xl border border-border bg-card p-1 shadow-2xl"
          role="listbox"
        >
          {filtered.map((item) => (
            <button
              key={item.id}
              type="button"
              role="option"
              onClick={() => handleSelect(item)}
              className="w-full rounded-lg px-4 py-3 text-left text-sm text-card-foreground transition-all hover:bg-accent hover:pl-5 hover:text-accent-foreground"
            >
              {item.title}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
