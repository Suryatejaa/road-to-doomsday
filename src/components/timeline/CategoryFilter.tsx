import { cn } from "@/lib/utils";
import type { TimelineEntry } from "@/lib/timeline-data";

interface CategoryFilterProps {
  categories: { universe_category: string; token: string; label: string }[];
  active: string;
  onSelect: (category: string) => void;
}

export function CategoryFilter({ categories, active, onSelect }: CategoryFilterProps) {
  const all = { universe_category: "All", token: "tva", label: "Complete Timeline" };
  const items = [all, ...categories];

  return (
    <div className="flex flex-wrap justify-center gap-2 px-4">
      {items.map((item) => {
        const isActive = active === item.universe_category;
        return (
          <button
            key={item.universe_category}
            type="button"
            onClick={() => onSelect(item.universe_category)}
            className={cn(
              "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all",
              "border-border bg-card text-card-foreground hover:bg-accent hover:text-accent-foreground",
              isActive && "ring-2 ring-tva ring-offset-2 ring-offset-background",
            )}
          >
            <span className={cn("size-2.5 rounded-full", `bg-cat-${item.token}`)} aria-hidden="true" />
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
